import React from 'react';
import useTitleInput from './hooks/useTitleInput';
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



// const formSubmit = (value, setValue) => {
//   console.log('email sent to ' + value + "!");
//   setValue("");
// }

export default App;
