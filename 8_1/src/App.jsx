import { useState } from 'react'
import './App.css'
import alpaca from "./assets/alpaca.jpg";
import llama from "./assets/llama.jpg";
import Animals from "./Animals";
function App() {
  const [pet, setPet] = useState(alpaca)

  return (
    <>
      <div>
       <Animals url={pet} />
      </div>
      <h1>Pets</h1>
      <div className="card">
        <button onClick={() => {
          console.log("click alpaca");
          setPet(alpaca);
          }}>  
          Alpaca      
        </button>
        <button onClick={() => {
          console.log("click llama");
          setPet(llama);
          }}> 
          LLama         
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
