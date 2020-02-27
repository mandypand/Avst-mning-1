const express = require('express')
const app = express()

app.get('/hello', (req,res) => {
    res.send('Hello World!')
})

app.listen(8070, () => console.log('Server started'))