import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-testid` key value pair

  const[inpTodo, setinpTodo] = useState("")

  const proTodo=()=>{
    if(inpTodo.length<=0){
      alert("input is empty")
      return
      
    }
  }

 const exTodo=(e)=>{
    const {id,value} = e.target
    setinpTodo(value)
 }


  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" onChange={exTodo}/>
      <button data-testid="add-task-button"  onClick={proTodo}>+</button>
    </div>
  );
};

export default AddTask;
