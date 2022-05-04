import React, { useState } from "react";

function Porker({ name, image, specialty, weight, greased, highestMedal }) {
  const [show, setShow] = useState(false);
  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid brown",
        width: "400px",
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <img src={image} alt={name} width="200px" />
      <h4>Name: {name}</h4>
      <button onClick={() => setShow(!show)}>{show ? "Less details" : "More details..."}</button>
      {show ? (
        <div>
          <p>Specialty: {specialty}</p>
          <p>Weight: {weight}</p>
          <p>Greased: {greased ? "True" : "False"}</p>
          <p> Highest medal achieved: {highestMedal}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Porker;
