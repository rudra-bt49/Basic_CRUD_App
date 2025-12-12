import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("My Basic CRUD App!!")   
})

app.listen(port, () => {
    console.log(`Application is running on PORT : ${port}`)
})