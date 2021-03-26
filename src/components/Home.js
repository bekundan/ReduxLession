/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Home.css";

const Home = (props) => {
  console.log("Home", props);
  return (
    <div>
      <h1>Home </h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://images.pexels.com/photos/818043/pexels-photo-818043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        </div>
        <div className="text-wrapper item">
          <span>Iphone 6s</span>
          <span>Price : $1089</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: "Iphone6s" })
            }
          >
            Add to cart
          </button>
          <button
            onClick={() =>
              props.removeToCartHandler({ price: 1000, name: "Iphone6s" })
            }
          >
            Remove to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
