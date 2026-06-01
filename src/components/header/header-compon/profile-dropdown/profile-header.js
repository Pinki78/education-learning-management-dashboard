"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser } from "react-icons/fa";
import ProfileDropdown from "./profile-dropdown";
import { Button } from "flowbite-react";

import { useDispatch, useSelector } from "react-redux";
import { toggleDrawerProfile, closeDrawerMsg, closeDrawerCart, closeDrawerNoti } from "@/assets/redux-store/store-redux-componets/drawerOpenHideSlice";




const ProfileHeader = (props) => {
  const dispatch = useDispatch();

  const { drawerProfileOpen } = useSelector(
    (state) => state.drawerReducer
  );
  const handleProfileDrawerOpen = () => {
     dispatch(toggleDrawerProfile());
    dispatch(closeDrawerCart());
    dispatch(closeDrawerMsg());
    dispatch(closeDrawerNoti());
  };

  return (
    <>
      <div className="bx-profile-preview relative ">
        <Button
          className={`bx-profile-button-count bg-transparent  rounded-[0] text-[24px] text-[#018d39] 
                hover:bg-transparent 
                hover:text-[#000] relative`}
          onClick={handleProfileDrawerOpen}
        >
          <FaUser className="" />
          
        </Button>

        {/* Animated Dropdown */}
        <AnimatePresence>
          {drawerProfileOpen && (
            <motion.div
              key="profile-dropdown"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute right-0 mt-2 z-50"
            >
              <ProfileDropdown />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ProfileHeader;
