import React from "react";
import "./Displayer.css";
const DisplayerPedidos = ({ a }) => {
  return (
    <div className="row-pedido">
      <div
        className="img"
        style={{
          background: `no-repeat center url(${a.img})`,
          backgroundSize: "cover"
        }}
      ></div>
      <div className="info">
        <h4>{a.nombre}</h4>
        <h4>{a.precio}</h4>
      </div>
    </div>
  );
};

export default DisplayerPedidos;
