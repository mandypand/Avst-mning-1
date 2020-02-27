const Datastore = require('nedb-promise')
const users = new Datastore({ filename: 'insults.db', autoload: true})
let userList = require ('./insults.json')

users.remove({}).then(() =>{
    users.insert(userList.insults);
})