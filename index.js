// levantar el servidor y ponerlo a escuchar en un puerto

const app = require("./src/app")

const PORT = 3001;


app.listen(3001, () => {
    console.log("listening on port ", PORT)

})