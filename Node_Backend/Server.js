const { response } = require('express')
const express = require('express')
const { request } = require('http')
const app = express()

const Cors = require('cors')
const Port = 8000

const db = require("./app/models/PlanningApi.js")


var allowedDomains = ['http://localhost:8000', 'http://localhost:3000'];
app.use(Cors({
  origin: function (origin, callback) {
    // bypass the requests with no origin (like curl requests, mobile apps, etc )
    if (!origin) return callback(null, true);
 
    if (allowedDomains.indexOf(origin) === -1) {
      var msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

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