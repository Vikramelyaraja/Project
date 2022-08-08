
import './App.css';
import { useState,useEffect,Table } from 'react'; 
import {useNavigate}from 'react-router-dom';

function App () {
const navigate=useNavigate();
const [id, setId] = useState('');
const [Fname, setFname] = useState('');
const [Lname, setLname] = useState('');
const [Phone_No, setPhpne_No] = useState('');
const [Task, setTask] = useState('');
const [currentDate, setCurrentDate] = useState('');
const [currentTime, setCurrentTime] = useState('');
const [count, setCount]=useState(0);
const [taskList, settaskList] = useState([]);
const [inputstate, setinputstate] = useState('');
const [inputstate1, setinputstate1] = useState('');
const [inputstate2, setinputstate2] = useState('');
const [inputstate3, setinputstate3] = useState('');


const [showstatus, setshowstatus] = useState(null);



const handleinputchange = (Fname) => {
    setinputstate(Fname.target.value)
  }

  const handleinputchange1 = (Lname) => {
    setinputstate1(Lname.target.value)
  }

  const handleinputchange2 = (Phone_No) => {
    setinputstate2(Phone_No.target.value)
  }

  const handleinputchange3 = (Task) => {
    setinputstate3(Task.target.value)
  }

  const addtasklist = () => {
    if(inputstate===""){
      alert('Enter First_name')
    }else if(inputstate1===""){
      alert('Enter Last_name')
    }else if(inputstate2===""){
      alert('Enter Phone_Number')
    }
    else if(inputstate3===""){
    alert('Enter Task')
  }
    else{
    settaskList((oldData) => {
      //return must
      return ([...oldData, {'Fname': inputstate, 'Lname': inputstate1, 'Pnone': inputstate2, 'Task': inputstate3, 'createdDateTime': currentDate, 'status': 0 }])
    })
    alert('Inserted success')
  }
  setinputstate('');
  setinputstate1('');
  setinputstate2('');
  setinputstate3('');
}


const deletetasklist = (index) => {

  settaskList((items) => items.filter((_, i) => i !== index));
  
  alert('delete success')

}

// useEffect(() => {
//   alert('deleted success');
// }, [taskList]);


const updatetasklist = (index) => {
 
settaskList((oldData)=>{
oldData[index].status=1;
return [...oldData]
})


}


  // useEffect(() => {
  //   alert('Added success');
  // }, [taskList]);

  

  useEffect(() => {
    var date = new Date().getDate(); 
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear(); 
    var hours = new Date().getHours(); 
    var min = new Date().getMinutes(); 
    var sec = new Date().getSeconds(); 
    setCurrentDate(
      date + '/' + month + '/' + year + hours + ':' + min + ':' + sec
    );
    // setCurrentTime(
    // hours + ':' + min + ':' + sec
    // );


  }, []);


  return (
    <div>
       
      

      <div className="Apps">
      <br/>
      <div>
        <h2 style={{marginTop:10,color:'blue'}}>User Registration</h2>
      </div>

      <input value={inputstate} type='text' placeholder='First_Name' id='Fname_id' name='Fname' onChange={(Fname) => handleinputchange(Fname)} className="text1" /><br/>

      <input value={inputstate1} type='text' placeholder='Last_Name' id='Lname_id' name='Lname' onChange={(Lname) => handleinputchange1(Lname)} className="text2" /><br/>

      <input value={inputstate2} type='text' placeholder='Phone_No' id='Phone_id' name='Phone_No' onChange={(Phone_No) => handleinputchange2(Phone_No)} className="text2" /><br/>

      <input value={inputstate3} type='text' placeholder='Task' id='Task_id' name='Task' onChange={(Task) => handleinputchange3(Task)} className="text2" /><br/><br/>
      <div className='b1'>
      <button onClick={() => addtasklist()} className="button">Insert</button>
      <button onClick={() => navigate('/Contact', { state: taskList })} className="button1">View</button>
      </div>
     
    
    </div>

    <div className='form'>
          <div style={{backgroundColor:'#fff',marginLeft:500,width:500}}>
    
         
              <ul>
               
             
           
          
            {taskList.map((task,index) => {
               return (
              <li>
                <p>First_Name :{task.Fname}</p>
                
                <p> Last_Name :{task.Lname}</p>

                <p> Phone_Number :{task.Pnone}</p>

                <p> Task :{task.Task}</p>
                
                <p> CreatedDate&Time :{task.createdDateTime}</p>
               
                <p>Status : {task.status}</p>
                
                  
                <button className="button2" onClick={(e) => deletetasklist(index)} >Delete</button>
        
                <button className="button3"  onClick={(e) =>updatetasklist(index)}>Update</button>

           
               
              </li>
               )})}
               </ul>
            
          </div>
    </div>
    </div>
    
    
    );
};
export default App;