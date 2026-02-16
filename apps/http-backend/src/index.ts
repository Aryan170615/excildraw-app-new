import express from "express"
import Jwt from "jsonwebtoken"
import { JWT_SECRET } from '@repo/backend-common/src/config';
import middleware from "./middleware";
import { createRoomSchema, createUserSchema, signInSchema } from '@repo/common/types'
const app = express();
import { prisma } from "@repo/db/db";

app.use(express.json())

app.post('/signup', async(req, res) => {

  const data = createUserSchema.safeParse(req.body)
   
  if(!data.success) {
    res.json({
      message: "incorrect inputs"
    })
    return;
  }
  // db call to signup the user
  const user = await prisma.user.create({
    data: {
      email :  data.data.email,
      name : data.data.name,
      password : data.data.password
    }
  })

  res.json({
    userId : "123"
  })
})

app.post('/signin', (req, res) => {
  const { email, password } = req.body;

  const data = signInSchema.safeParse(req.body)
   
  if(!data.success) {
    res.json({
      message: "incorrect inputs"
    })
    return;
  }

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

  const data = createRoomSchema.safeParse(req.body)
   
  if(!data.success) {
    res.json({
      message: "incorrect inputs"
    })
    return;
  }
  
  res.json({
    roomId : "123"
  })
})

app.listen(3001,()=>{
    console.log("listening to port 3001")
})
