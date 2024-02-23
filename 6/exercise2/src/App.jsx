function App() {
const happy = true;
const sad = true;
const tired = true;
  return (    
      <div>
        <h1>I just started React Yay!</h1>
        {happy && (<div>I am Happy</div>)}
        {sad && (<div>I am Not Sad</div>)}
        {tired ? (<div>I am very tired</div>) : (<div>I am wide awake</div>)}


       </div>  
  )
}

export default App
