import './App.css';
import { useState,useEffect,Table } from 'react'; 
import {useNavigate} from 'react-router-dom'


import React from 'react' 


function App () {

    const [inputstate, setinputstate] = useState('');
    const [inputstate1, setinputstate1] = useState('');
    // const [taskList, settaskList] = useState([]);

    
const handleinputchange = (name) => {
    setinputstate(name.target.value)
  }

  const handleinputchange1 = (email) => {
    setinputstate1(email.target.value)
  }
const navigate =useNavigate();
  const addtasklist = () => {
    if(inputstate==""){
      alert('Enter name')
    }else if(inputstate1==""){
      alert('Enter email')
    }
    else {
   navigate('/Blogs');
  }
  setinputstate('');
  setinputstate1('');
}

// const deletetasklist = (index) => {

//     settaskList((items) => items.filter((_, i) => i !== index));
    
//     alert('delete success')
  
//   }
  
//   const updatetasklist = (task1) => {
    
   
//     let index = taskList.findIndex((taskList) => taskList.name === task1.name);
//     settaskList[index].name = "raja";
   
//   alert('updated success')
  
//   }

  


  return (
    <div>
       

      <div className="App">

      <div><br/>
        <h2 style={{marginTop:20,color:'blue'}}>Login</h2>
      </div>

      <input value={inputstate} type='text'  placeholder='Name' id='name_id' name='name' onChange={(name) => handleinputchange(name)} className="text1" /><br/>

      <input value={inputstate1} type='text' placeholder='Email' id='email_id' name='email' onChange={(email) => handleinputchange1(email)} className="text1" /><br/><br/>

      <button onClick={() => addtasklist()} className="button">Login!</button><br/>

    
    </div>
    {/* <div className='form'>
          <div style={{backgroundColor:'#fff',marginLeft:500,width:500}}>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th></th>
                
                <th>Email</th>
                <th></th>
                <th>CreatedDate</th>
                <th></th>
                <th>CreatedTime</th>
              </tr>
            </thead>
            <tbody>
            {taskList.map((task,index) => {
               return (
              <tr>
                <td>{task.name}</td>
                <td></td>
               
                <td>{task.email}</td>
                <td></td>
                <td>{task.createdDate}</td>
                <td></td>
                <td>{task.createdTime}</td>
                
                <td>  
                <button className="button2" >Delete</button>
                </td>
                <td></td>
                <td><button className="button1" >Update</button></td>
              </tr>
               )})}
            </tbody>
            </Table>
          </div>
    </div> */}
    </div>
    
    
    );
};



export default App;