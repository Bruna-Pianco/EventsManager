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
    custoInteira: {
        type: String,
        require: true
    },
    custoMeia: {
        type: String,
        require: true
    },
    localizacao: {
        type: String,
        require: true
    },

    cidade: {
        type: String,
        require: true
    },
    contato: {
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
