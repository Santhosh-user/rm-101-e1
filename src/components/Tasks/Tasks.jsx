import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task"
import { useState } from "react";



const Tasks = ({lentodo,setlentodo}) => {

  // console.log(lentodo, setlentodo)


 
 
  // NOTE: do not delete `data-testid` key value pair
  return (
    <>

      



      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}
        {/* {lentodo.map((e)=>{ 
        return ( <p>{e.text}</p>
        ) })} */}
        <Task lentodo={lentodo} setlentodo={setlentodo} />
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
