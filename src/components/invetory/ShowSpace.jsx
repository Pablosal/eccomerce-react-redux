import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./ShowSpace.css";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import SingleItem from "../Layout/SingleItem";
import { add_item } from "../../context/actions/CarroActions";

const mapStateToProps = state => {
  return { articles: state.EcommerceReducer.data };
};
const mapDispatchToProps = dispatch => {
  return {
    Add: () => dispatch(add_item)
  };
};
const ConnectedShopSpace = ({ articles }) => {
  const data = useSelector(state => state.EcommerceReducer.data);
  console.log(articles);
  // const dispatch = useDispatch();

  return (
    <div className="display-items">
      <div className="header-image">
        <Link to="/categoria/calcetines">
          <div className="touch">
            <h1 className="center">Calcetines</h1>
          </div>
        </Link>
      </div>
      {/* {articles.map(a => (
        <h1>{a.name}</h1>
      ))} */}
      <div className="shared-images">
        <div className="col-1">
          <Link to="/categoria/jaquetas">
            <div className="touch">
              <h2 className="center">Jaquetas</h2>
            </div>
          </Link>
        </div>
        <div className="col-2">
          <Link to="/categoria/jeans">
            <div className="touch">
              <h2 className="center">Pantalones</h2>
            </div>
          </Link>
        </div>
      </div>
      <div className="cataloges">
        <Link to="/categoria/celulares">
          <div className="touch">
            <h1>Celulares</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};
const ShowSpace = connect(mapStateToProps)(ConnectedShopSpace);
export default ShowSpace;
