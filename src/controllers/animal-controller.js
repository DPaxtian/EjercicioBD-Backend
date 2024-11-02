const AnimalLogic = require('../logic/animal-logic')



const getAnimals = async (req, res) => {
    let resultCode = 500;
    let messageResponse = 'An error has been ocurred :(';
    let data = null

    try {

        const resultGet = await AnimalLogic.getAnimals()

        if (resultGet.length === 0) {
            resultCode = 200;
            messageResponse = 'Animals not found :('
        } else {
            resultCode = 200;
            messageResponse = 'Animals obtained successfully :)'
            data = resultGet
        }
    } catch (error) {
        console.log(`An error has been ocurred in getAnimals controller: ${error}`)
    }

    return res.status(resultCode).json({
        code: resultCode,
        msg: messageResponse,
        data: data
    })
}


const addAnimal = async (req, res) => {
    let resultCode = 500;
    let messageResponse = 'An error has been ocurred :(';

    try {
        let animalData = req.body;

        const resultSave = await AnimalLogic.newAnimal(animalData)

        if (resultSave === 200) {
            resultCode = resultSave;
            messageResponse = 'Animal saved successfully :)'
        }
    } catch (error) {
        console.log(`An error has been ocurred in addAnimal controller: ${error}`)
    }

    return res.status(resultCode).json({
        code: resultCode,
        msg: messageResponse
    })
}


const updateAnimal = async (req, res) => {
    let resultCode = 500;
    let messageResponse = 'An error has been ocurred :(';

    try {
        const id = req.params.id
        let animalData = req.body;

        const resultUpdate = await AnimalLogic.updateAnimal(id, animalData)

        if (resultUpdate === 200) {
            resultCode = resultUpdate;
            messageResponse = 'Animal updated successfully :)'
        }
    } catch (error) {
        console.log(`An error has been ocurred in updateAnimal controller: ${error}`)
    }

    return res.status(resultCode).json({
        code: resultCode,
        msg: messageResponse
    })
}


const deleteAnimal = async (req, res) => {
    let resultCode = 500;
    let messageResponse = 'An error has been ocurred :(';

    try {
        const id = req.params.id

        const resultDelete = await AnimalLogic.deleteAnimal(id)

        if (resultDelete === 200) {
            resultCode = resultDelete;
            messageResponse = 'Animal deleted successfully :)'
        }
    } catch (error) {
        console.log(`An error has been ocurred in deleteAnimal controller: ${error}`)
    }

    return res.status(resultCode).json({
        code: resultCode,
        msg: messageResponse
    })
}

module.exports = {
    getAnimals,
    addAnimal,
    updateAnimal,
    deleteAnimal
}