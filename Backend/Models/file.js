const mongoose = require('mongoose')
const { Schema } = mongoose

const fileSchema = new Schema ({
    file: {
    type: String,
    require: true
    },
});

const File = mongoose.model("File", userSchema)
module.exports = {
    File,
    fileSchema,
};