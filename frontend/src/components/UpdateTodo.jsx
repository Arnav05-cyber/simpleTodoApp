

export function UpdateTodo({id}){
  return (
    <div>
      <button onClick={() =>{
        fetch("http://localhost:3000/completed", {
          method: "PUT",
          body: JSON.stringify({
            id: id,          
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res)=>{
          return res.json();
        }).then((data)=>{
          console.log(data);
          alert("Todo marked as done");
        })
      }} style={{
        padding: 10,
        margin: 10,
        backgroundcolor: "blue",
        color: "white"
      }} >Mark as done</button>
    </div>
  );
}