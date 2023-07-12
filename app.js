const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')

const sequelize = require('./database/database')
const slotRoute = require('./routes/slotRoute')

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

app.use(express.static(path.join(__dirname , 'views')))

app.use(slotRoute)


sequelize
.sync()
.then( (result) =>{
    app.listen(3000 ,() =>{
        console.log("Server started at port 3000")
    })
})


