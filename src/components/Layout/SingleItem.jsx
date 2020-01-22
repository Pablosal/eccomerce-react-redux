import React from "react";
import "./SingleItem.css";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
const mapStateToProps = state => {
  return {
    articles: state.EcommerceReducer.data,
    carr: state.CarroReducer
  };
};
const ConnectSingleItem = ({ a, carr, Add, articles }) => {
  const { id } = useParams();
  const getInfo = name => {
    let letter = articles[id].find(a => a.id === name);
    return letter;
  };
  const getId = id => {
    Add(getInfo(id));
  };

  return (
    <div className="item" key={a.id}>
      <div
        className="image"
        style={{
          background: `url(${a.img}) center center no-repeat `,
          height: "350px",
          backgroundSize: "cover"
        }}
      >
        {/* <img src={a.img} alt="" width="100%" /> */}
      </div>
      <div className="descripcion">
        <h2>{a.nombre}</h2>
        <p>{a.descripcion}</p>
        <button className="btn">Conocer Mas</button>
        <button className="btn danger" onClick={() => getId(a.id)}>
          Agregar a Carro
        </button>
      </div>
    </div>
  );
};

const SingleItem = connect(mapStateToProps)(ConnectSingleItem);
export default SingleItem;
