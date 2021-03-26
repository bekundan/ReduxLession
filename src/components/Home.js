import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="add-cart">
        <img
          className="cart-img"
          src="data:image/png;base64,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"
        />
      </div>
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
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
