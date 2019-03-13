import React, { useRef } from 'react';
import useTitleInput from './hooks/useTitleInput';
import Toggle from './Toggle';
import Counter from './Counter'
import './App.css';


const App = () => {
  
 const [name, setName] = useTitleInput('');
 const ref = useRef();

 console.log(ref.current);
  
  
  return (
    <div className="main-wrapper" ref={ref}>
      <h1 onClick={() => console.log(ref.current.classList.add('new-fake-class'))}>Level Up Dishes</h1>
      <Toggle />
      <Counter/>
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

/* 

const ref = useRef();

initial render
console.log(ref.current) undefined 

renders there after 
console.log(ref.current) produces DOM along with it children!!



*/


// const formSubmit = (value, setValue) => {
//   console.log('email sent to ' + value + "!");
//   setValue("");
// }

export default App;
