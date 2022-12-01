//importar librerias
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const {Usuario,ListaComponentes, Producto} = require("./dao")

//definir puerto
const puerto = 4444

//crear una instancia para comunicarse con el servidor
const app = express()

const TOKEN = "dofuouq08314y719wndoqn"

//configuraciones
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(cors())
//falta imagenes//

//COMUNICACIONES
app.post("/logines", async (req,resp) => {
    const correo = req.body.correo
    const contra = req.body.contra

    try{
        const listaUsuarios = await Usuario.findOne(
            {
                where : 
                {
                    correo : correo,
                    contra : contra
                }
            }
        )
        if(listaUsuarios != null){
            resp.send({
                error : "si hay",token : TOKEN, id : listaUsuarios.id
            })
            return
        }
    }catch{
        resp.send({
            error : "no hay"
        })
    }

    app.post("/cambiardatos", async (req, res) => {
        const id = req.body.id

        const nombre = req.body.nombre
        const apellidos = req.body.apellidos
        const direccion = req.body.direccion
        const piso = req.body.piso
        const ciudad = req.body.ciudad
        const postal = req.body.postal
        const celular = req.body.celular
        const correo = req.body.correo
    
            await Usuario.update({
                nombre : nombre,
                apellidos : apellidos,
                correo : correo,
                direccion : direccion,
                ciudad : ciudad,
                piso : piso,
                postal : postal,
                celular : celular
            },
            {
                where : {
                    id : id
                }
            })
    })
    
   

    
    // if(help == "hay"){
    //     resp.send({
    //         error : "si hay",token : TOKEN
    //     })
    //     return
    // }
    
})

app.get("/datos", async (req, res) => {
    const id = req.query.id
    const datos = await Usuario.findOne({
        where : {
            id : id
        }
    })
    res.send(datos)
})

app.get("/caracteristicas", async (req, res) => {
    const id  = req.query.id
    const producto = await Producto.findOne({
        where : {
            Producto_ID : id
        }
    })
    res.send(producto)
})



app.get("/cursos",(req,resp)=>{
    resp.send(
        `<form method="post" action="/eliminarcomponente" >
            <input type="text" name="id_componente" />
            <input type="submit" value="Enviar" />
        </form>`)

})

app.post("/eliminarcomponente", async (req, resp)=>{
    const id = req.body.id
    
        await ListaComponentes.destroy({
            where:{
                id : id
            }
            
        })
    
})

app.post("/agregarc", async(req, resp)=>{
    const imagen = req.body.imagen
    const descripcion = req.body.descripcion
    const precio = req.body.precio
    console.log(imagen)
    await ListaComponentes.create({
        imagen : imagen,
        descripcion : descripcion,
        precio : precio,
        bote : "https://cdn-icons-png.flaticon.com/512/3885/3885359.png",
        
    })
    resp.send("enviado")    
})

app.post("/usuario-post", async (req,resp)=>{
    const correo = req.body.correo
    const contra = req.body.contra
    const nombres = req.body.nombres
    const apellidos = req.body.apellidos
    const listaUsuarios = await Usuario.findAll()

    var sol = "no ahi"
    for(i=0;i<listaUsuarios.length;i++){
        var persona=listaUsuarios[i]
        console.log(persona)
        if(persona.correo==correo){sol ="si ahi"}
    }
    
    if(sol=="no ahi" && correo != ""){
        try{
            await Usuario.create({
                nombre: nombres,
                contra : contra,
                apellidos : apellidos,
                correo : correo,
                
            })
        } catch(error){
            resp.send({
                error : `ERROR. ${error}`
            })
            return
        }
    }else{}

    resp.send({error:sol})
})




app.get("/listacomponentes", async (req, resp) => {
    const Lista =  await ListaComponentes.findAll()

    resp.send(Lista)
})

app.listen(puerto,()=>{
    console.log(`Servidor web iniciado en puerto ${puerto}`)
})

//semana 15
app.post("/loginn",(req,resp)=>{
    const username = req.body.username
    const password = req.body.password

    const estudiante = ListaComponentes.findAll({ //se debe utilizar la lista coreespomdiente, por eso se utilzia otra como ejemplo
        where: {
            username : username,//debe ser las columnas de su bd este solo es ejemplo si estas feuran sus columnas
            password : password
        }
    })

})