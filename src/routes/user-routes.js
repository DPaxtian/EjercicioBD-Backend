const { Router } = require('express');
const { login, signIn} = require('../controllers/user-controller')
const router = Router();

/**
 * @swagger
 * tags:
 *   name: User
 */

/**
 * @swagger
 * /api/v1/user/login:
 *   post:
 *     summary: Login
 *     description: Login
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *             username:
 *              type: string
 *             password:
 *              type: string
 *             example:
 *               username: "DPaxtian"
 *               password: "daniel98"
 *     responses:
 *       200:
 *         description: "Loged"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               code: 200
 *               msg: "Loged"
 *               access_token: "token"
 *       404:
 *         description: User or password is not correct
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                 msg:
 *                   type: string
 *             example:
 *               code: 404
 *               msg: "User or password is not correct"
 *               access_token: null
 *       500:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                 msg:
 *                   type: string
 *             example:
 *               code: 500
 *               msg: "An error has been ocurred"
 */
router.post('/login', login)
/**
 * @swagger
 * /api/v1/user/signin:
 *   post:
 *     summary: Signin
 *     description: Signin
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *             username:
 *              type: string
 *             password:
 *              type: string
 *             example:
 *               username: "DPaxtian"
 *               password: "daniel98"
 *     responses:
 *       200:
 *         description: "Signed"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               code: 200
 *               msg: "Sign In completed"
 *       500:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                 msg:
 *                   type: string
 *             example:
 *               code: 500
 *               msg: "An error has been ocurred"
 */
router.post('/signin', signIn)

module.exports = router