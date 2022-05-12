import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);
  const API = "http://localhost:3001/toys"

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(toys => setToys(toys))
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  };

  function handleAddToy(formData) {
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...formData, likes: 0}),
    })
      .then(r => r.json())
      .then(newToy => setToys([...toys, newToy]))
  };

  function handleDonate(deletedToy) {
    fetch(`${API}/${deletedToy.id}`, {
      method: "DELETE",
    })
      .then(r => r.json()) 
      .then(() => {
        const updatedToys = toys.filter(toy => toy.id !== deletedToy.id);
        setToys(updatedToys)
      });
  };

  function handleLike(likedToy) {
    fetch(`${API}/${likedToy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...likedToy, likes: likedToy.likes++}),
    })
      .then(r => r.json())
      .then(likedToy => {
        const updatedToys = toys.map(toy => {
          if(toy.id === likedToy.id) return {...toy, likes: toy.likes++};
          return toy;
        });
        setToys(updatedToys);
      });
  };

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDonate={handleDonate} onLike={handleLike} />
    </>
  );
}

export default App;
