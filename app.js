const express = require ('express');
const dbconnect = require('./config');
const ModelUser = require('./userModel');
const app = express();

const router = express.Router();

//Rutas CRUD:

//Create
router.post("/", async (req, res) => {
    const body = req.body;
    const respuesta = await ModelUser.create(body)
    res.send(respuesta)
})

//Read
router.get("/", async (req, res) => {
    const respuesta = await ModelUser.find({})
    res.send(respuesta);
})

router.get("/:id", async (req, res) => {
    const id = req.params.id; 
    const respuesta = await ModelUser.findById(id)
    res.send(respuesta);
})


//Update
router.put("/:id", async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findOneAndUpdate({_id:id}, body)
    res.send(respuesta);
   })

   //Delete
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
        const respuesta = await ModelUser.deleteOne({_id:id})
    res.send(respuesta);
})

app.use(express.json());
app.use(router)
app.listen(3001, () => {
    console.log("El servidor esta en el puerto 3001")
})

dbconnect();