const Animal = require('../models/animal-model');

const newAnimal = async (data) => {
    return new Promise((resolve, reject) =>{
        let animalData = new Animal(data)

        animalData.save()
        .then(() => {
            resolve(200);
        })
        .catch((error) => {
            console.log(`An error has been ocurred while saving the animal: ${error}`);
            reject(500)
        })
    })
}


const updateAnimal = async (id, updatedData) => {
    return new Promise((resolve, reject) => {
        Animal.updateOne({_id: id}, updatedData)
        .then(() => {
            resolve(200)
        })
        .catch((err) => {
            console.log(`An error has been ocurred while updating the animal: ${err}`)
            reject(500)
        })


    })
}


const getAnimals = async () => {
    try {
        const obtainedAnimals = await Animal.find({});
        return obtainedAnimals;
    } catch (err) {
        console.log(`An error has occurred while obtaining the animals: ${err}`);
        throw 500;
    }
};


const deleteAnimal = async (id) => {
    return new Promise((resolve, reject) => {
        Animal.deleteOne({_id: id})
        .then(() => {
            resolve(200)
        })
        .catch((err) => {
            console.log(`An error has been ocurred while deleting the animal: ${err}`)
            reject(500)
        })


    })
}


module.exports = {
    newAnimal,
    updateAnimal,
    getAnimals,
    deleteAnimal
}