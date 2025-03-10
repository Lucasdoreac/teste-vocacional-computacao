/**
 * Script principal do Teste Vocacional de Ciência da Computação
 * Implementa a lógica de navegação, cálculo de resultados e exibição
 */

document.addEventListener('DOMContentLoaded', function() {
    // =========== ELEMENTOS DO DOM ===========
    // Seções principais
    const introSection = document.getElementById('intro');
    const areasOverviewSection = document.getElementById('areas-overview');
    const testSection = document.getElementById('test');
    const resultsSection = document.getElementById('results');
    const areaDetailSection = document.getElementById('area-detail');

    // Botões de navegação
    const startTestBtn = document.getElementById('start-test');
    const showAreasBtn = document.getElementById('show-areas');
    const backToIntroBtn = document.getElementById('back-to-intro');
    const startFromAreasBtn = document.getElementById('start-from-areas');
    const prevQuestionBtn = document.getElementById('prev-question');
    const nextQuestionBtn = document.getElementById('next-question');
    const restartTestBtn = document.getElementById('restart-test');
    const saveResultsBtn = document.getElementById('save-results');
    const backToResultsBtn = document.getElementById('back-to-results');

    // Elementos do teste
    const questionContainer = document.getElementById('question-container');
    const progressFill = document.getElementById('progress-fill');
    const questionCounter = document.getElementById('question-counter');
    
    // Elementos dos resultados
    const matchList = document.getElementById('match-list');
    const detailedResults = document.getElementById('detailed-results');

    // Elementos de detalhes da área
    const areaDetailTitle = document.getElementById('area-detail-title');
    const compatibilityPercentage = document.getElementById('compatibility-percentage');
    const areaDescription = document.getElementById('area-description');
    const profileDescription = document.getElementById('profile-description');
    const techDescription = document.getElementById('tech-description');
    const techCards = document.getElementById('tech-cards');
    const toolsDescription = document.getElementById('tools-description');
    const learningResources = document.getElementById('learning-resources');
    const resourceLinks = document.getElementById('resource-links');
    const starterProject = document.getElementById('starter-project');

    // =========== ESTADO DA APLICAÇÃO ===========
    let currentQuestionIndex = 0;
    let userAnswers = [];
    let testResults = null;
    let selectedAreaId = null;
    
    // Verificar se há respostas salvas no localStorage
    const savedAnswers = localStorage.getItem('vocational_test_answers');
    const savedResults = localStorage.getItem('vocational_test_results');
    
    if (savedAnswers) {
        userAnswers = JSON.parse(savedAnswers);
    }
    
    if (savedResults) {
        testResults = JSON.parse(savedResults);
    }

    // =========== EVENT LISTENERS ===========
    // Botões de navegação principal
    startTestBtn.addEventListener('click', startTest);
    showAreasBtn.addEventListener('click', showAreasOverview);
    backToIntroBtn.addEventListener('click', backToIntro);
    startFromAreasBtn.addEventListener('click', startTest);
    restartTestBtn.addEventListener('click', restartTest);
    saveResultsBtn.addEventListener('click', saveResultsAsPDF);
    backToResultsBtn.addEventListener('click', backToResults);

    // Botões de navegação do teste
    prevQuestionBtn.addEventListener('click', showPreviousQuestion);
    nextQuestionBtn.addEventListener('click', handleNextButton);

    // Adiciona eventos para os cards de áreas
    document.querySelectorAll('.area-card').forEach(card => {
        card.addEventListener('click', function() {
            const areaId = this.getAttribute('data-area');
            showAreaDetail(areaId);
        });
    });

    // =========== FUNÇÕES DE NAVEGAÇÃO ===========
    /**
     * Inicia o teste vocacional
     */
    function startTest() {
        introSection.classList.add('hidden');
        areasOverviewSection.classList.add('hidden');
        testSection.classList.remove('hidden');
        
        // Se existirem respostas salvas, pergunte se o usuário quer continuar de onde parou
        if (userAnswers.length > 0) {
            if (confirm('Você tem respostas salvas. Deseja continuar de onde parou?')) {
                currentQuestionIndex = userAnswers.length;
                if (currentQuestionIndex >= questions.length) {
                    // Se todas as perguntas já foram respondidas, mostrar os resultados
                    calculateResults();
                    showResults();
                    return;
                }
            } else {
                // Se o usuário não quiser continuar, limpar as respostas salvas
                userAnswers = [];
                localStorage.removeItem('vocational_test_answers');
                localStorage.removeItem('vocational_test_results');
                currentQuestionIndex = 0;
            }
        }
        
        renderQuestion();
        updateProgress();
    }

    /**
     * Mostra a seção de visão geral das áreas
     */
    function showAreasOverview() {
        introSection.classList.add('hidden');
        areasOverviewSection.classList.remove('hidden');
    }

    /**
     * Volta para a tela de introdução
     */
    function backToIntro() {
        areasOverviewSection.classList.add('hidden');
        introSection.classList.remove('hidden');
    }

    /**
     * Reinicia o teste
     */
    function restartTest() {
        if (confirm('Tem certeza que deseja reiniciar o teste? Todas as suas respostas serão perdidas.')) {
            userAnswers = [];
            testResults = null;
            currentQuestionIndex = 0;
            localStorage.removeItem('vocational_test_answers');
            localStorage.removeItem('vocational_test_results');
            
            resultsSection.classList.add('hidden');
            introSection.classList.remove('hidden');
        }
    }

    /**
     * Volta para a página de resultados
     */
    function backToResults() {
        areaDetailSection.classList.add('hidden');
        resultsSection.classList.remove('hidden');
    }

    // =========== FUNÇÕES DO TESTE ===========
    /**
     * Renderiza a pergunta atual
     */
    function renderQuestion() {
        const question = questions[currentQuestionIndex];
        
        questionContainer.innerHTML = `
            <h3 class="question-title">${question.question}</h3>
            <div class="options-grid">
                ${renderOptions(question)}
            </div>
        `;
        
        // Adicionar event listeners para as opções
        document.querySelectorAll('.option-card').forEach((option, index) => {
            option.addEventListener('click', () => {
                selectOption(index);
            });
        });
        
        // Se já houver uma resposta para esta pergunta, selecione-a
        if (userAnswers[currentQuestionIndex] !== undefined) {
            document.querySelector(`.option-card[data-index="${userAnswers[currentQuestionIndex]}"]`).classList.add('selected');
        }
    }

    /**
     * Renderiza as opções de resposta para a pergunta atual
     */
    function renderOptions(question) {
        return question.options.map((option, index) => {
            return `
                <div class="option-card" data-index="${index}">
                    ${option.text}
                </div>
            `;
        }).join('');
    }

    /**
     * Seleciona uma opção de resposta
     */
    function selectOption(index) {
        // Remove a classe 'selected' de todas as opções
        document.querySelectorAll('.option-card').forEach(option => {
            option.classList.remove('selected');
        });
        
        // Adiciona a classe 'selected' à opção escolhida
        document.querySelector(`.option-card[data-index="${index}"]`).classList.add('selected');
        
        // Atualiza a resposta do usuário
        userAnswers[currentQuestionIndex] = index;
        
        // Salva a resposta no localStorage
        localStorage.setItem('vocational_test_answers', JSON.stringify(userAnswers));
    }

    /**
     * Mostra a pergunta anterior
     */
    function showPreviousQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            renderQuestion();
            updateProgress();
            
            // Habilita ou desabilita os botões de navegação conforme necessário
            updateNavigationButtons();
        }
    }

    /**
     * Lida com o botão "Próxima" ou "Ver Resultados"
     */
    function handleNextButton() {
        // Verifica se uma opção foi selecionada
        if (userAnswers[currentQuestionIndex] === undefined) {
            alert('Por favor, selecione uma opção antes de continuar.');
            return;
        }
        
        if (currentQuestionIndex < questions.length - 1) {
            // Avança para a próxima pergunta
            currentQuestionIndex++;
            renderQuestion();
            updateProgress();
            
            // Atualiza os botões de navegação
            updateNavigationButtons();
        } else {
            // Mostra os resultados
            calculateResults();
            showResults();
        }
    }

    /**
     * Atualiza os botões de navegação do teste
     */
    function updateNavigationButtons() {
        // Habilita ou desabilita o botão "Anterior"
        prevQuestionBtn.disabled = (currentQuestionIndex === 0);
        
        // Atualiza o texto do botão "Próxima" / "Ver Resultados"
        if (currentQuestionIndex === questions.length - 1) {
            nextQuestionBtn.innerHTML = 'Ver Resultados <i class="fas fa-chart-bar"></i>';
        } else {
            nextQuestionBtn.innerHTML = 'Próxima <i class="fas fa-arrow-right"></i>';
        }
    }

    /**
     * Atualiza a barra de progresso e o contador de perguntas
     */
    function updateProgress() {
        const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
        progressFill.style.width = `${progressPercentage}%`;
        questionCounter.textContent = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`;
    }

    // =========== CÁLCULO DE RESULTADOS ===========
    /**
     * Calcula os resultados do teste com base nas respostas do usuário
     */
    function calculateResults() {
        // Inicializa os scores para cada área
        const scores = {};
        Object.keys(areasInfo).forEach(areaId => {
            scores[areaId] = 0;
        });
        
        // Calcula o score para cada área com base nas respostas do usuário
        userAnswers.forEach((answerIndex, questionIndex) => {
            const question = questions[questionIndex];
            const answer = question.options[answerIndex];
            
            // Adiciona os pesos da resposta selecionada para cada área
            Object.keys(answer.weights).forEach(areaId => {
                scores[areaId] += answer.weights[areaId];
            });
        });
        
        // Calcula o score total (soma de todos os scores)
        const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
        
        // Normaliza os scores para porcentagem
        const normalizedScores = {};
        Object.keys(scores).forEach(areaId => {
            normalizedScores[areaId] = (scores[areaId] / totalScore);
        });
        
        // Filtra áreas com afinidade significativa (acima do threshold)
        const significantAreas = Object.keys(normalizedScores)
            .filter(areaId => normalizedScores[areaId] > AFFINITY_THRESHOLD)
            .sort((a, b) => normalizedScores[b] - normalizedScores[a]);
        
        // Constrói o objeto de resultados
        testResults = {
            scores: scores,
            normalizedScores: normalizedScores,
            totalScore: totalScore,
            significantAreas: significantAreas,
            timestamp: new Date().toISOString()
        };
        
        // Salva os resultados no localStorage
        localStorage.setItem('vocational_test_results', JSON.stringify(testResults));
        
        return testResults;
    }

    // =========== EXIBIÇÃO DE RESULTADOS ===========
    /**
     * Mostra os resultados do teste
     */
    function showResults() {
        testSection.classList.add('hidden');
        resultsSection.classList.remove('hidden');
        
        // Gera o gráfico de resultados
        createResultsChart();
        
        // Mostra a lista de compatibilidades
        displayMatchList();
        
        // Mostra os resultados detalhados para cada área
        displayDetailedResults();
    }

    /**
     * Cria o gráfico de resultados
     */
    function createResultsChart() {
        const ctx = document.getElementById('results-chart').getContext('2d');
        
        // Destrói o gráfico existente, se houver
        if (window.resultsChart) {
            window.resultsChart.destroy();
        }
        
        // Prepara os dados para o gráfico
        const labels = testResults.significantAreas.map(areaId => areasInfo[areaId].name);
        const data = testResults.significantAreas.map(areaId => Math.round(testResults.normalizedScores[areaId] * 100));
        const backgroundColors = testResults.significantAreas.map(areaId => areasInfo[areaId].color + '80'); // Add 50% transparency
        const borderColors = testResults.significantAreas.map(areaId => areasInfo[areaId].color);
        
        // Cria o gráfico
        window.resultsChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Compatibilidade (%)',
                    data: data,
                    backgroundColor: backgroundColors,
                    borderColor: borderColors,
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Compatibilidade: ${context.raw}%`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100,
                        title: {
                            display: true,
                            text: 'Compatibilidade (%)'
                        }
                    }
                }
            }
        });
    }

    /**
     * Mostra a lista de áreas com maior compatibilidade
     */
    function displayMatchList() {
        matchList.innerHTML = '';
        
        // Exibe as áreas significativas (usando apenas as 5 primeiras para não sobrecarregar)
        const topAreas = testResults.significantAreas.slice(0, 5);
        
        topAreas.forEach(areaId => {
            const area = areasInfo[areaId];
            const compatibilityPercent = Math.round(testResults.normalizedScores[areaId] * 100);
            
            const matchItem = document.createElement('div');
            matchItem.className = 'match-item';
            matchItem.innerHTML = `
                <div class="match-icon" style="background-color: ${area.color}">
                    <i class="${area.icon}"></i>
                </div>
                <div class="match-details">
                    <div class="match-title">${area.name}</div>
                    <div class="match-description">${area.shortDescription}</div>
                </div>
                <div class="match-percentage">${compatibilityPercent}%</div>
            `;
            
            // Adiciona evento de clique para mostrar detalhes da área
            matchItem.addEventListener('click', () => {
                showAreaDetail(areaId);
            });
            
            matchList.appendChild(matchItem);
        });
    }

    /**
     * Mostra os resultados detalhados para cada área
     */
    function displayDetailedResults() {
        detailedResults.innerHTML = '';
        
        // Exibe detalhes de todas as áreas significativas
        testResults.significantAreas.forEach(areaId => {
            const area = areasInfo[areaId];
            const compatibilityPercent = Math.round(testResults.normalizedScores[areaId] * 100);
            
            const areaElement = document.createElement('div');
            areaElement.className = 'detailed-area';
            areaElement.innerHTML = `
                <h3>${area.name} <span class="compatibility-badge" 
                    style="background-color: ${area.color}">${compatibilityPercent}%</span>
                </h3>
                <p>${area.fullDescription}</p>
                <button class="btn btn-secondary view-details-btn" data-area="${areaId}">
                    <i class="fas fa-info-circle"></i> Ver detalhes e recursos
                </button>
            `;
            
            // Adiciona evento de clique ao botão
            areaElement.querySelector('.view-details-btn').addEventListener('click', function() {
                const areaId = this.getAttribute('data-area');
                showAreaDetail(areaId);
            });
            
            detailedResults.appendChild(areaElement);
        });
    }

    /**
     * Mostra detalhes de uma área específica
     */
    function showAreaDetail(areaId) {
        selectedAreaId = areaId;
        const area = areasInfo[areaId];
        
        // Atualiza os elementos HTML com as informações da área
        areaDetailTitle.textContent = area.name;
        areaDescription.textContent = area.fullDescription;
        profileDescription.innerHTML = area.profile;
        techDescription.innerHTML = area.technologies;
        toolsDescription.innerHTML = area.tools;
        learningResources.innerHTML = area.learning;
        starterProject.innerHTML = area.project;
        
        // Se houver resultados do teste, mostrar a porcentagem de compatibilidade
        if (testResults && testResults.normalizedScores) {
            const compatibilityPercent = Math.round((testResults.normalizedScores[areaId] || 0) * 100);
            compatibilityPercentage.textContent = compatibilityPercent + '%';
        } else {
            compatibilityPercentage.textContent = 'N/A';
        }
        
        // Renderiza os cards de tecnologia
        renderTechCards(area.techList);
        
        // Renderiza os links de recursos
        renderResourceLinks(area.resources);
        
        // Mostra a seção de detalhes da área
        resultsSection.classList.add('hidden');
        areaDetailSection.classList.remove('hidden');
        
        // Scroll para o topo da página
        window.scrollTo(0, 0);
    }

    /**
     * Renderiza os cards de tecnologia
     */
    function renderTechCards(techList) {
        techCards.innerHTML = '';
        
        techList.forEach(tech => {
            const techCard = document.createElement('div');
            techCard.className = 'tech-card';
            
            // Cálculo visual da popularidade
            const popWidth = tech.popularity + '%';
            
            techCard.innerHTML = `
                <h4><i class="${tech.icon}"></i> ${tech.name} ${tech.isHot ? '<span class="hot-badge">HOT</span>' : ''}</h4>
                <p>${tech.description}</p>
                <div class="tech-popularity">
                    <span>Popularidade:</span>
                    <div class="tech-popularity-bar">
                        <div class="tech-popularity-fill" style="width: ${popWidth}"></div>
                    </div>
                </div>
            `;
            
            techCards.appendChild(techCard);
        });
    }

    /**
     * Renderiza os links de recursos
     */
    function renderResourceLinks(resources) {
        resourceLinks.innerHTML = '';
        
        resources.forEach(resource => {
            const resourceLink = document.createElement('a');
            resourceLink.className = 'resource-link';
            resourceLink.href = resource.url;
            resourceLink.target = '_blank';
            
            resourceLink.innerHTML = `
                <i class="${resource.icon}"></i>
                <div class="resource-link-content">
                    <h4>${resource.name}</h4>
                    <p>${resource.description}</p>
                </div>
            `;
            
            resourceLinks.appendChild(resourceLink);
        });
    }

    // =========== FUNCIONALIDADES EXTRAS ===========
    /**
     * Salva os resultados como PDF
     */
    function saveResultsAsPDF() {
        // Verifica se o JsPDF está disponível
        if (typeof jspdf === 'undefined') {
            alert('Não foi possível carregar a biblioteca de PDF. Tente novamente mais tarde.');
            return;
        }
        
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Título
        doc.setFontSize(22);
        doc.setTextColor(41, 99, 235); // cor primária
        doc.text('Resultado do Teste Vocacional', 15, 20);
        
        doc.setFontSize(12);
        doc.setTextColor(31, 41, 55); // dark-text
        
        // Data
        const today = new Date();
        doc.text(`Data: ${today.toLocaleDateString()}`, 15, 30);
        
        // Descrição
        doc.text('Este relatório apresenta suas áreas de maior compatibilidade em Ciência da Computação', 15, 40);
        doc.text('com base em suas respostas ao teste vocacional.', 15, 47);
        
        // Resultados
        doc.setFontSize(16);
        doc.setTextColor(31, 41, 55);
        doc.text('Áreas com maior compatibilidade:', 15, 60);
        
        let yPosition = 70;
        
        // Top 5 áreas
        const topAreas = testResults.significantAreas.slice(0, 5);
        
        topAreas.forEach((areaId, index) => {
            const area = areasInfo[areaId];
            const compatibilityPercent = Math.round(testResults.normalizedScores[areaId] * 100);
            
            doc.setFontSize(14);
            doc.setTextColor(41, 99, 235);
            doc.text(`${index + 1}. ${area.name} - ${compatibilityPercent}%`, 20, yPosition);
            
            doc.setFontSize(12);
            doc.setTextColor(31, 41, 55);
            
            // Quebra o texto em múltiplas linhas se necessário
            const splitDescription = doc.splitTextToSize(area.shortDescription, 170);
            doc.text(splitDescription, 25, yPosition + 7);
            
            yPosition += 7 + (splitDescription.length * 7);
        });
        
        // Recomendação
        yPosition += 10;
        doc.setFontSize(16);
        doc.setTextColor(31, 41, 55);
        doc.text('Próximos passos recomendados:', 15, yPosition);
        
        yPosition += 10;
        doc.setFontSize(12);
        
        const recommendations = [
            'Explore os recursos de aprendizado sugeridos para sua área de maior compatibilidade',
            'Experimente o projeto para iniciantes recomendado para ganhar experiência prática',
            'Converse com profissionais que atuam na área para entender melhor o dia a dia',
            'Considere as disciplinas eletivas da sua faculdade que se alinham com essa área',
            'Repita o teste após 6 meses de exploração para ver se suas afinidades mudaram'
        ];
        
        recommendations.forEach(recommendation => {
            doc.text(`• ${recommendation}`, 20, yPosition);
            yPosition += 10;
        });
        
        // Rodapé
        yPosition = 280;
        doc.setFontSize(10);
        doc.setTextColor(107, 114, 128); // light-text
        doc.text('Este relatório foi gerado pelo Teste Vocacional de Ciência da Computação', 15, yPosition);
        doc.text('Resultados baseados em suas respostas pessoais. Acesse para mais detalhes:', 15, yPosition + 5);
        doc.setTextColor(41, 99, 235);
        doc.text('https://lucasdoreac.github.io/teste-vocacional-computacao/', 15, yPosition + 10);
        
        // Salva o PDF
        doc.save('Resultado_Teste_Vocacional_CC.pdf');
    }

    // =========== INICIALIZAÇÃO ===========
    // Se já tivermos resultados, mostrar a seção de resultados
    if (testResults) {
        showResults();
    }
    // Se tivermos respostas parciais, mas não resultados completos, não fazemos nada
    // O usuário decidirá no startTest se quer continuar ou recomeçar
    
    // Atualiza o estado dos botões de navegação
    updateNavigationButtons();
});
