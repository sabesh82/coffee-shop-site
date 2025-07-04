import React from "react";
import ProductCard from "../layout/ProductCard";

const Products = () => {
  const products = [
    {
      image: "/product1.jpg",
      name: "Lavazza",
      price: "4999 Rs/=",
    },
    {
      image: "/product2.jpg",
      name: "Nespresso",
      price: "4999 Rs/=",
    },
    {
      image: "/product3.jpg",
      name: "Keurig",
      price: "4999 Rs/=",
    },
  ];
  return (
    <section
      id="products"
      className="w-full min-h-screen bg-gradient-to-r from-[#b89b84] via-[#e9d7c3] to-[#fffaf3] flex items-center justify-center pt-22 md:pt-10 pb-15"
    >
      <div className="flex flex-col items-center px-5">
        <div>
          <h1 className="text-5xl mb-10 font-semibold text-[#4b2e2b] text-center">
            Our Products
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, key) => (
            <ProductCard key={key} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
