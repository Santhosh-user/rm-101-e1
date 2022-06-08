import React, { useState } from "react";
import styles from "./addTask.module.css";
import axios from "axios"

const AddTask = () => {
  // NOTE: do not delete `data-testid` key value pair

  const[inpTodo, setinpTodo] = useState("")

  const[saveTodo, setsaveTodo] = useState("")

  const proTodo=()=>{
    if(saveTodo.length<=0){
      alert("empty")
      return
    }

    axios.post('http://localhost:8080/tasks', {
      id: "",
      text: saveTodo,
      done: false,
      count: 0,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

 const exTodo=(e)=>{
    const {id,value} = e.target
    setsaveTodo(value)
 }

  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" onChange={exTodo}/>
      <button data-testid="add-task-button"  onClick={proTodo}>+</button>
    </div>
    
  );
};

export default AddTask;
