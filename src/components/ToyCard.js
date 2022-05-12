import React from "react";

function ToyCard({ toy, onLike, onDonate }) {
  const { name, image, likes } = toy

  function handleLike() {
    onLike(toy)
  }

  function handlDonate() {
    onDonate(toy)
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLike} className="like-btn">Like {"<3"}</button>
      <button onClick={handlDonate} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
