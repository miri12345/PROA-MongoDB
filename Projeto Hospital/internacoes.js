db.internacoes.insertMany([
    {
        "paciente_id": ObjectId("66e96b0576efecbc5e470c33"),
        "medico_id": ObjectId("66e96ae976efecbc5e470c24") ,
        "data_entrada": ISODate("2019-02-12"),
        "data_prevista_alta": ISODate("2019-02-17"),
        "data_efetiva_alta": ISODate("2019-02-16"),
        "procedimentos": [
            "Cirurgia",
            "Exame de sangue"
        ],
        "quarto_numero": 101,
        "quarto_id": ObjectId('66f197794fe19755df1eb9da'),
        "valor_diario": 300,
        "enfermeiro_id": [
            ObjectId("646f1c8e1b2c4c1d2c8b4567"),
            ObjectId("646f1c8e1b2c4c1d2c8b4568")

        ]
        
    },
    {
        "paciente_id": ObjectId("66e96b0576efecbc5e470c34"),
        "medico_id": ObjectId("66e96ae976efecbc5e470c25"),
        "data_entrada": ISODate("2020-05-20"),
        "data_prevista_alta": ISODate("2020-05-25"),
        "data_efetiva_alta": ISODate("2020-05-24"),
        "procedimentos": [
            "Exame de imagem",
            "Tratamento de infecção"
        ],
        "quarto_numero": 102,
        "quarto_id": ObjectId('66f197794fe19755df1eb9db'),
        "valor_diario": 200,
        "enfermeiro_id":[
            ObjectId("646f1c8e1b2c4c1d2c8b4569"),
            ObjectId("646f1c8e1b2c4c1d2c8b4570")
        ] 
    },
    {
        "paciente_id": ObjectId("66e96b0576efecbc5e470c35"),
        "medico_id": ObjectId("66e96ae976efecbc5e470c26"),
        "data_entrada": ISODate("2021-09-15"),
        "data_prevista_alta": ISODate("2021-09-20"),
        "data_efetiva_alta": ISODate("2021-09-19"),
        "procedimentos": [
            "Avaliação clínica",
            "Cirurgia de emergência"
        ],
        "quarto_numero": 103,
        "quarto_id": ObjectId('66f197794fe19755df1eb9dc'),
        "valor_diario": 150,
        "enfermeiro_id": [
            ObjectId("646f1c8e1b2c4c1d2c8b4571"),
            ObjectId("646f1c8e1b2c4c1d2c8b4572")
        ] 
    },
    {
        "paciente_id": ObjectId("66e96b0576efecbc5e470c36"),
        "medico_id": ObjectId("66e96ae976efecbc5e470c27"),
        "data_entrada": ISODate("2022-01-10"),
        "data_prevista_alta": ISODate("2022-01-15"),
        "data_efetiva_alta": ISODate("2022-01-14"),
        "procedimentos": [
            "Internação para observação",
            "Exame laboratorial"
        ],
        "quarto_numero": 104,
        "quarto_id": ObjectId('66f197794fe19755df1eb9dd'),
        "valor_diario": 150,
        "enfermeiro_id":[
            ObjectId("646f1c8e1b2c4c1d2c8b4573"),
            ObjectId("646f1c8e1b2c4c1d2c8b4574")
        ] 
    },
    {
        "paciente_id": ObjectId("66e96b0576efecbc5e470c37"),
        "medico_Id": ObjectId("66e96ae976efecbc5e470c28"),
        "data_entrada": ISODate("2023-03-05"),
        "data_prevista_alta": ISODate("2023-03-10"),
        "data_efetiva_alta": ISODate("2023-03-09"),
        "procedimentos": [
            "Cirurgia eletiva",
            "Consulta pré-anestésica"
        ],
        "quarto_numero": 105,
        "quarto_id": ObjectId('66f197794fe19755df1eb9de'),
        "valor_diario": 300,
        "enfermeiro_id": [
            ObjectId("646f1c8e1b2c4c1d2c8b4577"),
            ObjectId("646f1c8e1b2c4c1d2c8b4578")
        ] 
    },
    {
        "paciente_id": ObjectId("66e96b0576efecbc5e470c38"),
        "medico_id": ObjectId("66e96ae976efecbc5e470c29"),
        "data_entrada": ISODate("2018-07-20"),
        "data_prevista_alta": ISODate("2018-07-25"),
        "data_efetiva_alta": ISODate("2018-07-26"),
        "procedimentos": [
            "Tratamento de queimaduras",
            "Curativos"
        ],
        "quarto_numero": 101,
        "quarto_id": ObjectId('66f197794fe19755df1eb9da'),
        "valor_diario": 300,
        "enfermeiro_id": [
            ObjectId("646f1c8e1b2c4c1d2c8b4577"),
            ObjectId("646f1c8e1b2c4c1d2c8b4578")
        ] 
    },
    {
        "paciente_id": ObjectId("66e96b0576efecbc5e470c39"),
        "medico_id": ObjectId("66e96ae976efecbc5e470c2a"),
        "data_entrada": ISODate("2024-02-15"),
        "data_prevista_alta": ISODate("2024-02-20"),
        "data_efetiva_alta": ISODate("2024-02-22"),
        "procedimentos": [
            "Internação para recuperação",
            "Fisioterapia"
        ],
        "quarto_numero": 102,
        "quarto_id": ObjectId('66f197794fe19755df1eb9db'),
        "valor_diario": 200,
        "enfermeiro_id": [
            ObjectId("646f1c8e1b2c4c1d2c8b4567"),
            ObjectId("646f1c8e1b2c4c1d2c8b4568")
        ]
    }      
]);
