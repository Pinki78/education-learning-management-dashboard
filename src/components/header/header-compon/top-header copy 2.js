"use client";

import { useDispatch, useSelector } from "react-redux";
import LinkButton from "@/components/button/link-button";
import Link from "next/link";
import CartHeader from "./cart-header/cart-header";
import MsgHeader from "./dropdown-msg/msg-header";
import SideBarButton from "./side-bar/side-bar-button";
import NotiHeader from "./dropdown-noti/noti-header";
import ProfileHeader from "./profile-dropdown/profile-header";

// import logo from "/images/";

const TopHeader = (props) => {
  const dispatch = useDispatch();
  const { loading }= useSelector((state) => state.headerMenuReducer); // assuming your slice has 'open'


  return (
    <>
      <div
        className="bx-top-header"> 
        <div className=" grid grid-cols-12  gap-4  ">
          <div className="col-span-1">
            <SideBarButton />
          </div>
          <div className="col-span-2 py-3">
            <div className="bx-log">
              <Link href="/">
                <img
                  src="/images/logo.png"
                  alt="logo"
                  className={`w-[74%]`}
                                
                />
              </Link>
            </div>
          </div>
          <div className="col-span-4 md:col-span-2 py-3"></div>
          <div className="col-span-5 md:col-span-7  py-3">
            <div className="flex jusyfy-end justify-end  content-center">
             
              <LinkButton
                 PathUrl="/create-new-course"
                BtnName="Create New Course"
                isProcessing={loading}
              />
              <CartHeader />

              <MsgHeader />

              <NotiHeader />

              <ProfileHeader />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
