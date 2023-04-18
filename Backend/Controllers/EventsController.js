const { Events: EventsModel } = require ("../Models/events")


const EventsController = {
    create: async(req, res) => {
        try {
            
            const events = {
                name: req.body.name,
                date: req.body.date,
                custoInteira: req.body.custoInteira,
                custoMeia: req.body.custoMeia,
                localizacao: req.body.localizacao,
                descricao: req.body.descricao,
                categoria: req.body.categoria, 
                cidade:req.body.cidade, 
                contato:req.body.contato, 
                imagem: req.body.imagem,   
            };
            
            const response = await EventsModel.create(events);
            res.status(201).json({response,msg: "Evento criado com sucesso!"})
            
        } catch (error) {
            console.log(error)
        }
        
    },

    //GET
    getAll: async(req,res) =>{
        try {
            const events = await EventsModel.find()
            res.json(events)

        } catch (error) {
            console.log(error)
        }
    },

    //Delete
    delete:async(req,res)=>{
        try{ 
            const id = req.params.id
            const events = await EventsModel.findById(id);
            const deletedEvents = await EventsModel.findByIdAndDelete(id)

            res.status(200).json({deletedEvents, msg:"Evento Serviço com sucesso!"})

        }
        catch(error){
            console.log(error)
        }
    },

    update: async (req, res) => {
        const id = req.params.id

        const events = {
            name: req.body.name,
            date: req.body.date,
            custoInteira: req.body.custoInteira,
            custoMeia: req.body.custoMeia,
            localizacao: req.body.localizacao,
            descricao: req.body.descricao,
            categoria: req.body.categoria, 
            cidade:req.body.cidade, 
            contato:req.body.contato, 
            imagem: req.body.imagem,   
        };

        const UpdateEvents = await EventsModel.findByIdAndUpdate(id, events)

        if(!UpdateEvents){
            res.status(404).json({msg: "Evento não encontrado!"})
            return;
        }

        res.status(200).json({events, msg: "Evento atualizado com sucesso!"})
 
    }


}
module.exports = EventsController;