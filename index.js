import dotenv from 'dotenv'
import fetch from 'node-fetch'
import express from 'express'
import cors from 'cors'
import  {getAllProjects} from './controllers/project-controller.js'

const app = express()
app.use(cors());
app.options('*', cors());
dotenv.config();

app.get('/projects', getAllProjects)



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})