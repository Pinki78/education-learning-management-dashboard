"use client";

import { useDispatch, useSelector } from "react-redux";
import LinkButton from "@/components/button/link-button";
import Link from "next/link";
import CartHeader from "./cart-header/cart-header";
import MsgHeader from "./dropdown-msg/msg-header";
import SideBarButton from "./side-bar/side-bar-button";
import NotiHeader from "./dropdown-noti/noti-header";
import ProfileHeader from "./profile-dropdown/profile-header";
import SearchInputForm from "@/components/search/search";
import { List, ListItem } from "flowbite-react";
// import logo from "/images/";
import { IoCreateSharp } from "react-icons/io5";
const TopHeader = (props) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.headerMenuReducer); // assuming your slice has 'open'

  return (
    <>
      <div className={`bx-top-header flex w-[100%] `}>
        <div className={`w-[5%] flex-none`}>
          <SideBarButton />
        </div>

        <div className="bx-log w-[13%] py-3">
          <Link href="/">
            <img src="/images/logo.png" alt="logo" className={`w-[100%]`} />
          </Link>
        </div>
        <div className={`py-3 ml-[15px] w-[26%]`}>
          <SearchInputForm />
        </div>
        <div className=" py-3 float-right w-[56%] grid">
          <List
            className={`flex jusyfy-end justify-end unstyled items-center list-none content-center`}
          >
            <ListItem className="mb-0">
              <LinkButton
                PathUrl="/create-new-course"
                BtnName="Create New Course"
                isProcessing={loading}
                // IconName="IoCreateSharp"
              />
            </ListItem>
            <ListItem className="mb-0">
              <CartHeader />
            </ListItem>
            <ListItem className="mb-0">
              <MsgHeader />
            </ListItem>
            <ListItem className="mb-0">
              <NotiHeader />
            </ListItem>
            <ListItem className="mb-0">
              <ProfileHeader />
            </ListItem>
          </List>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
