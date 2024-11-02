const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
        id: {
            type: mongoose.Schema.Types.ObjectId
        },
        username: {
            type: String,
            require: true
        },
        password:{
            type: String,
            require: true
        }
    },
    {versionKey: false}
)


module.exports = mongoose.model("users", UserSchema)