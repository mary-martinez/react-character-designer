import React from 'react';

export default function Editor({ setHead, setMiddle }) {
  return (
    <div>
      <div className="left">
        <div className="picker">
          <label>
            Head
            <select id="head-dropdown" onChange={(e) => setHead(e.target.value)}>
              <option value="bird">Bird</option>
              <option value="duck">Duck</option>
              <option value="dog">Dog</option>
              <option value="horse">Horse</option>
            </select>
          </label>
          <label>
            Middle
            <select id="middle-dropdown" onChange={(e) => setMiddle(e.target.value)}>
              <option value="blue">Blue</option>
              <option value="dress">Fancy</option>
              <option value="pink">Pink</option>
              <option value="red">Red</option>
            </select>
          </label>
          <label>
            Bottom
            <select id="bottom-dropdown">
              <option value="leg">Single Leg</option>
              <option value="white">White Pants</option>
              <option value="blue">Blue Jeans</option>
            </select>
          </label>
          <label>
            Add a catch phrase
            <input id="catchphrase-input" />
            <button id="catchphrase-button">Add</button>
          </label>
        </div>
        {/* <div id="stats">
          <p id="report"></p>
          <div id="catchphrases">

          </div>
        </div> */}
      </div>
    </div>
  );
}
