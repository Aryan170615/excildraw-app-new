import express from "express"
import Jwt from "jsonwebtoken"
import { JWT_SECRET } from "./config";
import middleware from "./middleware";
// import middleware from "./middleware";

const app = express();

app.use(express.json())

app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  // db call to signup the user

  res.json({
    userId : "123"
  })
})

app.post('/signin', (req, res) => {
  const { email, password } = req.body;

  // db call to signin the user to get the user id
  const userId = 1 ; // lets say for now
  const token = Jwt.sign({
    userId: userId
  }, JWT_SECRET)

  res.json({
    message : "signin success",
    token
  })
})

app.post('/room', middleware, (req, res) => {
  
  res.json({
    roomId : "123"
  })
})

app.listen(3001,()=>{
    console.log("listening to port 3001")
})
