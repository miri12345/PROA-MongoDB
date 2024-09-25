db.medicos.insertMany([
    {
        "_id": ObjectId("66e96ae976efecbc5e470c24"),
        "nome": "Dra. Fernanda Lima",
        "data_nascimento": ISODate("1980-03-15"),
        "especialidades": [
            "Dermatologia",
            "Cosmetologia"
        ],
        "tipo": "Especialista",
        "contato": {
            "telefone": "344578234",
            "email": "fernanda@clinicadermato.com"
        },
        "documentos": {
            "CPF": "45678901234",
            "RG": "647787673",
            "CRM": "SP123456"
        },
        "Em atividade": true
    },
    {
        "_id": ObjectId("66e96ae976efecbc5e470c25"),
        "nome": "Dr. João Ferreira",
        "data_nascimento": ISODate("1972-11-05"),
        "especialidades": [
            "Cardiologia"
        ],
        "tipo": "Especialista",
        "contato": {
            "telefone": "445689321",
            "email": "joao@cardiohospital.com"
        },
        "documentos": {
            "CPF": "56789012345",
            "RG": "847899123",
            "CRM": "RJ567890"
        },
        "Em atividade": true
    },
    {
        "_id": ObjectId("66e96ae976efecbc5e470c26"),
        "nome": "Dra. Marina Silva",
        "data_nascimento": ISODate("1985-07-12"),
        "especialidades": [
            "Neurologia",
            "Psiquiatria",
            "Gastroenterologia"
        ],
        "tipo": "Residente",
        "contato": {
            "telefone": "556712498",
            "email": "marina@neuroclinic.com"
        },
        "documentos": {
            "CPF": "67890123456",
            "RG": "745678321",
            "CRM": "MG234567"
        },
        "Em atividade": false
    },
    {
        "_id": ObjectId("66e96ae976efecbc5e470c27"),
        "nome": "Dr. Lucas Costa",
        "data_nascimento": ISODate("1979-02-19"),
        "especialidades": [
            "Ortopedia",
            "Gastroenterologia"
        ],
        "tipo": "Generalista",
        "contato": {
            "telefone": "667823559",
            "email": "lucas@ortoclinica.com"
        },
        "documentos": {
            "CPF": "78901234567",
            "RG": "856793421",
            "CRM": "BA345678"
        },
        "Em atividade": true
    },
    {
        "_id": ObjectId("66e96ae976efecbc5e470c28"),
        "nome": "Dra. Paula Menezes",
        "data_nascimento": ISODate("1983-09-30"),
        "especialidades": [
            "Endocrinologia"
        ],
        "tipo": "Especialista",
        "contato": {
            "telefone": "778934621",
            "email": "paula@endoclinica.com"
        },
        "documentos": {
            "CPF": "89012345678",
            "RG": "967803512",
            "CRM": "RS678901"
        },
        "Em atividade": true
    },
    {
        "_id": ObjectId("66e96ae976efecbc5e470c29"),
        "nome": "Dr. Thiago Alves",
        "data_nascimento": ISODate("1970-12-25"),
        "especialidades": [
            "Oftalmologia",
            "Gastroenterologia"
        ],
        "tipo": "Especialista",
        "contato": {
            "telefone": "889045732",
            "email": "thiago@oftalmo.com"
        },
        "documentos": {
            "CPF": "90123456789",
            "RG": "678345198",
            "CRM": "PE456789"
        },
        "Em atividade": false
    },
    {
        "_id": ObjectId("66e96ae976efecbc5e470c2a"),
        "nome": "Dr. Gustavo Santos",
        "data_nascimento": ISODate("1990-04-17"),
        "especialidades": [
            "Pediatria",
            "Infectologia"
        ],
        "tipo": "Residente",
        "contato": {
            "telefone": "963852741",
            "email": "gustavo@hospitalpediatra.com"
        },
        "documentos": {
            "CPF": "91234567890",
            "RG": "457891234",
            "CRM": "PR789123"
        },
        "Em atividade": true
    },
    {
        "_id": ObjectId("66e96ae976efecbc5e470c2b"),
        "nome": "Dra. Renata Oliveira",
        "data_nascimento": ISODate("1988-06-25"),
        "especialidades": [
            "Ginecologia"
        ],
        "tipo": "Especialista",
        "contato": {
            "telefone": "951753486",
            "email": "renata@clinicafeminina.com"
        },
        "documentos": {
            "CPF": "23456789012",
            "RG": "129834756",
            "CRM": "SP345678"
        },
        "Em atividade": true
    },
    {
        "_id": ObjectId("66e96ae976efecbc5e470c2c"),
        "nome": "Dr. Bruno Carvalho",
        "data_nascimento": ISODate("1995-01-10"),
        "especialidades": [
            "Neurologia"
        ],
        "tipo": "Residente",
        "contato": {
            "telefone": "987654321",
            "email": "bruno@neurologiclinic.com"
        },
        "documentos": {
            "CPF": "78945612309",
            "RG": "478293561",
            "CRM": "MG567890"
        },
        "Em atividade": true
    },
    {
        "_id": ObjectId("66e96ae976efecbc5e470c2d"),
        "nome": "Dra. Amanda Farias",
        "data_nascimento": ISODate("1992-02-08"),
        "especialidades": [
            "Psiquiatria",
            "Clínica Médica"
        ],
        "tipo": "Generalista",
        "contato": {
            "telefone": "974561328",
            "email": "amanda@mentalhealth.com"
        },
        "documentos": {
            "CPF": "89012345678",
            "RG": "394856712",
            "CRM": "RS901234"
        },
        "Em atividade": true
    },
    {
        "_id": ObjectId("66e96ae976efecbc5e470c2e"),
        "nome": "Dr. Gabriel Almeida",
        "data_nascimento": ISODate("1985-05-20"),
        "especialidades": [
            "Cardiologia",
            "Gastroenterologia"
        ],
        "tipo": "Especialista",
        "contato": {
            "telefone": "11987654321",
            "email": "gabriel.almeida@hospital.com"
        },
        "documentos": {
            "CPF": "12345678901",
            "RG": "SP1234567",
            "CRM": "SP123456"
        },
        "Em atividade": true
    },
    {
        "_id": ObjectId("66e96ae976efecbc5e470c2f"),
        "nome": "Dr. Gabriel Sousa",
        "data_nascimento": ISODate("1990-08-15"),
        "especialidades": [
            "Dermatologia",
            "Pediatria"
        ],
        "tipo": "Especialista",
        "contato": {
            "telefone": "21987654321",
            "email": "gabriel.sousa@hospital.com"
        },
        "documentos": {
            "CPF": "23456789012",
            "RG": "RJ6543210",
            "CRM": "RJ654321"
        },
        "Em atividade": true
    },
    {
        "_id": ObjectId("66e96ae976efecbc5e470c30"),
        "nome": "Dr. Gabriel Costa",
        "data_nascimento": ISODate("1982-11-30"),
        "especialidades": [
            "Ginecologia",
            "Obstetrícia"
        ],
        "tipo": "Especialista",
        "contato": {
            "telefone": "31987654321",
            "email": "gabriel.costa@hospital.com"
        },
        "documentos": {
            "CPF": "34567890123",
            "RG": "MG9876543",
            "CRM": "MG987654"
        },
        "Em atividade": true
    }
]);
