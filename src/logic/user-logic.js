const User = require('../models/user-model')
const bcrypt = require('bcrypt')

const validateUser = async (userData) => {
    try {
        const findedUser = await User.findOne({ username: userData.username });

        if (!findedUser) {
            return 404;
        }

        const validPwd = await bcrypt.compare(userData.password, findedUser.password);

        if (validPwd) {
            return findedUser;
        } else {
            return 404;
        }
    } catch (error) {
        console.log(`An error has been ocurred validating the user: ${error}`);
        return 500;
    }
}


const saveUser = async (userData) => {
    return new Promise((resolve, reject) => {
        const user = new User(userData);
        
        user.save()
        .then(() => {
            resolve(200)
        })
        .catch((error) => {
            console.log(`An error has been ocurred while saving the user: ${error}`)
            reject(error)
        })
    })
}


module.exports = {
    validateUser,
    saveUser
}