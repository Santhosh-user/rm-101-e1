import React, { useEffect, useState } from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter"
import axios from "axios";

const Task = ({lentodo,setlentodo}) => {
  // NOTE: do not delete `data-testid` key value pair 

  console.log(lentodo,setlentodo)
  const [geTodo, setgeTodo] = useState([])

  


  return ( <li data-testid="task" className={styles.task}>
      {lentodo.map((q,i)=>{
        return(<div>
            <input type="checkbox" data-testid="task-checkbox" />
      
        <div data-testid="task-text">{q.text}</div>
        {/* Counter here */}
        <Counter />
        <button data-testid="task-remove-button"></button>
          </div>
        )
      
      })
    }
    </li>
  );
};

export default Task;
