const mongoose = require('mongoose')
const { Schema } = mongoose

const eventsSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true
    },
    custo: {
        type: String,
        require: true
    },
    localizacao: {
        type: String,
        require: true
    },
    descricao: {
        type: String,
        require: true
    },
    categoria: {
        type: String,
        require: true
    },
    imagem: {
        type: String,
       require: true
    },
    },{timestamps: true},
);

const Events = mongoose.model("Events", eventsSchema)
module.exports = {
    Events,
    eventsSchema,
};