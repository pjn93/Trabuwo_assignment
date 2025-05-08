import React from "react";
import CategoryCarousel from "./components/CategoryCarousel";
import ProductCard from "./components/ProductCard";



const Home = () => {
  return (
    <div style={{paddingBlock:'20px'}}>
      <CategoryCarousel />
      <ProductCard />
    </div>
  );
};

export default Home;
