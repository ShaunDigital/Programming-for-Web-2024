import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [favColor, setFavColor] = useState("");
  const [whiteChecked, setWhiteChecked] = useState(false);
  const [blackChecked, setBlackChecked] = useState(false);
  const [grayChecked, setGrayChecked] = useState(false);
  const [brownChecked, setBrownChecked] = useState(false);
  const [fancyChecked, setFancyChecked] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ firstName, lastName, address, location, country, favColor, whiteChecked,
      blackChecked, grayChecked, brownChecked, fancyChecked, });
  }

  return (
    <>
      <h1>Alpaca Fan Club Registration</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Information</legend>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="location">State</label>
            <input
              id="location"
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input
              id="country"
              type="text"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div>
            <h2>What is your favorite Alpaca Color?</h2>
            </div>
          <div>
          <label htmlFor="favColor">White</label>
          <input
            id="favColor"
            type="checkbox"
            name="white"
            checked={whiteChecked}
            onChange={(e) => setWhiteChecked(e.target.checked)}            
          />
        
        
          <label htmlFor="favColor">Black</label>
          <input
            id="favColor"
            type="checkbox"
            name="black"
            checked={blackChecked}
            onChange={(e) => setBlackChecked(e.target.checked)}
          />
        
        <label htmlFor="favColor">Gray</label>
          <input
            id="favColor"
            type="checkbox"
            name="gray"
            checked={grayChecked}
            onChange={(e) => setGrayChecked(e.target.checked)}
          />
          <label htmlFor="favColor">Brown</label>
          <input
            id="favColor"
            type="checkbox"
            name="Brown"
            checked={brownChecked}
            onChange={(e) => setBrownChecked(e.target.checked)}
          />
          <label htmlFor="favColor">Fancy</label>
          <input
            id="favColor"
            type="checkbox"
            name="fancy"
            checked={fancyChecked}
            onChange={(e) => setFancyChecked(e.target.checked)}
          />
          </div>
        </fieldset>
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default App;
