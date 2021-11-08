import clientPromise from "./mongodb.js";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); //import.meta.url is the filename
const __dirname = path.dirname(__filename); // dirname stands for directoryname
//__dirname is an environment variable that tells you the absolute path of the directory containing the currently executing file.
// const path = require('path');
// import { useHistory } from "react-router";
// import bodyParser from "body-parser";
// console.log(__dirname)

// console.log("process.env from server ===>", process.env);

//?====================================
const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API. In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.
//An API is a set procedure for two programs to communicate, server and client

// let history = useHistory();

// app.post = preparing an address (endpoint) for accepting / listening for calls being made to this endpoint.
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  // req.body is the what we receive from the front-end: body: JSON.stringify({name, email, password}). We need these to be a match to create a user.
  try {
    const mongoDBclient = await clientPromise; // receiving from the mongodb.
    // await mongoDBclient.connect();

    let existingUser = await mongoDBclient.db().collection("users").findOne({ email });
    if (existingUser) {
      return res.json({ 
        // The function returns at this point, and all the code after this will not be executed.
        message: "email is already in use",
        success: false,
      });
    }
    // =============================
    // to access MongoDB, we need to use the same path when trying to find one.
    const newUser = {
      name,
      email,
      password,
    };
    let insertedUser = await mongoDBclient // here we send a new user to mongoDB
      .db()
      .collection("users")
      .insertOne(newUser);
    // if the user is found => return the token
    // console.log("user", insertedUser);
    return res.send({
      success: true,
      //! Do i want to insert history.push here eventually to login page?
    });

    // =============================
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
});

//!______________________________________
app.post("/login", async (req, res) => {
  // extract email and password from the body of the request
  const { email: bodyEmail, password: bodyPassword } = req.body;
  // find a user with that email and password
  //*------------ for TUESDAY

  try {
    const mongoDBclient = await clientPromise;
    await mongoDBclient.connect();
    // invoking a function that client.connect provides. It will try and connect to the database.
    // client.db() will be the default database passed in the MONGODB_URI
    // You can change the database by calling the client.db() function and specifying a database like:
    // const db = client.db("myDatabase");
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    // fetch the posts
    // break down:
    // let defaultDatabase = await client.db();
    // in this case, the defaultDB is login-website. You do this when you're using one website.
    // let usersCollection = await defaultDatabase.collection("users");
    // let foundUsers = await usersCollection.find({}).toArray();
    let user = await mongoDBclient
      .db()
      .collection("users")
      .findOne({
        email: { $eq: bodyEmail },
        password: { $eq: bodyPassword },
      });

    // if the user is found => return the token
    // console.log("user", user);
    if (user) {
      res.send({
        token: "test-token",
        success: true,
      });
    }
    //response with sending the key.
    else {
      // otherwise we return error => credentials are not valid
      res.send({
        success: false,
      });
    }
  } catch (error) {
    // return the error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
});

app.use(
  "/user",
  async (req, res) => {
    // step one, get all the users from the db
    try {
      const mongoDBclient = await clientPromise;
      await mongoDBclient.connect();
      // console.log("req ==>", req);

      // client.db() will be the default database passed in the MONGODB_URI
      // You can change the database by calling the client.db() function and specifying a database like:
      // const db = client.db("myDatabase");
      // Then you can execute queries against your database like so:
      // db.find({}) or any of the MongoDB Node Driver commands

      // fetch the posts
      let users = await mongoDBclient.db().collection("users").find({}).toArray();
      // return the posts
      return res.json({
        message: JSON.parse(JSON.stringify(users)),
        success: true,
      });
    } catch (error) {
      // return the error
      return res.json({
        message: new Error(error).message,
        success: false,
      });
    }
  }
  // return them
);

let port = process.env.PORT || 8080
app.listen(
  port,
  () => console.log(`I am on port ${port}`)
  // change login to nothing, just /?
);
