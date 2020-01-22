import React, { useState } from "react";
import "./Price.css";
import Modal from "../modal/Modal";
import { connect } from "react-redux";
import { reset } from "../../context/actions/CarroActions";

const mapStateToProps = state => {
  return {
    Curent: state.curr
  };
};
const mapDispatchToProps = dispatch => {
  return {
    Reset: () => dispatch(reset())
  };
};
const ConnectPriceDisplayer = ({ precio, Reset, Curent }) => {
  const [buy, setBuy] = useState(false);
  const Shop = () => {
    setBuy(true);
    Reset();
  };
  const CloseModal = () => {
    setBuy(false);
  };
  return (
    <div className="box-sha">
      <h2>Valor Compra: </h2>
      <br />
      <h2 className="MayorText">{precio} </h2>
      <button className="btn" onClick={Shop}>
        Comprar
      </button>
      {buy ? <Modal close={CloseModal}></Modal> : null}
    </div>
  );
};
const PriceDisplayer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectPriceDisplayer);
export default PriceDisplayer;
