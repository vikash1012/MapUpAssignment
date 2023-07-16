const express = require('express')
const app = express()
const intersectionRouter = require('./routes/intersection')
const requestFilter = require('./middleware/requestFilter')
const port = 8080

// middleware
app.use(express.json())
app.use(requestFilter)

// Routes
app.use('/intersection', intersectionRouter)

app.listen(port, () => console.log('Application Started'))
