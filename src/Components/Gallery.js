import React from "react";
import gallery1 from "../assets/immagini/gallery1.jpeg";
import gallery2 from "../assets/immagini/gallery2.jpeg";
import gallery3 from "../assets/immagini/gallery3.jpeg";
import gallery4 from "../assets/immagini/gallery4.jpeg";
import gallery5 from "../assets/immagini/gallery5.jpeg";
import gallery6 from "../assets/immagini/gallery6.jpeg";
import gallery7 from "../assets/immagini/gallery7.jpeg";
import gallery8 from "../assets/immagini/gallery8.jpeg";
import gallery9 from "../assets/immagini/gallery9.jpeg";
import gallery10 from "../assets/immagini/gallery10.jpeg";
import gallery11 from "../assets/immagini/gallery11.jpeg";
import gallery12 from "../assets/immagini/gallery12.jpeg";
import gallery13 from "../assets/immagini/carosel.jpeg";
import gallery14 from "../assets/immagini/cucinahome.jpeg";
import gallery15 from "../assets/immagini/bagnohome.jpeg";

const Gallery = () => {
  return (
    <>
      <div
        id="gallery"
        className="container mt-4 mb-1"
        style={{
          background:
            "linear-gradient(292deg, rgba(255,255,255,1) 23%, rgba(228,122,25,1) 45%, rgba(255,255,255,1) 79%)",
        }}
      >
        <h2
          className="text-center text-form mb-4"
          style={{
            fontSize: "40px",
            textShadow: "0px 1px 0px #4f2a09",
          }}
        >
          Gallery
        </h2>
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src={gallery1}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="foto"
            />

            <img
              src={gallery9}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="foto2"
            />
            <img
              src={gallery2}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="foto7"
            />
            <img
              src={gallery12}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="foto7"
            />
            <img
              src={gallery13}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="foto7"
            />
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src={gallery4}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="foto3"
            />

            <img
              src={gallery5}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="foto4"
            />
            <img
              src={gallery3}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="foto7"
            />
            <img
              src={gallery11}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="foto7"
            />
            <img
              src={gallery15}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="foto7"
            />
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src={gallery6}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="foto5"
            />

            <img
              src={gallery7}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="foto6"
            />
            <img
              src={gallery8}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="foto7"
            />
            <img
              src={gallery10}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="foto7"
            />
            <img
              src={gallery14}
              className="w-100 shadow-1-strong rounded mb-4"
              alt="foto7"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
