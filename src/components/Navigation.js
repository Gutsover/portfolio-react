import React from "react";
import { NavLink } from "react-router-dom";
import Photo from "../media/mylene.png";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src={Photo} alt="profil-pic" />
          <h3>Mylène Vandaële</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/competences" activeClassName="navActive">
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/portfolio" activeClassName="navActive">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className="fas fa-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/myl%C3%A8ne-vanda%C3%ABle-12a376150/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Gutsover"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/Mylene-V"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i className="fab fa-codepen"></i>
            </a>
          </li>
        </ul>
        <div className="signature">
          <p>Mylène Vandaële &copy;2021 </p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
