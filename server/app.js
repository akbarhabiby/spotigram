if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const PORT = 3000

const cors = require('cors')

const router = require('./routes/')
const errorhandler = require('./middlewares/errorhandler')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use(router)
app.use(errorhandler)

app.listen(PORT, _ => {
    console.log(`Spotigram Live at http://localhost:${PORT}`);
})