export interface subjectProps{
    subject: string;
    themes: {
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
                themeName: "Egito Antigo",
                themeBG: "https://www.coladaweb.com/wp-content/uploads/2014/12/Piramides-de-Gize1.png",
                questions: [
                    {
                        questionId: 1,
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
                        questionId: 2,
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
                        questionId: 3,
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
                        questionId: 4,
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
                        questionId: 5,
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
            {
                themeName: "Revolução Francesa",
                themeBG: "https://revistamineracao.com.br/wp-content/uploads/2019/01/ABAL_Ecologia_Dezembro2018.jpg",
                questions: [
                    {
                        questionId: 1,
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
                        questionId: 2,
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
                        questionId: 3,
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
                        questionId: 4,
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
                        questionId: 5,
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
            {
                themeName: "1° Guerra Mundial",
                themeBG: "https://www.otempo.com.br/image/contentid/policy:1.2066249:1541853152/image.jpg?f=3x2&q=0.6&w=1200&$p$f$q$w=4633e5f",
                questions: [
                    {
                        questionId: 1,
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
                        questionId: 2,
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
                        questionId: 3,
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
                        questionId: 4,
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
                        questionId: 5,
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