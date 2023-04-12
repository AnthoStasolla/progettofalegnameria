import React from "react";
import { useLottie } from "lottie-react";
import "./Firstpanel.css";
import background from "../assets/immagini/carosel2.jpg";
import animazione from "../assets/animazioni/124276-logs-dropping.json";

const Firstpanel = () => {
  const options = {
    animationData: animazione,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);
  return (
    <>
      <div
        id="about"
        className=" d-flex container-firstpanel mt-2"
        style={{
          background: `url(${background})`,
        }}
      >
        <div className="container">
          <h3 className="text-panel1 p-3">Da anni passione e dedizione...</h3>
          <p>
            ...contattaci e <strong>chiedi un preventivo</strong> per
            l'arredamento dei tuoi sogni
          </p>
        </div>
        <div className="">{View}</div>
      </div>
    </>
  );
};

export default Firstpanel;
