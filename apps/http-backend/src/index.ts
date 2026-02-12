import express from "express"
// import middleware from "./middleware";

const app = express();

app.use(express.json())

app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  // db call to signup the user

  res.json({
    message : "signup success"
  })
})

app.post('/signin', (req, res) => {
  const { email, password } = req.body;

  // db call to signin the user

  res.json({
    message : "signin success"
  })
})

app.post('/create-room', (req, res) => {
  
  res.json({
    message : "room created success"
  })
})

app.listen(3001,()=>{
    console.log("listening to port 3001")
})
