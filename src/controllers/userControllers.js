let { users } = require("../data")


// TODOS LOS CONTROLADORES DE USUARIOS

let id = 2;

const getUsers = () => {
    return users;
}

const findUsers = (name) => {
    const results = users.filter(e=>e.name === name)
    if(!results.length) throw Error("User not found");
    return results;
    
}

const getUserById = (id) => {
    const user = users.find(e=>e.id == id)
    if(!user) throw Error("User not found");
    return user;
} 

const createUser = (name, email) => {
    if (!name || !email) throw Error("Faltan datos")
    const newUser = {
        id: ++id,
        name,
        email
    }
    users.push(newUser)
    return newUser;
};

const updateUser = (id, name, email) => {

    if(!id || !name || !email) throw Error("Missing data");
    const user = users.find((user) => user.id == id);
    if (!user) throw Error("User does not exist")
    user.name = name;
    user.email = email;
    return user;

} 

const deleteUser = (id)=> {
    let user = users.find((user) => user.id == id);
    if (!user) throw Error("User does not exist")
    users = users.filter(user=> user.id != id);
    return user;

}

module.exports = {
    getUsers,
    findUsers,
    getUserById,
    createUser,
    updateUser, 
    deleteUser
}
