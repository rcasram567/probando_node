const express = require("express");
const router=express.Router();
const persona_Controller=require("../controllers/persona.js");

//Añado un get. Esto debe despues ser usado por index
//router es un objeto de express al que le añado todas las rutas con el tipo de protocolo http que me de la gana
router.get("/primeraruta", persona_Controller.firstpath)
router.get("/segundaruta", persona_Controller.secondhtml)
router.post("/create", persona_Controller.create)

//MUY IMPORTANTE AQUÍ EXPORTAMOS EL ROUTER
module.exports = {router} //Devuelvo mis rutas