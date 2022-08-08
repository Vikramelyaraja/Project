import React, { useState ,useEffect } from "react";
import { useLocation  } from "react-router-dom";
import './App.css';
function Contact () {

 const {state}=useLocation();

 const[task, setTask]=useState(state);
 const[showstatus,setShowtask]=useState(null);

useEffect (()=>{

    //alert(JSON.stringify(task))

},[])
 
const remove = (index) => {
    task.splice(index, 1);
    setTask([...task]);
  };

    return(
        <div className="App">
        
        <button className="button4" onClick={(e) => {e.preventDefault();setShowtask(0);}}>
              Show_Active
            </button>
    
            <button className="button5" onClick={(e) => {e.preventDefault();setShowtask(1);}}>
              Show_Completed
            </button>
            <div className="app">
        {
            task?.length > 0 && task.map((item, index) => {
                return (item.status === showstatus && 
                 
                    <li>
                    Name: &nbsp; &nbsp;{item?.Fname && item.Fname}  &nbsp; &nbsp;
                    Status:  &nbsp; &nbsp;{item.status} &nbsp;
                    {/* <button onClick={() => remove(index)}>Delete</button> */}
                    </li>
                   
            )})
        }
           </div> 
    
    
        </div>
    
      ) 
  };
  
  export default Contact;