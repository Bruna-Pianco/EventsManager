/* Arquivo de config do banco de dados*/

const mongoose = require('mongoose');

//porta e conexão com o banco
const DB_USER = 'brunamagalhaes02'
const DB_PASSWORD = encodeURIComponent ('671H8KPlr18H0JB7')

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