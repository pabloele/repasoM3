const {Router} = require("express");
const {getUsers, findUsers, getUserById, createUser,updateUser, deleteUser} = require('../controllers/userControllers')

const userRouter = Router();

userRouter.get("/", (req,res)=>{
    //res.status(200).json({ status: "0 km"})

    //si tengo qery name quiero buscar si no mandar todo

    const {name} = req.query
    let users;
    try {
        if (name) {
            users = findUsers(name);
        } else {
            users = getUsers();
        }

        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
    
})


userRouter.get("/:id", (req,res) => {
   // res.status(200).json({ status: "0 km"})
   
   const {id} = req.params
   let users;
   try {
        const user = getUserById(id);
        res.status(200).json(user);
   } catch (error) {
       res.status(400).json({error: error.message});
   }
   
   
    



});

userRouter.post("/", (req,res) => {
   try {
        const {name, email} = req.body
        const newUser = createUser(name,email);
        res.status(200).json(newUser)

   } catch (error) {
        res.status(400).json({error: error.message})

   } 
    
    
    
    
    
});


userRouter.put("/", (req,res) => {

    const {id, name, email} = req.body;

    try {
        const newUser = updateUser(id, name, email);
        res.status(200).json(newUser);

    } catch (error) {
        res.status(400).json({error: error.message})
    }

    
    
})

userRouter.delete("/:id/delete", (req,res)=>{
    
    try {
        const {id} = req.params;
        const deleted = deleteUser(id);
        res.status(200).json(deleted);
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    res.status(200).json({h:'hola'})
})

module.exports = userRouter;