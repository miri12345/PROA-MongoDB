# Atividades para trabalhar com o Oscar

1- Quantas vezes Natalie Portman foi indicada ao Oscar?

     > db.oscar1.countDocuments({nome_do_indicado: /Natalie Portman/i})
     < 3
    
2- Quantos Oscars Natalie Portman ganhou?

      > db.oscar1.countDocuments({nome_do_indicado: /Natalie Portman/, vencedor: /true/})
      < 1
    
3- Amy Adams já ganhou algum Oscar?

     > db.oscar1.countDocuments({nome_do_indicado: /Amy Adams/, vencedor: /true/})
     < 0
   
4- A série de filmes Toy Story ganhou um Oscar em quais anos?

    > db.oscar1.distinct("ano_cerimonia", {nome_do_filme: /Toy Story/i, vencedor: /true/})
    < [ 2011, 2020 ]

5- A partir de que ano que a categoria "Actress" deixa de existir? 

    > db.oscar1.find({categoria: /Actress/i}).sort({ano_cerimonia: -1}).limit(1)
    < {
     _id: ObjectId('66ead40eb62f4e66a1d3c819'),
     id_registro: 10776,
     ano_filmagem: 2023,
     ano_cerimonia: 2024,
     cerimonia: 96,
     categoria: 'ACTRESS IN A LEADING ROLE',
     nome_do_indicado: 'Annette Bening',
     nome_do_filme: 'Nyad',
     vencedor: 'false'
     }

6- O primeiro Oscar para melhor Atriz foi para quem? Em que ano?

    > db.oscar1.find({categoria: /actress/i, vencedor: /true/})
    < 'Janet Gaynor' - 1928

7- Na campo "Vencedor", altere todos os valores com "Sim" para 1 e todos os valores "Não" para 0.

    > db.oscar1.updateMany(
     { vencedor: /true/ },  
     { $set: { vencedor: 1 } }  
     )
    <{
    acknowledged: true,
    insertedId: null,
    matchedCount: 2464,
    modifiedCount: 2464,
    upsertedCount: 0
     }
     > db.oscar1.updateMany(
      { vencedor: /false/ },   
      { $set: { vencedor: 0 } } 
     )
     < {
    acknowledged: true,
    insertedId: null,
    matchedCount: 8423,
    modifiedCount: 8423,
    upsertedCount: 0
    }


8- Em qual edição do Oscar "Crash" concorreu ao Oscar?

    > db.oscar1.find({nome_do_filme: /Crash/i})
    < Ele concorreu a 6 oscars na edição 78 e ganhou 3.

9- Bom... dê um Oscar para um filme que merece muito, mas não ganhou.

    > db.oscar1.find({ vencedor: 0 })
    > db.oscar1.updateOne(
      { nome_do_filme: /The Private Life of Helen of Troy/i },   
      { $set: { vencedor: 1 } }                 
     )
     < {
     acknowledged: true,
     insertedId: null,
     matchedCount: 1,
     modifiedCount: 1,
     upsertedCount: 0
      }


10- O filme Central do Brasil aparece no Oscar?

    > db.oscar1.find({nome_do_filme: /Central do Brasil/i})
    Não.

11- Inclua no banco 3 filmes que nunca foram nem nomeados ao Oscar, mas que merecem ser. 

    > db.oscar1.insertOne({
     _id: ObjectId(), 
     ano_filmagem: 2007,
     categoria: 'Best Adapted Screenplay',
     nome_do_filme: 'Into the Wild',
     vencedor: 1,
     })
     <  acknowledged: true,
        insertedId: ObjectId('66eae353059b7343fee2d75b')

     > db.oscar1.insertOne({
     _id: ObjectId(), 
     ano_filmagem: 2000,
     categoria: 'Best Film Editing',
     nome_do_filme: 'Requiem for a Dream',
     vencedor: 1,
     })
     
     < {
       acknowledged: true,
       insertedId: ObjectId('66eae3b9059b7343fee2d75c')
        }

     > db.oscar1.insertOne({
     _id: ObjectId(), 
     ano_filmagem: 1999,
     categoria: 'Best Picture',
     nome_do_filme: 'Fight Club',
     vencedor: 1,
     })
      < {
       acknowledged: true,
       insertedId: ObjectId('66eae410059b7343fee2d75d')
      } 

12 - Pensando no ano em que você nasceu: Qual foi o Oscar de melhor filme, Melhor Atriz e Melhor Diretor?

    > db.oscar1.find({ano_cerimonia: 2002,categoria: /ACTOR/, vencedor: 1})
    < {
     _id: ObjectId('66ead40eb62f4e66a1d3bdb9'),
     id_registro: 8120,
     ano_filmagem: 2001,
     ano_cerimonia: 2002,
     cerimonia: 74,
     categoria: 'ACTOR IN A LEADING ROLE',
     nome_do_indicado: 'Denzel Washington',
     nome_do_filme: 'Training Day',
     vencedor: 1
     }
     {
     _id: ObjectId('66ead40eb62f4e66a1d3bdbb'),
     id_registro: 8122,
     ano_filmagem: 2001,
     ano_cerimonia: 2002,
     cerimonia: 74,
     categoria: 'ACTOR IN A SUPPORTING ROLE',
     nome_do_indicado: 'Jim Broadbent',
     nome_do_filme: 'Iris',
     vencedor: 1
     }
     > db.oscar1.find({ano_cerimonia: 2002,categoria: /ACTRESS/, vencedor: 1})
     < {
     _id: ObjectId('66ead40eb62f4e66a1d3bdc0'),
     id_registro: 8127,
     ano_filmagem: 2001,
     ano_cerimonia: 2002,
     cerimonia: 74,
     categoria: 'ACTRESS IN A LEADING ROLE',
     nome_do_indicado: 'Halle Berry',
     nome_do_filme: "Monster's Ball",
     vencedor: 1
     }
     {
     _id: ObjectId('66ead40eb62f4e66a1d3bdc5'),
     id_registro: 8132,
     ano_filmagem: 2001,
     ano_cerimonia: 2002,
     cerimonia: 74,
     categoria: 'ACTRESS IN A SUPPORTING ROLE',
     nome_do_indicado: 'Jennifer Connelly',
     nome_do_filme: 'A Beautiful Mind',
     vencedor: 1
      }
