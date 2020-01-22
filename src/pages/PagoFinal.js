import React from "react";
import FinalPay from "../components/pagofinal/FinalPay";
import DisplayerPedidos from "../components/pedidos/DisplayerPedidos";
const PagoFinal = () => {
  return (
    <div className="pago-final">
      <div className="items">
        <DisplayerPedidos />
      </div>
      <FinalPay />
    </div>
  );
};

export default PagoFinal;
