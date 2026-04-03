"use client";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Header from "@/components/header/header";
import SideBarNav from "@/components/header/header-compon/side-bar/side-bar-nav";
import PageTitleArea from "@/components/page-title-area/page-title-area";

const LayoutWrapper = ({ children }) => {

  const dispatch = useDispatch();
  const { activeItemId }= useSelector((state) => state.headerMenuReducer); // assuming your slice has 'open'


  return (
    <>
      <Header />

      <section className={`pt-[83px] `}>
       
          <div className="bx-grid-wrapper">
            <div
              className={`
                fixed 
                top-[73px] bottom-[0] left-[0px]
                transition-all duration-300
                ${activeItemId ? "w-[60px]" : "w-[240px]"}
              `}
            >
              <SideBarNav />
            </div>

            <div
              className={`
                pt-[0px]
                transition-all duration-300
                ${activeItemId ? "ml-[76px]" : "ml-[258px]"}
              `}
            >
               {/* Dynamic Page Title */}
              <div className="container  xl:max-w-full w-full px-5">
                <PageTitleArea  />
                {children}
              </div>
            </div>
          </div>
        
      </section>
    </>
  );
};

export default LayoutWrapper;
