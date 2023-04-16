const {User: UserModel}  = require ("../Models/user")

const UserController = {
    create: async(req, res) => {
        try {
            
            const user = {
                username: req.body.username,
                password: req.body.password,
                ativo: req.body.ativo,
                statusadm: req.body.status
  
            };
            
            const response = await UserModel.create(user);
            res.status(201).json({response,msg: "Usuário criado com sucesso!"})
            
        } catch (error) {
            console.log(error)
        }
        
    },

      //GET
      getAll: async(req,res) =>{
        try {
            const events = await UserModel.find()
            res.json(events)

        } catch (error) {
            console.log(error)
        }
    },
}  


module.exports = UserController;