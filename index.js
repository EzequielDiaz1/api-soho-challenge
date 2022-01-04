import dotenv from 'dotenv'
import fetch from 'node-fetch'
import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors());
app.options('*', cors());
dotenv.config();


app.get('/videos/:name',  (req, res) => {
    const videoName = req.params.name
    console.log(Object.values(process.env)) // dev
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${videoName}&key=${process.env.KEY}`)
    .then(promise => promise.json())
    .then(data => res.json(data))
})



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})