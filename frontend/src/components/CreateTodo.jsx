import { useState } from "react";


export function CreateTodo(){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  return <div>
    <input style={{
      padding: 10,
      margin: 10
    }} type="text" placeholder="title" onChange={(e) => {
      const title = e.target.value;
      setTitle(title);
    }}></input><br />
    <input onChange={(e) => {
      const description = e.target.value;
      setDescription(description);
    }}  style={{
      padding: 10,
      margin: 10
    }} type="text" placeholder="description"></input><br />
    <button onClick={()=>{
      fetch("http://localhost:3000/todo", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          description: description
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(async (res)=>{
        const json = await res.json();
        console.log(json);
        alert("Todo added");
      })
    }}  style={{
      padding: 10,
      margin: 10,
      backgroundColor: "green",
      color: "white"
    }}>Add Todo</button>
  </div>
}