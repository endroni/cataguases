const conectar = async()=>{
    if(global.conexao && global.conexao.state != 'disconected')
        return global.conexao    
    const mysql = require('mysql2/promise')
    const con = mysql.createConnection("mysql://root:@localhost:3306/db_crud_node")
    console.log('conectou ao banco')
    global.conexao=con
    return con
}

// Consultas no banco de dados
const meusClientes = async()=>{
    const con = await conectar()
    const [linhas] = await con.query('SELECT * FROM cliente')
    return await linhas
}
// Fim da consulta no banco 

// Inserindo dados
const insereClientes = async(cliente)=>{
    const con = await conectar()
    const sql = 'INSERT INTO cliente (nome, idade) VALUES (?,?)'
    const valores = [cliente.nome, cliente.idade]
    await con.query(sql,valores)
}
// Fim do insert

// Update
const atualizaClientes = async(id, cliente)=>{
    const con = await conectar()
    const sql = 'UPDATE cliente SET nome=?, idade=? WHERE id=?'
    const valores = [cliente.nome, cliente.idade, id]
    await con.query(sql,valores)
}
// Fim do update

// Deletando dados
const deletaClientes = async(id)=>{
    const con = await conectar()
    const sql = 'DELETE FROM cliente WHERE id=?'
    const valores = [id]
    await con.query(sql,valores)
}
//FIM do DELETE


conectar()
module.exports = {meusClientes, insereClientes, atualizaClientes, deletaClientes}

// Testando a conexão com o banco
//console.log(conectar())