import './App.css';
import { useState } from 'react';

function App() {

  const [valid, setValid] = useState("")
  const [newTask,setNewTask] = useState("")
  const [toDoList, setToDoList] = useState([])

  function addTask() {

    if (newTask === "") {
      setValid("Invalid input")
    }else{
      setValid("")
      const task = {
        id: toDoList.length < 1 ? 1 :toDoList[toDoList.length -1].id + 1,
        newTask: newTask

      }
      setToDoList([...toDoList, task])
    }
      
      console.log(newTask)
      console.log(toDoList)
    
  }
  function deleteTask(id) {
    setToDoList(
      toDoList.filter(task=>task.id !== id)
    )
    console.log(toDoList)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="todo-app">
          <h1>TODO APP</h1>
          <input type="text" placeholder='Enter Task' onChange={e=>setNewTask(e.target.value)}/>
          <small>{valid}</small>
          <div className="main">
            {toDoList.map((task,key)=>{
              return(<div className="task" key={key}>
                <p>{task.newTask}</p>
                <span onClick={()=>deleteTask(task.id)}>X</span>
              </div>)
            })}
          </div>
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
    </div>
  );
}

export default App;
