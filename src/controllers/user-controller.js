const UserLogic = require('../logic/user-logic')
const JWT = require('../middleware/jwt-token')
const bcrypt = require('bcrypt')

const login = async (req, res) => {
    let token = null
    let statusCode = 404
    let messageResponse = "User or password is not correct"

    try{
        let loginData = req.body;

        const user = await UserLogic.validateUser(loginData);

        if(user !== 404 && user !== 500){
            token = JWT.signToken(user)
            statusCode = 200
            messageResponse = "Loged"
        }

        return res.header('access_token', token).json({
            code: statusCode,
            msg: messageResponse,
            access_token: token
        })

    } catch(error) {
        console.log('An error has been ocurred while login')
        return res.status(500).json({
            code: 500,
            msg: `An error has been ocurred: ${error}`
        });
    }
}


const signIn = async (req, res) => {
    let statusCode = 500;
    let messageResponse = "An error has been ocurred while signin"

    try{
        let userData = req.body;

        const salt = await bcrypt.genSalt(10);
        const encryptedPwd = await bcrypt.hash(userData.password, salt)

        userData.password = encryptedPwd;

        const resultSave = await UserLogic.saveUser(userData)

        if(resultSave === 200){
            statusCode = 200
            messageResponse = "Sign In completed"
        }

    } catch (error){
        console.log(`An error has been ocurred while sign in: ${error}`)
    }

    return res.status(statusCode).json({
        code: statusCode,
        msg: messageResponse
    })

}


module.exports = {
    login,
    signIn
}