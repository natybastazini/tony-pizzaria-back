var usuario = {
    informacoes:
    [
        {           
            id:1,
            nome: 'Natália Bastazini',
            email: 'natybastazini7@gmail.com',
            senha: '123',
            telefone: '(11) 95555-5555',
            foto: './model/img/natalia',
            endereco: [
                {
                    cep:'05124-010',
                    endereco:'Rua José Cândido Freire',
                    bairro:'Parque São Domingos',
                    cidade:'São Paulo',
                    estado:'SP',
                    numero:1
                },
            ]
        },
        {
            id:1,
            nome: 'Carolina Neponucena',
            email: 'carol@gmail.com',
            senha: '124',
            telefone: '(11) 95555-5556',
            foto: './model/img/carolina',
            endereco: [
                {
                    cep:'13504-628',
                    endereco:'Rua 29',
                    bairro:'Conjunto Habitacional de Interesse Social Rio Claro H',
                    cidade:'Rio Claro',
                    estado:'SP',
                    numero:3
                },
                {
                    cep:'12294-501',
                    endereco:'Estrada Municipal Eugênio Lencioni',
                    bairro:'Chácaras Encosta de São Carlos',
                    cidade:'Caçapava',
                    estado:'SP',
                    numero:4  
                }
            ]
        },
        {
            id:1,
            nome: 'Vitor Nascimento',
            email: 'vitor@gmail.com',
            senha: '125',
            telefone: '(11) 95555-5557',
            foto: './model/img/vitor',
            endereco: [
                {
                    cep:'18145-314',
                    endereco:'Rua Valentino do Carmo',
                    bairro:'do Carmo (Canguera)',
                    cidade:'São Roque',
                    estado:'SP',
                    numero:5 
                },
                {
                    cep:'19013-270',
                    endereco:'Rua José Maria Armond',
                    bairro:'Vila Roberto',
                    cidade:'Presidente Prudente',
                    estado:'SP',
                    numero:6 
                },
                {
                    cep:'14021-721',
                    endereco:'Rua E',
                    bairro:'Jardim Botânico',
                    cidade:'Ribeirão Preto',
                    estado:'SP',
                    numero:7 
                }
            ]
        },
        {
            id:1,
            nome: 'Pedro Pedraga',
            email: 'pedro@gmail.com',
            senha: '126',
            telefone: '(11) 95555-5558',
            foto: './model/img/pedro',
            endereco: [
                        {
                            cep:'13870-225',
                            endereco:'Rua Guiomar Novaes',
                            bairro:'Centro',
                            cidade:'São João da Boa Vista',
                            estado:'SP',
                            numero:8
                        }
            ]
        }
    ]
}

var categoria = {
    informacoes:
    [
        {
            id:1,
            nome:'Pizza salgada',
            logo:''
        },
        {
            id:2,
            nome:'Pizza doce',
            logo:''
        },
        {
            id:3,
            nome:'Pizzas especiais',
            logo:''
        },
        {
            id:4,
            nome:'Bebidas',
            logo:''
        },
        {
            id:5,
            nome:'Sobremesa',
            logo:''
        },
        {
            id:6,
            nome:'Sobremesas especiais',
            logo:''
        },
        {
            id:7,
            nome:'Acompanhamento',
            logo:''
        },
    ]
}

var produto = {
    informacoes:
    [
        /*pizzas*/
        {
           id: 1,
           nome: 'Calabresa',
           imagem: 'imagens/foto1.jpg',
           descricao: 'muçarela, calabresa e cebola. Como não amar? Os fãs da carne suína não abrem mão. Esse é um sabor que merece estar na sua mesa de vez em quando.',
           preco: 'R$22,00',
           categoria: [
                        {
                            id: 1,
                            nome: 'pizza salgada'
                        }
           ],
           comentario: [
                        {
                            id:1,
                            titulo: 'Muito boa.',
                            descricao:'Adorei o atendimento e a pizza estava excelente.'
                        }
           ],
           usuario: [
                        {
                            nome: usuario.informacoes[0].nome,
                            foto: usuario.informacoes[0].foto
                        }
           ]  
        },
        {
            id: 2,
            nome: 'Muçarela',
            imagem: 'imagens/foto1.jpg',
            descricao: 'simples assim e perfeita assim. Não existem palavras para descrever o quão incrível ela é. Tudo na proporção certa para matar a fome com maestria.',
            preco: 'R$20,00',
            categoria: [
                        {
                            id: 1,
                            nome: 'pizza salgada'
                        }
            ],
            comentario: [
                        {
                            id:3,
                            titulo: 'Adorei!!',
                            descricao: 'Pizza agradável.'
                        }
            ],
            usuario: [
                {
                    nome: usuario.informacoes[1].nome,
                    foto: usuario.informacoes[1].foto
                }
            ] 
        },
        {
            id: 3,
            nome: 'Portuguesa',
            imagem: 'imagens/foto1.jpg',
            descricao: 'ela é feita com presunto, ovos, muçarela e ervilha. Tem quem só peça esse sabor desde sempre. Por que não dar uma chance então?',
            preco: 'R$40,00',
            categoria: [
                        {
                            id: 5,
                            nome: 'pizza salgada'
                        },
                        {
                            id: 6,
                            nome: 'pizzas especiais'
                        }
            ],
            comentario: [
                        {
                        id: 4,
                        titulo: 'Amei!!',
                        descricao: 'Pizza boa.'
                    }
            ],
            usuario: [
                    {
                        nome: usuario.informacoes[2].nome,
                        foto: usuario.informacoes[2].foto
                    }
            ] 
        },
        {
            id: 4,
            nome: 'Baiana',
            imagem: 'imagens/foto1.jpg',
            descricao: 'Ela é feita com calabresa moída, ovos, pimenta, cebola e um toque de parmesão.',
            preco: 'R$44,00',
            categoria: [
                        {
                            id: 1,
                            nome: 'pizza salgada'
                        },
                        {
                            id: 3,
                            nome: 'pizzas especiais'
                        }
            ] ,
            comentario: [
                    {
                        id: 6,
                        titulo:'Pizza boa',
                        descricao: 'Pizza agradável.'
                    }
            ],
            usuario: [
                    {
                        nome: usuario.informacoes[3].nome,
                        foto: usuario.informacoes[3].foto
                    }
            ]
        },
        {
            id: 5,
            nome: 'Brigadeiro',
            imagem: 'imagens/foto1.jpg',
            descricao: 'O brigadeiro é a sobremesa mais clássica do Brasil. O preparo dele é feito com leite condensado, colherada de manteiga e chocolate.',
            preco: 'R$30,00',
            categoria: [
                        {
                            id: 1,
                            nome: 'pizza doce'
                        }
            ],
            comentario: [
                        {
                            id: 8,
                            titulo: 'Ótima',
                            descricao: 'Pizza agradável.'
                        }
            ],
            usuario: [
                        {
                            nome: usuario.informacoes[3].nome,
                            foto: usuario.informacoes[3].foto
                        }
            ] 
        },
        {
            id: 6,
            nome: 'Romeu e Julieta',
            imagem: 'imagens/foto1.jpg',
            descricao: 'Uma combinação mineira, que acabou caindo no gosto do povo.',
            preco: 'R$32,00',
            categoria: [
                        {
                            id: 1,
                            nome: 'pizza doce'
                        }
            ],
            comentario: [
                        {
                            id:9,
                            titulo:'Mediocre',
                            descricao: 'Pizza agradável, porém senti falta de algo.'
                        }
            ],
            usuario: [
                        {
                            nome: usuario.informacoes[2].nome,
                            foto: usuario.informacoes[2].foto
                        }
            ] 
        },
        {
            id: 7,
            nome: 'Banofe',
            imagem: 'imagens/foto1.jpg',
            descricao: 'Essa mistura dá um sabor incrivel.',
            preco: 'R$38,00',
            categoria: [
                        {
                            id: 1,
                            nome: 'pizza doce'
                        },
                        {
                            id: 3,
                            nome: 'pizzas especiais'
                        }
            ],
            comentario: [
                        {
                            id: 11,
                            titulo:'Perfeita',
                            descricao: 'Pizza muito boa.'
                        }
            ],
            usuario: [
                        {
                            nome: usuario.informacoes[1].nome,
                            foto: usuario.informacoes[1].foto
                        }
            ] 
        },
        {
            id: 8,
            nome: 'Creme de avelã com frutas',
            imagem: 'imagens/foto1.jpg',
            descricao: 'Essa pizza é sucesso garantido, pois a mistura de frutas cítricas e o creme de avelã agradam muitas pessoas, em especial aquelas que não são fãs de doce em excesso.',
            preco: 'R$40,00',
            categoria: [
                        {
                            id: 1,
                            nome: 'pizza doce'
                        },
                        {
                            id: 3,
                            nome: 'pizzas especiais'
                        }
            ] 
        },
        /*bebidas*/
        {
            id: 9,
            nome: 'Refrigerante Lata',
            imagem: 'imagens/foto1.jpg',
            preco: 'R$5,00',
            categoria: [
                         {
                             id: 4,
                             nome: 'bebidas'
                         }
            ]   
        },
        {
            id: 10,
            nome: 'Suco Natural',
            imagem: 'imagens/foto1.jpg',
            preco: 'R$8,00',
            categoria: [
                         {
                             id: 4,
                             nome: 'bebidas'
                         }
            ]   
        },
        {
            id: 11,
            nome: 'Energetico Lata',
            imagem: 'imagens/foto1.jpg',
            preco: 'R$10,00',
            categoria: [
                         {
                             id: 4,
                             nome: 'bebidas'
                         }
            ]   
        },
        {
            id: 12,
            nome: 'Ice',
            imagem: 'imagens/foto1.jpg',
            preco: 'R$14,99',
            categoria: [
                         {
                             id: 4,
                             nome: 'bebidas'
                         }
            ]   
        },
        {
            id: 13,
            nome: 'Água',
            imagem: 'imagens/foto1.jpg',
            preco: 'R$2,50',
            categoria: [
                         {
                             id: 4,
                             nome: 'bebidas'
                         }
            ]   
        },
        {
            id: 14,
            nome: 'Cerveja',
            imagem: 'imagens/foto1.jpg',
            preco: 'R$12,00',
            categoria: [
                         {
                             id: 4,
                             nome: 'bebidas'
                         }
            ]   
        },
         /*Sobremesa*/
        {
            id: 15,
            nome: 'Torta de limão',
            imagem: 'imagens/foto1.jpg',
            preco: 'R$18,00',
            categoria: [
                        {
                            id: 5,
                            nome: 'Sobremesa'
                        },
                        {
                            id: 6,
                            nome: 'Sobremesas especiais'
                        }
            ],
            comentario: [
                        {
                            id: 12,
                            titulo: 'Incrível',
                            descricao: 'Deliciosa tortinha.'
                        }
            ],
            usuario: [
                        {
                            nome: usuario.informacoes[0].nome,
                            foto: usuario.informacoes[0].foto
                        }
            ]   
        },
        {
            id: 16,
            nome: 'Bolo de cenoura',
            imagem: 'imagens/foto1.jpg',
            preco: 'R$13,99',
            categoria: [
                        {
                            id: 5,
                            nome: 'Sobremesa'
                        }
            ],
            comentario: [
                        {
                            id:14,
                            titulo:'Amei',
                            descricao: 'Bolo estava ótimo.'
                        }
            ],
            usuario: [
                        {
                            nome: usuario.informacoes[3].nome,
                            foto: usuario.informacoes[3].foto
                        }
            ]   
        },
        {
            id: 17,
            nome: 'Banoffe',
            imagem: 'imagens/foto1.jpg',
            preco: 'R$14,99',
            categoria: [
                        {
                            id: 5,
                            nome: 'Sobremesa'
                        },
                        {
                            id: 6,
                            nome: 'Sobremesas especiais'
                        }
            ],
            comentario: [
                        {
                            id:15,
                            titulo:'Adorei',
                            descricao: 'Melhor sobremesa.'
                        }
            ],
            usuario: [
                        {
                            nome: usuario.informacoes[1].nome,
                            foto: usuario.informacoes[1].foto
                        }
            ]   
        },
        {
            id: 18,
            nome: 'Mousse',
            imagem: 'imagens/foto1.jpg',
            preco: 'R$12,00',
            categoria: [
                        {
                            id: 5,
                            nome: 'Sobremesa'
                        }
            ],
            comentario: [
                        {
                            id:16,
                            titulo: 'Bom demais',
                            descricao: 'Delicioso e simples.'
                        }
            ],
            usuario: [
                        {
                            nome: usuario.informacoes[0].nome,
                            foto: usuario.informacoes[0].foto
                        }
            ]   
        },
        /*Acompanhamentos*/
        {
            id: 19,
            nome: 'Mini pastelzinho',
            imagem: 'imagens/foto1.jpg',
            preco: 'R$10,00',
            categoria: [
                        {
                            id: 7,
                            nome: 'Acompanhamento'
                        }
            ],
            comentario: [
                        {
                            id:17,
                            titulo: 'Gostei muito',
                            descricao: 'Melhor pastelzinho que ja comi.'
                        }
            ],
            usuario: [
                        {
                            nome: usuario.informacoes[0].nome,
                            foto: usuario.informacoes[0].foto
                        }
            ]   
        },
        {
            id: 20,
            nome: 'Nachos',
            imagem: 'imagens/foto1.jpg',
            preco: 'R$18,00',
            categoria: [
                        {
                            id: 7,
                            nome: 'Acompanhamento'
                        }
            ],
            comentario: [
                        {
                            id: 18,
                            titulo: 'Amei muito',
                            descricao: 'Comida boa.'
                        }
            ],
            usuario: [
                        {
                            nome: usuario.informacoes[2].nome,
                            foto: usuario.informacoes[2].foto
                        }
            ]   
        },
        {
            id: 21,
            nome: 'Batata frita',
            imagem: 'imagens/foto1.jpg',
            preco: 'R16,00',
            categoria: [
                        {
                            id: 7,
                            nome: 'Acompanhamento'
                        }
            ],
            comentario: [
                        {
                            id:19,
                            titulo: 'Bom demais',
                            descricao: 'Amei as batatinhas'
                        }
            ],
            usuario: [
                        {
                            nome: usuario.informacoes[3].nome,
                            foto: usuario.informacoes[3].foto
                        }
            ]   
        },
        {
            id: 22,
            nome: 'Espetinho',
            imagem: 'imagens/foto1.jpg',
            preco: 'R$14,99',
            categoria: [
                        {
                            id: 7,
                            nome: 'Acompanhamento'
                        }
            ],
            comentario: [
                        {
                            id: 21,
                            titulo: 'Odiei',
                            descricao: 'A carne estava dura'
                        }
            ],
            usuario: [
                        {
                            nome: usuario.informacoes[1].nome,
                            foto: usuario.informacoes[1].foto
                        }
            ]   
        }
    ]
}