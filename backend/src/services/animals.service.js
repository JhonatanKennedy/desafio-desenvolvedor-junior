const Animals = require('../models/animals');

module.exports = class AnimalsService{
    static async createAnimal(data){
        const newPet = {
            name: data.name,
            age: data.age,
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
    static async getAnimal(id){
        try{
            const animal = await Animals.findOne({_id: id});
            return animal;
        }catch (error){
            console.log(`Não conseguiu achar o animal, ${error}`);
        }
    }
    static async updataAnimal(data,id){
        try{
            const newAnimal = await Animals.updateOne({_id: id},{$set: {
                name: data.name,
                age: data.age,
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
            const deletedAnimal = await Animals.findOneAndDelete(data._id);
            console.log(deletedAnimal)
            return deletedAnimal;
        }catch (error){
            console.log(error);
        }
    }

}