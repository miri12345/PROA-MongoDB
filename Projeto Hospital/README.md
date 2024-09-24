# Projeto de Gerenciamento de Consultas e Internações
Este projeto tem como objetivo simular o gerenciamento de consultas e internações de uma instituição médica. O banco de dados é estruturado no MongoDB, onde consultas e internações são armazenadas e gerenciadas por meio de diversas consultas e agregações. O sistema foi projetado para gerar relatórios e obter informações específicas sobre pacientes, médicos, internações e consultas, a fim de facilitar a tomada de decisões e o acompanhamento dos processos hospitalares.

### Estrutura do Projeto
O projeto contém duas entidades principais:

1. **Consultas** 📅

Representa as consultas realizadas pelos pacientes na instituição. Cada consulta contém os seguintes atributos principais:

* data: Data da consulta.
* valor: Valor cobrado pela consulta.
* conveniada: Indica se a consulta foi realizada sob convênio.
* especialidade: Especialidade médica relacionada à consulta.
* medico_id: id do médico responsável.
* paciente_data_nascimento: Data de nascimento do paciente.
* receita: Receituário, incluindo os medicamentos receitados.

2. **Internações** 🛏️

Representa as internações realizadas na instituição. Cada internação contém os seguintes atributos principais:

* data_entrada: Data de entrada do paciente.
* data_efetiva_alta: Data efetiva de alta do paciente.
* data_prevista_alta: Data prevista para a alta.
* tipo_quarto: Tipo de quarto utilizado pelo paciente (enfermaria, apartamento e quarto duplo).
* valor_diario: Valor da diária do quarto utilizado.
* medico_id: id do médico responsável pela internação.
* enfermeiro_id: id dos enfermeiros responsáveis.
* procedimentos: Procedimentos médicos realizados durante a internação.

3. **Médicos** 🩺

Contém as informações dos médicos da instituição:

* nome: Nome do médico.
* CRM: Número de registro no Conselho Regional de Medicina (CRM).
* especialidades: Lista de especialidades médicas do profissional.

4. **Enfermeiros** 👩‍⚕️

Contém as informações dos enfermeiros da instituição:

* nome: Nome do enfermeiro.
* COREN: Número de registro no Conselho Regional de Enfermagem (COREN).

### Relacionamento Entre as Entidades

* Consultas: Cada consulta está associada a um médico (identificado pelo medico_CRM) e a um paciente.
* Internações: Cada internação está vinculada a um médico (via medico_id) e enfermeiros responsáveis (via enfermeiro_id). Além disso, há informações sobre o tipo de quarto utilizado e os procedimentos realizados.
* Médicos e Enfermeiros: A partir dos id dos médicos e id dos enfermeiros, podemos realizar consultas detalhadas sobre quem está envolvido em cada internação ou consulta.

### Diagrama de Entidade-Relacionamento

<div>
</p align="center">
<img height="550em" src="https://github.com/miri12345/PROA-MongoDB/blob/main/Projeto%20Hospital/Diagrama%20Entidade-Relacionamento.png" />

</div>

### Consultas Realizadas

1. Consultas do Ano de 2024 e Convênio
Consulta que retorna todas as consultas realizadas no ano de 2024 sob convênio, bem como o valor médio dessas consultas. 
```js
       > db.consultas.aggregate([
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
<  valorMedio: 219.54545454545453

```
2. Internações com Alta Posterior à Data Prevista
Consulta que busca todas as internações em que a data efetiva de alta foi posterior à data prevista.

```js
> db.internacoes.find({ $expr: { $gt: ["$data_efetiva_alta", "$data_prevista_alta"] } });
(Alguns dos resultados)
< {
  _id: ObjectId('66f1adc84fe19755df1eba21'),
  paciente_id: ObjectId('66e96b0576efecbc5e470c38'),
  medico_id: ObjectId('66e96ae976efecbc5e470c29'),
  data_entrada: 2018-07-20T00:00:00.000Z,
  data_prevista_alta: 2018-07-25T00:00:00.000Z,
  data_efetiva_alta: 2018-07-26T00:00:00.000Z,
  procedimentos: [
    'Tratamento de queimaduras',
    'Curativos'
  ],
  quarto_numero: 101,
  quarto_id: ObjectId('66f197794fe19755df1eb9da'),
  valor_diario: 300,
  enfermeiro_id: [
    ObjectId('646f1c8e1b2c4c1d2c8b4577'),
    ObjectId('646f1c8e1b2c4c1d2c8b4578')
  ]
}
{
  _id: ObjectId('66f1adc84fe19755df1eba22'),
  paciente_id: ObjectId('66e96b0576efecbc5e470c39'),
  medico_id: ObjectId('66e96ae976efecbc5e470c2a'),
  data_entrada: 2024-02-15T00:00:00.000Z,
  data_prevista_alta: 2024-02-20T00:00:00.000Z,
  data_efetiva_alta: 2024-02-22T00:00:00.000Z,
  procedimentos: [
    'Internação para recuperação',
    'Fisioterapia'
  ],
  quarto_numero: 102,
  quarto_id: ObjectId('66f197794fe19755df1eb9db'),
  valor_diario: 200,
  enfermeiro_id: [
    ObjectId('646f1c8e1b2c4c1d2c8b4567'),
    ObjectId('646f1c8e1b2c4c1d2c8b4568')
  ]
}

```

3. Primeira Consulta com Receituário Associado
Retorna o receituário completo da primeira consulta registrada que possui medicamentos receitados.

```js
> db.consultas.aggregate([
    { $match: { "receita.medicamentos": { $exists: true, $not: { $size: 0 } } } },
    { $sort: { data: 1 } },
    { $limit: 1 },
    { $project: { receita: 1 } }
]);

< {
  _id: ObjectId('66f1a79a4fe19755df1eba09'),
  receita: {
    medicamentos: [
      {
        nome: 'Antitérmico',
        quantidade: 5,
        instrucoes: 'Tomar 1 comprimido a cada 6 horas'
      }
    ],
    tratamentos: [
      {
        nome: 'Gargarejo com água morna',
        frequencia: '3 vezes ao dia'
      }
    ]
  }
}
```

4. Consulta de Maior e Menor Valor (sem Convênio)
Agrega os dados da consulta de maior e menor valor que não foram realizadas sob convênio.

```js
> db.consultas.aggregate([
    { $match: { conveniada: false } },
    { $facet: {
        maior: [{ $sort: { valor: -1 } }, { $limit: 1 }],
        menor: [{ $sort: { valor: 1 } }, { $limit: 1 }]
    }}
]);

< {
  maior: [
    {
      _id: ObjectId('66f1a79a4fe19755df1eba0b'),
      data: 2024-06-15T00:00:00.000Z,
      medico_id: ObjectId('66e96ae976efecbc5e470c27'),
      paciente_id: ObjectId('66e96b0576efecbc5e470c31'),
      valor: 300,
      conveniada: false,
      especialidade_buscada: 'Ortopedia',
      descricao: 'Paciente com fratura no punho',
      receita: {
        medicamentos: [
          {
            nome: 'Analgésico',
            quantidade: 20,
            instrucoes: 'Tomar 1 comprimido a cada 8 horas'
          }
        ],
        tratamentos: [
          {
            nome: 'Imobilização com gesso',
            frequencia: 'Durante 30 dias'
          }
        ]
      }
    }
  ],
  menor: [
    {
      _id: ObjectId('66f1a79a4fe19755df1eba09'),
      data: 2021-02-14T00:00:00.000Z,
      medico_id: ObjectId('66e96ae976efecbc5e470c25'),
      paciente_id: ObjectId('66e96b0576efecbc5e470c29'),
      valor: 180,
      conveniada: false,
      especialidade_buscada: 'Pediatria',
      descricao: 'Paciente com dor de garganta',
      receita: {
        medicamentos: [
          {
            nome: 'Antitérmico',
            quantidade: 5,
            instrucoes: 'Tomar 1 comprimido a cada 6 horas'
          }
        ],
        tratamentos: [
          {
            nome: 'Gargarejo com água morna',
            frequencia: '3 vezes ao dia'
          }
        ]
      }
    }
  ]
}
```

5. Cálculo do Total da Internação
Calcula o total da internação a partir do número de dias internado e o valor da diária do quarto utilizado.

```js
> db.internacoes.aggregate([
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
 (Alguns dos resultados)
< {
  _id: ObjectId('66f19e1e4fe19755df1eb9e6'),
  paciente_id: ObjectId('66e96b0576efecbc5e470c33'),
  medico_id: ObjectId('66e96ae976efecbc5e470c24'),
  data_entrada: 2019-02-12T00:00:00.000Z,
  data_prevista_alta: 2019-02-17T00:00:00.000Z,
  data_efetiva_alta: 2019-02-16T00:00:00.000Z,
  procedimentos: [
    'Cirurgia',
    'Exame de sangue'
  ],
  quarto_numero: 101,
  valor_diario: 300,
  enfermeiro_id: [
    ObjectId('646f1c8e1b2c4c1d2c8b4567'),
    ObjectId('646f1c8e1b2c4c1d2c8b4568')
  ],
  totalDias: 4,
  totalInternacao: 1200
}

```

6. Internações em Quartos do Tipo "Apartamento"
Retorna todas as internações realizadas em quartos do tipo "apartamento", mostrando data de entrada, procedimentos e o número do quarto.

```js
> db.internacoes.aggregate([
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

< {
  _id: ObjectId('66f1a1794fe19755df1eb9ed'),
  data_entrada: 2019-02-12T00:00:00.000Z,
  procedimentos: [
    'Cirurgia',
    'Exame de sangue'
  ],
  quarto_numero: '101'
}
{
  _id: ObjectId('66f1a1794fe19755df1eb9f1'),
  data_entrada: 2023-03-05T00:00:00.000Z,
  procedimentos: [
    'Cirurgia eletiva',
    'Consulta pré-anestésica'
  ],
  quarto_numero: '105'
}
{
  _id: ObjectId('66f1a1794fe19755df1eb9f2'),
  data_entrada: 2018-07-20T00:00:00.000Z,
  procedimentos: [
    'Tratamento de queimaduras',
    'Curativos'
  ],
  quarto_numero: '101'
}

```

7. Consultas de Pacientes Menores de 18 Anos (exceto Pediatria)
Retorna o nome do paciente, a data da consulta e a especialidade médica para todos os pacientes menores de 18 anos que realizaram consultas, exceto aqueles cuja especialidade era pediatria.

```js

```

8. Internações Realizadas por Médicos de Gastroenterologia
Consulta que retorna o nome do paciente, nome do médico, data de entrada e procedimentos para internações realizadas em quartos do tipo "enfermaria" por médicos especializados em gastroenterologia.

```js

```

9. Quantidade de Consultas por Médico
Agrega a quantidade de consultas realizadas por cada médico, retornando o nome do médico, seu CRM e o total de consultas.

```js
> db.consultas.aggregate([
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
(Alguns dos resultados)
< {
  _id: ObjectId('66e96ae976efecbc5e470c28'),
  totalConsultas: 2,
  nome: 'Dra. Paula Menezes'
}
{
  _id: ObjectId('66e96ae976efecbc5e470c30'),
  totalConsultas: 1,
  nome: 'Dr. Gabriel Costa'
}
{
  _id: ObjectId('66e96ae976efecbc5e470c29'),
  totalConsultas: 2,
  nome: 'Dr. Thiago Alves'
}
{
  _id: ObjectId('66e96ae976efecbc5e470c2c'),
  totalConsultas: 1,
  nome: 'Dr. Bruno Carvalho'
}
```

10. Médicos com Nome "Gabriel"
Retorna todos os médicos que possuem "Gabriel" no nome.

```js
> db.medicos.find({ nome: /Gabriel/ });

```

11. Enfermeiros Envolvidos em Mais de Uma Internação
Busca os enfermeiros que participaram de mais de uma internação, retornando seus nomes, COREN e o número total de internações.

```js
> db.internacoes.aggregate([
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

< {
  _id: ObjectId('646f1c8e1b2c4c1d2c8b4577'),
  totalInternacoes: 2,
  enfermeiro_id: ObjectId('646f1c8e1b2c4c1d2c8b4577')
}
{
  _id: ObjectId('646f1c8e1b2c4c1d2c8b4578'),
  totalInternacoes: 2,
  enfermeiro_id: ObjectId('646f1c8e1b2c4c1d2c8b4578')
}
{
  _id: ObjectId('646f1c8e1b2c4c1d2c8b4567'),
  totalInternacoes: 2,
  enfermeiro_id: ObjectId('646f1c8e1b2c4c1d2c8b4567')
}
{
  _id: ObjectId('646f1c8e1b2c4c1d2c8b4568'),
  totalInternacoes: 2,
  enfermeiro_id: ObjectId('646f1c8e1b2c4c1d2c8b4568')
}

```

### Possíveis Resultados
As consultas e agregações realizadas podem gerar diferentes tipos de resultados, como:

* Relatórios financeiros com o valor médio das consultas de determinado período.
* Informações detalhadas sobre internações e consultas específicas.
* Identificação de padrões, como internações que duraram mais do que o previsto.
* Relatórios de produtividade, mostrando a quantidade de consultas realizadas por cada médico ou o número de internações por enfermeiro.

Esses resultados podem ser utilizados para otimizar processos administrativos, melhorar o atendimento aos pacientes e realizar tomadas de decisão mais informadas.

### Tecnologias Utilizadas
* **MongoDBCompass:** Banco de dados NoSQL para armazenamento e consulta de dados estruturados e semiestruturados.
* **Visual Studio Code:** JavaScript
* **Agregações e Consultas:** Utilização das operações de aggregate, find, $lookup, $group, $match, entre outras, para realizar consultas complexas.
