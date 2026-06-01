"use client";
import { useState } from "react";
import DropdownMsg from "./dropdown-msg";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "flowbite-react";

import { useDispatch, useSelector } from "react-redux";
import {
  toggleDrawerMsg,
  closeDrawerCart,
  closeDrawerNoti,
  closeDrawerProfile,
} from "@/assets/redux-store/store-redux-componets/drawerOpenHideSlice";

import { RiMessage2Fill } from "react-icons/ri";
const MsgHeader = (props) => {
  // const [drawerOpen, setDrawerOpen] = useState(false);

  const dispatch = useDispatch();

  const { drawerMsgOpen } = useSelector((state) => state.drawerReducer);

  const handleMagDrawerOpen = () => {
    dispatch(toggleDrawerMsg());
    dispatch(closeDrawerCart());
    dispatch(closeDrawerNoti());
    dispatch(closeDrawerProfile());
  };

  // const handleRemoveItem = (id) => {
  //   dispatch(removeFromCart(id));
  // };

  return (
    <>
      <div className="bx-msg-preview relative">
        <Button
          className={`bx-msg-button-count bg-transparent  rounded-[0] text-[24px] text-[#018d39] 
                hover:bg-transparent 
                hover:text-[#000] relative`}
          onClick={handleMagDrawerOpen}
        >
          <RiMessage2Fill className="" />
          <span
            className={`bx-msg-item-count text-[11px] py-[2px] 
          px-[6px] absolute bg-[#000] rounded-4xl top-0 right-[11px] text-[#fff]`}
          >
            0
          </span>
        </Button>

        {/* Animated Dropdown */}
        <AnimatePresence>
          {drawerMsgOpen && (
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
  );
};

export default MsgHeader;
