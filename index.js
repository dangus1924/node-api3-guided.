const express = require("express")
const helmet = require('helmet')
const morgan = require('morgan')
const hubRouter = require("./routers/hub")
const welcomeRouter = require("./routers/welcome")

const server = express()

server.use(morgan('short'))// this is a looger that logs request 
server.use(helmet())// this is a simple protecter against hacker
server.use(express.json())
// Bring all our subroutes into the main application
// (Remember, subroutes can have more children routers)
server.use("/", welcomeRouter)
server.use("/api/hubs", hubRouter)

server.listen(4000, () => {
  console.log("\n*** Server Running on http://localhost:4000 ***\n")
})
