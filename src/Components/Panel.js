import React from "react";
import "./Panel.css";
import bagni from "../assets/immagini/bagnohome.jpeg";
import boh from "../assets/immagini/carosel1.jpeg";

const Panel = () => {
  return (
    <>
      <div className="text-center border border-1 container-panel">
        <h3>Ambienti irregolari impossibili da arredare?</h3>
        <a
          href="/#contact"
          className="btn btn-light btn-lg rounded rounded-bottom-5"
        >
          Contattaci
        </a>
      </div>
      <section
        className="d-md-grid d-lg-grid"
        style={{
          background:
            "linear-gradient(292deg, rgba(255,255,255,1) 23%, rgba(228,122,25,1) 45%, rgba(255,255,255,1) 79%)",
        }}
      >
        <div className="row">
          <div className="col">
            <div className="border border-4 border-warning rounded text-bg-dark">
              <img src={bagni} className="card-img" alt="foto" />
            </div>
          </div>
          <div className="col">
            <div className="card section-container ">
              <div className="container text-center mt-5 ">
                <p className="card-text text-panel">
                  L'Arredamento Con <br />
                  il TUO Stile!
                  <br />
                  <span style={{ color: "#d97919" }}>_________</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div
              className="card section-container"
              style={{
                backgroundColor: "#ebeae9",
              }}
            >
              <div className="container text-center mt-5 ">
                <p className="card-text text-panel">
                  Mobili Su Misura
                  <br /> Sempre Unici!
                  <br />
                  <span style={{ color: "#d97919" }}>_________</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="border border-4 border-warning rounded text-bg-dark">
              <img src={boh} className="card-img" alt="foto" />
            </div>
          </div>
        </div>
      </section>
      <div className="row">
        <div
          className="card border border-4 border-warning"
          style={{
            backgroundColor: "grey",
          }}
        >
          <h2 className="text-center p-1 m-1 text-span">
            <span className="mini-text">100%</span> VERO LEGNO.{" "}
            <span style={{ fontSize: "10px" }}>
              Utilizziamo solo legno di qualità
            </span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Panel;
