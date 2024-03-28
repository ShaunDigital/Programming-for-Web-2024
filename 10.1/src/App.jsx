import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { Llamas } from "./views/Llamas";
import { Alpaca } from "./views/Alpaca";
import "./App.css";

function App() {
  return (
    <>
      {/* Nav here */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Llamas">Llamas</Link></li>
        <li><Link to="/Alpaca">Alpacas</Link></li>
      </ul>
      {/*Routes Here*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Llamas" element={<Llamas />} />
        <Route path="/Alpaca" element={<Alpaca />} />
      </Routes>
    </>
  );
}

export default App;
