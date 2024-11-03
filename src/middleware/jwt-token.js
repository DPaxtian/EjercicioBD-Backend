const jwt = require('jsonwebtoken')



const validateToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1]; // Tomar solo el token sin "Bearer"

    if (!token) {
        return res.status(401).json({
            code: 401,
            msg: "Access denied"
        });
    }
    try {
        const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
        req.verifiedUser = verifiedUser;
        next();
    } catch (error) {
        res.status(401).json({
            code: 401,
            msg: "Access denied"
        });
    }
};


const signToken = (user) => {
    const signedToken = jwt.sign(
        {
            userId: user._id,
            username: user.username
        },
        process.env.JWT_SECRET,
        {expiresIn: '2h'}
    )

    return signedToken;
}

module.exports = {
    validateToken,
    signToken
};