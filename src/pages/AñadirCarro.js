import React, { useEffect } from "react";
import DisplayerPedidos from "../components/pedidos/DisplayerPedidos";
import PriceDisplayer from "../components/pedidos/PriceDisplayer";
import { connect } from "react-redux";
import { sum_total } from "../context/actions/CarroActions";
const mapStateToProps = state => {
  return {
    articles: state.EcommerceReducer.data,
    carr: state.CarroReducer
  };
};
function mapDispatchToProps(dispatch) {
  return {
    sumTotal: () => dispatch(sum_total())
  };
}
const ConnectAñadirCarro = ({ carr, sumTotal }) => {
  useEffect(() => {
    console.log(carr.favoritos);
    sumTotal();
    console.log();
  }, []);
  return (
    <>
      <h1>Mis Pedidos</h1>
      <div className="display-pedidos">
        {carr.favoritos.map(a => {
          return <DisplayerPedidos key={a.id} a={a} />;
        })}
      </div>

      <PriceDisplayer
        precio={carr.favoritos.reduce(
          (sum, { precio }) => parseInt(sum) + parseInt(precio),
          0
        )}
      />
    </>
  );
};
const AñadirCarro = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectAñadirCarro);
export default AñadirCarro;
