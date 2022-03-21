import React,{useState} from "react";

function PlantCard({plant}) {
  const [inStock,setInStock] = useState(true);

  function onClickInStock(){
    setInStock(!inStock)
  }

  const {image, name, price} = plant
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={onClickInStock} className="primary">In Stock</button>
      ) : (
        <button onClick={onClickInStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
