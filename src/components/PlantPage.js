import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchPlant, setSearchPlant] = useState('')

  useEffect(() => {
    fetch("http://localhost:6001/plants")
     .then(response => response.json())
     .then((plants) => {
        setPlants(plants)
     })
  }, []);

  function handleAddPlant(newPlant){
    setPlants([...plants,newPlant])
  }

  const filteredPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchPlant.toLowerCase())
  })

  return (
    <main>
      <NewPlantForm 
        onAddPlant={handleAddPlant}
        />
      <Search 
        search={searchPlant}
        setSearch={setSearchPlant}
        />
      <PlantList 
        plants={filteredPlants}
        />
    </main>
  );
}

export default PlantPage;
