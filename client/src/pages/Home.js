import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div>
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
