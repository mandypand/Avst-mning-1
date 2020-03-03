const express = require('express')
const Datastore = require('nedb-promise')
const insults = new Datastore({ filename: 'insults.db', autoload: true})
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/hello', (req,res) => {
    res.send('Hello World!')
})

app.get('/insults', async(req, res) => {
    const insultsJSON = await insults.find({})
    res.json({'insultsJSON': insultsJSON})
}) 

app.get('/insults/:severity', async (req, res) => {
    const insultsJSON = await insults.find({severity: parseInt(req.params.severity)})
   if (insultsJSON.length != 0){
    res.json({'insultsJSON': insultsJSON})
   } else {
    res.status(404)
    res.send({error: 'not found'})
   }
   
})

app.listen(8071, () => console.log('Server started'))