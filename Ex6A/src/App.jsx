function App() {
  const myLlamaArray = ["Llamas are vegetarians and have very efficient digestive systems.", "Llamas live to be about 20 years old. Though some only live for 15 years and others live to be 30 years old." , "Llamas come in a range of solid and spotted colors including black, gray, beige, brown, red, and white.", "A group of llamas is called a herd.", "Llamas are members of the camelid family meaning they're pretty closely related to vicuñas and camels."];

  const myLlamaStringTrue = "Llama's are more closely related to vicuñas and camels.";
  const myLlamaStringFalse = "Llama's are related to Dinosaurs.";

  return (
   <div><h1>Llama's Are Cool</h1>
   <h2>Let's Learn about Llama's</h2>
   <div><h3>Here are some LLama Facts:</h3></div>
   <div>
  {myLlamaArray[0]}<br></br>
  {myLlamaArray[1]}<br></br>
  {myLlamaArray[2]}<br></br>
  {myLlamaArray[3]}<br></br>
  {myLlamaStringFalse === "Llama's are related to Dinosaurs." ? (<div>{myLlamaStringTrue}</div>) : (<div>{myLlamaStringFalse}</div>)}

  </div>
   </div>
  )
}

export default App
