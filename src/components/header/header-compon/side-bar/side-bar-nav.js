"use client";

import { useDispatch, useSelector } from "react-redux";

import {
  Sidebar,
  SidebarCollapse,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import * as ImIcons from "react-icons/im";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io5";
import * as IoMdIcons from "react-icons/io";
import * as TbIcons from "react-icons/tb";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import * as SiIcons from "react-icons/si";
import * as PiIcons from "react-icons/pi";
import * as FaIcons from "react-icons/fa";
import {
  fetchHeaderMenu,
  uploadHeaderMenu,
} from "@/assets/redux-store/store-redux-componets/headerMenuSlice";
import { useEffect } from "react";

const SideBarNav = (props) => {

const allIcons = {
  ...ImIcons,
  ...RiIcons,
  ...IoIcons,
  ...IoMdIcons,
  ...TbIcons,
  ...BiIcons,
  ...MdIcons,
  ...SiIcons,
  ...PiIcons,
  ...FaIcons,
};

  const dispatch = useDispatch();
  const { activeItemId, menuHeader } = useSelector(
    (state) => state.headerMenuReducer,
  ); // assuming your slice has 'open'
  console.log(menuHeader);
  // useEffect(() => {
  //   dispatch(uploadHeaderMenu()).then(() => {
  //     dispatch(fetchHeaderMenu());
  //   });
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchHeaderMenu());
  }, [dispatch]);

  return (
    <>
      <div
        className={`
        bg-white 
        shadow-lg 
        z-40 
        transform 
        transition-all 
        duration-300 
        overflow-hidden
        absolute
        top-[0]
        bottom-[0]
        w-[100%]
      `}
      >
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
          <SidebarItems>
            <SidebarItemGroup>
              {menuHeader.map((item) => {
                const hasSubMenu = item.SubMenuDate?.length > 0;
                const IconComponent = allIcons[item.iconName?.trim()];
// console.log(IconComponent +'item.icon');
                if (hasSubMenu) {
                  return (
                    <SidebarCollapse
                      key={item.id}
                      icon={IconComponent}
                      label={!activeItemId ? item.pathName : ""}
                      
                    >
                      {item.SubMenuDate.map((subItem) => (
                        <SidebarItem
                          key={subItem.id}
                          href={subItem.pathUrlSub}
                          icon={subItem.icon}
                        >
                          {!activeItemId ? subItem.pathNameSub : ""}
                        </SidebarItem>
                      ))}
                    </SidebarCollapse>
                  );
                }

                return (
                  <SidebarItem
                    key={item.id}
                    href={item.pathUrl}
                    icon={IconComponent}
                    
                  >
                    {!activeItemId ? item.pathName : ""}
                  </SidebarItem>
                );
              })}

              
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
      </div>
    </>
  );
};

export default SideBarNav;
