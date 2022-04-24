import './config/connect.js'
import express from 'express'
import logger from 'morgan'
import router from './routes/index.js'
import cors from 'cors'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())
app.use(logger('dev'))
app.use('/products', router)

app.listen(9000, () => console.log('Server is running at port 9000'))