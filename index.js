const express = require("express")
const helmet = require('helmet')
const morgan = require('morgan')
const hubRouter = require("./routers/hub")
const welcomeRouter = require("./routers/welcome")
const logger = require('./middlware/logger')
const agent = require('./middlware/agent')

const server = express()

// 3rd party middlware
// server.use(morgan('short'))// this is a looger that logs request 
server.use(logger)//notice we didnt call this the same as other middlwatre
server.use(agent('insomnia'))
server.use(helmet())// this is a simple protecter against hacker

//built in middlware
server.use(express.json())
// Bring all our subroutes into the main application
// (Remember, subroutes can have more children routers)
server.use("/", welcomeRouter)
server.use("/api/hubs", hubRouter)

server.use((req, res, next) => {
  res.status(404).json({
    message: 'sorry man shutting down!'
  })
})

server.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    // message: 'err.message',
    message: 'An internal error occurred',
  })
})

server.listen(4000, () => {
  console.log("\n*** Server Running on http://localhost:4000 ***\n")
})
