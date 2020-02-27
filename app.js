const express = require('express')
const Datastore = require('nedb-promise')
const cors = require('cors')
const insults = new Datastore({ filename: 'insults.db', autoload: true})
const app = express()


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
    const documents = await insults.find({severity: parseInt(req.params.severity)})
   if (documents.length != 0){
    res.json(documents)
   } else {
    res.send('404')
   }
   
})

app.listen(8070, () => console.log('Server started'))