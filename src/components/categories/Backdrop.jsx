import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Backdrop.css";
import { connect } from "react-redux";
import SingleItem from "../Layout/SingleItem";
import {
  add_item,
  remove_item,
  return_item,
  sum_total
} from "../../context/actions/CarroActions";

const mapStateToProps = state => {
  return {
    articles: state.EcommerceReducer.data,
    carr: state.CarroReducer
  };
};
function mapDispatchToProps(dispatch) {
  return {
    add_item: id => dispatch(add_item(id)),
    return_item: () => dispatch(return_item()),
    sumTotal: () => dispatch(sum_total())
  };
}
const ConnnectedBackdrop = ({
  articles,
  sumTotal,
  add_item,
  return_item,
  carr
}) => {
  const { id } = useParams();
  useEffect(() => {
    return_item();
  }, []);

  return (
    <div className="main-display">
      <h1>{id.charAt(0).toUpperCase() + id.slice(1)}</h1>

      <div className="itemList">
        {articles[id].map(a => (
          <SingleItem a={a} key={a.id} Add={add_item} total={sumTotal} />
        ))}
      </div>
    </div>
  );
};
const Backdrop = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnnectedBackdrop);
export default Backdrop;
