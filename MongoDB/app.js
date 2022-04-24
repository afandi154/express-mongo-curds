import './config-mongoose/connect.js'
import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import nativeRouter from './routes/nativeRoutes.js'
import mongooseRouter from './routes/mongooseRoutes.js'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())
app.use(logger('dev'))
app.use('/native/products', nativeRouter)
app.use('/mongoose/products', mongooseRouter)

app.listen(9000, () => console.log('Server is running at port 9000'))