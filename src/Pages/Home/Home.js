import React from "react";
import imgHomeShop from "./shopimg.jpg";
import "./Home.css";

export default function Home() {
  return (
    <div className="global-container">
      <h1 className="home-title">
        Bienvenue au <span>Shop</span>
      </h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi ad beatae
        harum dicta neque repellendus architecto eos ea dolor voluptate!
      </p>
      <img src={imgHomeShop} alt="accueil shop" />
    </div>
  );
}
