import React from "react";
import { IoCart } from "react-icons/io5";

const MenuCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <div className="p-3 bg-white flex flex-col rounded-xl">
      <img
        src={img}
        alt=""
        className="h-42 w-60 mb-4 rounded-xl hover:scale-101"
      />
      <p className="text-2xl font-semibold">{name}</p>

      {/*buttons*/}
      <div className="flex mt-2 items-center justify-between">
        <div className="flex gap-2">
          <button className="bg-[#e6ab7b] hover:bg-[#b48966] transition duration-150 text-black px-2 py-1 border-2 border-[#8e4306] rounded-xl cursor-pointer">
            Hot
          </button>
          <button className="bg-[#e6ab7b] hover:bg-[#b48966] transition duration-150 text-black px-2 py-1 border-2 border-[#8e4306] rounded-xl cursor-pointer">
            Cold
          </button>
        </div>
        {/*cart section*/}
        <div className="bg-[#e6ab7b] p-2 rounded-2xl text-xl hover:bg-[#b48966] border-2 border-[#8e4306] transition duration-150 cursor-pointer">
          <IoCart />
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
