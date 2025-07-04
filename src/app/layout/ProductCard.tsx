import React from "react";

const ProductCard = ({
  image,
  name,
  price,
}: {
  image: string;
  name: string;
  price: string;
}) => {
  return (
    <div className="bg-white px-3 py-5 rounded-xl flex flex-col items-center">
      <img
        src={image}
        alt=""
        className="h-42 w-60 mb-3 rounded-xl hover:scale-101 border-2 border-[#6e3b11]"
      />
      <p className="text-2xl font-semibold text-center mb-3">{name}</p>
      <p className="text-xl text-center mb-6">{price}</p>

      <button className="px-2 py-1 bg-[#6e3b11] hover:scale-102 rounded-xl text-white border-2 border-[#e6ab7b] w-40 text-center cursor-pointer">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
