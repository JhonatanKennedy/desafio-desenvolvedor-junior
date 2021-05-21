const Animals = require('../models/animals');

module.exports = class AnimalsService{
    static async createAnimal(data){
        const newAge = parseInt(data.age)
        const newPet = {
            name: data.name,
            age: newAge,
            type: data.type,
            race: data.race,
            owner: data.owner,
            phone: data.phone
        }
        const animal = await new Animals(newPet).save();
        return animal;
    }
    static async listAllAnimals(){
        try {
            const allAnimals = await Animals.find();
            return allAnimals;
        }catch (error){
            console.log(`Nao conseguiu achar os animais ${error}`);
        }
    }

    static async updataAnimal(data,id){
        const newAge = parseInt(data.age);
        try{
            const newAnimal = await Animals.updateOne({_id: id},{$set: {
                name: data.name,
                age: newAge,
                type: data.type,
                race: data.race,
                owner: data.owner,
                phone: data.phone
            }});
            return newAnimal;
        }catch (error){
            console.log(error);
        }
    }   
    
    static async deleteAnimal(data){
        try{
            const deletedAnimal = await Animals.findOneAndDelete({_id: data._id});
            return deletedAnimal;
        }catch (error){
            console.log(error);
        }
    }

}