import mongoose from "mongoose"

mongoose.connect('mongodb://afandi:root@localhost:27017/eduwork?authSource=admin')
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error : '))
db.once('open', () => console.log('Server database terhubung'))