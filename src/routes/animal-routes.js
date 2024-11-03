const { Router } = require('express');
const { getAnimals, addAnimal, updateAnimal, deleteAnimal } = require('../controllers/animal-controller')
const router = Router();

/**
 * @swagger
 * tags:
 *   name: Animals
 */


/**
 * @swagger
 * /api/v1/animal/getAnimals:
 *   get:
 *     summary: Recover all the animals registered in the data base
 *     description: Recover all the animals registered in the data base
 *     tags:
 *       - Animals
 *     responses:
 *       200:
 *         description: "Animals obtained successfully :)"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *               _id:
 *                 type: string
 *               name:
 *                 type: string
 *               species:
 *                 type: string
 *               age:
 *                 type: number
 *               habitat:
 *                 type: string
 *             example:
 *               code: 201
 *               msg: "Animals obtained successfully :)"
 *               data: [
 *                      {
                        "_id": "6725b05b59aa5f34acd7f4eb",
                        "name": "Tigre",
                        "species": "Mamifero",
                        "age": 3,
                        "habitat": "Selva"
                        }
 *                     ]
 *       404:
 *         description: Animals not  found
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
 *               msg: "Animals not found :("
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
 *               msg: "An error has been ocurred in getAnimals controller"
 */
router.get('/getAnimals', getAnimals)
/**
 * @swagger
 * /api/v1/animal/addAnimal:
 *   post:
 *     summary: Creates a new animal in the data base
 *     description: Creates a new animal in the data base
 *     tags:
 *      - Animals
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *             name:
 *              type: string
 *             species:
 *              type: string
 *             age:
 *              type: number
 *             habitat:
 *              type: string
 *             example:
 *               name: "Whale"
 *               species: "Mamifero"
 *               age: 4
 *               habitat: "Oceano"
 *     responses:
 *       201:
 *         description: Animal saved successfully :)
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
 *               code: 201
 *               msg: "Animal saved successfully :)"
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
 *               msg: "An error has been ocurred in addAnimal controller :("
 */
router.post('/addAnimal', addAnimal);
/**
 * @swagger
 * /api/v1/animal/updateAnimal/{id}:
 *   patch:
 *     summary: Update an animal
 *     description: Update an animal
 *     tags:
 *      - Animals
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Animal id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *             name:
 *              type: string
 *             species:
 *              type: string
 *             age:
 *              type: number
 *             habitat:
 *              type: string
 *             example:
 *               name: "Whale"
 *               species: "Mamifero"
 *               age: 4
 *               habitat: "Oceano"
 *     responses:
 *       201:
 *         description: Animal updated successfully :)
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
 *               code: 201
 *               msg: "Animal updated successfully :)"
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
 *               msg: "An error has been ocurred in updateAnimal controller :("
 */
router.put('/updateAnimal/:id', updateAnimal)
/**
 * @swagger
 * /api/v1/animal/deleteAnimal/{id}:
 *   delete:
 *     summary: Delete an animal
 *     description: Delete an animal
 *     tags:
 *      - Animals
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Animal id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Animal deleted successfully :)
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
 *               code: 201
 *               msg: "Animal deleted successfully :)"
 *       404:
 *          description: Animal not found
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      propierties:
 *                          code:
 *                              type: integer
 *                          msg:
 *                              type: string
 *                  example:
 *                      code: 404
 *                      msg: "Animal not found"
 *       500:
 *         description: Error del servidor
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
 *               msg: "An error has been ocurred in deleteAnimal controller"
 */
router.delete('/deleteAnimal/:id', deleteAnimal)

module.exports = router;