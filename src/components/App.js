import React from 'react'
import '../styles/App.css';
import { useState } from 'react';
const App = () => {

  const[count, setCount] = useState(0);


  
  
  const counter =(e)=>{
    let select = document.getElementById('select') ;
    let value = select.value ;
    setCount(count+1);
    const shapesHolder = document.getElementById('shapes-holder')
    let el = document.createElement('div');
    el.classList.add(value.toLowerCase()) ; 
    el.innerHTML=count;
    shapesHolder.append(el);
    
  }

  return (
    <div id="main">
      <div id="shape-creator">
          <select id='select' >
            <option value="circle">Circle</option>
            <option value="square">Square</option>
          </select>

          <button onClick={counter}>Add Shape</button>

      </div>
      <div id="shapes-holder">
            
      </div>
    </div>
  )
}


export default App;
