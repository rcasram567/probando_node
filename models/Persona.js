const {Schema, model} = require("mongoose")

const ContactosSchema = Schema({
    nombre:{type:String, required:true},
    apellidos:String,
    fecha_creacion: {type:Date, default:Date.now},
    edad:{type:Integer, required:true},
    foto:{default:"imagen_anonimous.png", type:String}
})

module.exports=model("Persona", ContactosSchema, "personas")