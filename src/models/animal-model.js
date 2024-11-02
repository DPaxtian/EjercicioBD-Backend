const mongoose = require('mongoose')

const AnimalSchema = mongoose.Schema(
    {
        id:{
            type: mongoose.Schema.Types.ObjectId
        },
        name: {
            type: String,
            require: true
        },
        species: {
            type: String,
            require: true
        },
        age: {
            type: Number,
            min: 0,
            require: true
        },
        habitat: {
            type: String,
            require: true
        },

    },
    {versionKey: false}
)

module.exports = mongoose.model('animals', AnimalSchema);