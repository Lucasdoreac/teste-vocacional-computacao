/**
 * Perguntas do teste vocacional para calouros de Ciência da Computação
 * Atualizado em Março de 2025
 */

const questions = [
    // CATEGORIA: Interesses e Motivações
    {
        id: 1,
        category: 'interests',
        text: 'O que mais te atrai na tecnologia?',
        options: [
            {
                id: 'a',
                text: 'Criar produtos inovadores e novas soluções digitais',
                areas: { dev: 2, ux: 2, engineering: 1 }
            },
            {
                id: 'b',
                text: 'Entender como as coisas funcionam por trás das interfaces',
                areas: { engineering: 2, networks: 1, cloud: 1, devops: 1 }
            },
            {
                id: 'c',
                text: 'Proteger informações e sistemas contra ameaças',
                areas: { security: 3, data: 1 }
            },
            {
                id: 'd',
                text: 'Analisar dados e descobrir padrões escondidos',
                areas: { datascience: 3, ai: 2 }
            }
        ]
    },
    {
        id: 2,
        category: 'interests',
        text: 'Qual dessas atividades você mais faria no seu tempo livre?',
        options: [
            {
                id: 'a',
                text: 'Criar um site ou app para uma ideia sua',
                areas: { dev: 3, ux: 1 }
            },
            {
                id: 'b',
                text: 'Desmontar aparelhos para ver como funcionam por dentro',
                areas: { networks: 2, engineering: 1, devops: 1 }
            },
            {
                id: 'c',
                text: 'Resolver quebra-cabeças e enigmas de lógica',
                areas: { ai: 2, security: 2, engineering: 1 }
            },
            {
                id: 'd',
                text: 'Organizar e categorizar suas coleções ou arquivos',
                areas: { data: 3, datascience: 1, cloud: 1 }
            }
        ]
    },
    {
        id: 3,
        category: 'interests',
        text: 'Se você tivesse um superpoder relacionado à tecnologia, qual seria?',
        options: [
            {
                id: 'a',
                text: 'Transformar qualquer ideia em um software funcional instantaneamente',
                areas: { dev: 2, engineering: 2, ux: 1 }
            },
            {
                id: 'b',
                text: 'Prever e impedir qualquer ataque cibernético antes que aconteça',
                areas: { security: 3, networks: 1 }
            },
            {
                id: 'c',
                text: 'Entender padrões complexos em enormes volumes de dados',
                areas: { datascience: 2, ai: 2, data: 1 }
            },
            {
                id: 'd',
                text: 'Otimizar qualquer sistema para funcionar com máxima eficiência',
                areas: { devops: 2, cloud: 2, engineering: 1 }
            }
        ]
    },
    {
        id: 4,
        category: 'interests',
        text: 'Entre estas opções, o que você mais gostaria de estudar a fundo?',
        options: [
            {
                id: 'a',
                text: 'Linguagens de programação e frameworks modernos',
                areas: { dev: 3, engineering: 1 }
            },
            {
                id: 'b',
                text: 'Matemática, estatística e algoritmos avançados',
                areas: { ai: 3, datascience: 2 }
            },
            {
                id: 'c',
                text: 'Infraestrutura, servidores e sistemas operacionais',
                areas: { networks: 2, cloud: 2, devops: 1 }
            },
            {
                id: 'd',
                text: 'Design, psicologia e comportamento do usuário',
                areas: { ux: 3, dev: 1 }
            }
        ]
    },
    {
        id: 5,
        category: 'interests',
        text: 'Qual desses projetos mais te empolga?',
        options: [
            {
                id: 'a',
                text: 'Desenvolver um jogo ou aplicativo do zero',
                areas: { dev: 3, ux: 1 }
            },
            {
                id: 'b',
                text: 'Criar um chatbot inteligente que conversa como humano',
                areas: { ai: 3, dev: 1 }
            },
            {
                id: 'c',
                text: 'Encontrar falhas de segurança em um sistema e corrigi-las',
                areas: { security: 3, networks: 1 }
            },
            {
                id: 'd',
                text: 'Configurar uma infraestrutura que nunca cai, mesmo sob alta demanda',
                areas: { cloud: 2, devops: 2, networks: 1 }
            }
        ]
    },

    // CATEGORIA: Características Pessoais
    {
        id: 6,
        category: 'personality',
        text: 'Como seus amigos provavelmente te descreveriam?',
        options: [
            {
                id: 'a',
                text: 'Criativo e cheio de ideias',
                areas: { ux: 2, dev: 2, ai: 1 }
            },
            {
                id: 'b',
                text: 'Metódico e organizado',
                areas: { data: 2, engineering: 2, devops: 1 }
            },
            {
                id: 'c',
                text: 'Analítico e observador',
                areas: { datascience: 2, security: 2, ai: 1 }
            },
            {
                id: 'd',
                text: 'Prático e solucionador de problemas',
                areas: { networks: 2, cloud: 2, dev: 1 }
            }
        ]
    },
    {
        id: 7,
        category: 'personality',
        text: 'Em um trabalho em equipe, qual papel você naturalmente assume?',
        options: [
            {
                id: 'a',
                text: 'O criativo que propõe ideias inovadoras',
                areas: { ux: 2, ai: 2, dev: 1 }
            },
            {
                id: 'b',
                text: 'O executor que coloca a mão na massa',
                areas: { dev: 2, networks: 2, cloud: 1 }
            },
            {
                id: 'c',
                text: 'O analista que verifica todos os detalhes',
                areas: { security: 2, data: 2, engineering: 1 }
            },
            {
                id: 'd',
                text: 'O comunicador que conecta as pessoas e ideias',
                areas: { ux: 2, devops: 2, datascience: 1 }
            }
        ]
    },
    {
        id: 8,
        category: 'personality',
        text: 'Como você prefere resolver problemas?',
        options: [
            {
                id: 'a',
                text: 'De forma criativa, buscando soluções fora do comum',
                areas: { ux: 2, ai: 2, dev: 1 }
            },
            {
                id: 'b',
                text: 'Sistematicamente, decompondo em partes menores',
                areas: { engineering: 2, dev: 2, cloud: 1 }
            },
            {
                id: 'c',
                text: 'Analiticamente, buscando entender as causas fundamentais',
                areas: { datascience: 2, security: 2, data: 1 }
            },
            {
                id: 'd',
                text: 'Pragmaticamente, com base em soluções que funcionaram antes',
                areas: { networks: 2, devops: 2, cloud: 1 }
            }
        ]
    },
    {
        id: 9,
        category: 'personality',
        text: 'Quando você aprende algo novo, costuma:',
        options: [
            {
                id: 'a',
                text: 'Experimentar na prática imediatamente',
                areas: { dev: 2, networks: 2, cloud: 1 }
            },
            {
                id: 'b',
                text: 'Primeiro entender bem a teoria e os fundamentos',
                areas: { engineering: 2, ai: 2, security: 1 }
            },
            {
                id: 'c',
                text: 'Ver exemplos visuais ou demonstrações',
                areas: { ux: 3, datascience: 1, devops: 1 }
            },
            {
                id: 'd',
                text: 'Organizar as informações em um sistema lógico',
                areas: { data: 3, engineering: 1, security: 1 }
            }
        ]
    },
    {
        id: 10,
        category: 'personality',
        text: 'Qual destas características mais se assemelha a você?',
        options: [
            {
                id: 'a',
                text: 'Perfeccionista com atenção aos detalhes',
                areas: { security: 2, data: 2, engineering: 1 }
            },
            {
                id: 'b',
                text: 'Adaptável e aberto a mudanças constantes',
                areas: { dev: 2, cloud: 2, devops: 1 }
            },
            {
                id: 'c',
                text: 'Curioso e sempre explorando novas ideias',
                areas: { ai: 2, datascience: 2, ux: 1 }
            },
            {
                id: 'd',
                text: 'Metódico e gosta de seguir processos estabelecidos',
                areas: { networks: 2, devops: 2, data: 1 }
            }
        ]
    },

    // CATEGORIA: Preferências de Trabalho
    {
        id: 11,
        category: 'work_preferences',
        text: 'Que tipo de projeto mais te motiva?',
        options: [
            {
                id: 'a',
                text: 'Um que tenha impacto visual e seja usado por muitas pessoas',
                areas: { dev: 2, ux: 3 }
            },
            {
                id: 'b',
                text: 'Um que resolva problemas complexos por trás das cenas',
                areas: { engineering: 2, ai: 2, cloud: 1 }
            },
            {
                id: 'c',
                text: 'Um que garanta a segurança e confiabilidade de sistemas críticos',
                areas: { security: 3, networks: 1, devops: 1 }
            },
            {
                id: 'd',
                text: 'Um que extraia conhecimento valioso de dados brutos',
                areas: { datascience: 3, data: 2 }
            }
        ]
    },
    {
        id: 12,
        category: 'work_preferences',
        text: 'Qual frase mais te atrai em um anúncio de emprego?',
        options: [
            {
                id: 'a',
                text: '"Buscamos alguém criativo para desenvolver soluções inovadoras"',
                areas: { dev: 2, ux: 2, ai: 1 }
            },
            {
                id: 'b',
                text: '"Precisamos de um analista detalhista para garantir qualidade e segurança"',
                areas: { security: 2, data: 2, engineering: 1 }
            },
            {
                id: 'c',
                text: '"Queremos um especialista para otimizar e escalar nossa infraestrutura"',
                areas: { cloud: 2, devops: 2, networks: 1 }
            },
            {
                id: 'd',
                text: '"Procuramos alguém para transformar nossos dados em insights estratégicos"',
                areas: { datascience: 3, ai: 1, data: 1 }
            }
        ]
    },
    {
        id: 13,
        category: 'work_preferences',
        text: 'O que mais te atrairia em um ambiente de trabalho?',
        options: [
            {
                id: 'a',
                text: 'Equipe criativa que incentiva novas ideias e experimentação',
                areas: { dev: 1, ux: 3, ai: 1 }
            },
            {
                id: 'b',
                text: 'Desafios técnicos complexos e aprendizado constante',
                areas: { engineering: 2, security: 2, ai: 1 }
            },
            {
                id: 'c',
                text: 'Processos bem definidos e foco em estabilidade',
                areas: { networks: 2, data: 2, cloud: 1 }
            },
            {
                id: 'd',
                text: 'Colaboração multidisciplinar e entrega contínua',
                areas: { devops: 3, datascience: 1, dev: 1 }
            }
        ]
    },
    {
        id: 14,
        category: 'work_preferences',
        text: 'Que aspecto da tecnologia você gostaria de dominar primeiro?',
        options: [
            {
                id: 'a',
                text: 'Programação e desenvolvimento de software',
                areas: { dev: 3, engineering: 1 }
            },
            {
                id: 'b',
                text: 'Gestão e análise de dados',
                areas: { data: 2, datascience: 2, ai: 1 }
            },
            {
                id: 'c',
                text: 'Redes, servidores e infraestrutura',
                areas: { networks: 2, cloud: 2, devops: 1 }
            },
            {
                id: 'd',
                text: 'Segurança da informação e proteção de sistemas',
                areas: { security: 3, engineering: 1 }
            }
        ]
    },
    {
        id: 15,
        category: 'work_preferences',
        text: 'O que te daria mais satisfação no trabalho?',
        options: [
            {
                id: 'a',
                text: 'Ver usuários utilizando e gostando de algo que você criou',
                areas: { dev: 2, ux: 3 }
            },
            {
                id: 'b',
                text: 'Encontrar soluções eficientes para problemas complexos',
                areas: { engineering: 2, ai: 2, cloud: 1 }
            },
            {
                id: 'c',
                text: 'Garantir que sistemas funcionem sem interrupções ou falhas',
                areas: { networks: 2, devops: 2, security: 1 }
            },
            {
                id: 'd',
                text: 'Descobrir insights valiosos que ninguém tinha percebido antes',
                areas: { datascience: 3, data: 1, ai: 1 }
            }
        ]
    },

    // CATEGORIA: Habilidades e Competências
    {
        id: 16,
        category: 'skills',
        text: 'Quais destas habilidades você considera ter mais desenvolvidas?',
        options: [
            {
                id: 'a',
                text: 'Criatividade e pensamento inovador',
                areas: { ux: 3, dev: 1, ai: 1 }
            },
            {
                id: 'b',
                text: 'Lógica e raciocínio matemático',
                areas: { ai: 2, engineering: 2, datascience: 1 }
            },
            {
                id: 'c',
                text: 'Organização e atenção aos detalhes',
                areas: { data: 2, security: 2, devops: 1 }
            },
            {
                id: 'd',
                text: 'Resolução prática de problemas',
                areas: { networks: 2, dev: 2, cloud: 1 }
            }
        ]
    },
    {
        id: 17,
        category: 'skills',
        text: 'Quando criança, você provavelmente era melhor em:',
        options: [
            {
                id: 'a',
                text: 'Artes, desenho e trabalhos criativos',
                areas: { ux: 3, dev: 1 }
            },
            {
                id: 'b',
                text: 'Matemática e ciências',
                areas: { ai: 2, engineering: 2, datascience: 1 }
            },
            {
                id: 'c',
                text: 'Montar quebra-cabeças e jogos de lógica',
                areas: { dev: 2, security: 2, engineering: 1 }
            },
            {
                id: 'd',
                text: 'Organizar coleções e classificar coisas',
                areas: { data: 3, networks: 1, devops: 1 }
            }
        ]
    },
    {
        id: 18,
        category: 'skills',
        text: 'Em qual destas situações você seria mais eficiente?',
        options: [
            {
                id: 'a',
                text: 'Criar algo novo seguindo sua intuição',
                areas: { dev: 2, ux: 3 }
            },
            {
                id: 'b',
                text: 'Analisar um problema complexo passo a passo',
                areas: { engineering: 2, ai: 2, security: 1 }
            },
            {
                id: 'c',
                text: 'Melhorar algo que já existe, tornando-o mais eficiente',
                areas: { devops: 2, cloud: 2, networks: 1 }
            },
            {
                id: 'd',
                text: 'Organizar informações caóticas em algo estruturado',
                areas: { data: 2, datascience: 2, security: 1 }
            }
        ]
    },
    {
        id: 19,
        category: 'skills',
        text: 'Qual destas tarefas parece mais natural para você?',
        options: [
            {
                id: 'a',
                text: 'Projetar uma interface que seja bonita e fácil de usar',
                areas: { ux: 3, dev: 1 }
            },
            {
                id: 'b',
                text: 'Escrever código para resolver um problema específico',
                areas: { dev: 3, engineering: 1 }
            },
            {
                id: 'c',
                text: 'Configurar um sistema para funcionar de maneira otimizada',
                areas: { networks: 2, cloud: 2, devops: 1 }
            },
            {
                id: 'd',
                text: 'Analisar dados para encontrar padrões ou tendências',
                areas: { datascience: 2, ai: 2, data: 1 }
            }
        ]
    },
    {
        id: 20,
        category: 'skills',
        text: 'O que você aprenderia mais facilmente?',
        options: [
            {
                id: 'a',
                text: 'Uma nova linguagem de programação',
                areas: { dev: 3, engineering: 1, ai: 1 }
            },
            {
                id: 'b',
                text: 'Técnicas de análise estatística',
                areas: { datascience: 3, ai: 1, data: 1 }
            },
            {
                id: 'c',
                text: 'Configuração de redes e servidores',
                areas: { networks: 3, cloud: 1, devops: 1 }
            },
            {
                id: 'd',
                text: 'Princípios de design e experiência do usuário',
                areas: { ux: 3, dev: 1 }
            }
        ]
    },
    
    // CATEGORIA: Valores e Motivações
    {
        id: 21,
        category: 'values',
        text: 'O que você mais valoriza em uma carreira de tecnologia?',
        options: [
            {
                id: 'a',
                text: 'Impacto direto na vida das pessoas',
                areas: { dev: 2, ux: 2, datascience: 1 }
            },
            {
                id: 'b',
                text: 'Desafios intelectuais constantes',
                areas: { ai: 2, engineering: 2, security: 1 }
            },
            {
                id: 'c',
                text: 'Estabilidade e segurança profissional',
                areas: { networks: 2, data: 2, cloud: 1 }
            },
            {
                id: 'd',
                text: 'Inovação e estar na vanguarda tecnológica',
                areas: { ai: 2, dev: 1, devops: 2 }
            }
        ]
    },
    {
        id: 22,
        category: 'values',
        text: 'Qual destes cenários mais te preocupa na tecnologia atual?',
        options: [
            {
                id: 'a',
                text: 'Softwares difíceis de usar que frustram as pessoas',
                areas: { ux: 3, dev: 1 }
            },
            {
                id: 'b',
                text: 'Vulnerabilidades que expõem dados pessoais',
                areas: { security: 3, networks: 1 }
            },
            {
                id: 'c',
                text: 'Sistemas ineficientes que desperdiçam recursos',
                areas: { cloud: 2, devops: 2, engineering: 1 }
            },
            {
                id: 'd',
                text: 'Uso inadequado ou análise incorreta de dados',
                areas: { datascience: 2, data: 2, ai: 1 }
            }
        ]
    },
    {
        id: 23,
        category: 'values',
        text: 'Com qual frase você mais se identifica?',
        options: [
            {
                id: 'a',
                text: '"A tecnologia deve ser intuitiva e acessível para todos"',
                areas: { ux: 3, dev: 1 }
            },
            {
                id: 'b',
                text: '"Dados são o novo petróleo - informação é poder"',
                areas: { datascience: 2, data: 2, ai: 1 }
            },
            {
                id: 'c',
                text: '"Segurança e privacidade devem ser prioridades, não pensamentos posteriores"',
                areas: { security: 3, networks: 1, engineering: 1 }
            },
            {
                id: 'd',
                text: '"Sistemas confiáveis e escaláveis são a base de tudo"',
                areas: { cloud: 2, devops: 2, networks: 1 }
            }
        ]
    },
    {
        id: 24,
        category: 'values',
        text: 'O que te daria mais orgulho em seu trabalho?',
        options: [
            {
                id: 'a',
                text: 'Criar algo inovador que ninguém fez antes',
                areas: { ai: 2, dev: 2, ux: 1 }
            },
            {
                id: 'b',
                text: 'Construir sistemas robustos que nunca falham',
                areas: { engineering: 2, networks: 2, devops: 1 }
            },
            {
                id: 'c',
                text: 'Proteger pessoas e empresas contra ameaças digitais',
                areas: { security: 3, networks: 1 }
            },
            {
                id: 'd',
                text: 'Descobrir insights que geram decisões importantes',
                areas: { datascience: 3, data: 1, ai: 1 }
            }
        ]
    },
    {
        id: 25,
        category: 'values',
        text: 'Qual aspecto ético da tecnologia mais te interessa?',
        options: [
            {
                id: 'a',
                text: 'Acessibilidade e inclusão digital',
                areas: { ux: 3, dev: 1 }
            },
            {
                id: 'b',
                text: 'Privacidade e proteção de dados',
                areas: { security: 3, data: 1 }
            },
            {
                id: 'c',
                text: 'Impacto ambiental dos recursos computacionais',
                areas: { cloud: 2, networks: 1, devops: 1 }
            },
            {
                id: 'd',
                text: 'Vieses e fairness em algoritmos de IA',
                areas: { ai: 3, datascience: 1 }
            }
        ]
    },
    
    // CATEGORIA: Visão de Futuro
    {
        id: 26,
        category: 'future',
        text: 'Em qual destas áreas você gostaria de se tornar especialista?',
        options: [
            {
                id: 'a',
                text: 'Inteligência Artificial e Aprendizado de Máquina',
                areas: { ai: 3, datascience: 1 }
            },
            {
                id: 'b',
                text: 'Desenvolvimento de Software e Arquitetura de Sistemas',
                areas: { dev: 2, engineering: 2 }
            },
            {
                id: 'c',
                text: 'Cibersegurança e Proteção de Dados',
                areas: { security: 3, networks: 1 }
            },
            {
                id: 'd',
                text: 'Cloud Computing e DevOps',
                areas: { cloud: 2, devops: 2, networks: 1 }
            }
        ]
    },
    {
        id: 27,
        category: 'future',
        text: 'Qual tecnologia emergente mais te fascina?',
        options: [
            {
                id: 'a',
                text: 'Realidade virtual/aumentada e interfaces do futuro',
                areas: { ux: 2, dev: 2, ai: 1 }
            },
            {
                id: 'b',
                text: 'Inteligência artificial generativa e sistemas autônomos',
                areas: { ai: 3, engineering: 1 }
            },
            {
                id: 'c',
                text: 'Computação quântica e suas aplicações',
                areas: { engineering: 2, ai: 1, datascience: 1 }
            },
            {
                id: 'd',
                text: 'Web3, blockchain e sistemas distribuídos',
                areas: { dev: 2, security: 1, cloud: 1 }
            }
        ]
    },
    {
        id: 28,
        category: 'future',
        text: 'Como você imagina sua carreira em 10 anos?',
        options: [
            {
                id: 'a',
                text: 'Liderando projetos inovadores de produtos digitais',
                areas: { dev: 2, ux: 2, engineering: 1 }
            },
            {
                id: 'b',
                text: 'Especialista técnico altamente valorizado em sua área',
                areas: { security: 2, ai: 2, networks: 1 }
            },
            {
                id: 'c',
                text: 'Arquiteto de sistemas complexos e estratégicos',
                areas: { engineering: 2, cloud: 2, devops: 1 }
            },
            {
                id: 'd',
                text: 'Usando dados e análises para tomar decisões importantes',
                areas: { datascience: 3, data: 1, ai: 1 }
            }
        ]
    },
    {
        id: 29,
        category: 'future',
        text: 'Qual destas contribuições você mais gostaria de fazer?',
        options: [
            {
                id: 'a',
                text: 'Criar um software que milhões de pessoas usem diariamente',
                areas: { dev: 3, ux: 2 }
            },
            {
                id: 'b',
                text: 'Desenvolver algoritmos que resolvam problemas complexos',
                areas: { ai: 3, engineering: 1, datascience: 1 }
            },
            {
                id: 'c',
                text: 'Projetar sistemas seguros que protejam dados sensíveis',
                areas: { security: 3, networks: 1 }
            },
            {
                id: 'd',
                text: 'Construir infraestrutura que suporte aplicações críticas',
                areas: { cloud: 2, devops: 2, networks: 1 }
            }
        ]
    },
    {
        id: 30,
        category: 'future',
        text: 'Qual desafio tecnológico você gostaria de ajudar a resolver?',
        options: [
            {
                id: 'a',
                text: 'Tornar a tecnologia mais acessível e inclusiva',
                areas: { ux: 3, dev: 1 }
            },
            {
                id: 'b',
                text: 'Proteger sistemas e pessoas contra ameaças cibernéticas',
                areas: { security: 3, networks: 1 }
            },
            {
                id: 'c',
                text: 'Criar sistemas de IA éticos e benéficos para a humanidade',
                areas: { ai: 3, datascience: 1 }
            },
            {
                id: 'd',
                text: 'Construir infraestrutura digital mais eficiente e sustentável',
                areas: { cloud: 2, devops: 2, networks: 1 }
            }
        ]
    }
];
