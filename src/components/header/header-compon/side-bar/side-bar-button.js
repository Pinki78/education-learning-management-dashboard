"use client";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import { HiOutlineBars3BottomRight,  HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { setToggleItem ,setShowCloseClass, setToggleDropdown,} from "@/assets/redux-store/store-redux-componets/headerMenuSlice";


const SideBarButton = () => {

  const dispatch = useDispatch();
  const { activeItemId, mobileOpen, showCloseClass }= useSelector((state) => state.headerMenuReducer); // assuming your slice has 'open'
// const [showCloseClass, setShowCloseClass] = useState(false);

// const handleClick = () => {
//   const nextState = !activeItemId;

//   console.log("activeItemId:", activeItemId);
//   console.log("nextState:", nextState);

//   dispatch(setToggleItem(nextState));

//   if (nextState) {
//     console.log("Closing dropdown");
//     dispatch(setToggleDropdown(false));
//   }
// };

const handleClick = () => {
  const nextState = !activeItemId;

  dispatch(setToggleItem(nextState));

  if (nextState) {
  dispatch(setToggleDropdown(false));

  dispatch(setShowCloseClass(true));

  setTimeout(() => {
    dispatch(setShowCloseClass(false));
  }, 300);
}


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
