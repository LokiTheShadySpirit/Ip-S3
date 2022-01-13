const { response } = require('express')
const express = require('express')
const { request } = require('http')
const app = express()

const Cors = require('cors')
const Port = 8000

const db = require("./app/models/PlanningApi.js")


let CorsOptions = {
      origin: "http://localhost:8000"
}

app.use(Cors(CorsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

db.sequelize.sync({ force: false }).then(() => {
    console.log("synced to database");
});

app.get('/', (request, response) => {
    response.send('<h1>PlannedTasksApi</h1>')
})

app.get("/close", (request, response)=> {
    console.log("Exiting NodeJS server")
    process.exit();      
})

require("./app/routes/TaskRoutes")(app);
app.listen(Port, () => {
    console.log(`Server running on port ${Port}`)
})