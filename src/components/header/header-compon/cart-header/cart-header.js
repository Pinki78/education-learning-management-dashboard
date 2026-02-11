"use client";
import { useState } from "react";
import CartDropdown from "./cart-popup-dropdown";
import { IoMdCart } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";


import {
 Button
} from "flowbite-react";

const CartHeader = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleCartDrawerOpen = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <div className="bx-cart-preview relative ms-[12px]">
      <Button
        className="bx-cart-button-count bg-transparent  rounded-[0] text-[24px] text-[#018d39] 
        hover:bg-transparent 
        hover:text-[#000] "
        onClick={handleCartDrawerOpen}
      >
        <IoMdCart className="" />
        <span className="bx-cart-item-count text-[15px]">0</span>
      </ Button>

      {/* Animated Dropdown */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            key="cart-dropdown"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute right-0 mt-2 z-50"
          >
            <CartDropdown />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </>
  );
};

export default CartHeader;
