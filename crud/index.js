(async()=>{
    const db = require('./db')

    // Inerindo dados
    //console.log('Inserindo dados')
    //await db.insereClientes({nome: 'Pointes', idade: '23' })
    // Fim do insert

    // Atualizando dados
    //const id = 3
    //const n = "Portela"
    // const i = 67
    // await db.atualizaClientes(id, {nome:n, idade:i})
    //console.log('cliente ' + id + ' atualizado')
    // Fim do update

    //Deleta os dados
    //const id = 3
    //await db.deletaClientes(id)
    //console.log('cliente ' + id + 'excluído')
    // Fim do delete

    // Consulta ao banco
    console.log('Chamando todos os clientes')
    const clientes = await db.meusClientes()
    console.log(clientes)
    // Fim consulta

})()

