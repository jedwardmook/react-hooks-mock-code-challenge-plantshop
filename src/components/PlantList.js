import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {


  const plantsToDisplay = plants.map((plant, id) => {
    return <PlantCard
            plant={plant}
            key={id}
            />
  })

 
  
  return (
    <ul className="cards">{plantsToDisplay}</ul>
  );
}

export default PlantList;
