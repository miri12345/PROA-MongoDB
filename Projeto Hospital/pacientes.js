db.pacientes.insertMany([
    {
        "_id": ObjectId("66e96b0576efecbc5e470c28"),
        "nome": "Paulo Santos",
        "data_nascimento": ISODate("1995-02-14"),
        "Gênero": "masculino",
        "Etnia": "Branco",
        "altura": 1.75,
        "peso": 50,
        "endereco": {
            "logradouro": "Rua A",
            "numero": "10",
            "bairro": "Centro",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "12345678"
        },
        "contato": {
            "telefone": "111122223333",
            "email": "paulo@gmail.com"
        },
        "convenio": {
            "nome": "Amil",
            "validade": ISODate("2026-12-31"),
            "CNPJ": "23456789000102",
            "carencia": 60
        },
        "documentos": {
            "CPF": "98765432100",
            "RG": "SP123456"
        },
        "conveniada": true
    },
    {
        "_id": ObjectId("66e96b0576efecbc5e470c29"),
        "nome": "Carla Souza",
        "data_nascimento": ISODate("1990-07-23"),
        "Gênero": "feminino",
        "Etnia": "Parda",
        "altura": 1.68,
        "peso": 60,
        "endereco": {
            "logradouro": "Avenida B",
            "numero": "100",
            "bairro": "Jardim",
            "cidade": "Rio de Janeiro",
            "estado": "RJ",
            "CEP": "98765432"
        },
        "contato": {
            "telefone": "99999888877",
            "email": "carla@gmail.com"
        },
        "convenio": {
            "nome": "Bradesco Saúde",
            "validade": ISODate("2026-05-31"),
            "CNPJ": "34567890100203",
            "carencia": 90
        },
        "documentos": {
            "CPF": "12345678901",
            "RG": "RJ654321"
        },
        "conveniada": true
    },
    { 
        "_id": ObjectId("66e96b0576efecbc5e470c30"),
        "nome": "Marcelo Farias",
        "data_nascimento": ISODate("1985-04-10"),
        "Gênero": "masculino",
        "Etnia": "Negro",
        "altura": 1.82,
        "peso": 85,
        "endereco": {
            "logradouro": "Rua C",
            "numero": "5",
            "bairro": "Vila Nova",
            "cidade": "Belo Horizonte",
            "estado": "MG",
            "CEP": "76543210"
        },
        "contato": {
            "telefone": "98888777766",
            "email": "marcelo@gmail.com"
        },
        "convenio": {
            "nome": "Unimed",
            "validade": ISODate("2026-09-30"),
            "CNPJ": "45678901200304",
            "carencia": 30
        },
        "documentos": {
            "CPF": "23456789012",
            "RG": "MG123456"
        },
        "conveniada": true
    },
    {
        "_id": ObjectId("66e96b0576efecbc5e470c31"),
        "nome": "Ana Oliveira",
        "data_nascimento": ISODate("1997-11-11"),
        "Gênero": "feminino",
        "Etnia": "Branca",
        "altura": 1.60,
        "peso": 55,
        "endereco": {
            "logradouro": "Rua D",
            "numero": "300",
            "bairro": "Centro",
            "cidade": "Curitiba",
            "estado": "PR",
            "CEP": "87654321"
        },
        "contato": {
            "telefone": "96666555544",
            "email": "ana@gmail.com"
        },
        "convenio": {
            "nome": "SulAmérica Saúde",
            "validade": ISODate("2026-01-15"),
            "CNPJ": "56789012300405",
            "carencia": 45
        },
        "documentos": {
            "CPF": "34567890123",
            "RG": "PR654321"
        },
        "conveniada": true
    },
    {
        "_id": ObjectId("66e96b0576efecbc5e470c32"),
        "nome": "Rafael Silva",
        "data_nascimento": ISODate("1988-09-29"),
        "Gênero": "masculino",
        "Etnia": "Pardo",
        "altura": 1.78,
        "peso": 70,
        "endereco": {
            "logradouro": "Avenida E",
            "numero": "20",
            "bairro": "Copacabana",
            "cidade": "Rio de Janeiro",
            "estado": "RJ",
            "CEP": "65432109"
        },
        "contato": {
            "telefone": "97777444433",
            "email": "rafael@gmail.com"
        },
        "convenio": {
            "nome": "Amil",
            "validade": ISODate("2026-07-22"),
            "CNPJ": "67890123400506",
            "carencia": 60
        },
        "documentos": {
            "CPF": "45678901234",
            "RG": "RJ987654"
        },
        "conveniada": true
    },
    {
        "_id": ObjectId("66e96b0576efecbc5e470c33"),
        "nome": "Bianca Andrade",
        "data_nascimento": ISODate("1992-03-05"),
        "Gênero": "feminino",
        "Etnia": "Negra",
        "altura": 1.70,
        "peso": 68,
        "endereco": {
            "logradouro": "Rua F",
            "numero": "120",
            "bairro": "Bela Vista",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "76543298"
        },
        "contato": {
            "telefone": "96666333211",
            "email": "bianca@gmail.com"
        },
        "convenio": {
            "nome": "Bradesco Saúde",
            "validade": ISODate("2025-02-28"),
            "CNPJ": "78901234500607",
            "carencia": 90
        },
        "documentos": {
            "CPF": "56789012345",
            "RG": "SP987654"
        },
        "conveniada": true
    },
    {
        "_id": ObjectId("66e96b0576efecbc5e470c34"),
        "nome": "Eduardo Costa",
        "data_nascimento": ISODate("1984-12-12"),
        "Gênero": "masculino",
        "Etnia": "Branco",
        "altura": 1.80,
        "peso": 88,
        "endereco": {
            "logradouro": "Avenida G",
            "numero": "250",
            "bairro": "Leblon",
            "cidade": "Rio de Janeiro",
            "estado": "RJ",
            "CEP": "54321098"
        },
        "contato": {
            "telefone": "93322111000",
            "email": "eduardo@gmail.com"
        },
        "convenio": {
            "nome": "Unimed",
            "validade": ISODate("2026-06-30"),
            "CNPJ": "89012345600708",
            "carencia": 30
        },
        "documentos": {
            "CPF": "67890123456",
            "RG": "RJ123987"
        },
        "conveniada": true
    },
    {
        "_id": ObjectId("66e96b0576efecbc5e470c35"),
        "nome": "Lucas Pereira",
        "data_nascimento": ISODate("1991-06-20"),
        "Gênero": "masculino",
        "Etnia": "Pardo",
        "altura": 1.73,
        "peso": 75,
        "endereco": {
            "logradouro": "Rua H",
            "numero": "75",
            "bairro": "Moema",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "43210987"
        },
        "contato": {
            "telefone": "94444333222",
            "email": "lucas@gmail.com"
        },
        "convenio": {
            "nome": "SulAmérica Saúde",
            "validade": ISODate("2026-03-25"),
            "CNPJ": "90123456700809",
            "carencia": 45
        },
        "documentos": {
            "CPF": "78901234567",
            "RG": "SP321654"
        },
        "conveniada": true
    },
    {
        "_id": ObjectId("66e96b0576efecbc5e470c36"),
        "nome": "Juliana Mendes",
        "data_nascimento": ISODate("1994-08-01"),
        "Gênero": "feminino",
        "Etnia": "Branca",
        "altura": 1.65,
        "peso": 58,
        "endereco": {
            "logradouro": "Rua I",
            "numero": "300",
            "bairro": "Jardins",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "32109876"
        },
        "contato": {
            "telefone": "91111223344",
            "email": "juliana@gmail.com"
        },
        "convenio": {
            "nome": "Amil",
            "validade": ISODate("2026-04-18"),
            "CNPJ": "01234567800910",
            "carencia": 60
        },
        "documentos": {
            "CPF": "89012345678",
            "RG": "SP654987"
        },
        "conveniada": true
    },
    {
        "_id": ObjectId("66e96b0576efecbc5e470c37"),
        "nome": "Ricardo Lima",
        "data_nascimento": ISODate("1983-05-15"),
        "Gênero": "masculino",
        "Etnia": "Negro",
        "altura": 1.85,
        "peso": 90,
        "endereco": {
            "logradouro": "Avenida J",
            "numero": "400",
            "bairro": "Ipanema",
            "cidade": "Rio de Janeiro",
            "estado": "RJ",
            "CEP": "21098765"
        },
        "contato": {
            "telefone": "93322444555",
            "email": "ricardo@gmail.com"
        },
        "convenio": {
            "nome": "Bradesco Saúde",
            "validade": ISODate("2026-10-12"),
            "CNPJ": "23456789001011",
            "carencia": 90
        },
        "documentos": {
            "CPF": "90123456789",
            "RG": "RJ123321"
        },
        "conveniada": true
    },
    {
        "_id": ObjectId("66e96b0576efecbc5e470c38"),
        "nome": "Fernanda Gomes",
        "data_nascimento": ISODate("1989-03-10"),
        "Gênero": "feminino",
        "Etnia": "Parda",
        "altura": 1.62,
        "peso": 65,
        "endereco": {
            "logradouro": "Rua K",
            "numero": "35",
            "bairro": "Vila Mariana",
            "cidade": "São Paulo",
            "estado": "SP",
            "CEP": "12345123"
        },
        "contato": {
            "telefone": "99999333322",
            "email": "fernanda@gmail.com"
        },
        "convenio": {
            "nome": "Unimed",
            "validade": ISODate("2026-07-14"),
            "CNPJ": "34567890100102",
            "carencia": 30
        },
        "documentos": {
            "CPF": "34567891234",
            "RG": "SP654987"
        },
        "conveniada": true
    },
    {
        "_id": ObjectId("66e96b0576efecbc5e470c39"),
        "nome": "Rodrigo Almeida",
        "data_nascimento": ISODate("1987-01-25"),
        "Gênero": "masculino",
        "Etnia": "Negro",
        "altura": 1.79,
        "peso": 82,
        "endereco": {
            "logradouro": "Avenida L",
            "numero": "140",
            "bairro": "Centro",
            "cidade": "Salvador",
            "estado": "BA",
            "CEP": "45678901"
        },
        "contato": {
            "telefone": "98888999966",
            "email": "rodrigo@gmail.com"
        },
        "convenio": {
            "nome": "SulAmérica Saúde",
            "validade": ISODate("2026-11-20"),
            "CNPJ": "56789012300304",
            "carencia": 45
        },
        "documentos": {
            "CPF": "45678901234",
            "RG": "BA123456"
        },
        "conveniada": true
    },
    {
        "_id": ObjectId("66e96b0576efecbc5e470c40"),
        "nome": "Mariana Pereira",
        "data_nascimento": ISODate("1993-05-30"),
        "Gênero": "feminino",
        "Etnia": "Branca",
        "altura": 1.68,
        "peso": 59,
        "endereco": {
            "logradouro": "Rua M",
            "numero": "85",
            "bairro": "Boa Vista",
            "cidade": "Recife",
            "estado": "PE",
            "CEP": "65432101"
        },
        "contato": {
            "telefone": "97777666633",
            "email": "mariana@gmail.com"
        },
        "convenio": {
            "nome": "Bradesco Saúde",
            "validade": ISODate("2026-02-18"),
            "CNPJ": "67890123400506",
            "carencia": 60
        },
        "documentos": {
            "CPF": "56789012345",
            "RG": "PE987654"
        },
        "conveniada": true
    },
    {
        "_id": ObjectId("66e96b0576efecbc5e470c41"),
        "nome": "João Oliveira",
        "data_nascimento": ISODate("2008-08-12"),
        "Gênero": "masculino",
        "Etnia": "Pardo",
        "altura": 1.73,
        "peso": 78,
        "endereco": {
            "logradouro": "Avenida N",
            "numero": "55",
            "bairro": "Centro",
            "cidade": "Brasília",
            "estado": "DF",
            "CEP": "78901234"
        },
        "contato": {
            "telefone": "96666444411",
            "email": "joao@gmail.com"
        },
        "convenio": {
            "nome": "Amil",
            "validade": ISODate("2026-09-09"),
            "CNPJ": "78901234500607",
            "carencia": 60
        },
        "documentos": {
            "CPF": "67890123456",
            "RG": "DF654321"
        },
        "conveniada": true
    },
    {
        "_id": ObjectId("66e96b0576efecbc5e470c42"),
        "nome": "Luciana Torres",
        "data_nascimento": ISODate("2007-12-05"),
        "Gênero": "feminino",
        "Etnia": "Negra",
        "altura": 1.75,
        "peso": 70,
        "endereco": {
            "logradouro": "Rua O",
            "numero": "200",
            "bairro": "Copacabana",
            "cidade": "Rio de Janeiro",
            "estado": "RJ",
            "CEP": "87654321"
        },
        "contato": {
            "telefone": "94444333222",
            "email": "luciana@gmail.com"
        },
        "convenio": {
            "nome": "Unimed",
            "validade": ISODate("2026-05-15"),
            "CNPJ": "89012345600708",
            "carencia": 30
        },
        "documentos": {
            "CPF": "78901234567",
            "RG": "RJ123987"
        },
        "conveniada": true
    }

]);
