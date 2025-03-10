/**
 * Definição detalhada das áreas de TI para o teste vocacional
 * Atualizado em Março de 2025
 */

const areasInfo = {
    dev: {
        id: 'dev',
        name: 'Desenvolvimento de Software',
        icon: 'fas fa-code',
        color: '#3b82f6', // blue-500
        shortDescription: 'Criação de aplicativos, sites e sistemas. É o "coração" da programação.',
        fullDescription: 'Profissionais de desenvolvimento de software criam aplicativos, sites e sistemas que utilizamos diariamente. Eles transformam ideias em código funcional, cuidando de toda a implementação técnica.',
        
        profile: `
            <p>Se você adora criar coisas do zero, resolver quebra-cabeças lógicos e ver suas criações ganharem vida, o desenvolvimento de software pode ser sua vocação. Desenvolvedores se focam na implementação prática de soluções, transformando requisitos em código e corrigindo problemas para entregar sistemas funcionais.</p>
            
            <p>Como desenvolvedor(a), você trabalhará geralmente em equipe, sob prazos definidos, construindo aplicações que podem impactar milhares ou milhões de usuários. Dependendo da sua especialização, você pode atuar criando interfaces visuais (front-end), sistemas e lógica por trás das aplicações (back-end), ou em ambas as áreas (full-stack).</p>
            
            <p>Um bom desenvolvedor valoriza código limpo, bem documentado e testado. Também está sempre aprendendo novas tecnologias, já que a área evolui rapidamente.</p>
        `,
        
        technologies: `
            <p>O desenvolvimento de software abrange diversas linguagens e frameworks, dependendo do tipo de projeto. Em 2025, algumas das tecnologias mais relevantes incluem:</p>
        `,
        
        techList: [
            {
                name: 'JavaScript',
                icon: 'fab fa-js',
                description: 'Linguagem universal para desenvolvimento web, tanto front-end quanto back-end com Node.js.',
                popularity: 95, // percentagem de popularidade
                isHot: true
            },
            {
                name: 'Python',
                icon: 'fab fa-python',
                description: 'Linguagem versátil e acessível, excelente para iniciantes e usada em diversos tipos de aplicações.',
                popularity: 92,
                isHot: true
            },
            {
                name: 'React',
                icon: 'fab fa-react',
                description: 'Biblioteca para construção de interfaces web interativas, mantida pelo Meta (Facebook).',
                popularity: 88,
                isHot: true
            },
            {
                name: 'TypeScript',
                icon: 'fas fa-code',
                description: 'Superset do JavaScript que adiciona tipagem estática, melhorando a qualidade e manutenção de código.',
                popularity: 85,
                isHot: true
            },
            {
                name: 'Rust',
                icon: 'fas fa-cog',
                description: 'Linguagem moderna focada em performance e segurança, substituindo C++ em muitos casos.',
                popularity: 75,
                isHot: true
            },
            {
                name: 'Go (Golang)',
                icon: 'fas fa-cube',
                description: 'Linguagem criada pelo Google, focada em simplicidade e performance para sistemas distribuídos.',
                popularity: 70,
                isHot: false
            }
        ],
        
        tools: `
            <p>Desenvolvedores usam diversas ferramentas em seu dia a dia, incluindo:</p>
            <ul>
                <li><strong>Editores de código e IDEs:</strong> Visual Studio Code, IntelliJ IDEA, PyCharm</li>
                <li><strong>Sistemas de controle de versão:</strong> Git, GitHub, GitLab</li>
                <li><strong>Frameworks:</strong> Específicos para cada linguagem (React, Angular, Vue.js para front-end; Node.js, Django, Spring Boot para back-end)</li>
                <li><strong>Ferramentas de colaboração:</strong> Jira, Slack, Notion</li>
                <li><strong>Metodologias ágeis:</strong> Scrum, Kanban para gerenciamento de projetos</li>
            </ul>
            <p>O workflow típico envolve trabalhar em sprints (2-4 semanas), implementando novas funcionalidades e corrigindo bugs. A comunicação clara e trabalho em equipe são essenciais, pois desenvolvimento é quase sempre um esforço colaborativo.</p>
        `,
        
        learning: `
            <p>Para começar na área de desenvolvimento, recomendamos:</p>
        `,
        
        resources: [
            {
                name: 'CS50: Introdução à Ciência da Computação',
                url: 'https://cs50.harvard.edu/x/',
                icon: 'fas fa-university',
                description: 'Curso gratuito de Harvard que ensina fundamentos de programação e pensamento computacional.'
            },
            {
                name: 'The Odin Project',
                url: 'https://www.theodinproject.com/',
                icon: 'fas fa-globe',
                description: 'Currículo gratuito e completo para desenvolvimento web, com projetos práticos.'
            },
            {
                name: 'freeCodeCamp',
                url: 'https://www.freecodecamp.org/',
                icon: 'fab fa-free-code-camp',
                description: 'Plataforma interativa com certificações gratuitas em desenvolvimento web.'
            },
            {
                name: 'Roadmap.sh',
                url: 'https://roadmap.sh/',
                icon: 'fas fa-map',
                description: 'Guias visuais para diferentes caminhos de carreira em desenvolvimento.'
            }
        ],
        
        project: `
            <p><strong>Projeto recomendado para iniciantes:</strong> Site pessoal ou portfólio</p>
            <p>Comece criando seu próprio site pessoal com HTML, CSS e um pouco de JavaScript. Este projeto permite:</p>
            <ul>
                <li>Aprender os fundamentos da web (HTML para estrutura, CSS para estilo, JS para interatividade)</li>
                <li>Ter liberdade criativa para personalizar conforme seu gosto</li>
                <li>Criar algo útil para sua carreira (um portfólio para mostrar outros projetos)</li>
                <li>Publicar facilmente na web com serviços gratuitos como GitHub Pages ou Netlify</li>
            </ul>
            <p>À medida que avança, você pode adicionar novas funcionalidades, como um blog, formulário de contato ou visualização de dados.</p>
        `
    },
    
    ai: {
        id: 'ai',
        name: 'Inteligência Artificial',
        icon: 'fas fa-brain',
        color: '#8b5cf6', // purple-500
        shortDescription: 'Criação de sistemas que simulam inteligência humana e aprendem com dados.',
        fullDescription: 'Profissionais de IA ensinam computadores a aprender com dados e tomar decisões inteligentes sem programação explícita, trabalhando em áreas como reconhecimento de padrões, processamento de linguagem natural e robótica.',
        
        profile: `
            <p>Você tem interesse por matemática, estatística e por entender como as máquinas podem "aprender"? Gosta de resolver problemas complexos analisando padrões em grandes volumes de dados? A área de Inteligência Artificial (IA) e Machine Learning pode ser perfeita para você.</p>
            
            <p>Como profissional de IA, você criará algoritmos que permitem aos computadores aprender com exemplos e melhorar com a experiência. Seu trabalho envolverá criar modelos matemáticos, treinar algoritmos com dados e iterativamente otimizar resultados para tarefas como reconhecimento de imagens, processamento de linguagem natural, previsão de comportamentos ou automação de decisões.</p>
            
            <p>Esta área requer pensamento analítico, criatividade para formular soluções e conhecimento sólido de estatística. Em 2025, IA está entre as especialidades mais valorizadas e bem remuneradas em TI, com aplicações revolucionando todos os setores da economia.</p>
        `,
        
        technologies: `
            <p>O campo de IA está em rápida evolução, com novas técnicas surgindo constantemente. As tecnologias mais importantes em 2025 incluem:</p>
        `,
        
        techList: [
            {
                name: 'Python',
                icon: 'fab fa-python',
                description: 'Linguagem dominante em IA graças às suas poderosas bibliotecas científicas e de machine learning.',
                popularity: 98,
                isHot: true
            },
            {
                name: 'TensorFlow/PyTorch',
                icon: 'fas fa-cube',
                description: 'Frameworks de deep learning para criar e treinar redes neurais complexas.',
                popularity: 95,
                isHot: true
            },
            {
                name: 'Transformers',
                icon: 'fas fa-robot',
                description: 'Arquitetura que revolucionou NLP (Processamento de Linguagem Natural) e outros campos da IA.',
                popularity: 90,
                isHot: true
            },
            {
                name: 'Scikit-learn',
                icon: 'fas fa-cogs',
                description: 'Biblioteca Python para algoritmos clássicos de machine learning (linear, árvores, clustering, etc).',
                popularity: 85,
                isHot: false
            },
            {
                name: 'JAX/MXNet',
                icon: 'fas fa-microchip',
                description: 'Frameworks de alto desempenho para computação numérica e aprendizado profundo.',
                popularity: 78,
                isHot: true
            },
            {
                name: 'Hugging Face',
                icon: 'fas fa-comment-alt',
                description: 'Ecossistema para desenvolvimento e compartilhamento de modelos de NLP e IA generativa.',
                popularity: 85,
                isHot: true
            }
        ],
        
        tools: `
            <p>O trabalho em IA envolve diversas ferramentas e metodologias:</p>
            <ul>
                <li><strong>Ambientes de desenvolvimento:</strong> Jupyter Notebooks, Google Colab, VSCode</li>
                <li><strong>Bibliotecas de dados:</strong> Pandas, NumPy para manipulação e análise</li>
                <li><strong>Visualização:</strong> Matplotlib, Seaborn, Plotly para análise exploratória</li>
                <li><strong>MLOps:</strong> DVC, MLflow, Weights & Biases para controle de experimentos</li>
                <li><strong>Cloud AI:</strong> Plataformas como AWS SageMaker, Azure ML, Google Vertex AI</li>
            </ul>
            <p>O processo de desenvolvimento típico segue o método científico: formular hipóteses, preparar dados, treinar modelos, avaliar resultados, ajustar parâmetros e iterar. A validação rigorosa e reprodutibilidade dos resultados são fundamentais.</p>
        `,
        
        learning: `
            <p>Para começar em IA sem experiência prévia, recomendamos esta progressão:</p>
        `,
        
        resources: [
            {
                name: 'Introdução a Machine Learning (Andrew Ng)',
                url: 'https://www.coursera.org/learn/machine-learning',
                icon: 'fas fa-graduation-cap',
                description: 'O curso introdutório mais popular do mundo, agora atualizado para Python.'
            },
            {
                name: 'Kaggle: Introdução a Machine Learning',
                url: 'https://www.kaggle.com/learn/intro-to-machine-learning',
                icon: 'fas fa-laptop-code',
                description: 'Tutoriais interativos e gratuitos, perfeitos para iniciantes.'
            },
            {
                name: 'Fast.ai',
                url: 'https://www.fast.ai/',
                icon: 'fas fa-bolt',
                description: 'Abordagem prática de deep learning, focada em aplicações reais antes da teoria.'
            },
            {
                name: 'Curso de IA da Fundação Bradesco',
                url: 'https://www.ev.org.br/',
                icon: 'fas fa-book',
                description: 'Curso introdutório em português, gratuito e acessível para iniciantes.'
            }
        ],
        
        project: `
            <p><strong>Projeto recomendado para iniciantes:</strong> Sistema de recomendação simples</p>
            <p>Um excelente primeiro projeto em IA é criar um sistema de recomendação de filmes, músicas ou livros. Este projeto permite:</p>
            <ul>
                <li>Trabalhar com dados reais disponíveis publicamente (como o dataset MovieLens)</li>
                <li>Implementar algoritmos básicos de filtragem colaborativa</li>
                <li>Visualizar resultados de forma intuitiva</li>
                <li>Entender conceitos fundamentais como similaridade entre usuários ou itens</li>
            </ul>
            <p>Este projeto cobre o pipeline completo de IA: obtenção de dados, pré-processamento, modelagem, avaliação e interpretação dos resultados.</p>
        `
    },
    
    security: {
        id: 'security',
        name: 'Cibersegurança',
        icon: 'fas fa-shield-alt',
        color: '#ef4444', // red-500
        shortDescription: 'Proteção de sistemas, redes e dados contra ameaças digitais.',
        fullDescription: 'Especialistas em cibersegurança defendem organizações contra ataques digitais, identificando vulnerabilidades, implementando proteções e respondendo a incidentes de segurança.',
        
        profile: `
            <p>Você tem curiosidade sobre como sistemas podem ser atacados e protegidos? Gosta de resolver quebra-cabeças complexos e valoriza investigação meticulosa? A área de Cibersegurança pode ser sua vocação.</p>
            
            <p>Como profissional de segurança, você atuará como defensor digital, protegendo sistemas, redes e dados contra diversas ameaças. Seus trabalho incluirá identificar vulnerabilidades em sistemas, implementar controles de proteção, monitorar tentativas de invasão, responder a incidentes e até mesmo realizar testes de penetração autorizados (simulando hackers éticos) para encontrar falhas antes dos criminosos.</p>
            
            <p>É uma área onde você estará sempre aprendendo, pois novas vulnerabilidades e técnicas de ataque surgem constantemente. Em 2025, com o aumento de crimes cibernéticos e regulamentações de proteção de dados, os profissionais de segurança estão entre os mais valorizados e bem remunerados do mercado — até mesmo iniciantes têm boas oportunidades, pois existe um déficit global de especialistas.</p>
        `,
        
        technologies: `
            <p>A cibersegurança abrange diversas tecnologias e áreas de especialização. Em 2025, as mais relevantes incluem:</p>
        `,
        
        techList: [
            {
                name: 'Python',
                icon: 'fab fa-python',
                description: 'Linguagem versátil para automação de segurança, análise de vulnerabilidades e desenvolvimento de ferramentas.',
                popularity: 90,
                isHot: true
            },
            {
                name: 'Linux/Bash',
                icon: 'fab fa-linux',
                description: 'Sistema operacional e shell essenciais para análise forense e testes de penetração.',
                popularity: 85,
                isHot: false
            },
            {
                name: 'Cloud Security',
                icon: 'fas fa-cloud-shield-alt',
                description: 'Proteção de ambientes na nuvem (AWS, Azure, GCP) e containers (Docker, Kubernetes).',
                popularity: 95,
                isHot: true
            },
            {
                name: 'SIEM/SOC',
                icon: 'fas fa-eye',
                description: 'Ferramentas de gerenciamento de eventos e monitoramento de segurança em tempo real.',
                popularity: 88,
                isHot: true
            },
            {
                name: 'DevSecOps',
                icon: 'fas fa-shield-check',
                description: 'Integração de segurança no ciclo de desenvolvimento de software desde o início.',
                popularity: 92,
                isHot: true
            },
            {
                name: 'IA para Segurança',
                icon: 'fas fa-brain',
                description: 'Uso de machine learning para detecção de ameaças avançadas e análise comportamental.',
                popularity: 85,
                isHot: true
            }
        ],
        
        tools: `
            <p>Os profissionais de segurança utilizam diversas ferramentas especializadas:</p>
            <ul>
                <li><strong>Scanners de vulnerabilidade:</strong> Nmap, OpenVAS, Nessus para identificar pontos fracos</li>
                <li><strong>Ferramentas de pentest:</strong> Kali Linux, Metasploit, Burp Suite para testes de invasão</li>
                <li><strong>Análise de tráfego:</strong> Wireshark, Zeek, Suricata para monitorar comunicações</li>
                <li><strong>Resposta a incidentes:</strong> Volatility, TheHive, OSSEC para análise e gerenciamento</li>
                <li><strong>Frameworks de segurança:</strong> OWASP para web, MITRE ATT&CK para modelagem de ameaças</li>
            </ul>
            <p>No dia a dia, profissionais alternam entre atividades defensivas (configurar firewalls, monitorar alertas) e ofensivas (testar sistemas para encontrar vulnerabilidades). O trabalho segue metodologias estruturadas como o ciclo de segurança: identificar, proteger, detectar, responder e recuperar.</p>
        `,
        
        learning: `
            <p>Para começar em cibersegurança sem experiência prévia:</p>
        `,
        
        resources: [
            {
                name: 'TryHackMe',
                url: 'https://tryhackme.com/',
                icon: 'fas fa-user-secret',
                description: 'Plataforma interativa com laboratórios e desafios práticos para todos os níveis.'
            },
            {
                name: 'Curso Introdutório do NICCS',
                url: 'https://niccs.cisa.gov/training-education/training/introduction-cyber-security',
                icon: 'fas fa-shield-alt',
                description: 'Introdução gratuita aos fundamentos de segurança da agência americana CISA.'
            },
            {
                name: 'PortSwigger Web Security Academy',
                url: 'https://portswigger.net/web-security',
                icon: 'fas fa-globe',
                description: 'Recursos gratuitos para aprender segurança web e vulnerabilidades OWASP.'
            },
            {
                name: 'Desafio Pentest Brasil',
                url: 'https://desecsecurity.com/academy/',
                icon: 'fas fa-flag',
                description: 'Plataforma brasileira com conteúdo gratuito e pago sobre segurança ofensiva.'
            }
        ],
        
        project: `
            <p><strong>Projeto recomendado para iniciantes:</strong> Laboratório de segurança virtual</p>
            <p>Monte seu próprio ambiente de prática usando máquinas virtuais, onde você pode experimentar conceitos de segurança sem riscos. Este projeto permite:</p>
            <ul>
                <li>Criar uma rede virtual isolada com VirtualBox ou VMware (gratuitos)</li>
                <li>Instalar sistemas como Kali Linux (ferramentas de segurança) e máquinas vulneráveis intencionalmente (como Metasploitable)</li>
                <li>Praticar identificação de vulnerabilidades e técnicas básicas de proteção</li>
                <li>Aprender os fundamentos de redes, sistemas operacionais e segurança na prática</li>
            </ul>
            <p>Este projeto proporciona experiência hands-on essencial para a área, simulando um ambiente real de forma segura e controlada.</p>
        `
    },
    
    data: {
        id: 'data',
        name: 'Banco de Dados',
        icon: 'fas fa-database',
        color: '#10b981', // emerald-500
        shortDescription: 'Organização, armazenamento e recuperação eficiente de informações.',
        fullDescription: 'Especialistas em banco de dados projetam, implementam e otimizam sistemas que armazenam e gerenciam dados, garantindo que as informações estejam seguras, íntegras e facilmente acessíveis.',
        
        profile: `
            <p>Você gosta de organizar informações de forma lógica e eficiente? Tem facilidade com estruturas e padrões? A área de Banco de Dados pode ser perfeita para você.</p>
            
            <p>Como um especialista em Banco de Dados (como Administrador ou Engenheiro de Dados), você será responsável por um dos ativos mais valiosos das organizações: suas informações. Seu trabalho envolverá projetar estruturas de armazenamento eficientes, garantir que os dados estejam sempre disponíveis, consistentes e seguros, otimizar consultas para melhor desempenho e implementar estratégias de backup e recuperação.</p>
            
            <p>Esta é uma área que combina aspectos técnicos precisos com a satisfação de criar sistemas organizados e confiáveis. Profissionais de banco de dados trabalham próximos de desenvolvedores, analistas de segurança e cientistas de dados, servindo como guardiões das informações da empresa.</p>
        `,
        
        technologies: `
            <p>Em 2025, o mundo dos bancos de dados está mais diversificado que nunca, com opções para diferentes casos de uso:</p>
        `,
        
        techList: [
            {
                name: 'SQL',
                icon: 'fas fa-table',
                description: 'Linguagem padrão para consultas em bancos relacionais (PostgreSQL, MySQL, SQL Server, Oracle).',
                popularity: 95,
                isHot: false
            },
            {
                name: 'PostgreSQL',
                icon: 'fas fa-elephant',
                description: 'O banco de dados relacional mais avançado e versátil, com recursos de JSON e extensibilidade.',
                popularity: 88,
                isHot: true
            },
            {
                name: 'MongoDB',
                icon: 'fas fa-leaf',
                description: 'Banco de dados NoSQL orientado a documentos, ideal para dados semiestruturados.',
                popularity: 82,
                isHot: false
            },
            {
                name: 'Redis',
                icon: 'fas fa-bolt',
                description: 'Armazenamento em memória ultrarápido, usado para cache, filas e dados em tempo real.',
                popularity: 78,
                isHot: false
            },
            {
                name: 'Databricks/Spark',
                icon: 'fas fa-fire',
                description: 'Plataformas para processamento distribuído de big data em larga escala.',
                popularity: 85,
                isHot: true
            },
            {
                name: 'Timescale/InfluxDB',
                icon: 'fas fa-chart-line',
                description: 'Bancos especializados em séries temporais para IoT, monitoramento e análise.',
                popularity: 75,
                isHot: true
            }
        ],
        
        tools: `
            <p>O trabalho com bancos de dados envolve diversas ferramentas e metodologias:</p>
            <ul>
                <li><strong>Ferramentas de administração:</strong> pgAdmin, MySQL Workbench, MongoDB Compass</li>
                <li><strong>Modelagem de dados:</strong> ERDs (Diagramas Entidade-Relacionamento), normalização</li>
                <li><strong>Monitoramento e performance:</strong> Grafana, Prometheus, PGTune, Query analyzers</li>
                <li><strong>Migração e sincronização:</strong> Flyway, Liquibase para versionamento de schema</li>
                <li><strong>ETL e pipelines:</strong> dbt, Airflow para transformação e movimentação de dados</li>
            </ul>
            <p>No dia a dia, um DBA ou engenheiro de dados equilibra tarefas proativas (otimização, backups, planejamento de capacidade) e reativas (resolução de problemas, recuperação, troubleshooting de queries lentas). A metodologia segue princípios como ACID (Atomicidade, Consistência, Isolamento, Durabilidade) e boas práticas de acesso e segurança.</p>
        `,
        
        learning: `
            <p>Para começar na área de banco de dados sem experiência prévia:</p>
        `,
        
        resources: [
            {
                name: 'SQLBolt',
                url: 'https://sqlbolt.com/',
                icon: 'fas fa-bolt',
                description: 'Tutorial interativo para aprender SQL do zero, com exercícios práticos.'
            },
            {
                name: 'Khan Academy: SQL',
                url: 'https://www.khanacademy.org/computing/computer-programming/sql',
                icon: 'fas fa-graduation-cap',
                description: 'Curso gratuito com vídeos e exercícios para fundamentos de SQL.'
            },
            {
                name: 'Modelagem de Dados - Fundação Bradesco',
                url: 'https://www.ev.org.br/',
                icon: 'fas fa-sitemap',
                description: 'Curso em português sobre modelagem relacional e normalização.'
            },
            {
                name: 'PostgreSQL Tutorial',
                url: 'https://www.postgresqltutorial.com/',
                icon: 'fas fa-book',
                description: 'Guia completo e gratuito para PostgreSQL, o banco relacional mais versátil.'
            }
        ],
        
        project: `
            <p><strong>Projeto recomendado para iniciantes:</strong> Sistema de gerenciamento para um contexto familiar</p>
            <p>Crie um banco de dados para um contexto que você conheça bem, como uma biblioteca pessoal, coleção de filmes ou receitas. Este projeto permite:</p>
            <ul>
                <li>Praticar modelagem de dados (identificar entidades, relacionamentos e atributos)</li>
                <li>Implementar um banco real (recomendamos PostgreSQL ou MySQL, ambos gratuitos)</li>
                <li>Escrever consultas SQL para diferentes cenários de uso</li>
                <li>Experimentar otimizações simples como índices</li>
            </ul>
            <p>Este projeto cobre todo o ciclo: design, implementação, manipulação de dados e consultas, proporcionando uma visão abrangente do trabalho com bancos de dados.</p>
        `
    },

    networks: {
        id: 'networks',
        name: 'Redes de Computadores',
        icon: 'fas fa-network-wired',
        color: '#f59e0b', // amber-500
        shortDescription: 'Infraestrutura que permite a comunicação entre dispositivos e sistemas.',
        fullDescription: 'Especialistas em redes projetam, implementam e mantém a infraestrutura que conecta todos os dispositivos e sistemas, garantindo comunicações eficientes e seguras.',
        
        profile: `
            <p>Você tem interesse em entender como a internet funciona por trás das cenas? Gosta da ideia de trabalhar com equipamentos físicos e configurações que mantêm tudo conectado? A área de Redes de Computadores pode ser ideal para você.</p>
            
            <p>Como profissional de redes, você será responsável pela infraestrutura que permite a comunicação digital. Seu trabalho incluirá configurar e manter roteadores, switches e firewalls, projetar topologias de rede eficientes, implementar políticas de segurança, solucionar problemas de conectividade e garantir que os sistemas estejam sempre disponíveis.</p>
            
            <p>É uma área que combina conhecimentos técnicos específicos com resolução prática de problemas. Em 2025, com a expansão das redes 5G/6G, IoT (Internet das Coisas) e computação em nuvem, os especialistas em rede são essenciais para manter as empresas funcionando.</p>
        `,
        
        technologies: `
            <p>O campo de redes está evoluindo para se tornar mais programável e definido por software. As tecnologias mais importantes em 2025 incluem:</p>
        `,
        
        techList: [
            {
                name: 'Redes TCP/IP',
                icon: 'fas fa-sitemap',
                description: 'Fundamentos de redes: protocolos, endereçamento IP, subnetting, roteamento, camadas OSI.',
                popularity: 100,
                isHot: false
            },
            {
                name: 'SD-WAN',
                icon: 'fas fa-project-diagram',
                description: 'Redes definidas por software que simplificam gerenciamento e melhoram performance.',
                popularity: 90,
                isHot: true
            },
            {
                name: 'Automação de Rede',
                icon: 'fas fa-robot',
                description: 'Python, Ansible e outras ferramentas para automatizar configurações e gerenciamento.',
                popularity: 95,
                isHot: true
            },
            {
                name: 'Segurança de Rede',
                icon: 'fas fa-shield-alt',
                description: 'Firewalls next-gen, IDS/IPS, microsegmentação e zero trust security.',
                popularity: 98,
                isHot: true
            },
            {
                name: '5G/6G e Wi-Fi 7',
                icon: 'fas fa-broadcast-tower',
                description: 'Novas tecnologias de conectividade sem fio para alta velocidade e baixa latência.',
                popularity: 88,
                isHot: true
            },
            {
                name: 'Cloud Networking',
                icon: 'fas fa-cloud',
                description: 'Implementação de redes em ambientes AWS, Azure, GCP com recursos avançados.',
                popularity: 92,
                isHot: true
            }
        ],
        
        tools: `
            <p>Os profissionais de rede trabalham com diversas ferramentas e plataformas:</p>
            <ul>
                <li><strong>Equipamentos:</strong> Dispositivos Cisco, Juniper, Arista, Mikrotik, Ubiquiti</li>
                <li><strong>Monitoramento:</strong> PRTG, Nagios, Zabbix, SolarWinds para acompanhar desempenho</li>
                <li><strong>Análise de tráfego:</strong> Wireshark, tcpdump, NetFlow/sFlow para diagnósticos</li>
                <li><strong>Simulação:</strong> GNS3, EVE-NG, Cisco Packet Tracer para testes e aprendizado</li>
                <li><strong>Gerenciamento de IP:</strong> IPAM (IP Address Management) para controle de endereços</li>
            </ul>
            <p>No dia a dia, o trabalho envolve tanto projeto e implementação (criação de novas redes ou expansões) quanto manutenção (resolução de problemas, monitoramento, otimização). A metodologia segue padrões como ITIL para gestão de mudanças e procedimentos documentados para garantir estabilidade.</p>
        `,
        
        learning: `
            <p>Para começar na área de redes sem experiência prévia:</p>
        `,
        
        resources: [
            {
                name: 'Cisco Networking Academy',
                url: 'https://www.netacad.com/',
                icon: 'fas fa-chalkboard-teacher',
                description: 'Cursos gratuitos introdutórios de qualidade diretamente da Cisco.'
            },
            {
                name: 'Network Chuck (YouTube)',
                url: 'https://www.youtube.com/c/NetworkChuck',
                icon: 'fab fa-youtube',
                description: 'Canal com explicações claras e entusiasmadas sobre redes para iniciantes.'
            },
            {
                name: 'Curso de IPv6 do NIC.br',
                url: 'https://cursoseventos.nic.br/',
                icon: 'fas fa-globe-americas',
                description: 'Treinamentos gratuitos do Núcleo de Informação e Coordenação do Ponto BR.'
            },
            {
                name: 'Professor Redes (YouTube)',
                url: 'https://www.youtube.com/c/ProfessorRedes',
                icon: 'fab fa-youtube',
                description: 'Canal brasileiro com conteúdo introdutório sobre redes de computadores.'
            }
        ],
        
        project: `
            <p><strong>Projeto recomendado para iniciantes:</strong> Rede doméstica melhorada</p>
            <p>Configure uma rede doméstica ou pequeno laboratório com recursos avançados. Este projeto permite:</p>
            <ul>
                <li>Configurar um roteador com funcionalidades além do básico (VLANs, QoS, firewall)</li>
                <li>Experimentar com diferentes topologias e segmentação de rede</li>
                <li>Implementar serviços básicos como DHCP, DNS e compartilhamento de arquivos</li>
                <li>Monitorar o tráfego e desempenho da rede com ferramentas gratuitas</li>
            </ul>
            <p>Você pode começar com equipamentos residenciais e softwares open source, gradualmente expandindo à medida que seu conhecimento cresce. Este projeto proporciona experiência prática sem grandes investimentos iniciais.</p>
        `
    },

    engineering: {
        id: 'engineering',
        name: 'Engenharia de Software',
        icon: 'fas fa-cogs',
        color: '#6366f1', // indigo-500
        shortDescription: 'Planejamento e arquitetura de sistemas complexos com qualidade.',
        fullDescription: 'Engenheiros de Software aplicam princípios de engenharia para projetar, desenvolver e manter sistemas complexos, focando na arquitetura, qualidade e processos de desenvolvimento.',
        
        profile: `
            <p>Você gosta de ver o panorama geral, pensar em arquitetura e estrutura, e garantir que sistemas complexos funcionem de maneira eficiente? A Engenharia de Software pode ser sua vocação.</p>
            
            <p>Diferente do desenvolvedor que foca principalmente na implementação, o Engenheiro de Software tem uma abordagem mais abrangente e estratégica. Seu trabalho incluirá projetar arquiteturas de sistema, definir padrões e melhores práticas, selecionar tecnologias adequadas, planejar para escalabilidade e manutenção a longo prazo, e estabelecer processos de garantia de qualidade.</p>
            
            <p>É uma área que combina habilidades técnicas com planejamento metódico e visão sistêmica. Engenheiros de software frequentemente assumem papéis de liderança técnica, influenciando decisões importantes de projeto e orientando equipes de desenvolvimento.</p>
        `,
        
        technologies: `
            <p>A Engenharia de Software é mais focada em metodologias e padrões do que em tecnologias específicas, mas em 2025, algumas tendências importantes incluem:</p>
        `,
        
        techList: [
            {
                name: 'Arquitetura de Microserviços',
                icon: 'fas fa-cubes',
                description: 'Descomposição de sistemas em serviços menores, independentes e especializados.',
                popularity: 92,
                isHot: true
            },
            {
                name: 'Infraestrutura como Código',
                icon: 'fas fa-file-code',
                description: 'Terraform, Pulumi, CloudFormation para definir infraestrutura via código versionável.',
                popularity: 90,
                isHot: true
            },
            {
                name: 'DevOps e CI/CD',
                icon: 'fas fa-infinity',
                description: 'Integração entre desenvolvimento e operações com pipelines automatizados.',
                popularity: 95,
                isHot: true
            },
            {
                name: 'Design Patterns',
                icon: 'fas fa-puzzle-piece',
                description: 'Padrões estabelecidos para solucionar problemas recorrentes de design de software.',
                popularity: 85,
                isHot: false
            },
            {
                name: 'Modelos de Arquitetura',
                icon: 'fas fa-sitemap',
                description: 'Padrões como Clean Architecture, Hexagonal, CQRS, Event Sourcing, etc.',
                popularity: 88,
                isHot: true
            },
            {
                name: 'Engenharia de Confiabilidade (SRE)',
                icon: 'fas fa-shield-check',
                description: 'Práticas para construir sistemas resilientes, escaláveis e de alta disponibilidade.',
                popularity: 92,
                isHot: true
            }
        ],
        
        tools: `
            <p>Os engenheiros de software utilizam diversas ferramentas e metodologias em seu trabalho:</p>
            <ul>
                <li><strong>Modelagem e documentação:</strong> UML, C4 Model, ferramentas como draw.io, Miro</li>
                <li><strong>Gestão de projetos:</strong> Jira, Azure DevOps, GitHub Projects, metodologias ágeis</li>
                <li><strong>Garantia de qualidade:</strong> SonarQube, frameworks de teste (JUnit, PyTest, Jest)</li>
                <li><strong>Revisão de código:</strong> Gerrit, sistemas de PR do GitHub/GitLab com análise estática</li>
                <li><strong>Monitoramento e observabilidade:</strong> Grafana, Prometheus, ELK Stack, New Relic</li>
            </ul>
            <p>O trabalho segue metodologias estruturadas, como desenvolvimento iterativo e incremental (Scrum, Kanban), práticas de engenharia como TDD (Test-Driven Development), integração contínua, e princípios como SOLID para código de qualidade. Engenheiros de software atuam como ponte entre requisitos de negócio e implementações técnicas, traduzindo necessidades em arquiteturas viáveis.</p>
        `,
        
        learning: `
            <p>Para entrar na área de Engenharia de Software sem experiência prévia:</p>
        `,
        
        resources: [
            {
                name: 'Curso MIT: Engenharia de Software',
                url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-005-software-construction-spring-2016/',
                icon: 'fas fa-university',
                description: 'Curso gratuito do MIT sobre construção de software com qualidade.'
            },
            {
                name: 'Clean Code de Robert C. Martin',
                url: 'https://www.amazon.com.br/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882',
                icon: 'fas fa-book',
                description: 'Livro fundamental sobre práticas para escrever código limpo e manutenível.'
            },
            {
                name: 'Refactoring Guru',
                url: 'https://refactoring.guru/',
                icon: 'fas fa-sync-alt',
                description: 'Site com explicações claras sobre padrões de design e refatoração.'
            },
            {
                name: 'Architecture Patterns with Python',
                url: 'https://www.cosmicpython.com/',
                icon: 'fas fa-book',
                description: 'Livro gratuito online sobre arquitetura de software com exemplos em Python.'
            }
        ],
        
        project: `
            <p><strong>Projeto recomendado para iniciantes:</strong> Redesenho de uma aplicação simples</p>
            <p>Pegue um projeto pequeno que você já tenha feito (ou encontre um código aberto simples) e reestruture-o seguindo princípios de engenharia. Este projeto permite:</p>
            <ul>
                <li>Aplicar padrões de design para melhorar a estrutura do código</li>
                <li>Adicionar testes automatizados para garantir qualidade</li>
                <li>Documentar a arquitetura usando diagramas UML ou C4</li>
                <li>Implementar integração contínua com GitHub Actions ou similar</li>
            </ul>
            <p>O foco não é adicionar novas funcionalidades, mas melhorar a estrutura, qualidade e processos. Este exercício proporciona insights valiosos sobre engenharia de software na prática.</p>
        `
    },

    datascience: {
        id: 'datascience',
        name: 'Análise de Dados',
        icon: 'fas fa-chart-bar',
        color: '#ec4899', // pink-500
        shortDescription: 'Extração de insights e padrões a partir de grandes volumes de dados.',
        fullDescription: 'Analistas e cientistas de dados transformam dados brutos em conhecimento acionável, utilizando estatística, visualização e técnicas computacionais para responder perguntas de negócio.',
        
        profile: `
            <p>Você gosta de descobrir histórias escondidas em números e dados? Tem interesse em usar informações para resolver problemas do mundo real? A área de Análise e Ciência de Dados pode ser perfeita para você.</p>
            
            <p>Como Analista ou Cientista de Dados, você transformará dados brutos em insights valiosos que ajudam na tomada de decisões. Seu trabalho incluirá coletar e organizar dados de diversas fontes, realizar análises estatísticas, criar visualizações informativas, identificar padrões e tendências, e comunicar descobertas de forma clara e acionável.</p>
            
            <p>É uma área que combina habilidades técnicas com pensamento analítico e comunicação efetiva. Em 2025, com a abundância de dados em todos os setores, profissionais que sabem extrair valor dessas informações são extremamente valorizados.</p>
        `,
        
        technologies: `
            <p>O campo de análise de dados utiliza diversas ferramentas e tecnologias. Em 2025, as mais relevantes incluem:</p>
        `,
        
        techList: [
            {
                name: 'Python para Dados',
                icon: 'fab fa-python',
                description: 'Pandas, NumPy, Matplotlib e ecossistema Python para manipulação e análise de dados.',
                popularity: 95,
                isHot: true
            },
            {
                name: 'SQL',
                icon: 'fas fa-database',
                description: 'Linguagem essencial para consulta e manipulação de dados estruturados em bancos relacionais.',
                popularity: 90,
                isHot: false
            },
            {
                name: 'Ferramentas de BI',
                icon: 'fas fa-chart-pie',
                description: 'Power BI, Tableau, Looker para visualização e dashboards interativos.',
                popularity: 88,
                isHot: true
            },
            {
                name: 'Estatística Aplicada',
                icon: 'fas fa-calculator',
                description: 'Conhecimentos de estatística descritiva, inferencial e testes de hipóteses.',
                popularity: 85,
                isHot: false
            },
            {
                name: 'Processamento Big Data',
                icon: 'fas fa-server',
                description: 'Spark, Databricks, Snowflake para análise em escala de grandes volumes de dados.',
                popularity: 82,
                isHot: true
            },
            {
                name: 'IA para Análise',
                icon: 'fas fa-brain',
                description: 'Machine learning e IA para análise preditiva e descoberta de padrões complexos.',
                popularity: 90,
                isHot: true
            }
        ],
        
        tools: `
            <p>O trabalho em análise de dados envolve diversas ferramentas e metodologias:</p>
            <ul>
                <li><strong>Ambientes de análise:</strong> Jupyter Notebooks, Google Colab, RStudio</li>
                <li><strong>ETL e preparação:</strong> Python/Pandas, SQL, dbt, Alteryx para limpeza de dados</li>
                <li><strong>Visualização:</strong> Matplotlib, Seaborn, Plotly, ggplot para gráficos; Tableau, Power BI para dashboards</li>
                <li><strong>Compartilhamento:</strong> GitHub, Notion, Confluence para colaboração e documentação</li>
                <li><strong>Cloud para dados:</strong> BigQuery, Redshift, Databricks para análises em larga escala</li>
            </ul>
            <p>O processo analítico segue um fluxo estruturado: definição do problema, coleta de dados, limpeza e preparação, análise exploratória, modelagem (se necessário), visualização de resultados e comunicação de insights. A metodologia CRISP-DM (Cross Industry Standard Process for Data Mining) é frequentemente usada como referência.</p>
        `,
        
        learning: `
            <p>Para começar em análise de dados sem experiência prévia:</p>
        `,
        
        resources: [
            {
                name: 'Google Data Analytics',
                url: 'https://www.coursera.org/professional-certificates/google-data-analytics',
                icon: 'fas fa-graduation-cap',
                description: 'Certificação profissional com fundamentos completos de análise de dados.'
            },
            {
                name: 'Kaggle Learn',
                url: 'https://www.kaggle.com/learn',
                icon: 'fas fa-laptop-code',
                description: 'Cursos gratuitos e interativos sobre Python, pandas, visualização e mais.'
            },
            {
                name: 'DataCamp',
                url: 'https://www.datacamp.com/',
                icon: 'fas fa-chart-line',
                description: 'Plataforma interativa com cursos introdutórios gratuitos em análise de dados.'
            },
            {
                name: 'Dados Abertos Brasil',
                url: 'https://dados.gov.br/',
                icon: 'fas fa-database',
                description: 'Portal brasileiro de dados abertos para praticar análises reais com contexto local.'
            }
        ],
        
        project: `
            <p><strong>Projeto recomendado para iniciantes:</strong> Análise exploratória de dados públicos</p>
            <p>Escolha um conjunto de dados abertos sobre um tema que te interesse (saúde, economia, esportes, etc.) e conduza uma análise completa. Este projeto permite:</p>
            <ul>
                <li>Praticar importação e limpeza de dados (geralmente a parte mais trabalhosa)</li>
                <li>Aplicar estatística descritiva básica para entender distribuições e relações</li>
                <li>Criar visualizações que transmitam insights claramente</li>
                <li>Elaborar um relatório ou dashboard compartilhável com suas descobertas</li>
            </ul>
            <p>Fontes de dados como Portal Brasileiro de Dados Abertos, Kaggle ou data.world oferecem milhares de datasets gratuitos. Este projeto simula um fluxo de trabalho real em análise de dados, desde a coleta até a comunicação dos resultados.</p>
        `
    },

    ux: {
        id: 'ux',
        name: 'UX/UI Design',
        icon: 'fas fa-pencil-ruler',
        color: '#14b8a6', // teal-500
        shortDescription: 'Design de interfaces e experiências que tornam a tecnologia acessível e agradável.',
        fullDescription: 'Designers de UX/UI criam interfaces intuitivas e agradáveis, focando na experiência do usuário para tornar produtos digitais fáceis e prazerosos de usar.',
        
        profile: `
            <p>Você tem um olhar para estética e design, mas também se importa com funcionalidade e experiência? Gosta de entender as necessidades das pessoas e criar soluções que sejam tanto bonitas quanto úteis? A área de Design de UX/UI pode ser perfeita para você.</p>
            
            <p>Como Designer de UX (Experiência do Usuário) ou UI (Interface do Usuário), você será a ponte entre humanos e tecnologia. Seu trabalho incluirá pesquisar necessidades dos usuários, criar wireframes e protótipos, desenhar interfaces visuais atraentes, conduzir testes de usabilidade e colaborar com desenvolvedores para implementar seus designs.</p>
            
            <p>É uma área que combina criatividade visual com empatia pelo usuário e compreensão técnica. Em 2025, com a importância crescente da experiência digital em todos os produtos e serviços, designers de UX/UI qualificados são altamente valorizados.</p>
        `,
        
        technologies: `
            <p>O campo de UX/UI utiliza diversas ferramentas e métodos. Em 2025, as tecnologias e práticas mais relevantes incluem:</p>
        `,
        
        techList: [
            {
                name: 'Figma',
                icon: 'fab fa-figma',
                description: 'A ferramenta padrão da indústria para design de interfaces e prototipagem colaborativa.',
                popularity: 95,
                isHot: true
            },
            {
                name: 'Design Systems',
                icon: 'fas fa-layer-group',
                description: 'Sistemas de design que padronizam componentes e padrões visuais para consistência.',
                popularity: 90,
                isHot: true
            },
            {
                name: 'Pesquisa UX',
                icon: 'fas fa-search',
                description: 'Métodos de pesquisa com usuários: entrevistas, testes de usabilidade, card sorting, etc.',
                popularity: 88,
                isHot: true
            },
            {
                name: 'Acessibilidade Digital',
                icon: 'fas fa-universal-access',
                description: 'Práticas para garantir que produtos digitais sejam acessíveis a todos os usuários.',
                popularity: 85,
                isHot: true
            },
            {
                name: 'UI Animation',
                icon: 'fas fa-film',
                description: 'Animações e microinterações que enriquecem a experiência do usuário.',
                popularity: 80,
                isHot: true
            },
            {
                name: 'HTML/CSS Básico',
                icon: 'fas fa-code',
                description: 'Conhecimentos básicos de implementação web para melhor colaboração com desenvolvedores.',
                popularity: 82,
                isHot: false
            }
        ],
        
        tools: `
            <p>Designers de UX/UI trabalham com diversas ferramentas e metodologias:</p>
            <ul>
                <li><strong>Ferramentas de design:</strong> Figma, Adobe XD, Sketch para criação de interfaces</li>
                <li><strong>Prototipagem:</strong> Protopie, Principle, Framer para protótipos interativos</li>
                <li><strong>Pesquisa:</strong> Maze, Hotjar, UserTesting para testes remotos e coleta de feedback</li>
                <li><strong>Design Systems:</strong> Zeroheight, Storybook para documentação de componentes</li>
                <li><strong>Handoff:</strong> Zeplin, Figma Inspect para entrega de especificações aos desenvolvedores</li>
            </ul>
            <p>O processo de design geralmente segue metodologias como Design Thinking e Double Diamond: Descobrir (pesquisa de usuários), Definir (identificar problemas), Desenvolver (ideação e prototipagem) e Entregar (implementação e testes). O trabalho é altamente iterativo, com múltiplos ciclos de feedback e refinamento.</p>
        `,
        
        learning: `
            <p>Para começar em UX/UI Design sem experiência prévia:</p>
        `,
        
        resources: [
            {
                name: 'Google UX Design Professional Certificate',
                url: 'https://www.coursera.org/professional-certificates/google-ux-design',
                icon: 'fas fa-certificate',
                description: 'Certificação profissional completa preparada pelo Google, disponível em português.'
            },
            {
                name: 'Figma 101',
                url: 'https://www.figma.com/resources/learn-design/',
                icon: 'fab fa-figma',
                description: 'Tutoriais oficiais gratuitos da ferramenta mais usada na indústria.'
            },
            {
                name: 'NN Group (Nielsen Norman)',
                url: 'https://www.nngroup.com/articles/',
                icon: 'fas fa-newspaper',
                description: 'Artigos de referência dos maiores especialistas mundiais em UX.'
            },
            {
                name: 'Caleidoscópio UX (YouTube)',
                url: 'https://www.youtube.com/c/CaleidoscopioUX',
                icon: 'fab fa-youtube',
                description: 'Canal brasileiro com conteúdo educativo sobre design de experiência do usuário.'
            }
        ],
        
        project: `
            <p><strong>Projeto recomendado para iniciantes:</strong> Redesign de uma interface existente</p>
            <p>Escolha um aplicativo ou site que você use regularmente, mas que tenha problemas de usabilidade, e crie um redesign. Este projeto permite:</p>
            <ul>
                <li>Analisar problemas reais de uma interface existente (faça uma avaliação heurística)</li>
                <li>Praticar wireframing e design visual no Figma (gratuito)</li>
                <li>Aplicar princípios de usabilidade e design de interface</li>
                <li>Criar um caso de estudo documentando seu processo e decisões</li>
            </ul>
            <p>Este projeto simula um fluxo de trabalho real de UX/UI, desde a análise até o design final, e serve como excelente portfólio para iniciantes. Explique cada decisão de design e como ela resolve problemas específicos identificados.</p>
        `
    },

    devops: {
        id: 'devops',
        name: 'DevOps',
        icon: 'fas fa-sync-alt',
        color: '#f97316', // orange-500
        shortDescription: 'Integração entre desenvolvimento e operações para entregas rápidas e confiáveis.',
        fullDescription: 'Profissionais DevOps constroem pontes entre desenvolvimento e operações, automatizando processos para permitir entregas mais rápidas, frequentes e confiáveis de software.',
        
        profile: `
            <p>Você gosta tanto de programar quanto de gerenciar infraestrutura? Tem interesse em automação e em tornar processos mais eficientes? A área de DevOps pode ser perfeita para você.</p>
            
            <p>Como profissional DevOps, você será o elo entre desenvolvimento e operações, permitindo entregas rápidas e confiáveis de software. Seu trabalho incluirá configurar pipelines automatizados de integração e entrega contínua (CI/CD), gerenciar infraestrutura como código, implementar monitoramento e observabilidade, e promover uma cultura de colaboração e melhoria contínua.</p>
            
            <p>É uma área que combina habilidades técnicas diversas com pensamento orientado a processos. Em 2025, com a necessidade de lançar atualizações de software cada vez mais rapidamente sem comprometer qualidade, profissionais DevOps são altamente valorizados em praticamente todas as empresas de tecnologia.</p>
        `,
        
        technologies: `
            <p>O campo de DevOps abrange diversas tecnologias para automação e entrega. Em 2025, as mais relevantes incluem:</p>
        `,
        
        techList: [
            {
                name: 'Docker/Containers',
                icon: 'fab fa-docker',
                description: 'Tecnologia de containerização para empacotar aplicações de forma consistente e portátil.',
                popularity: 95,
                isHot: true
            },
            {
                name: 'Kubernetes',
                icon: 'fas fa-dharmachakra',
                description: 'Plataforma para orquestração de containers, gerenciando aplicações em escala.',
                popularity: 92,
                isHot: true
            },
            {
                name: 'CI/CD Pipelines',
                icon: 'fas fa-code-branch',
                description: 'Jenkins, GitHub Actions, GitLab CI para automação de builds, testes e deploys.',
                popularity: 98,
                isHot: true
            },
            {
                name: 'IaC (Terraform, Ansible)',
                icon: 'fas fa-file-code',
                description: 'Ferramentas para definir infraestrutura como código versionável e repetível.',
                popularity: 90,
                isHot: true
            },
            {
                name: 'Observabilidade',
                icon: 'fas fa-eye',
                description: 'Monitoramento, logging e tracing com ferramentas como Prometheus, Grafana, ELK.',
                popularity: 88,
                isHot: true
            },
            {
                name: 'GitOps',
                icon: 'fab fa-git-alt',
                description: 'Paradigma onde o Git é a única fonte de verdade para declarações de infraestrutura.',
                popularity: 82,
                isHot: true
            }
        ],
        
        tools: `
            <p>Os profissionais DevOps utilizam diversas ferramentas e práticas em seu trabalho:</p>
            <ul>
                <li><strong>Containers e orquestração:</strong> Docker, Kubernetes, Helm, Podman</li>
                <li><strong>CI/CD:</strong> Jenkins, GitHub Actions, GitLab CI, CircleCI para automação</li>
                <li><strong>Infraestrutura como Código:</strong> Terraform, Pulumi, CloudFormation, Ansible</li>
                <li><strong>Monitoramento:</strong> Prometheus, Grafana, Datadog, New Relic, Dynatrace</li>
                <li><strong>Gestão de configuração:</strong> Ansible, Puppet, Chef para configuração consistente</li>
            </ul>
            <p>O trabalho segue princípios como os "Três Caminhos" do DevOps: Fluxo (otimizar o fluxo de trabalho do desenvolvimento à entrega), Feedback (criar ciclos de feedback rápidos) e Aprendizado Contínuo (cultura de experimentação e melhoria). O objetivo é maximizar a velocidade de entrega enquanto mantém estabilidade e qualidade.</p>
        `,
        
        learning: `
            <p>Para começar em DevOps sem experiência prévia:</p>
        `,
        
        resources: [
            {
                name: 'Docker para Iniciantes',
                url: 'https://www.youtube.com/watch?v=3c-iBn73dDE',
                icon: 'fab fa-docker',
                description: 'Tutorial completo para aprender Docker do zero, fundamento essencial para DevOps.'
            },
            {
                name: 'DevOps Roadmap',
                url: 'https://roadmap.sh/devops',
                icon: 'fas fa-map',
                description: 'Roteiro visual com todas as habilidades e ferramentas essenciais para a área.'
            },
            {
                name: 'GitHub Learning Lab',
                url: 'https://lab.github.com/',
                icon: 'fab fa-github',
                description: 'Cursos interativos gratuitos sobre GitHub, CI/CD e DevOps fundamentals.'
            },
            {
                name: 'KodeKloud',
                url: 'https://kodekloud.com/courses/the-linux-basics-course/',
                icon: 'fab fa-linux',
                description: 'Curso gratuito sobre Linux, fundamental para qualquer profissional DevOps.'
            }
        ],
        
        project: `
            <p><strong>Projeto recomendado para iniciantes:</strong> Pipeline CI/CD para uma aplicação simples</p>
            <p>Configure um pipeline de integração contínua para um projeto simples (pode ser um site estático para começar). Este projeto permite:</p>
            <ul>
                <li>Aprender Git com branching strategy (GitFlow ou trunk-based)</li>
                <li>Configurar GitHub Actions ou GitLab CI para automatizar testes e deploy</li>
                <li>Containerizar a aplicação com Docker</li>
                <li>Implementar deploy automático em um serviço gratuito como Netlify, Vercel ou Heroku</li>
            </ul>
            <p>Este projeto cobre o básico do ciclo DevOps: controle de versão, integração contínua, containerização e deploy automatizado. À medida que avança, você pode adicionar monitoramento, infraestrutura como código e outras práticas mais avançadas.</p>
        `
    },

    cloud: {
        id: 'cloud',
        name: 'Computação em Nuvem',
        icon: 'fas fa-cloud',
        color: '#0ea5e9', // sky-500
        shortDescription: 'Implementação e gerenciamento de serviços baseados em nuvem.',
        fullDescription: 'Especialistas em nuvem projetam, implementam e gerenciam infraestrutura e serviços em provedores como AWS, Azure e Google Cloud, permitindo flexibilidade, escalabilidade e eficiência de custos.',
        
        profile: `
            <p>Você tem interesse em infraestrutura flexível e escalável? Gosta da ideia de gerenciar recursos computacionais que podem crescer conforme a demanda? A área de Computação em Nuvem pode ser perfeita para você.</p>
            
            <p>Como especialista em Cloud Computing, você projetará, implementará e gerenciará recursos e serviços em plataformas de nuvem como AWS, Microsoft Azure e Google Cloud. Seu trabalho incluirá arquitetar soluções em nuvem, configurar servidores virtuais, redes e bancos de dados, implementar segurança e controle de acesso, otimizar custos e automatizar a infraestrutura como código.</p>
            
            <p>É uma área que combina conhecimentos de infraestrutura com habilidades em automação e arquitetura de sistemas. Em 2025, com empresas de todos os portes migrando para a nuvem para obter flexibilidade e economia, profissionais qualificados em cloud são extremamente requisitados.</p>
        `,
        
        technologies: `
            <p>O campo de cloud computing abrange diversas tecnologias e serviços. Em 2025, as mais relevantes incluem:</p>
        `,
        
        techList: [
            {
                name: 'AWS/Azure/GCP',
                icon: 'fas fa-cloud',
                description: 'Os três principais provedores de nuvem, cada um com centenas de serviços específicos.',
                popularity: 98,
                isHot: true
            },
            {
                name: 'IaC (Terraform/CDK)',
                icon: 'fas fa-file-code',
                description: 'Ferramentas para provisionar e gerenciar infraestrutura como código.',
                popularity: 92,
                isHot: true
            },
            {
                name: 'Serverless',
                icon: 'fas fa-bolt',
                description: 'Arquitetura que elimina gerenciamento de servidores: Lambda, Azure Functions, Cloud Run.',
                popularity: 88,
                isHot: true
            },
            {
                name: 'Containers na Nuvem',
                icon: 'fas fa-cubes',
                description: 'Serviços gerenciados como ECS, AKS, GKE para orquestração de containers.',
                popularity: 90,
                isHot: true
            },
            {
                name: 'FinOps',
                icon: 'fas fa-money-bill-wave',
                description: 'Práticas para otimização de custos e governança em ambientes cloud.',
                popularity: 85,
                isHot: true
            },
            {
                name: 'Multi-Cloud',
                icon: 'fas fa-cloud-upload-alt',
                description: 'Estratégias para usar múltiplos provedores de nuvem simultaneamente.',
                popularity: 80,
                isHot: true
            }
        ],
        
        tools: `
            <p>Os especialistas em nuvem trabalham com diversas ferramentas e práticas:</p>
            <ul>
                <li><strong>Consoles e CLIs:</strong> AWS Console/CLI, Azure Portal/CLI, Google Cloud Console/gcloud</li>
                <li><strong>IaC e automação:</strong> Terraform, AWS CDK, Pulumi, CloudFormation, Bicep, ARM Templates</li>
                <li><strong>Containers e orquestração:</strong> Docker, Kubernetes, ECS, AKS, GKE</li>
                <li><strong>Monitoramento cloud:</strong> CloudWatch, Azure Monitor, Cloud Monitoring, Datadog</li>
                <li><strong>Segurança cloud:</strong> IAM, Security Groups, Network ACLs, Cloud Security Posture Management</li>
            </ul>
            <p>O trabalho envolve práticas como o Well-Architected Framework (AWS) ou Cloud Adoption Framework (Azure), que estabelecem pilares de uma boa arquitetura: segurança, eficiência de custos, confiabilidade, excelência operacional e otimização de performance. A implementação segue metodologias como IaC (Infraestrutura como Código) e GitOps, permitindo que toda a infraestrutura seja versionada, testada e implantada de forma automatizada.</p>
        `,
        
        learning: `
            <p>Para começar em computação em nuvem sem experiência prévia:</p>
        `,
        
        resources: [
            {
                name: 'AWS Cloud Practitioner',
                url: 'https://aws.amazon.com/pt/training/learn-about/cloud-practitioner/',
                icon: 'fab fa-aws',
                description: 'Treinamento oficial introdutório da AWS, com material gratuito em português.'
            },
            {
                name: 'Microsoft Azure Fundamentals',
                url: 'https://learn.microsoft.com/pt-br/training/paths/az-900-describe-cloud-concepts/',
                icon: 'fab fa-microsoft',
                description: 'Curso oficial gratuito da Microsoft com os fundamentos de cloud computing.'
            },
            {
                name: 'Google Cloud Skills Boost',
                url: 'https://www.cloudskillsboost.google/paths/118',
                icon: 'fab fa-google',
                description: 'Programa do Google com laboratórios práticos para iniciantes em cloud.'
            },
            {
                name: 'Canal Azurite (YouTube)',
                url: 'https://www.youtube.com/c/Azurite',
                icon: 'fab fa-youtube',
                description: 'Canal brasileiro com conteúdo introdutório sobre Azure e conceitos cloud.'
            }
        ],
        
        project: `
            <p><strong>Projeto recomendado para iniciantes:</strong> Site estático na nuvem com CI/CD</p>
            <p>Hospede um site estático simples na nuvem com pipeline de implantação automatizado. Este projeto permite:</p>
            <ul>
                <li>Criar uma conta gratuita em um provedor de nuvem (AWS, Azure ou GCP)</li>
                <li>Configurar serviços como S3, Azure Blob Storage ou Cloud Storage para hospedagem</li>
                <li>Implementar CDN para distribuição global (CloudFront, Azure CDN, Cloud CDN)</li>
                <li>Configurar domínio personalizado e HTTPS</li>
                <li>Automatizar o deploy usando GitHub Actions ou outra ferramenta de CI/CD</li>
            </ul>
            <p>Este projeto cobre conceitos fundamentais de cloud: armazenamento, rede, segurança e automação, sem exigir conhecimentos avançados. Os provedores oferecem free tier que permite realizar tudo isso sem custos (ou custos mínimos).</p>
        `
    }
};
