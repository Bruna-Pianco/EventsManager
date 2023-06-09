const express = require ("express")
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser')

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))


//Conexão com o banco de dados
const conexao = require('./db/database');
conexao();

const routes = require("./Routes/router")
app.use("/api", routes);


app.listen(3000,function() {
    console.log("Servidor ok!")
})



















