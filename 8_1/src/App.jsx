import { useState } from 'react'
import './App.css'
import Dog from "./assets/Dog.webp";
import Cat from "./assets/Cat.webp";
import Animals from "./Animals";
function App() {
  const [pet, setPet] = useState(Dog)

  return (
    <>
      <div>
       <Animals url={pet} />
      </div>
      <h1>Pets</h1>
      <div className="card">
        <button onClick={() => {
          console.log("click dog");
          setPet(Dog);
          }}>  
          Dog        
        </button>
        <button onClick={() => {
          console.log("click cat");
          setPet(Cat);
          }}> 
          Cat         
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
