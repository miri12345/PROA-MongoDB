// 1. Todos os dados e o valor médio das consultas do ano de 2024 e das que foram feitas sob convênio
db.consultas.aggregate([
    { $match: { 
        data: { $gte: ISODate("2024-01-01"), $lte: ISODate("2024-12-31") },
        conveniada: true
    }},
    { $group: {
        _id: null,
        valorMedio: { $avg: "$valor" },
        consultas: { $push: "$$ROOT" }
    }},
    { $project: { _id: 0, valorMedio: 1, consultas: 1 } }
]);

// 2. Todos os dados das internações que tiveram data de alta maior que a data prevista para a alta
db.internacoes.find({ $expr: { $gt: ["$data_efetiva_alta", "$data_prevista_alta"] } });

// 3. Receituário completo da primeira consulta registrada com receituário associado
db.consultas.aggregate([
    { $match: { "receita.medicamentos": { $exists: true, $not: { $size: 0 } } } },
    { $sort: { data: 1 } },
    { $limit: 1 },
    { $project: { receita: 1 } }
]);

// 4. Todos os dados da consulta de maior valor e também da de menor valor (ambas as consultas não foram realizadas sob convênio)
db.consultas.aggregate([
    { $match: { conveniada: false } },
    { $facet: {
        maior: [{ $sort: { valor: -1 } }, { $limit: 1 }],
        menor: [{ $sort: { valor: 1 } }, { $limit: 1 }]
    }}
]);

/* 5. Todos os dados das internações em seus respectivos quartos, calculando o total da internação a partir do valor de 
diária do quarto e o número de dias entre a entrada e a alta*/
db.internacoes.aggregate([
    {
        $addFields: {
            totalDias: {
                $divide: [
                    { $subtract: ["$data_efetiva_alta", "$data_entrada"] },
                    1000 * 60 * 60 * 24
                ]
            }
        }
    },
    {
        $addFields: {
            totalInternacao: { 
                $multiply: ["$totalDias", "$valor_diario"] 
            }
        }
    }
]);

// 6. Data, procedimento e número de quarto de internações em quartos do tipo “apartamento”
db.internacoes.find({ tipo: "apartamento" }, { data_entrada: 1, procedimentos: 1, quarto_numero: 1 });
db.internacoes.find(
    { tipo: "apartamento" },
    { data_entrada: 1, procedimentos: 1, quarto_numero: 1, quarto_id: 1 }
);
db.internacoes.aggregate([
    {
        $lookup: {
            from: "quartos", 
            localField: "quarto_id", 
            foreignField: "_id", 
            as: "quarto_info" 
        }
    },
    {
        $unwind: "$quarto_info" 
    },
    {
        $match: {
            "quarto_info.tipo": "Apartamento" 
        }
    },
    {
        $project: {
            data_entrada: 1,
            procedimentos: 1,
            quarto_numero: "$quarto_info.numero"
        }
    }
]);



/* 7. Nome do paciente, data da consulta e especialidade de todas as consultas em que os pacientes eram menores de 18 anos na 
data da consulta e cuja especialidade não seja “pediatria”, ordenando por data de realização da consulta*/

/* 8. Nome do paciente, nome do médico, data da internação e procedimentos das internações realizadas por médicos da especialidade 
“gastroenterologia”, que tenham acontecido em “enfermaria”*/



// 9. Os nomes dos médicos, seus CRMs e a quantidade de consultas que cada um realizou
db.consultas.aggregate([
    {
        $group: {
            _id: "$medico_id", 
            totalConsultas: { $sum: 1 }
        }
    },
    {
        $lookup: {
            from: "medicos", 
            localField: "_id", 
            foreignField: "_id", 
            as: "medico"
        }
    },
    {
        $unwind: "$medico" 
    },
    {
        $project: {
            nome: "$medico.nome", 
            CRM: "$medico.CRM", 
            totalConsultas: 1 
        }
    }
]);


// 10. Todos os médicos que tenham "Gabriel" no nome
db.medicos.find({ nome: /Gabriel/ });

// 11. Os nomes, CORENs e número de internações de enfermeiros que participaram de mais de uma internação

db.internacoes.aggregate([
    { $unwind: "$enfermeiro_id" }, 
    {
        $group: {
            _id: "$enfermeiro_id", 
            totalInternacoes: { $sum: 1 } 
        }
    },
    { $match: { totalInternacoes: { $gt: 1 } } }, 
    {
        $project: {
            enfermeiro_id: "$_id",
            totalInternacoes: 1 
        }
    }
]);
