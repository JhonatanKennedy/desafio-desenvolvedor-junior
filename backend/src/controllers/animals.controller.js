const AnimalsService = require('../services/animals.service');

module.exports = class Animals{
    static async apiCreateAnimal(request, response){
        try{
            const newAnimal = await AnimalsService.createAnimal(request.body);
            response.json(newAnimal);
        }catch(error){
            response.status(500).json({error: error});
        }
    }

    static async apiGetAllAnimals(request,response){
        try{
            const allAnimals = await AnimalsService.listAllAnimals();
                if(!allAnimals){
                    response.status(404).json('Não existem animais cadastrados');
                }
            response.json(allAnimals);

        }catch (error){
            response.status(500).json({error: error});
        }
    }

    static async apiGetAnimal(request,response){
        try{
            const animal = await AnimalsService.getAnimal(request.params);
            response.json(animal);
        }catch (error){
            response.status(500).json({error: error});
        }
    }

    static async apiUpdateAnimal(request,response){
        try{
            const responseUpdate = await AnimalsService.updataAnimal(request.body,request.params);
            if(!responseUpdate.modifiedCount === 0){
                throw new Error ('Não conseguiu modificar o animal');
            }
            response.json(responseUpdate);
        }catch (error){
            response.status(500).json({error: error});
        }
    }   

    static async apiDeleteAnimal(request,response){
        try{
            const deletedAnimal = await AnimalsService.deleteAnimal(request.params);
            response.json(deletedAnimal);
        }catch (error){
            response.status(500).json({error: error});
        }
    }
}