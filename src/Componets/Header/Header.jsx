import { useState } from "react";
import './Header.css'
import logo from '../../../public/Logo.jpg'



export function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeOption, setActiveOption] = useState("OPcion1");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleOptionClick = (option) => {
    setActiveOption(option);

  };


  return (
    <>
      <nav>
        <header>
          <div className="navbar">
            <a href="" className="logo">
              <img src={logo} draggable="false" onMouseDown={(e) => e.preventDefault()} alt="Logo" />
            </a>
            <div className="nav-links">
              <ul>
                {/* {["OPcion1", "OPcion2", "OPcion3"].map((option) => (
                  <li key={option}>
                    <a  href={getUrlForOption(option)} className={activeOption === option ? "active" : ""} onClick={() => handleOptionClick(option)}>
                      {option}
                    </a>
                  </li>
                ))}*/}
                <li><a href="https://www.facebook.com/ibpuertadelcielo" target="_blank" className={activeOption === "option1" ? "active" : ""} onClick={() => handleOptionClick("option1")}>Siguenos</a></li>
                <li><a href="https://chat.whatsapp.com/ImgZBsoO6WDGvn4UeaS5eP" target="_blank" className={activeOption === "option2" ? "active" : ""} onClick={() => handleOptionClick("option2")}>Grupo de whatsapp</a></li>
                <li><a href="https://rules-jovenes-ipdc.netlify.app" target="_blank" className={activeOption === "option3" ? "active" : ""} onClick={() => handleOptionClick("option3")}>Reglas</a></li>
              </ul>
            </div>
            <div className="toggle" onClick={toggleMenu}></div>
          </div>
        </header>
        {showMenu && (
          <div className="mobile-menu">
            <div className="nav-links-mobile">
              <ul>
                {/* {["OPcion1", "OPcion2", "OPcion3"].map((option) => (
                  <li key={option}>
                    <a href="/" className={activeOption === option ? "active" : ""} onClick={() => handleOptionClick(option)}>
                      {option}
                    </a>
                  </li>
                ))} */}
                <li><a href="https://www.facebook.com/ibpuertadelcielo" target="_blank" className={activeOption === "option1" ? "active" : ""} onClick={() => handleOptionClick("option1")}>Siguenos</a></li>
                <li><a href="https://chat.whatsapp.com/ImgZBsoO6WDGvn4UeaS5eP" target="_blank" className={activeOption === "option2" ? "active" : ""} onClick={() => handleOptionClick("option2")}>Grupo de whatsapp</a></li>
                <li><a href="https://rules-jovenes-ipdc.netlify.app" target="_blank" className={activeOption === "option3" ? "active" : ""} onClick={() => handleOptionClick("option3")}>Reglas </a></li>
              </ul>
            </div>
            <div className="toggle togglePst" onClick={toggleMenu}></div>
          </div>
        )}
      </nav>
    </>
  )
}


