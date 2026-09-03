import express from 'express'

const app = express()
const port = 3000

//ler o json trafegado na aplicação
app.use(express.json())

app.get("/", (req,res)=> {
      res.json("hello world")
})

app.listen(port, () => {
    console.log('Seja bem vindo a minha API')
})