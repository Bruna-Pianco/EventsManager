const { Events: EventsModel } = require ("../Models/events")

const EventsController = {
    create: async(req, res) => {
        try {
            
            const events = {
                name: req.body.name,
                date: req.body.date,
                custo: req.body.custo,
                localizacao: req.body.localizacao,
                descricao: req.body.descricao,
                categoria: req.body.categoria,   
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

    //GETbyId
    get: async(req, res) =>{
        try {
            const id = req.params.id
            const events = await EventsModel.findById(id)
            
            if(!events){
                res.status(404).json({msg:'Evento não encontrado!'});
                return;
            }
            res.json(events)

        } catch (error) {
            console.log(error)
        }
    },

    //Delete
    delete: async (req, res) => {
        try {

            const id = req.params.id
            const events = await EventsModel.findById(id)

            if(!events){
                res.status(404).json({msg:'Evento não encontrado!'});
                return;
            }
            const deletedEvents = await EventsModel.findByIdAndDelete
            res.status(200).json({deletedEvents, msg: "Serviço excluído com sucesso!"})

        } catch (error) {
            console.log(error)
        }
    },

    update: async (req, res) => {
        const id = req.params.id

        await events.update(request.body, {
                where: { id: id },
            })
            .then((num) => {
                if (num == 1) {
                    return response.send({
                        message: "Evento atualizado",
                    });
                } else {
                    return response.send({
                        message: `Não foi possível atualizar o evento id: ${id}`,
                    });
                }
            })
            .catch((error) => {
                return response.status(550).send({
                    message: `Erro interno ao atualizar o evento de id: ${id} `,
                });
            });
    }


}
module.exports = EventsController;