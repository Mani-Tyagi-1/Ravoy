import React from 'react'

const cartButton = () => {
  return (
    <div className="w-[263px] h-[90px] flex flex-col items-center relative">
      <div className="w-full h-[52px] border-[1px] border-[#767676] absolute top-5">
        <h2 className="w-full h-full font-[Inter] font-[400] text-[20px] text-center text-[#767676] flex justify-center items-center tracking-[4px] ">
          Move to Cart
        </h2>
      </div>
    </div>
  );
}

export default cartButton