import React, { useState } from "react";
import Porker from "./Porker";

function PorkersList({ porkers }) {
    const [filterValue, setFilterValue] = useState(false);
    const [order, setOrder] = useState(false);
    const filteredGreasedHogs = porkers.filter((hog) => {
        return filterValue ? hog.greased : hog
    })
    const data = order
      ? filteredGreasedHogs.sort((a, b) => a.name > b.name ? -1 : 0)
      : filteredGreasedHogs 
  
  return (
    <>
      <input
        type="checkbox"
        onChange={(e) => setFilterValue(e.target.checked)}
      />{" "}
      {filterValue ? "Show all hogs" : "Show greased hogs"}{" "}
      <input type="checkbox" onChange={(e) => setOrder(e.target.checked)} />{" "}
      Sort By Name
      <div style={{display:"flex",flexWrap:"wrap"}}>
        {data.map((item, index) => (
          <Porker
            key={index}
            name={item.name}
            image={item.image}
            specialty={item.specialty}
            weight={item.weight}
            greased={item.greased}
            highestMedal={item["highest medal achieved"]}
          />
        ))}
      </div>
    </>
  );
}

export default PorkersList;
