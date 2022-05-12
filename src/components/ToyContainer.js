import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onLike, onDonate }) {
  const toyCollection = toys.map(toy => <ToyCard toy={toy} key={toy.id} onLike={onLike} onDonate={onDonate} />)
  
  return (
    <div id="toy-collection">{toyCollection}</div>
  );
}

export default ToyContainer;
