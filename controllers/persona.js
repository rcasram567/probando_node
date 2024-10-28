function firstpath (req, res){
    console.log("Endpoint ejecutado")

    return res.status(200).send(`<div>
        <h1>Hola</h1>
        </div>`
    )//ojo que aqui puedo devolver lo que quiera con el metodo send

}

function create(req,res){
    return res.status(200).json({
        mensaje:"Accion de guardar"
    })
}

module.exports= {firstpath, create}