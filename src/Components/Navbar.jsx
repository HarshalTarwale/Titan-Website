import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`fixed top-0 left-0 right-0 flex justify-center py-[2vh] zen transition-transform duration-300 z-[9999] ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="navbar bg-white/10 backdrop-blur-md h-[8%] w-[75%] rounded-[30vh] flex items-center justify-between px-[4vh] border-[0.5px] border-white/30 shadow-lg">
        <div className="Left ">
            <Link to="/">
              <img src={`${import.meta.env.BASE_URL}Images/LOGO.png`} alt="Logo" className="h-[7vh] cursor-pointer" />
            </Link>
        </div>
        <div className="right pr-[2vh]">
            <div className="navlinks flex gap-[5vh] zen text-[1.9vh] text-white">
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
