const { Router } = require('express');
const { getAnimals, addAnimal, updateAnimal, deleteAnimal } = require('../controllers/animal-controller')
const router = Router();

router.get('/getAnimals', getAnimals)
router.post('/addAnimal', addAnimal);
router.put('/updateAnimal/:id', updateAnimal)
router.delete('/deleteAnimal/:id', deleteAnimal)

module.exports = router;