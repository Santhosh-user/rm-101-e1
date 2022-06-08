import React from "react";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";
import {AddTask} from "./AddTask"
import {Tasks} from "./Tasks"
import axios from "axios";
import { useState,useEffect } from "react";





const TaskApp = () => {

  const [lentodo, setlentodo] = useState()

  useEffect(()=>{
    getRa()
  },[])

  const getRa=()=>{
    axios.get("http://localhost:8080/tasks")
  .then(function (response) {
    // handle success
    setlentodo(response.data)
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


  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader lentodo  />
      <AddTask/>
      <Tasks/>
      {/* Add Task */}
      {/* Tasks */}
    </div>
  );
};

export default TaskApp;
