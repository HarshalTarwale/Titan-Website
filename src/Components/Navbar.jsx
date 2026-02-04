import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center py-[2vh] zen">
      <div className="navbar bg-white/10 backdrop-blur-md h-[15%] w-[75%] rounded-[30vh] flex items-center justify-between px-[4vh] border-[0.5px] border-white/30 shadow-lg">
        <div className="Left ">
            <Link to="/">
              <img src={`${import.meta.env.BASE_URL}Images/LOGO.png`} alt="Logo" className="h-[8vh] cursor-pointer" />
            </Link>
        </div>
        <div className="right pr-[2vh]">
            <div className="navlinks flex gap-[5vh] font-['zen_dots'] text-[1.9vh] text-white">
                <Link to= "/all-products">All Products</Link>
                <Link to= "/wishlist">Wishlist</Link>
                <Link to= "/cart">Cart</Link>
                <Link to= "/account">Account</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
