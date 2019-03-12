import React, { useState, useEffect } from 'react';
import Toggle from './Toggle';

import './App.css';

const App = () => {
  
 const [name, setName] = useTitleInput('');
  
  
  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <Toggle />
      <h3>{name}</h3>
      
      <form onSubmit={
        e => {
          e.preventDefault();
         
        }
      }>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          />
          <button>Submit</button>
      </form>
    
    </div>
  )
}

function useTitleInput(initalValue){
  const [value, setValue] = useState(initalValue);

  useEffect(() => {
    document.title = value;

  });
  return [value, setValue]

}

// const formSubmit = (value, setValue) => {
//   console.log('email sent to ' + value + "!");
//   setValue("");
// }

export default App;
