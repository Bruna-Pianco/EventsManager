/* Arquivo de config do banco de dados*/

const mongoose = require('mongoose');

//porta e conexão com o banco
const DB_USER = 'seuUser'
const DB_PASSWORD = encodeURIComponent ('suaSenha')

async function main(){
    try {
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@clusterapi.etoodks.mongodb.net/?retryWrites=true&w=majority`)
        console.log('Conectado com o banco!')
    } 
        catch (error){
        console.log(`Erro ${error}`)
    }
}

module.exports = main
