import clientPromise from "./mongodb.js";
import express from "express";
import cors from "cors";
// import { useHistory } from "react-router";
// import bodyParser from "body-parser";
// console.log(__dirname)

// console.log("process.env from server ===>", process.env);

//?====================================
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API. In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.
//An API is a set procedure for two programs to communicate, server and client
// let history = useHistory();

app.post("/register", async (req, res) => {
  const {
    username,
    email,
    password,
    password2
  } = req.body;

  try {
    const client = await clientPromise;
    await client.connect();
    let user = await client
      .db()
      .collection("users")
      .insertOne({
    username,
    email,
    password,
    password2,
    _id //! should i insert the id or will it be created when a new user is added
  });

    // if the user is found => return the token
    console.log("user", user);
    if (user) {
      res.send({

        success: true,
        //! Next step here would be to register the user in MongoDB?
       //! Do i want to insert history.push here?
      });
    }
    else {
      // otherwise we return error => credentials are not valid
      res.send({
        success: false,
        alert()
      });
    }
  } catch (error) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
});

//!______________________________________
app.post("/login", async (req, res) => {
  // extract username and password from the body of the request
  const { username: bodyUsername, password: bodyPassword } = req.body;
  // find a user with that username and password
  try {
    const client = await clientPromise;
    await client.connect();
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
    let user = await client
      .db()
      .collection("users")
      .findOne({
        username: { $eq: bodyUsername },
        password: { $eq: bodyPassword },
      });

    // if the user is found => return the token
    console.log("user", user);
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
      const client = await clientPromise;
      await client.connect();
      console.log("req", req);

      // client.db() will be the default database passed in the MONGODB_URI
      // You can change the database by calling the client.db() function and specifying a database like:
      // const db = client.db("myDatabase");
      // Then you can execute queries against your database like so:
      // db.find({}) or any of the MongoDB Node Driver commands

      // fetch the posts
      let users = await client.db().collection("users").find({}).toArray();
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

app.listen(8080, () =>
  console.log("API is running on http://localhost:8080/login")
);
