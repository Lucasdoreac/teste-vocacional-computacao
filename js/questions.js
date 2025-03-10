/**
 * Perguntas do teste vocacional de Ciência da Computação
 * Cada pergunta tem um peso específico para diferentes áreas
 */

const questions = [
    // Categoria: Interesses e Preferências Básicas
    {
        id: 1,
        category: 'interesses',
        question: 'O que mais lhe atrai em tecnologia?',
        options: [
            {
                text: 'Criar produtos inovadores e novas soluções tecnológicas',
                weights: { dev: 2, engineering: 2, ux: 1.5 }
            },
            {
                text: 'Resolver problemas lógicos e quebra-cabeças complexos',
                weights: { dev: 1.5, ai: 2, datascience: 1.5, engineering: 1 }
            },
            {
                text: 'Entender como sistemas funcionam por trás das interfaces',
                weights: { networks: 2, data: 1.5, cloud: 1.5, devops: 1.5 }
            },
            {
                text: 'Proteger informações e sistemas contra ameaças',
                weights: { security: 3, networks: 1, cloud: 1 }
            },
            {
                text: 'Analisar dados para descobrir padrões e insights úteis',
                weights: { datascience: 3, ai: 2, data: 1 }
            }
        ]
    },
    {
        id: 2,
        category: 'interesses',
        question: 'Que tipo de atividade você acha que teria mais facilidade?',
        options: [
            {
                text: 'Escrever código para criar aplicativos, sites ou jogos',
                weights: { dev: 3, ux: 1, engineering: 1 }
            },
            {
                text: 'Projetar interfaces e experiências agradáveis para usuários',
                weights: { ux: 3, dev: 1 }
            },
            {
                text: 'Configurar e manter servidores, redes e infraestrutura',
                weights: { networks: 2.5, cloud: 2, devops: 2 }
            },
            {
                text: 'Encontrar vulnerabilidades e proteger sistemas',
                weights: { security: 3, networks: 1 }
            },
            {
                text: 'Trabalhar com dados, estatísticas e visualizações',
                weights: { datascience: 3, ai: 2, data: 2 }
            }
        ]
    },
    {
        id: 3,
        category: 'interesses',
        question: 'Se pudesse fazer apenas uma dessas atividades no seu tempo livre, qual escolheria?',
        options: [
            {
                text: 'Criar um aplicativo ou site para resolver um problema do dia a dia',
                weights: { dev: 2.5, engineering: 1.5, ux: 1 }
            },
            {
                text: 'Fazer um curso sobre inteligência artificial ou ciência de dados',
                weights: { ai: 3, datascience: 2.5 }
            },
            {
                text: 'Montar ou configurar um computador ou rede doméstica',
                weights: { networks: 3, cloud: 1, devops: 1 }
            },
            {
                text: 'Aprender sobre hackers e métodos de proteção digital',
                weights: { security: 3, networks: 1 }
            },
            {
                text: 'Redesenhar a interface de um app que você acha que poderia ser melhor',
                weights: { ux: 3, dev: 1 }
            }
        ]
    },

    // Categoria: Habilidades e Características Pessoais
    {
        id: 4,
        category: 'habilidades',
        question: 'Que característica melhor descreve você em trabalhos ou estudos?',
        options: [
            {
                text: 'Criativo - gosto de inventar coisas novas e pensar fora da caixa',
                weights: { dev: 1.5, ux: 2.5, ai: 1.5 }
            },
            {
                text: 'Analítico - prefiro resolver problemas com base em dados e lógica',
                weights: { datascience: 2.5, engineering: 2, ai: 2, data: 1.5 }
            },
            {
                text: 'Organizador - gosto de criar estruturas, procedimentos e ordem',
                weights: { engineering: 2, data: 2, devops: 2, cloud: 1.5 }
            },
            {
                text: 'Observador - percebo detalhes que outros não notam',
                weights: { security: 2.5, ux: 2, datascience: 1.5 }
            },
            {
                text: 'Comunicador - tenho facilidade em explicar ideias complexas',
                weights: { engineering: 1.5, ux: 2, datascience: 1.5 }
            }
        ]
    },
    {
        id: 5,
        category: 'habilidades',
        question: 'Como você reage quando enfrenta um problema tecnológico difícil?',
        options: [
            {
                text: 'Pesquiso várias soluções e tento diferentes abordagens',
                weights: { dev: 2, ai: 1.5, datascience: 1.5, engineering: 1.5 }
            },
            {
                text: 'Procuro entender a causa raiz antes de tentar qualquer solução',
                weights: { engineering: 2.5, security: 2, data: 1.5 }
            },
            {
                text: 'Busco ajuda de tutoriais, documentação ou comunidades online',
                weights: { dev: 1.5, devops: 1.5, cloud: 1.5 }
            },
            {
                text: 'Sigo um processo estruturado de eliminação de possíveis causas',
                weights: { networks: 2, security: 2, devops: 2 }
            },
            {
                text: 'Considero como o problema afeta os usuários e suas necessidades',
                weights: { ux: 3, engineering: 1 }
            }
        ]
    },
    {
        id: 6,
        category: 'habilidades',
        question: 'Qual destas habilidades você considera seu maior ponto forte (ou gostaria de desenvolver)?',
        options: [
            {
                text: 'Lógica de programação e resolução de problemas',
                weights: { dev: 2.5, engineering: 2, ai: 2 }
            },
            {
                text: 'Design visual e sensibilidade para experiências do usuário',
                weights: { ux: 3, dev: 1 }
            },
            {
                text: 'Análise de dados e identificação de padrões',
                weights: { datascience: 3, ai: 2, data: 1.5 }
            },
            {
                text: 'Compreensão de sistemas e como diferentes partes interagem',
                weights: { networks: 2, cloud: 2, engineering: 2, devops: 2 }
            },
            {
                text: 'Pensamento investigativo e atenção a vulnerabilidades',
                weights: { security: 3, networks: 1 }
            }
        ]
    },

    // Categoria: Preferências de Trabalho e Ambiente
    {
        id: 7,
        category: 'ambiente',
        question: 'Em um projeto em grupo, que papel você naturalmente assume (ou gostaria de assumir)?',
        options: [
            {
                text: 'Implementador - transforma ideias em código funcionando',
                weights: { dev: 3, ai: 1.5 }
            },
            {
                text: 'Arquiteto - planeja a estrutura e o design do sistema',
                weights: { engineering: 3, cloud: 2, devops: 1.5 }
            },
            {
                text: 'UX/Designer - foca na experiência e interface do usuário',
                weights: { ux: 3, dev: 0.5 }
            },
            {
                text: 'Analista - examina requisitos e dados para dar direção',
                weights: { datascience: 2.5, data: 2, engineering: 1.5 }
            },
            {
                text: 'Garantidor de qualidade - testa e identifica problemas',
                weights: { security: 2.5, devops: 2, engineering: 1 }
            }
        ]
    },
    {
        id: 8,
        category: 'ambiente',
        question: 'Que tipo de projetos mais desperta seu interesse?',
        options: [
            {
                text: 'Desenvolvimento de apps, sites ou software que as pessoas usam diretamente',
                weights: { dev: 3, ux: 2 }
            },
            {
                text: 'Sistemas inteligentes que aprendem e tomam decisões (IA)',
                weights: { ai: 3, datascience: 1.5 }
            },
            {
                text: 'Infraestrutura que mantém sistemas funcionando nos bastidores',
                weights: { networks: 2.5, cloud: 2.5, devops: 2.5 }
            },
            {
                text: 'Ferramentas para armazenar, organizar e acessar informações',
                weights: { data: 3, datascience: 1.5, cloud: 1 }
            },
            {
                text: 'Sistemas de segurança para proteger dados e impedir invasões',
                weights: { security: 3, networks: 1 }
            }
        ]
    },
    {
        id: 9,
        category: 'ambiente',
        question: 'Como você prefere trabalhar?',
        options: [
            {
                text: 'Desenvolvendo código e vendo resultados imediatos',
                weights: { dev: 2.5, ux: 1.5 }
            },
            {
                text: 'Planejando com antecedência e arquitetando soluções robustas',
                weights: { engineering: 3, cloud: 1.5, devops: 1.5 }
            },
            {
                text: 'Explorando dados e descobrindo informações escondidas',
                weights: { datascience: 3, ai: 2, data: 1.5 }
            },
            {
                text: 'Resolvendo problemas práticos de infraestrutura e operações',
                weights: { networks: 2.5, devops: 2.5, cloud: 2 }
            },
            {
                text: 'Investigando falhas, riscos ou vulnerabilidades',
                weights: { security: 3, engineering: 1 }
            }
        ]
    },

    // Categoria: Conhecimentos Técnicos Específicos
    {
        id: 10,
        category: 'conhecimentos',
        question: 'Qual destas áreas técnicas você gostaria de aprofundar seus conhecimentos?',
        options: [
            {
                text: 'Linguagens de programação e frameworks de desenvolvimento',
                weights: { dev: 3, engineering: 1.5 }
            },
            {
                text: 'Ciência de dados, estatística e machine learning',
                weights: { ai: 2.5, datascience: 3 }
            },
            {
                text: 'Design de interfaces, usabilidade e experiência do usuário',
                weights: { ux: 3, dev: 0.5 }
            },
            {
                text: 'Redes, servidores e infraestrutura de TI',
                weights: { networks: 3, cloud: 2, devops: 1.5 }
            },
            {
                text: 'Segurança digital, criptografia e proteção de sistemas',
                weights: { security: 3, networks: 1 }
            }
        ]
    },
    {
        id: 11,
        category: 'conhecimentos',
        question: 'Se pudesse escolher um curso para fazer agora, qual seria?',
        options: [
            {
                text: 'Desenvolvimento web fullstack (JavaScript/Python/etc)',
                weights: { dev: 3, engineering: 1 }
            },
            {
                text: 'Machine learning e inteligência artificial',
                weights: { ai: 3, datascience: 2 }
            },
            {
                text: 'Design de UI/UX e prototipação',
                weights: { ux: 3, dev: 0.5 }
            },
            {
                text: 'Administração de redes e sistemas em nuvem',
                weights: { networks: 2.5, cloud: 2.5, devops: 2 }
            },
            {
                text: 'Segurança da informação e testes de penetração',
                weights: { security: 3, networks: 1 }
            }
        ]
    },
    {
        id: 12,
        category: 'conhecimentos',
        question: 'Qual destas tecnologias mais desperta sua curiosidade?',
        options: [
            {
                text: 'Desenvolvimento mobile e aplicativos',
                weights: { dev: 3, ux: 1.5 }
            },
            {
                text: 'Big data e análise avançada',
                weights: { datascience: 3, data: 2, ai: 1.5 }
            },
            {
                text: 'Computação em nuvem (AWS, Azure, GCP)',
                weights: { cloud: 3, devops: 2, networks: 1 }
            },
            {
                text: 'DevOps e ferramentas de automação',
                weights: { devops: 3, cloud: 1.5, engineering: 1.5 }
            },
            {
                text: 'Blockchain ou tecnologias emergentes',
                weights: { dev: 2, engineering: 2, security: 1.5 }
            }
        ]
    },

    // Categoria: Afinidade com Perfis Técnicos
    {
        id: 13,
        category: 'perfis',
        question: 'Com qual destes perfis profissionais você mais se identifica?',
        options: [
            {
                text: 'Desenvolvedor - cria aplicativos, sites e sistemas',
                weights: { dev: 3, engineering: 1 }
            },
            {
                text: 'Arquiteto de software - projeta soluções e define padrões',
                weights: { engineering: 3, dev: 1, cloud: 1 }
            },
            {
                text: 'Analista de dados ou cientista de dados',
                weights: { datascience: 3, ai: 2, data: 1.5 }
            },
            {
                text: 'Especialista em infraestrutura ou DevOps',
                weights: { devops: 2.5, networks: 2.5, cloud: 2.5 }
            },
            {
                text: 'Profissional de segurança ou ethical hacker',
                weights: { security: 3, networks: 1 }
            }
        ]
    },
    {
        id: 14,
        category: 'perfis',
        question: 'Qual destas frases melhor descreve seu interesse em tecnologia?',
        options: [
            {
                text: '"Quero criar aplicações e soluções que impactem a vida das pessoas"',
                weights: { dev: 2.5, ux: 2.5, engineering: 1.5 }
            },
            {
                text: '"Gosto de entender sistemas complexos e arquitetar soluções robustas"',
                weights: { engineering: 3, cloud: 2, devops: 2 }
            },
            {
                text: '"Me interesso por dados e como transformá-los em informações úteis"',
                weights: { datascience: 3, ai: 2, data: 2 }
            },
            {
                text: '"Prefiro trabalhar nos bastidores garantindo que tudo funcione bem"',
                weights: { networks: 2.5, devops: 2.5, cloud: 2 }
            },
            {
                text: '"Quero entender riscos e proteger informações contra ameaças"',
                weights: { security: 3, networks: 1 }
            }
        ]
    },
    {
        id: 15,
        category: 'perfis',
        question: 'Se você assistisse a uma palestra em um evento de tecnologia, qual tema escolheria?',
        options: [
            {
                text: 'Novas tecnologias de frontend ou backend',
                weights: { dev: 3, engineering: 1 }
            },
            {
                text: 'Avanços em inteligência artificial e machine learning',
                weights: { ai: 3, datascience: 2 }
            },
            {
                text: 'Design de experiência e interfaces centradas no usuário',
                weights: { ux: 3, dev: 1 }
            },
            {
                text: 'Arquitetura de sistemas distribuídos e cloud native',
                weights: { cloud: 2.5, engineering: 2.5, devops: 2 }
            },
            {
                text: 'Ameaças cibernéticas e técnicas avançadas de proteção',
                weights: { security: 3, networks: 1 }
            }
        ]
    },

    // Categoria: Objetivos de Carreira
    {
        id: 16,
        category: 'carreira',
        question: 'Que tipo de impacto você gostaria de causar com seu trabalho?',
        options: [
            {
                text: 'Construir produtos que facilitem a vida das pessoas',
                weights: { dev: 2.5, ux: 2.5, engineering: 1.5 }
            },
            {
                text: 'Criar sistemas inteligentes que tomem decisões complexas',
                weights: { ai: 3, datascience: 2, engineering: 1 }
            },
            {
                text: 'Garantir que dados e informações estejam seguros e protegidos',
                weights: { security: 3, data: 1.5, networks: 1 }
            },
            {
                text: 'Manter infraestruturas críticas funcionando sem problemas',
                weights: { networks: 2.5, cloud: 2.5, devops: 2.5 }
            },
            {
                text: 'Transformar dados em insights que guiem decisões importantes',
                weights: { datascience: 3, data: 2, ai: 1 }
            }
        ]
    },
    {
        id: 17,
        category: 'carreira',
        question: 'Qual destas carreiras você acha mais atraente para seu futuro?',
        options: [
            {
                text: 'Desenvolvedor full-stack ou especialista em uma tecnologia específica',
                weights: { dev: 3, engineering: 1 }
            },
            {
                text: 'Cientista de dados ou especialista em IA',
                weights: { ai: 2.5, datascience: 3 }
            },
            {
                text: 'Arquiteto de soluções ou engenheiro de software sênior',
                weights: { engineering: 3, cloud: 1.5, dev: 1.5 }
            },
            {
                text: 'Engenheiro DevOps ou especialista em cloud computing',
                weights: { devops: 2.5, cloud: 3, networks: 1.5 }
            },
            {
                text: 'Profissional de cibersegurança ou consultor de segurança',
                weights: { security: 3, networks: 1, engineering: 0.5 }
            }
        ]
    },
    {
        id: 18,
        category: 'carreira',
        question: 'O que você mais valoriza em um ambiente de trabalho?',
        options: [
            {
                text: 'Liberdade criativa para desenvolver soluções inovadoras',
                weights: { dev: 2, ux: 2.5, ai: 1.5 }
            },
            {
                text: 'Trabalhar com tecnologias de ponta e problemas desafiadores',
                weights: { ai: 2, dev: 2, cloud: 2, engineering: 2 }
            },
            {
                text: 'Processos bem definidos e ambientes estruturados',
                weights: { engineering: 2.5, devops: 2, data: 2 }
            },
            {
                text: 'Alto impacto e responsabilidade em sistemas críticos',
                weights: { security: 2.5, networks: 2, cloud: 2 }
            },
            {
                text: 'Colaboração interdisciplinar com diversas equipes',
                weights: { ux: 2, engineering: 2, datascience: 1.5 }
            }
        ]
    },

    // Categoria: Aspectos Técnicos vs. Criativos
    {
        id: 19,
        category: 'aspectos',
        question: 'Como você equilibra aspectos técnicos e criativos?',
        options: [
            {
                text: 'Prefiro desafios técnicos e baseados em lógica pura',
                weights: { dev: 2, ai: 2, engineering: 2.5, networks: 2 }
            },
            {
                text: 'Gosto de combinar soluções técnicas com design criativo',
                weights: { dev: 2, ux: 3, engineering: 1 }
            },
            {
                text: 'Me interesso por encontrar padrões e insights em dados complexos',
                weights: { datascience: 3, ai: 2, data: 1.5 }
            },
            {
                text: 'Prefiro criar processos otimizados e eficientes',
                weights: { devops: 3, cloud: 2, engineering: 2 }
            },
            {
                text: 'Gosto de antecipar problemas e criar defesas proativas',
                weights: { security: 3, networks: 1.5, devops: 1 }
            }
        ]
    },
    {
        id: 20,
        category: 'aspectos',
        question: 'Qual aspecto você considera mais importante ao desenvolver um produto digital?',
        options: [
            {
                text: 'Funcionalidade robusta e código bem estruturado',
                weights: { dev: 2.5, engineering: 3 }
            },
            {
                text: 'Interface intuitiva e experiência agradável para o usuário',
                weights: { ux: 3, dev: 1.5 }
            },
            {
                text: 'Segurança e proteção dos dados dos usuários',
                weights: { security: 3, engineering: 1.5 }
            },
            {
                text: 'Performance e capacidade de escalar conforme necessário',
                weights: { cloud: 2.5, engineering: 2, devops: 2.5 }
            },
            {
                text: 'Capacidade de coletar e analisar dados para melhorias',
                weights: { datascience: 3, data: 2.5 }
            }
        ]
    },
    {
        id: 21,
        category: 'aspectos',
        question: 'Como você prefere abordar um problema novo?',
        options: [
            {
                text: 'Prototipando rapidamente diferentes soluções',
                weights: { dev: 2.5, ux: 2.5 }
            },
            {
                text: 'Analisando detalhadamente o problema antes de começar',
                weights: { engineering: 3, security: 2, datascience: 1.5 }
            },
            {
                text: 'Pesquisando como outros resolveram problemas similares',
                weights: { dev: 2, engineering: 2, devops: 1.5 }
            },
            {
                text: 'Coletando dados e fazendo análises para encontrar padrões',
                weights: { datascience: 3, ai: 2.5 }
            },
            {
                text: 'Testando hipóteses sistematicamente até encontrar a solução',
                weights: { security: 2, ai: 2, networks: 2 }
            }
        ]
    },

    // Categoria: Interesses Futuros
    {
        id: 22,
        category: 'futuro',
        question: 'Qual tecnologia emergente mais desperta seu interesse?',
        options: [
            {
                text: 'Inteligência artificial generativa e LLMs',
                weights: { ai: 3, dev: 1, datascience: 1.5 }
            },
            {
                text: 'Computação quântica',
                weights: { ai: 2, engineering: 2.5, dev: 1.5 }
            },
            {
                text: 'Realidade aumentada/virtual para interfaces do futuro',
                weights: { ux: 3, dev: 2 }
            },
            {
                text: 'Edge computing e IoT (Internet das Coisas)',
                weights: { networks: 2.5, cloud: 2.5, devops: 1.5 }
            },
            {
                text: 'Cibersegurança avançada com IA',
                weights: { security: 3, ai: 1.5 }
            }
        ]
    },
    {
        id: 23,
        category: 'futuro',
        question: 'Qual área você acredita que terá maior crescimento nos próximos anos?',
        options: [
            {
                text: 'Desenvolvimento com IA generativa e ferramentas low-code',
                weights: { dev: 2.5, ai: 2.5 }
            },
            {
                text: 'Ciência de dados e machine learning',
                weights: { ai: 2.5, datascience: 3 }
            },
            {
                text: 'Cloud computing e arquiteturas serverless',
                weights: { cloud: 3, devops: 2.5 }
            },
            {
                text: 'Cibersegurança e proteção de privacidade',
                weights: { security: 3, networks: 1.5 }
            },
            {
                text: 'Experiências imersivas (AR/VR/XR)',
                weights: { ux: 3, dev: 2 }
            }
        ]
    },
    {
        id: 24,
        category: 'futuro',
        question: 'Se pudesse resolver um grande problema tecnológico, qual seria?',
        options: [
            {
                text: 'Tornar a tecnologia mais acessível e inclusiva para todos',
                weights: { ux: 3, dev: 2, engineering: 1 }
            },
            {
                text: 'Avançar a inteligência artificial para novos patamares',
                weights: { ai: 3, datascience: 1.5, engineering: 1.5 }
            },
            {
                text: 'Criar sistemas computacionais mais eficientes e sustentáveis',
                weights: { cloud: 2.5, engineering: 2.5, devops: 2 }
            },
            {
                text: 'Garantir segurança e privacidade em um mundo cada vez mais digital',
                weights: { security: 3, networks: 1.5 }
            },
            {
                text: 'Usar dados para resolver grandes desafios globais',
                weights: { datascience: 3, ai: 1.5, data: 2 }
            }
        ]
    },

    // Categoria: Habilidades Específicas
    {
        id: 25,
        category: 'habilidades-especificas',
        question: 'Quais destas atividades você prefere ou tem mais facilidade?',
        options: [
            {
                text: 'Programar e resolver problemas com código',
                weights: { dev: 3, engineering: 1.5, ai: 1 }
            },
            {
                text: 'Projetar interfaces visuais e pensar na experiência do usuário',
                weights: { ux: 3, dev: 1 }
            },
            {
                text: 'Analisar dados, fazer cálculos e encontrar padrões',
                weights: { datascience: 3, ai: 2, data: 1.5 }
            },
            {
                text: 'Configurar e administrar sistemas e redes',
                weights: { networks: 3, cloud: 2, devops: 2.5 }
            },
            {
                text: 'Investigar sistemas e identificar vulnerabilidades',
                weights: { security: 3, networks: 1 }
            }
        ]
    },
    {
        id: 26,
        category: 'habilidades-especificas',
        question: 'Qual matéria escolar você mais gostava ou teria mais interesse?',
        options: [
            {
                text: 'Matemática',
                weights: { ai: 2.5, datascience: 2.5, engineering: 2 }
            },
            {
                text: 'Física ou Química',
                weights: { engineering: 2.5, networks: 2, dev: 1.5 }
            },
            {
                text: 'Artes ou Design',
                weights: { ux: 3, dev: 1.5 }
            },
            {
                text: 'Estatística ou análise de dados',
                weights: { datascience: 3, ai: 2, data: 2 }
            },
            {
                text: 'Lógica ou resolução de quebra-cabeças',
                weights: { dev: 2, engineering: 2, security: 2.5 }
            }
        ]
    },
    {
        id: 27,
        category: 'habilidades-especificas',
        question: 'Que tipo de projeto pessoal você gostaria de desenvolver?',
        options: [
            {
                text: 'Um aplicativo ou site para resolver um problema específico',
                weights: { dev: 3, ux: 1.5 }
            },
            {
                text: 'Um assistente inteligente baseado em IA',
                weights: { ai: 3, dev: 1.5 }
            },
            {
                text: 'Uma ferramenta de análise de dados para algum tema de interesse',
                weights: { datascience: 3, data: 2 }
            },
            {
                text: 'Um sistema de automação para tarefas do dia a dia',
                weights: { devops: 2.5, dev: 2, cloud: 1.5 }
            },
            {
                text: 'Uma solução de segurança ou privacidade digital',
                weights: { security: 3, networks: 1.5 }
            }
        ]
    },

    // Categoria: Características de Personalidade
    {
        id: 28,
        category: 'personalidade',
        question: 'Como seus amigos provavelmente descreveriam você?',
        options: [
            {
                text: 'Criativo e inovador, sempre com novas ideias',
                weights: { dev: 2, ux: 2.5, ai: 2 }
            },
            {
                text: 'Analítico e racional, bom em resolver problemas',
                weights: { engineering: 2.5, datascience: 2.5, security: 1.5 }
            },
            {
                text: 'Meticuloso e detalhista, presta atenção a tudo',
                weights: { security: 2.5, data: 2, ux: 1.5 }
            },
            {
                text: 'Prático e hands-on, gosta de fazer as coisas funcionarem',
                weights: { networks: 2.5, dev: 2, devops: 2.5 }
            },
            {
                text: 'Organizado e sistemático, planeja antes de agir',
                weights: { engineering: 2.5, devops: 2, cloud: 2 }
            }
        ]
    },
    {
        id: 29,
        category: 'personalidade',
        question: 'O que te dá mais satisfação ao concluir uma tarefa?',
        options: [
            {
                text: 'Ver algo que criei funcionando e sendo útil',
                weights: { dev: 2.5, ux: 2.5 }
            },
            {
                text: 'Resolver um problema complexo com uma solução elegante',
                weights: { engineering: 3, ai: 2, dev: 1.5 }
            },
            {
                text: 'Descobrir insights valiosos em dados ou informações',
                weights: { datascience: 3, ai: 2 }
            },
            {
                text: 'Otimizar um sistema para que funcione melhor',
                weights: { devops: 2.5, cloud: 2.5, networks: 2 }
            },
            {
                text: 'Identificar e corrigir vulnerabilidades ou erros',
                weights: { security: 3, engineering: 1.5 }
            }
        ]
    },
    {
        id: 30,
        category: 'personalidade',
        question: 'Qual aspecto você mais valoriza em um produto ou serviço digital?',
        options: [
            {
                text: 'Design atraente e experiência intuitiva',
                weights: { ux: 3, dev: 1.5 }
            },
            {
                text: 'Funcionalidades inovadoras e úteis',
                weights: { dev: 2.5, engineering: 2, ai: 1.5 }
            },
            {
                text: 'Robustez e confiabilidade',
                weights: { engineering: 2.5, devops: 2.5, networks: 2 }
            },
            {
                text: 'Segurança e proteção de privacidade',
                weights: { security: 3, data: 1.5 }
            },
            {
                text: 'Personalização baseada em análise de comportamento',
                weights: { datascience: 3, ai: 2, ux: 1 }
            }
        ]
    }
];

/**
 * Pontuação mínima necessária para considerar afinidade com uma área
 * Usado no algoritmo de cálculo de resultados
 */
const AFFINITY_THRESHOLD = 0.12; // 12% da pontuação máxima teórica