import React from "react";
import "./Cards.css";

const Cards = ({ titolo, img }) => {
  return (
    <>
      <div
        className="card border-0 mx-2 mt-4 shadow-sm rounded rounded-5"
        style={{ maxWidth: "350px" }}
      >
        <img
          src={img}
          className="card-img-top photo immagine rounded rounded-5"
          alt="foto"
          style={{
            maxWidth: "23rem",
            maxHeight: "18rem",
            objectFit: "cover",
            backgroundColor: "whitesmoke",
          }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-card text-center">{titolo}</h5>
        </div>
      </div>
    </>
  );
};

export default Cards;
