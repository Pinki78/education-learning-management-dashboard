"use client";
import { useState } from "react";
import { IoNotifications } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "flowbite-react";

import DropdownNoti from "./dropdown-noti";

const NotiHeader = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNotiDrawerOpen = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <div className="bx-noti-preview relative ">
        <Button
          className={`bx-noti-button-count bg-transparent  rounded-[0] text-[24px] text-[#018d39] 
                hover:bg-transparent 
                hover:text-[#000] relative`}
          onClick={handleNotiDrawerOpen}
        >
          <IoNotifications className="" />
          <span
            className={`bx-noti-item-count text-[11px] py-[2px] 
          px-[6px] absolute bg-[#000] rounded-4xl top-0 right-[11px] text-[#fff]`}
          >
            0
          </span>
        </Button>

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
              <DropdownNoti />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default NotiHeader;
