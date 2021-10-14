import { MongoClient } from 'mongodb' 
import dotenv from "dotenv";
dotenv.config() // dotenv is a package/library. This config will search for this file. Am loading all environment from the .env file


const uri = process.env.MONGODB_URI // process is an object that comes with node. And this will access the MONGODB_URI variable and assign it to uri
const options = { // options, that allow us to interadct with the client in mongoDB. Pre-recommended
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let mongoDBclient
let clientPromise

if (!process.env.MONGODB_URI) { // checking if process.env.MONGODB_URI doesnt exist or is undefined
  throw new Error('Please add your Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') { // development is built in in the node library. 
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) { 
    mongoDBclient = new MongoClient(uri, options) // creating an object, mongoClient.
    global._mongoClientPromise = mongoDBclient.connect() // we connect to mongoDB
    // mongoClientPromise will allow us to work with mongo atlas.
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production mode, it's best to not use a global variable.
  mongoDBclient = new MongoClient(uri, options)
  clientPromise = mongoDBclient.connect()
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise