const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
var cors = require('cors')
const port = 3000


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => res.send('Hello55 World!'))
const Envroutes=require('./Route/Envroutes')
app.use('/api/env',Envroutes)
mongoose.connect('mongodb+srv://zalasandipsinh3185:y637HINk7yWhLEVF@school.x4mcg.mongodb.net/Books')
.then(()=>{
    console.log("db...connect...👌"); 
})
.catch((err)=>{
    console.log(err);   
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))