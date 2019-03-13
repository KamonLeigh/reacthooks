import React, { useRef, useMemo} from 'react';
import useTitleInput from './hooks/useTitleInput';
import Toggle from './Toggle';
import './App.css';


const App = () => {
  
 const [name, setName] = useTitleInput('');
 const ref = useRef();

 const reverseWord = word => {
   console.log('function called');
   return word.split("").reverse().join("");
 }

 const title = 'Level Up Dishes'

 const TitleReversed = useMemo(() => reverseWord(title), [title]);

  
  
  return (
    <div className="main-wrapper" ref={ref}>
      <h1 onClick={() => console.log(ref.current.classList.add('new-fake-class'))}>{ TitleReversed }</h1>
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
