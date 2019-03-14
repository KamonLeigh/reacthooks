import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated} from 'react-spring';
//import  useAbortableFetch  from 'use-abortable-fetch';
import useTitleInput from './hooks/useTitleInput';
import Toggle from './Toggle';
import './App.css';


const App = () => {
  
 const [name, setName] = useTitleInput('');
 const ref = useRef();
 const [ dishes, setDishes] = useState([]);
 //const [data, loading] = useAbortableFetch('https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes');



  const fetchDishes = async () => {
    const res = await fetch('https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes');
    const data = await res.json();

    setDishes(data);
  }
   useEffect(() => {
      fetchDishes()
  }, [])

  const props = useSpring({ opacity: 1, from :{ opacity : 0}});

  console.log(props);

  const title = 'Level Up Dishes'
  
  //if(!data) return null;
  return (
    <div className="main-wrapper" ref={ref}>
      <animated.h1 style={props} onClick={() => console.log(ref.current.classList.add('new-fake-class'))}>
        { title }
      </animated.h1>
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
      {dishes && dishes.map(dish => (

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
