const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema ({
    username: {
    type: String,
    require: true
    },

    password: {
        type: String,
        required: true
    },
    
        ativo:{
            type: Boolean,
            require: true
        },
    
        statusadm:{
            type: Boolean,
            require: true
        }
});

const User = mongoose.model("User", userSchema)
module.exports = {
    User,
    userSchema,
};