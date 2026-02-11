import { useDispatch, useSelector } from "react-redux";

import SideBarNav from "@/components/header/header-compon/side-bar/side-bar-nav";

const Homepage = () => {
  const dispatch = useDispatch();
  const { activeItemId } = useSelector((state) => state.headerMenuReducer); // assuming your slice has 'open'

  return (
    <>
      <section>
        <div className="container w-full mx-auto">
          <div className=" bx-grid-wrapper">
            <div
              className={`
                fixed 
                top-[83px] bottom-[0] left-[0px] transform 
                transition-all 
                duration-300   
                ${activeItemId ? "w-[60px]" : "w-[240px]"}`}
            >
              <SideBarNav />
            </div>

            <div
              className={`transform  transition-all  duration-300 
                ${activeItemId ? "ml-[76px]" : " ml-[258px]"}`}>
              <div className=" col-span-8 " >
               
                piii
              </div>

              <div className="  col-span-2 ">
                fff
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
