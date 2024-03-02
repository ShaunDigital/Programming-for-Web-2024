import "./index.css";
import Camelid from "./Camelid";
import llamaImage from './assets/Llama.jpg';
import alpacaImage from './assets/Alpaca.jpg';

function App() {
  const camelidsArray = [
    {
      type: "Llama",
      imageUrl: llamaImage,
      fact: "Llamas spit when they're agitated",
    },
    {
      type: "Alpaca",
      imageUrl: alpacaImage,
      fact: "Alpacas are native to Peru",
    },
  ];

  return (
    <>
      <div>
        <h2>Alpacas vs Llamas</h2>
        <Camelid  
        type={camelidsArray[0].type}
        imageUrl={camelidsArray[0].imageUrl}
        fact={camelidsArray[0].fact}
        />
        <Camelid
        type={camelidsArray[1].type}
        imageUrl={camelidsArray[1].imageUrl}
        fact={camelidsArray[1].fact}
        />
      </div>
    </>
  );
}

export default App;
