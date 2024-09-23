db.consultas.insertMany([
    {
        "data": ISODate("2024-06-25"),
        "medico_id":  ObjectId("66e96ae976efecbc5e470c24") ,
        "paciente_id": ObjectId("66e96b0576efecbc5e470c28"),
        "valor": 200,
        "conveniada": true,
        "especialidade_buscada": "Clínica Geral",
        "descricao": "Paciente com febre e tosse",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Paracetamol comprimidos",
                    "quantidade": 10,
                    "instrucoes": "Tomar 1 comprimido a cada 8 horas"
                },
                {
                    "nome": "Ibuprofeno comprimidos",
                    "quantidade": 12,
                    "instrucoes": "Tomar 1 comprimido a cada 12 horas"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Inalação com soro fisiológico",
                    "frequencia": "2 vezes ao dia"
                }
            ]
        }
    },
    {
        "data": ISODate("2021-02-14"),
       "medico_id": ObjectId("66e96ae976efecbc5e470c25") ,
        "paciente_id": ObjectId("66e96b0576efecbc5e470c29"),
        "valor": 180,
        "conveniada": false,
        "especialidade_buscada": "Pediatria",
        "descricao": "Paciente com dor de garganta",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Antitérmico",
                    "quantidade": 5,
                    "instrucoes": "Tomar 1 comprimido a cada 6 horas"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Gargarejo com água morna",
                    "frequencia": "3 vezes ao dia"
                }
            ]
        }
    },
    {
        "data": ISODate("2024-09-30"),
        "medico_id": ObjectId("66e96ae976efecbc5e470c26") ,
        "paciente_id": ObjectId("66e96b0576efecbc5e470c30"),
        "valor": 250,
        "conveniada": true,
        "especialidade_buscada": "Dermatologia",
        "descricao": "Paciente com erupção cutânea",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Antialérgico",
                    "quantidade": 10,
                    "instrucoes": "Tomar 1 comprimido ao dia"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Aplicação de creme hidratante",
                    "frequencia": "2 vezes ao dia"
                }
            ]
        }
    },
    {
        "data": ISODate("2024-06-15"),
        "medico_id": ObjectId("66e96ae976efecbc5e470c27"),
        "paciente_id": ObjectId("66e96b0576efecbc5e470c31"),
        "valor": 300,
        "conveniada": false,
        "especialidade_buscada": "Ortopedia",
        "descricao": "Paciente com fratura no punho",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Analgésico",
                    "quantidade": 20,
                    "instrucoes": "Tomar 1 comprimido a cada 8 horas"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Imobilização com gesso",
                    "frequencia": "Durante 30 dias"
                }
            ]
        }
    },
    {
        "data": ISODate("2024-04-20"),
        "medico_id": ObjectId("66e96ae976efecbc5e470c28"),
        "paciente_id": ObjectId("66e96b0576efecbc5e470c32"),
        "valor": 220,
        "conveniada": true,
        "especialidade_buscada": "Cardiologia",
        "descricao": "Paciente com pressão alta",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Losartana",
                    "quantidade": 30,
                    "instrucoes": "Tomar 1 comprimido ao dia"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Mudança de dieta",
                    "frequencia": "Diária"
                }
            ]
        }
    },
    {
        "data": ISODate("2024-11-23"),
        "medico_id": ObjectId("66e96ae976efecbc5e470c29"),
        "paciente_id": ObjectId("66e96b0576efecbc5e470c33"),
        "valor": 200,
        "conveniada": false,
        "especialidade_buscada": "Gastroenterologia",
        "descricao": "Paciente com dor abdominal",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Omeprazol",
                    "quantidade": 15,
                    "instrucoes": "Tomar 1 comprimido antes das refeições"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Consulta nutricional",
                    "frequencia": "1 vez por mês"
                }
            ]
        }
    },
    {
        "data": ISODate("2023-01-12"),
       "medico_id": ObjectId("66e96ae976efecbc5e470c2a"),
        "paciente_id": ObjectId("66e96b0576efecbc5e470c34"),
        "valor": 210,
        "conveniada": true,
        "especialidade_buscada": "Neurologia",
        "descricao": "Paciente com enxaqueca frequente",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Sumatriptano",
                    "quantidade": 10,
                    "instrucoes": "Tomar 1 comprimido ao início da dor"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Terapia ocupacional",
                    "frequencia": "1 vez por semana"
                }
            ]
        }
    },
    {
        "data": ISODate("2024-07-15"),
        "medico_id": ObjectId("66e96ae976efecbc5e470c2b"),
        "paciente_id": ObjectId("66e96b0576efecbc5e470c35"),
        "valor": 190,
        "conveniada": true,
        "especialidade_buscada": "Oftalmologia",
        "descricao": "Paciente com visão embaçada",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Colírio lubrificante",
                    "quantidade": 1,
                    "instrucoes": "Aplicar 2 vezes ao dia"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Consulta de acompanhamento",
                    "frequencia": "A cada 6 meses"
                }
            ]
        }
    },
    {
        "data": ISODate("2023-03-11"),
        "medico_id": ObjectId("66e96ae976efecbc5e470c2c"),
        "paciente_id": ObjectId("66e96b0576efecbc5e470c36"),
        "valor": 230,
        "conveniada": false,
        "especialidade_buscada": "Endocrinologia",
        "descricao": "Paciente com diabetes tipo 2",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Metformina",
                    "quantidade": 30,
                    "instrucoes": "Tomar 1 comprimido ao dia"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Avaliação nutricional",
                    "frequencia": "Mensal"
                }
            ]
        }
    },
    {
        "data": ISODate("2024-05-05"),
        "medico_id": ObjectId("66e96ae976efecbc5e470c2d"),
        "paciente_id": ObjectId("66e96b0576efecbc5e470c37"),
        "valor": 200,
        "conveniada": true,
        "especialidade_buscada": "Imunologia",
        "descricao": "Paciente com alergias sazonais",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Antialérgico",
                    "quantidade": 20,
                    "instrucoes": "Tomar 1 comprimido ao dia"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Evitar alérgenos",
                    "frequencia": "Durante a estação"
                }
            ]
        }
    },
    {
        "data": ISODate("2023-12-30"),
       "medico_id": ObjectId("66e96ae976efecbc5e470c2e"),
        "paciente_id": ObjectId("66e96b0576efecbc5e470c38"),
        "valor": 250,
        "conveniada": false,
        "especialidade_buscada": "Otorinolaringologia",
        "descricao": "Paciente com sinusite",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Descongestionante",
                    "quantidade": 10,
                    "instrucoes": "Tomar 1 comprimido a cada 8 horas"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Inalação",
                    "frequencia": "2 vezes ao dia"
                }
            ]
        }
    },
    {
        "data": ISODate("2024-08-18"),
       "medico_id": ObjectId("66e96ae976efecbc5e470c2f"),
        "paciente_id": ObjectId("66e96b0576efecbc5e470c39"),
        "valor": 270,
        "conveniada": true,
        "especialidade_buscada": "Ginecologia",
        "descricao": "Paciente em consulta de rotina",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Descongestionante",
                    "quantidade": 10,
                    "instrucoes": "Tomar 1 comprimido a cada 8 horas"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Exame de papanicolau",
                    "frequencia": "Anual"
                }
            ]
        }
    },
    {
        "data": ISODate("2024-04-10"),
       "medico_id": ObjectId("66e96ae976efecbc5e470c30"),
        "paciente_id": ObjectId("66e96b0576efecbc5e470c40"),
        "valor": 190,
        "conveniada": false,
        "especialidade_buscada": "Urologia",
        "descricao": "Paciente com dor ao urinar",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Antibiótico",
                    "quantidade": 14,
                    "instrucoes": "Tomar 1 comprimido a cada 12 horas"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Hidratação oral",
                    "frequencia": "Diária"
                }
            ]
        }
    },
    {
        "data": ISODate("2024-11-25"),
        "medico_id": ObjectId("66e96ae976efecbc5e470c24"),
        "paciente_id": ObjectId("66e96b0576efecbc5e470c41"),
        "valor": 230,
        "conveniada": true,
        "especialidade_buscada": "Fisioterapia",
        "descricao": "Paciente em reabilitação",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Antiinflamatório",
                    "quantidade": 15,
                    "instrucoes": "Tomar 1 comprimido a cada 12 horas"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Sessões de fisioterapia",
                    "frequencia": "3 vezes por semana"
                }
            ]
        }
    },
    {
        "data": ISODate("2024-07-14"),
        "medico_id": ObjectId("66e96ae976efecbc5e470c25"),
        "paciente_id": ObjectId("66e96b0576efecbc5e470c42"),
        "valor": 250,
        "conveniada": false,
        "especialidade_buscada": "Nutrição",
        "descricao": "Paciente com sobrepeso",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Antiinflamatório",
                    "quantidade": 15,
                    "instrucoes": "Tomar 1 comprimido a cada 12 horas"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Consulta nutricional",
                    "frequencia": "Mensal"
                }
            ]
        }
    },
    {
        "data": ISODate("2024-01-05"),
       "medico_id": ObjectId("66e96ae976efecbc5e470c26"),
        "paciente_id": ObjectId("66e96b0576efecbc5e470c28"),
        "valor": 200,
        "conveniada": true,
        "especialidade_buscada": "Psicologia",
        "descricao": "Paciente com ansiedade",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Antidepressivo",
                    "quantidade": 30,
                    "instrucoes": "Tomar 1 comprimido ao dia"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Terapia cognitivo-comportamental",
                    "frequencia": "Semanal"
                }
            ]
        }
    },
    {
        "data": ISODate("2024-10-11"),
        "medico_id": ObjectId("66e96ae976efecbc5e470c27"),
        "paciente_id": ObjectId("66e96b0576efecbc5e470c29"),
        "valor": 220,
        "conveniada": true,
        "especialidade_buscada": "Hematologia",
        "descricao": "Paciente com anemia",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Suplemento de ferro",
                    "quantidade": 30,
                    "instrucoes": "Tomar 1 comprimido ao dia"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Consulta de acompanhamento",
                    "frequencia": "Mensal"
                }
            ]
        }
    },
    {
        "data": ISODate("2024-04-22"),
       "medico_id": ObjectId("66e96ae976efecbc5e470c28"),
        "paciente_id": ObjectId("66e96b0576efecbc5e470c30"),
        "valor": 240,
        "conveniada": true,
        "especialidade_buscada": "Pneumologia",
        "descricao": "Paciente com dificuldade para respirar",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Broncodilatador",
                    "quantidade": 20,
                    "instrucoes": "Inalar a cada 4 horas se necessário"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Reabilitação pulmonar",
                    "frequencia": "Semanal"
                }
            ]
        }
    },
    {
        "data": ISODate("2023-05-30"),
       "medico_id": ObjectId("66e96ae976efecbc5e470c2a"),
        "paciente_id": ObjectId("66e96b0576efecbc5e470c41"),
        "valor": 280,
        "conveniada": false,
        "especialidade_buscada": "Pediatria",
        "descricao": "Paciente com dor nas articulações",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Antiinflamatório",
                    "quantidade": 15,
                    "instrucoes": "Tomar 1 comprimido a cada 12 horas"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Exercícios de alongamento",
                    "frequencia": "Diária"
                }
            ]
        }
    },
    {
        "data": ISODate("2024-12-12"),
       "medico_id": ObjectId("66e96ae976efecbc5e470c29"),
        "paciente_id": ObjectId("66e96b0576efecbc5e470c42"),
        "valor": 195,
        "conveniada": true,
        "especialidade_buscada": "Gastroenterologia",
        "descricao": "Paciente idoso em acompanhamento",
        "receita": {
            "medicamentos": [
                {
                    "nome": "Antiinflamatório",
                    "quantidade": 15,
                    "instrucoes": "Tomar 1 comprimido a cada 12 horas"
                }
            ],
            "tratamentos": [
                {
                    "nome": "Avaliação geriátrica",
                    "frequencia": "Anual"
                }
            ]
        }
    }
          
]);
