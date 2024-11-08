# Momento

Contém a base de indicados da empresa Momento para treinar consultas complexas no MongoDB.

Vamos fazer algumas perguntas para brincar de análise exploratória de dados com MongoDB.

* Quantos funcionarios da empresa Momento trabalham no departamento de vendas?
 ```js
  > db.funcionarios.countDocuments({ departamento: ObjectId('85992103f9b3e0b3b3c1fe71') });

  < 10
```
* Inclua suas próprias informações no departamento de Tecnologia da empresa.

```js
  > db.funcionarios.insertOne({
  nome: 'Miriã Moreno',
  telefone: '11 91116-1868',
  email: 'miria5389@gmail.com',
  dataAdmissao: '2024-09-23',
  cargo: 'Desenvolvedora FullStack',
  salario: 15000,
  departamento: ObjectId('85992103f9b3e0b3b3c1fe74')
});
  < 2{
  acknowledged: true,
  insertedId: ObjectId('66f1ce967130a821847c1fa5')
}
  ```

* Agora diga, quantos funcionários temos ao total na empresa?

```js
  > db.funcionarios.countDocuments();
  < 24
```

* E quanto ao Departamento de Tecnologia?
```js
> db.funcionarios.countDocuments({ departamento: ObjectId('85992103f9b3e0b3b3c1fe74') });
< 6
```
* Qual a média salarial do departamento de tecnologia?
```js
> db.funcionarios.aggregate([
    { $match: { departamento: ObjectId('85992103f9b3e0b3b3c1fe74') } },
    { $group: { _id: null, mediaSalarial: { $avg: "$salario" } } }
]);
< {
  _id: null,
  mediaSalarial: 6300
}
```
* Quanto o departamento de Vendas gasta em salários?
```js
> db.funcionarios.aggregate([
    { $match: { departamento: ObjectId('85992103f9b3e0b3b3c1fe71') } },
    { $group: { _id: null, totalSalarios: { $sum: "$salario" } } }
]);
< {
  _id: null,
  totalSalarios: 95100
}
```
* Um novo departamento foi criado. O departamento de Inovações.
  Ele será locado no Brasil. Por favor, adicione-o no banco de dados da empresa colocando quaisquer informações que você achar relevantes.
```js
 > db.inovacoes.insertMany([
    {
        nome: 'Plataforma de Aprendizado Online',
        descricao: 'Uma plataforma interativa para cursos online, com recursos de gamificação.',
        dataLancamento: ISODate('2023-01-15'),
        equipeResponsavel: ['Desenvolvimento', 'Design'],
        impactoEstimado: 'Aumentar a adesão ao aprendizado em 30%.'
    },
  ]);
  < {
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('66f1d2d77130a821847c1fa7'),
    '1': ObjectId('66f1d2d77130a821847c1fa8'),
    '2': ObjectId('66f1d2d77130a821847c1fa9'),
    '3': ObjectId('66f1d2d77130a821847c1faa'),
    '4': ObjectId('66f1d2d77130a821847c1fab')
  }
}
```
* O departamento de Inovações está sem funcionários. Inclua alguns colegas de turma nesse departamento.
```js
Um exemplo
> db.funcionarios.insertMany([
    {
        nome: 'Ana Silva',
        telefone: '11 91234-5678',
        email: 'ana.silva@gmail.com',
        dataAdmissao: ISODate('2024-09-23'),
        cargo: 'Analista de Inovação',
        salario: 12000,
        departamento: ObjectId('66f1d1d07130a821847c1fa6')
    },
< {
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('66f1d52edc000156e87a8c67'),
    '1': ObjectId('66f1d52edc000156e87a8c68'),
    '2': ObjectId('66f1d52edc000156e87a8c69'),
    '3': ObjectId('66f1d52edc000156e87a8c6a'),
    '4': ObjectId('66f1d52edc000156e87a8c6b')
  }
}
```

* Quantos funcionarios a empresa Momento tem agora?

```js
  > db.funcionarios.countDocuments();
  < 29
```

* Quantos funcionários da empresa Momento possuem conjuges?
```js
> db.funcionarios.countDocuments({
    "dependentes.conjuge": { $exists: true }  // Verifica se o campo conjuge existe
});
< 7
```

* Qual a média salarial dos funcionários da empresa Momento, excluindo-se o CEO?
```js
> db.funcionarios.aggregate([
    {
        $match: {
            cargo: { $ne: 'CEO' }  
        }
    },
    {
        $group: {
            _id: null,  
            mediaSalarial: { $avg: "$salario" } 
        }
    }
]);
< {
  _id: null,
  mediaSalarial: 11060
}
```

* Qual o departamento com a maior média salarial?
```js
> db.funcionarios.aggregate([
    {
        $group: {
            _id: "$departamento", 
            mediaSalarial: { $avg: "$salario" }  
        }
    },
    {
        $sort: { mediaSalarial: -1 }  
    },
    {
        $limit: 1  
    },
    {
        $lookup: {
            from: "departamentos",  
            localField: "_id", 
            foreignField: "_id",  
            as: "departamentoInfo"  
        }
    },
    {
        $unwind: "$departamentoInfo"  
    },
    {
        $project: {
            _id: 0,  
            departamento: "$departamentoInfo.nome",  
            mediaSalarial: 1
        }
    }
]);
< {
  mediaSalarial: 71000,
  departamento: 'Executivo'
}
```
* Qual o departamento com o menor número de funcionários?
```js
> db.funcionarios.aggregate([
    {
        $group: {
            _id: "$departamento", 
            totalFuncionarios: { $sum: 1 } 
        }
    },
    {
        $sort: { totalFuncionarios: 1 }  
    },
    {
        $limit: 1  
    },
    {
        $lookup: {
            from: "departamentos", 
            localField: "_id", 
            foreignField: "_id", 
            as: "departamentoInfo"  
        }
    },
    {
        $unwind: "$departamentoInfo"  
    },
    {
        $project: {
            _id: 0,  
            departamento: "$departamentoInfo.nome",  
            totalFuncionarios: 1  
        }
    }
]);
< {
  totalFuncionarios: 1,
  departamento: 'Executivo'
}
```
* Pensando na relação quantidade e valor unitario, qual o produto mais valioso da empresa?
```js
> db.escritorios.aggregate([
    { 
        "$unwind": "$suprimentos" 
    },
    {
        "$lookup": {
            "from": "departamentos",
            "localField": "_id",            
            'foreignField': "escritorio",
            "as": "departamento"
        }
    },
    {
        "$project": {
            "_id": 0,
            "produto": "$suprimentos.produto",
            "departamento": "$departamento.nome",
            "total": {
            "$multiply": ["$suprimentos.quantidade", "$suprimentos.precoUnitario"]
            }
        }
    },
    {
        "$sort": { "total": -1 }
    },
    {
        "$limit": 1
    }
])

< {
  produto: 'Folhas de Sulfito',
  departamento: [],
  total: 376425000
  }
< {
  produto: 'Folhas de Sulfito',
  departamento: [],
  total: 376425000
  }
```
* Qual o produto mais vendido da empresa?
```js
> db.vendas.aggregate([
    {
        $group: {
            _id: "$produto",                  
            totalVendido: { $sum: "$quantidade" } 
        }
    },
    {
        $sort: { totalVendido: -1 }       
    },
    {
        $limit: 1                    
    }
]);
< {
  _id: 'Laço da Verdade',
  totalVendido: 12
}
```
* Qual o produto menos vendido da empresa?
```js
> db.vendas.aggregate([
    {
        $group: {
            _id: "$produto",                
            totalVendido: { $sum: "$quantidade" } 
        }
    },
    {
        $sort: { totalVendido: 1 }         
    },
    {
        $limit: 1                        
    }
]);
< {
  _id: 'Uniforme do Superman',
  totalVendido: 2
}
```
