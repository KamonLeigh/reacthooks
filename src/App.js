import React, { useRef, useEffect, useState } from 'react';
import useTitleInput from './hooks/useTitleInput';
import Toggle from './Toggle';
import './App.css';


const App = () => {
  
 const [name, setName] = useTitleInput('');
 const ref = useRef();
 const [ dishes, setDishes] = useState([]);


  const fetchDishes = async () => {
    const res = await fetch('https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes');
    const data = await res.json();

    setDishes(data);
  }
  useEffect(() => {
      fetchDishes()
  }, [])


 const title = 'Level Up Dishes'

  return (
    <div className="main-wrapper" ref={ref}>
      <h1 onClick={() => console.log(ref.current.classList.add('new-fake-class'))}>{ title }</h1>
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
      {dishes.map(dish => (

        <article className="dish-card dish-card--withImage">
          <h3>{dish.name}</h3>
          <p>{dish.desc}</p>
          <div className="ingredients">
            {dish.ingredients.map(ingredient => 
                <span> {ingredient} </span> 
              )}
          </div>
        </article>
        ))}
      
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
