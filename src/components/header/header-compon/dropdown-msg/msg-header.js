"use client";
import { useState } from "react";
import DropdownMsg from "./dropdown-msg";
import { motion, AnimatePresence } from "framer-motion";


import {
 Button
} from "flowbite-react";

import { RiMessage2Fill } from "react-icons/ri";
const MsgHeader = props => {

const [drawerOpen, setDrawerOpen] = useState(false);

  const handleCartDrawerOpen = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };


  return (
    <>

<div className="bx-msg-preview relative ms-[12px]">
      <Button
        className="bx-cart-button-count bg-transparent  rounded-[0] text-[24px] text-[#018d39] 
        hover:bg-transparent 
        hover:text-[#000] "
        onClick={handleCartDrawerOpen}
      >
        <RiMessage2Fill className="" />
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
            <DropdownMsg />
          </motion.div>
        )}
      </AnimatePresence>
    </div>

       
    
    </>
  )
}



export default MsgHeader