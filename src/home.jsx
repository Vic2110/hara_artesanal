// src/Home.jsx
import React from "react";

const Home = ({ user }) => {
  return (
    <div>
      <h2>¡Bienvenido a Hara Artesanal! 🌸</h2>
      <p>Estás logueado como <strong>{user.email}</strong></p>
      <p>Aquí pronto verás los productos disponibles, promociones y más ✨</p>
    </div>
  );
};

export default Home;
