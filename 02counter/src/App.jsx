import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App(){
   let [Counter,setCounter] = useState(5) 
  // let Counter = 5;                      //LEARING WHY WE NEED HOOKS
  const addValue = () => {
    // Counter = Counter+1;
    setCounter(Counter+1)
    
  }
  const removeValue = () => {
    setCounter(Counter-1);
  }  // try to build when we click remove the value not go in negtive and add not more than 20
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value {Counter}</h2>
      
      <button onClick={addValue}>Add value</button>
    
      <button onClick={removeValue}>remove value</button>
      
    </>
  )
}

export default App
