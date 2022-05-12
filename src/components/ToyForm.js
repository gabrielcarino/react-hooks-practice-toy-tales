import React, { useState } from "react";

function ToyForm({ onAddToy }) {
  const [formData, setFormData] = useState({
    name: "",
    image: ""
  })

  function handleSubmit(e) {
    e.preventDefault();
    onAddToy(formData);
    e.target.name.value = "";
    e.target.image.value = "";
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={e => setFormData({...formData, name: e.target.value})}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={e => setFormData({...formData, image: e.target.value})}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
