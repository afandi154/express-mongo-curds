import { MongoClient } from "mongodb"

const client = new MongoClient('mongodb://afandi:root@localhost:27017/eduwork?authSource=admin');

(async () => {
  try {
    await client.connect();
    console.log('Connection to MongoDB-Native was Success')
  } catch (err) {
    console.log(err)
  }
})()

const db = client.db('eduwork')

export default db