import React from "react";
import "./SpecificPage.css";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return {
    articles: state.EcommerceReducer.data,
    carr: state.CarroReducer
  };
};
const ConnectSpecificPage = ({ carr }) => {
  return (
    <>
      <div className="sukatash">
        {carr.map(a => (
          <div className="description-item">
            <div className="showImg">
              <img src={a.image} alt="" className="showIm" />
            </div>
            <div className="descImg">
              <h1>{a.nombre}</h1>
              <hr />
              <p>{a.descripcion}</p>
              <button className="btn">Añadir al carro</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
const SpecificPage = connect(mapStateToProps)(ConnectSpecificPage);
export default SpecificPage;
