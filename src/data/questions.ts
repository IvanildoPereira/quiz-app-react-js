export interface subjectProps{
    subject: string;
    themes: {
        themeId: number,
        themeName: string,
        themeBG: string;
        questions: questionProps[]
    }[];
} 

export interface questionProps{
    questionId: number;
    question: string;
    options: string[];
    answer: string;
}

export const subjects: subjectProps[] = [
    {
        subject: "Historia",
        themes: [
            {   
                themeId: 1,
                themeName: "Egito Antigo",
                themeBG: "https://www.coladaweb.com/wp-content/uploads/2014/12/Piramides-de-Gize1.png",
                questions: [
                    {
                        questionId: 1,
                        question: "Imperador responsável pela unificação do Baixo e Alto Egito, em 3.200 a.C.:",
                        options: [
                            "Amenófis IV.",
                            "Menés.",
                            "Ramsés II.",
                            "Amenhotep III.",
                            "Tutancâmon."
                        ],
                        answer: "Menés."
                    },
                    {
                        questionId: 2,
                        question: "A sociedade egípcia antiga foi, na maior parte do tempo, politeísta, com diversos deuses. A religião para esses povos tinha uma importância muito grande. A sociedade egípcia foi uma sociedade:",
                        options: [
                            "Absolutista.",
                            "Teocrática.",
                            "Democrática.",
                            "Anarquista.",
                            "Socialista."
                        ],
                        answer: "Teocrática."
                    },
                    {
                        questionId: 3,
                        question: "O Rio Nilo foi importante para os egípcios, pois:",
                        options: [
                            "Suas cheias tornavam a terra fértil.",
                            "Era utilizado pelos egípcios para pesca.",
                            "Garantia a unidade política do Egito, pois era uma via utilizada para interligar os territórios.",
                            "Todas as alternativas anteriores.",
                        ],
                        answer: "Todas as alternativas anteriores."
                    },
                    {
                        questionId: 4,
                        question: "Sobre as pirâmides no Egito Antigo, assinale a alternativa INCORRETA:",
                        options: [
                            "As pirâmides foram construídas com o objetivo de serem túmulos para abrigar os corpos dos faraós, que eram mumificados após sua morte.",
                            "A maior pirâmide do mundo é a de Quéops, com 230 metros de largura na base e 174 metros de altura.",
                            "A grandiosidade das pirâmides procurava representar a grandiosidade do faraó.",
                            "Nas construções, tanto escravizados quanto trabalhadores livres deviam trabalhar.",
                            "Até hoje não foram elaboradas teorias de como os egípcios conseguiram carregar e elevar pedras tão pesadas para a construção das pirâmides."
                        ],
                        answer: "Até hoje não foram elaboradas teorias de como os egípcios conseguiram carregar e elevar pedras tão pesadas para a construção das pirâmides."
                    },
                    {
                        questionId: 5,
                        question: "Sobre o trabalho e os diferentes grupos sociais no Egito Antigo, assinale a alternativa INCORRETA:",
                        options: [
                            "Os camponeses e artesãos tiveram como única função desenvolver trabalhos nos campos. Nos períodos de cheia do Nilo, eles deveriam trancar-se em casa para rezar aos deuses solicitando uma boa colheita no futuro.",
                            "Os sacerdotes possuíram grande importância na vida política e religiosa egípcia. Eles ficavam responsáveis pelos rituais e festas religiosas.",
                            "Os escribas foram funcionários do Estado que tinham como função o registro dos principais eventos da sociedade e vida do faraó.",
                            "O faraó era quem deteve o maior poder no governo egípcio. Ele era visto como um deus, sendo seu cargo transmitido de forma hereditária.",
                        ],
                        answer: "Os camponeses e artesãos tiveram como única função desenvolver trabalhos nos campos. Nos períodos de cheia do Nilo, eles deveriam trancar-se em casa para rezar aos deuses solicitando uma boa colheita no futuro."
                    },
                ]
            },
            {
                themeId: 2,
                themeName: "Revolução Francesa",
                themeBG: "https://revistamineracao.com.br/wp-content/uploads/2019/01/ABAL_Ecologia_Dezembro2018.jpg",
                questions: [
                    {
                        questionId: 6,
                        question: "(Unicentro)  “Para o historiador, todos os acontecimentos, mesmo os remotos, têm atualidade e vida. Mas isso é ainda mais verdadeiro no caso da Revolução Francesa de 1789, que transformou o modo de vida até daqueles que pouco souberam ou sabem sobre ela, até hoje em dia. Não será exagero dizer que ela ajudou a dar forma ao mundo ocidental contemporâneo, moldando as instituições e os ideais que nos animam e que consideramos universais.” (GRESPAN, Jorge. Revolução Francesa e Iluminismo. São Paulo: Contexto, 2003. p. 9.) \n Sobre a Revolução Francesa, é correto afirmar.",
                        options: [
                            "A Revolução Francesa ocorreu em meio a uma crise econômica e foi produto de revoltas de burgueses, camponeses e trabalhadores urbanos.",
                            "A Revolução Francesa é considerada a primeira Revolução Comunista, pois, até hoje, esse sistema molda as instituições no mundo ocidental.",
                            "Foi uma revolução comandada por Napoleão Bonaparte, que, influenciado pelo Iluminismo, organizou um golpe de estado contra Luiz XVI.",
                            "A Revolução Francesa foi um movimento caracterizado pelo terror, organizado pelo revolucionário Robespierre, em apoio ao absolutismo de Luiz XVI.",
                            "Trata-se de uma revolução burguesa, inspirada no iluminismo e comandada por Robespierre, na qual o Czar Nicolau II foi executado na guilhotina."
                        ],
                        answer: "A Revolução Francesa ocorreu em meio a uma crise econômica e foi produto de revoltas de burgueses, camponeses e trabalhadores urbanos."
                    },
                    {
                        questionId: 7,
                        question: "(Cásper Líbero) Sobre a Revolução Francesa, iniciada em 1789, é correto afirmar que:",
                        options: [
                            "Foi longamente preparada pelo ciclo revolucionário ocorrido na Inglaterra no século XVII, o que explica o apoio que esse país prestou aos revoltosos franceses.",
                            "Tratou-se, principalmente, de uma revolução cultural, ápice do desenvolvimento do chamado iluminismo.",
                            "Não foi devidamente percebida como um movimento relevante por seus contemporâneos, ganhando importância apenas retrospectivamente, com o início da Revolução de 1848.",
                            "Não implicou mudanças significativas na ordem societária dominante no mundo ocidental.",
                            "Apresentou diferentes fases, desembocando em um contexto monárquico, antirrevolucionário e reacionário, representado pelo Congresso de Viena."
                        ],
                        answer: "Apresentou diferentes fases, desembocando em um contexto monárquico, antirrevolucionário e reacionário, representado pelo Congresso de Viena."
                    },
                    {
                        questionId: 8,
                        question: "A Revolução Francesa foi um marco na história da humanidade e considera-se o estopim que iniciou esse conflito:",
                        options: [
                            "O regicídio de Luís XVI.",
                            "A tentativa de fuga de Luís XVI e Maria Antonieta.",
                            "A queda da Bastilha.",
                            "A invasão da França por tropas austríacas.",
                            "A convocação dos Estados Gerais."
                        ],
                        answer: "A queda da Bastilha."
                    },
                    {
                        questionId: 9,
                        question: "O historiador Eric Hobsbawm afirmou que as grandes exigências da burguesia no contexto revolucionário manifestaram-se por meio da Declaração dos Direitos do Homem e do Cidadão. Esse documento manifestava:",
                        options: [
                            "A oposição da sociedade hierarquizada de privilégios sobre a nobreza.",
                            "O interesse de construir-se uma sociedade transformada e verdadeiramente igualitária.",
                            "A defesa das ideias estatizantes que viam no Estado o regulador dos problemas sociais.",
                            "A defesa de uma monarquia absolutista com a instalação do Estado laico.",
                            "A defesa das ideias socialistas com a emancipação dos trabalhadores."
                        ],
                        answer: "A oposição da sociedade hierarquizada de privilégios sobre a nobreza."
                    },
                    {
                        questionId: 10,
                        question: "A respeito da Revolução Francesa, selecione a alternativa com a afirmação FALSA:",
                        options: [
                            "Pouco antes do ciclo revolucionário, a França havia enfrentado colheitas ruins.",
                            "O rei Luís XVI havia tentado fugir em 1791, sendo capturado próximo da fronteira com a Bélgica.",
                            "Os dois grandes grupos do período revolucionário foram os girondinos e os jacobinos.",
                            "O período do terror aconteceu sob liderança dos jacobinos.",
                            "A proposta de Olympe de Gouges, chamada Declaração dos Direitos da Mulher e da Cidadã, foi bem recebida na convenção francesa."
                        ],
                        answer: "A proposta de Olympe de Gouges, chamada Declaração dos Direitos da Mulher e da Cidadã, foi bem recebida na convenção francesa."
                    },
                ]
            },
            {
                themeId: 3,
                themeName: "1° Guerra Mundial",
                themeBG: "https://www.otempo.com.br/image/contentid/policy:1.2066249:1541853152/image.jpg?f=3x2&q=0.6&w=1200&$p$f$q$w=4633e5f",
                questions: [
                    {
                        questionId: 11,
                        question: "(Cetrede) Ao final da Primeira Guerra Mundial, instalou-se na Alemanha uma Assembleia Nacional que se reuniu em Weimar para preparar uma nova Constituição para o país. Nascia ali um novo Estado, chamado de:",
                        options: [
                            "Sacro Império Romano-Germânico.",
                            "República de Weimar.",
                            "Confederação Germânica.",
                            "República Democrática da Alemanha.",
                            "República Federal da Alemanha."
                        ],
                        answer: "República de Weimar."
                    },
                    {
                        questionId: 12,
                        question: "(Avança-SP) Dos fenômenos abaixo citados, assinale aquele que é considerado como o causador da Primeira Guerra Mundial.",
                        options: [
                            "O assassinato da família imperial russa.",
                            "O fim do colonialismo africano.",
                            "A emancipação dos povos árabes.",
                            "O descumprimento do Tratado de Versalhes por parte da Alemanha.",
                            "O assassinato do arquiduque Francisco Ferdinando, herdeiro do trono austríaco."
                        ],
                        answer: "O assassinato do arquiduque Francisco Ferdinando, herdeiro do trono austríaco."
                    },
                    {
                        questionId: 13,
                        question: "(Pref. Betim-MG) É coerente com as razões que levaram à 1ª Grande Guerra Mundial:",
                        options: [
                            "Um dos fatos que contribuíram para o final do confronto foi a entrada da Rússia na guerra, pois tinha um exército grande e bem preparado, impondo aos alemães derrotas vexatórias.",
                            "O processo de imperialismo, promovido pelas grandes potências capitalistas da Europa, principalmente França, Inglaterra e Alemanha, gerou conflitos e até confrontos pela disputa de territórios, a ponto de desencadear a 1ª Guerra.",
                            "Temendo uma ofensiva alemã, Japão, Inglaterra e França formaram a Tríplice Aliança.",
                            "O início da guerra se deu quando as tropas alemãs invadiram a Polônia, apresentando ao mundo a famosa guerra-relâmpago, deixando marcas desastrosas para os poloneses.",
                            "Nenhuma das alternativas acima."
                        ],
                        answer: "O processo de imperialismo, promovido pelas grandes potências capitalistas da Europa, principalmente França, Inglaterra e Alemanha, gerou conflitos e até confrontos pela disputa de territórios, a ponto de desencadear a 1ª Guerra."
                    },
                    {
                        questionId: 14,
                        question: "Selecione a alternativa que apresenta uma fase da Primeira Guerra Mundial.",
                        options: [
                            "Guerra-relâmpago",
                            "Corrida nuclear",
                            "Guerra de Trincheiras",
                            "Derrota do Eixo",
                            "Avanço do Exército Vermelho"
                        ],
                        answer: "Guerra de Trincheiras"
                    },
                    {
                        questionId: 15,
                        question: "Qual país fazia parte da Tríplice Aliança, mas se recusou a participar da guerra por esse grupo quando o conflito se iniciou em 1914?",
                        options: [
                            "Itália",
                            "Áustria-Hungria",
                            "Império Otomano",
                            "Bulgária",
                            "Rússia"
                        ],
                        answer: "Itália"
                    },
                ]
            },
        ]
    }
]