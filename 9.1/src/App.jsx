import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [favColor, setFavColor] = useState(true);

  return (
    <form>
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
          onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input 
          id="address" 
          type="text" 
          name="address" 
          value={address}
          onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div>
          <label htmlFor="location">State</label>
          <input 
          id="location" 
          type="text" 
          name="location" 
          value={location}
          onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input 
          id="country" 
          type="text" 
          name="country" 
          value={country}
          onChange={(e) => setCountry(e.target.value)} />
        </div>
        <div>
        <label htmlFor="favColor">Favorite Alpaca Color</label>
        <input
        id="favColor"
        type="checkbox"
        name="favColor"
        value={favColor}
        onChange={(e) => setFavColor(e.target.value)}
        />
        </div>
      </fieldset>
    </form>
  );
}

export default App;
