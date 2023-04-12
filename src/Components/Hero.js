import React from "react";
import "./Hero.css";
import defaultImage from "../assets/immagini/herohome.jpg";

const Hero = ({ img, children }) => {
  const image = img ? img : defaultImage;
  return (
    <>
      <div
        id="home"
        className="p-5 text-center bg-image intro-example"
        style={{
          background: `url(${image})`,
          height: 750,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="rounded-5 container-hero"
          style={{ backgroundColor: "rgba(255, 110, 0, 0.2)" }}
        >
          <div className="d-flex justify-content-center align-items-center h-100 ">
            <div className="text-white">
              <h1 className=" hero-text">Arredamenti su misura</h1>

              <h1 className="fs-2 mb-2 fst-italic hero-text">
                FRANCO STASOLLA
              </h1>
              <h4 className="my-3 hero-text" style={{ fontSize: "18px" }}>
                La tua casa su misura,
                <br /> al millimetro.{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
