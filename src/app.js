const express = require('express');
const morgan = require("morgan");
const userRouter = require("./routes/usersRouter")
const postsRouter = require("./routes/postsRouter.js")

const app = express();


app.use(morgan("dev"));
app.use(express.json());

app.use("/users", userRouter);



//USUARIOS
//GET /users => me devuelve todos los users

//GET /users/:id => me devuelve un usuario con id especifico

//GET /users?name= => me trae todos los que tengan ese nombre

//POST /users => crear un usuario nuevo

//PUT /users => modificar un usuario especifico

//DELETE /users/:id/delete => eliminar un usuario especifico




//POSTS








module.exports = app;