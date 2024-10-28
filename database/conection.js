const mongoose = require("mongoose");

async function conexion(){
    try{
        await mongoose.connect("mongodb://localhost:27017/Contactos")
        console.log("!Nos hemos conectado")
    } catch {
        console.log(error)
        console.log("la conexion ha fallado")
    }
}



module.exports = {conexion}