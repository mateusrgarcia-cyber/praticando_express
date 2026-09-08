import express from 'express'
import { pool }


const app = express()
const port = 3000

//ler o json trafegado na aplicação
app.use(express.json())

app.get("/", (req,res)=> {
      res.json("hello world")
})

app.get("/frutas", async (req,res) =>{
    try{
        const response = await pool.query("select from")
    }

})

app.listen(port, () => {
    console.log('Seja bem vindo a minha API')
})