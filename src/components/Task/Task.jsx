import React, { useEffect, useState } from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter"
import axios from "axios";

const Task = () => {
  // NOTE: do not delete `data-testid` key value pair

  const [geTodo, setgeTodo] = useState([])

  useEffect(()=>{
    getTodo()
  },[])

  const getTodo=()=>{
    axios.get('http://localhost:8080/tasks')
  .then(function (response) {
    // handle success
    setgeTodo(response.data)
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  }); 
  } 


  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" />
      
      <div data-testid="task-text"></div>
      {/* Counter here */}
      <Counter />
      <button data-testid="task-remove-button"></button>
    </li>
  );
};

export default Task;
