import React from 'react'
import { useState } from 'react'
import './index.css'
const Table = () => {
  const[value,setValue]=useState([]);
  const[sum,setSum]=useState(0);
 
  const change=(e)=>{
    let num= parseFloat(e.target.value)
    if(num!=0){
      setValue([...value,num]);
    }
  
  }


const Sum=()=>{
    const totalSum = value.reduce(
        (acc, val)=>acc+val, 
        0);  
    setSum(totalSum)
    
}


    const Delete=()=>{
         setValue([]);
         setSum(0);
        
    }

   
  return (
 <div className='main'>
    <div className='header'>
        <div className='title'>
            Calci Board 
        </div>
    </div>
   
     <table className='table'>
        <thead className='table-head'>
            <tr>
                <td>Row1</td>
                <td>Row2</td>
                <td>Row3</td>
            </tr>
        </thead>
        <tbody className='table-body'>
            <tr>
                <td><input type="number" onChange={change} maxLength={1} /></td>
                <td><input type="number" onChange={change}  maxLength={1}/></td>
                <td><input type="number" onChange={change} maxLength={1} /></td>
            </tr>
            <tr>
                <td><input type="number" onChange={change}  maxLength={1}/></td>
                <td><input type="number" onChange={change}  maxLength={1}/></td>
                <td><input type="number" onChange={change}  maxLength={1}/></td>
            </tr>
            <tr>
                <td><input type="number"  onChange={change} maxLength={1}/></td>
                <td><input type="number"  onChange={change} maxLength={1}/></td>
                <td><input type="number"  onChange={change} maxLength={1}/></td>
            </tr>
        </tbody>
     </table>
     <div className='btn'>

    <h3>Sum:- {sum}</h3>
     <button onClick={Sum}>Add</button>
      <button onClick={Delete}>Delete</button>
    
     </div>
    </div>
  )
}

export default Table

