import "./Container.css";
import { useState } from "react";
import Lottie from "lottie-react";
import SvgMan from "../../svgs/man.json";
import SvgGirl from "../../svgs/girl.json";
import { Marcador } from "../../fetchingComponents/Marcador";
import { Tabla } from "../../fetchingComponents/Tabla";
import image from '../../../public/gender.png';


export function Container() {
  const [showTable, setShowTable] = useState(false);
  function toggleTable() {
    setShowTable(!showTable);
  }

  const [showTableH, setShowTableH] = useState(false);
  function toggleTableH() {
    setShowTableH(!showTableH);
  }

  return (
    <>
      <div className="container">
        <img src={image} draggable="false" onMouseDown={(e) => e.preventDefault()} alt="Logo Genero" />
        <h2>A Cual Equipo Perteneces?👀</h2>
        <div className="cont-num">
          <div className="cont-man-table num">
            <div className="cont-title animation-man">
              <span style={{ "--I": 1 }}>H</span>
              <span style={{ "--I": 2 }}>O</span>
              <span style={{ "--I": 3 }}>M</span>
              <span style={{ "--I": 4 }}>B</span>
              <span style={{ "--I": 5 }}>R</span>
              <span style={{ "--I": 6 }}>E</span>
              <span style={{ "--I": 7 }}>S</span>
              <span style={{ "--I": 8 }}> &#129333;</span>
            </div>
            <Marcador ratio="h"/>
          </div>

          <div className="cont-girl-table num">
            <div className="cont-title animation-girl">
              <span style={{ "--I": 1 }}>M</span>
              <span style={{ "--I": 2 }}>U</span>
              <span style={{ "--I": 3 }}>J</span>
              <span style={{ "--I": 4 }}>E</span>
              <span style={{ "--I": 5 }}>R</span>
              <span style={{ "--I": 6 }}>E</span>
              <span style={{ "--I": 7 }}>S</span>
              <span style={{ "--I": 8 }}> 👩‍💼</span>
            </div>
            <Marcador ratio="m" clas="colorGirl"/>
          </div>
        </div>
        <div className="cont-svg">
          <div className="cont-man">
            <Lottie animationData={SvgMan} />
           
            <div className="cont-Button">
              <button onClick={toggleTableH} className="button-man">
                Ver Detalles
              </button>
            </div>
            {showTableH && <Tabla ratio="h" />}
            <div></div>
          </div>
          <div className="cont-girl">
            <div  style={{ width: "580px", height: "auto", position: "relative" }}>
          <Lottie animationData={SvgGirl} />
          </div>
            
            <div className="cont-Button">
              <button onClick={toggleTable} className="button-girl">
                Ver Detalles
              </button>
            </div>
            {showTable && <Tabla ratio="m" />}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
