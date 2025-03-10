const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());   

const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");


app.get("/todos", async function(req,res){
  const todos = await todo.find();
  console.log(todos);

  res.json({
    todos
  })
})

app.post("/todo", async (req,res) => {
  const createPayLoad = req.body;
  const parsedPayLoad = createTodo.safeParse(createPayLoad);
  if(!parsedPayLoad.success){
    res.status(411).send("Wrong inputs!");
    return;
  }

  await todo.create({
    title: parsedPayLoad.data.title,
    description: parsedPayLoad.data.description,
    completed: false
  })

  res.json({
    msg: "Todo Created!"
  })
  
})

app.put("/completed", async (req,res) =>{
  const updatePayLoad = req.body;
  const parsedPayLoad = updateTodo.safeParse(updatePayLoad);
  if(!parsedPayLoad.success){
    res.status(411).send("Wrong id!");
    return;
  }

  await todo.updateOne(
    { _id: req.body.id },
    { $set: { completed: true } }
  );
  res.json({
    msg: "Updated!"
  }
  )
})

app.listen(3000);
