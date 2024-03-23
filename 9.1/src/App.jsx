import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [colors, setColors] = useState([]);

  function handleCheckbox(e) {
    const color = e.target.id;
    setColors(prevColors => {
      if (prevColors.includes(color)) {
        return prevColors.filter(c => c !== color);
      } else {
        return [...prevColors, color];
      }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      address,
      location,
      country,
      colors
    };
    console.log(formData); // Optional: Log the form data to the console
    const formOutput = JSON.stringify(formData, null, 2);
    document.getElementById("formOutput").textContent = formOutput;
  }

  const [firstNameError, setFirstNameError] = useState(null)
  const [lastNameError, setlastNameError] = useState(null)

  return (
    <>
      <h1>Alpaca Fan Club Registration</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Information</legend>
          <div>
            <label className="required" htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onBlur={() => {
                if(!firstName) {
                  setFirstNameError("This Field Required")
                }
              }}
            />
            {firstNameError && (
              <>
              <br />
              <span className="error">{firstNameError}</span>
              </>
            )}
          </div>
          <div>
            <label className="required" htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onBlur={() => {
                if(!firstName) {
                  setlastNameError("This Field Required")
                }
              }}
            />
            {lastNameError && (
              <>
              <br />
              <span className="error">{lastNameError}</span>
              </>
            )}
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
        </fieldset>
        <fieldset>
          <legend>What is your favorite Alpaca Color?</legend>
          <div className="checkbox-group">
            <label htmlFor="white">White</label>
            <input
              id="white"
              type="checkbox"
              name="colors"
              checked={colors.includes("white")}
              onChange={handleCheckbox}
            />
            <label htmlFor="black">Black</label>
            <input
              id="black"
              type="checkbox"
              name="colors"
              checked={colors.includes("black")}
              onChange={handleCheckbox}
            />
            <label htmlFor="gray">Gray</label>
            <input
              id="gray"
              type="checkbox"
              name="colors"
              checked={colors.includes("gray")}
              onChange={handleCheckbox}
            />
            <label htmlFor="brown">Brown</label>
            <input
              id="brown"
              type="checkbox"
              name="colors"
              checked={colors.includes("brown")}
              onChange={handleCheckbox}
            />
            <label htmlFor="fancy">Fancy</label>
            <input
              id="fancy"
              type="checkbox"
              name="colors"
              checked={colors.includes("fancy")}
              onChange={handleCheckbox}
            />
          </div>
        </fieldset>
        <button type="submit">Register</button>
        <div className="form-output" id="formOutput"></div>
      </form>
    </>
  );
}

export default App;
