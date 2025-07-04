import React from "react";
import MenuCard from "../layout/MenuCard";

const Menu = () => {
  const menus = [
    {
      name: "Cappuccino",
      img: "/cappucchino.jpg",
    },
    {
      name: "Latte",
      img: "/latti.jpg",
    },
    {
      name: "Espresso",
      img: "/Espresso.jpg",
    },
    {
      name: "Americano",
      img: "/Americano.jpg",
    },
    {
      name: "Doppio",
      img: "/doppio.jpg",
    },
    {
      name: "Black Coffee",
      img: "/black.jpg",
    },
  ];
  return (
    <section
      id="menu"
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-[#b89b84] via-[#e9d7c3] to-[#fffaf3] pt-25 pb-15"
    >
      <div className="flex flex-col items-center px-5">
        <div>
          <h1 className="text-5xl mb-8 font-semibold text-[#4b2e2b]">
            Our Menu
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {menus.map((menu, key) => (
            <MenuCard key={key} {...menu} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
