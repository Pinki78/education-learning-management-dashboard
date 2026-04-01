"use client";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import { HiOutlineBars3BottomRight,  HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { setToggleItem } from "@/assets/redux-store/store-redux-componets/headerMenuSlice";


const SideBarButton = () => {

  const dispatch = useDispatch();
  const { activeItemId }= useSelector((state) => state.headerMenuReducer); // assuming your slice has 'open'

const handleClick = () => {
    dispatch(setToggleItem(!activeItemId));
  };
  return (
     <>
      <Button onClick={handleClick} className={`z-50 h-[100%] p-[8px] w-[85%] bg-[#3b9e62]
      shadow-lg text-[33px] rounded-[0]  hover:bg-[#000]`}>
        {activeItemId ? <HiOutlineBars3BottomLeft /> : <HiOutlineBars3BottomRight />}
      </Button>
     </>
  );
};

export default SideBarButton;
