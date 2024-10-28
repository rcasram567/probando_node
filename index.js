const conectar = require("./database/conection")

const express = require("express")
const cors = require("cors")

console.log("Conectando a la base de datos....")
conectar.conexion()

const app = express()
app.use(cors())
const persona_paths = require("./paths/persona.js")

app.listen(5050, function(){
    console.log("Escuchando en dicho puerto 5051")
})

app.use("/api", persona_paths.router)

//app.get("/rutaApi", function(req,res){
//    console.log("Edpoint ejecutado")
//
//    return res.status(200).json({
//        objeto:"prueba"
//    })
//})




