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

    getId: async (req, res) =>{
        try{
        const id = req.params.id
        const event = await EventsModel.findById(id)
        res.json(event)


        }catch (error){
            console.log(error)
        }
    },

    //Delete
    delete:async(req,res)=>{
        try{ 
            const id = req.params.id
            const events = await EventsModel.findById(id);
            const deletedEvents = await EventsModel.findByIdAndDelete(id)

            res.status(200).json({deletedEvents, msg:"Evento deletado com sucesso!"})

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
        };

        const UpdateEvents = await EventsModel.findByIdAndUpdate(id, events)

        if(!UpdateEvents){
            res.status(404).json({msg: "Evento não atualizado!"})
            return;
        }

        res.status(200).json({events, msg: "Evento atualizado com sucesso!"})
 
    },

            deleteAllevents:async(req,res)=>{
                try{ 
                    const deletedEvents = await EventsModel.deleteMany()
                    res.status(200).json({deletedEvents, msg:"Eventos deletados com sucesso!"})
        
                }
                catch(error){
                    res.status(400).json({events, msg: "Erro ao deletar eventos!"})
                }
            },


            patchEvents: async (req, res) => {
                try{
                    const id = req.params.id
                    const patch = {
                        name: req.body.name,

                    };
                    const UpdateEvents = await EventsModel.findByIdAndUpdate(id, patch)
                    res.status(200).json({msg: "Nome do evento atualizado com sucesso!"})
                }
               catch(error){
                res.status(400).json({msg: "Erro ao atualizar o nome do evento!"})
               }
              },

}  

module.exports = EventsController;