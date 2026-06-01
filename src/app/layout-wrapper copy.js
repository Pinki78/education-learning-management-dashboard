"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Header from "@/components/header/header";
import SideBarNav from "@/components/header/header-compon/side-bar/side-bar-nav";
import PageTitleArea from "@/components/page-title-area/page-title-area";
import {
  uploadCourseFirestore,
  fetchCourse,
} from "@/assets/redux-store/store-redux-componets/courseListSilce";

const LayoutWrapper = ({ children }) => {
  const dispatch = useDispatch();
  const { activeItemId, mobileOpen } = useSelector(
    (state) => state.headerMenuReducer,
  ); // assuming your slice has 'open'

  useEffect(() => {
    // ✅ upload local data first, then fetch from firebase
    dispatch(uploadCourseFirestore()).then(() => {
      dispatch(fetchCourse());
    });
  }, [dispatch]);

  return (
    <>
      <Header />

      <section className={`pt-[83px] `}>
        <div className="bx-grid-wrapper">
          <div
            className={`
                fixed z-[9999]
                top-[73px] bottom-[0] left-[0px]
                transition-all duration-300
                ${activeItemId ? "4 w-[240px] sm:w-[240px] md:w-[240px] lg:w-[240px] xl:w-[60px] 2xl:w-[60px]  " : 
                  " 2xl:w-[240px] xl:w-[240px] sm:w-[60px] md:w-[60px] lg:w-[60px] w-[0px]  6"}
              `}
               style={{ willChange: "width" }}
          >
            <SideBarNav />
          </div>

          <div
            className={`
                pt-[0px]
                transition-all duration-300
                ${
                  activeItemId
                    ? "xl:ml-[76px]  xs:ml-[258px] sm:ml-[258px] md:ml-[258px]"
                    : "xl:ml-[258px]  xs:ml-[76px] sm:ml-[76px] md:ml-[76px]"
                }
              `}
          >
            {/* Dynamic Page Title */}
            <div className="container xs:max-w-full sm:max-w-full md:max-w-full xl:max-w-full w-full px-5">
              <PageTitleArea />
              {children}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LayoutWrapper;
