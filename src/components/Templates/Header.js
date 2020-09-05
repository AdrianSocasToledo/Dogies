import React, { useState, useEffect } from "react";
import "./Header.css";
import { Combobox } from "react-widgets";
import getBreeds from "../../services/getBreeds";

function Header({ onSelectedBreed }) {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    getBreeds().then((message) =>
      setBreeds(Object.keys(message).map((breed) => breed))
    );
  }, []);

  const handleOnChange = (value) => {
    onSelectedBreed(value);
  };

  return (
    <div>
      <nav>
        <div className="logoHeader">Dogies</div>
        <div>
          <Combobox
            className="DropDownList"
            data={breeds}
            defaultValue="boxer"
            onChange={handleOnChange}
          />
          {
            //TODO subrazas.
          }
        </div>
      </nav>
    </div>
  );
}

export default Header;
