import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Nav from "../components/Nav";

const Home = () => {
  return (
    
    <div>
      <img id="mainPhoto" src="./images/fasion-fusion.png" alt="fashion-fusion"></img>
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
