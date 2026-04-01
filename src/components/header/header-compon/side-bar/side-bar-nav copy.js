"use client";

import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";

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
import * as GiBookCover from "react-icons/gi";

import {
  fetchHeaderMenu,
  uploadHeaderMenu,
} from "@/assets/redux-store/store-redux-componets/headerMenuSlice";
import { useEffect } from "react";
import Link from "next/link";

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
    ...GiBookCover,
  };

  const pathname = usePathname();

  const dispatch = useDispatch();
  const { activeItemId, menuHeader } = useSelector(
    (state) => state.headerMenuReducer,
  ); // assuming your slice has 'open'
  // console.log(menuHeader);
  // useEffect(() => {
  //   dispatch(uploadHeaderMenu()).then(() => {
  //     dispatch(fetchHeaderMenu());
  //   });
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchHeaderMenu());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(uploadHeaderMenu()).then(() => {
      dispatch(fetchHeaderMenu());
    });
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
        bx-nav-root
      `}
      >
        <Sidebar aria-label="Sidebar with multi-level dropdown example" className={`bx-nav-sidebar w-[100%] `}>
          <SidebarItems className={`w-[100%]`}>
            <SidebarItemGroup className="bx-sidebar-group">
              {menuHeader.map((item) => {
                const hasSubMenu = item.SubMenuDate?.length > 0;
                const IconComponent = allIcons[item.iconName?.trim()];
                const isActive = pathname === item.pathUrl;
                // console.log(item.pathName +'item.icon');
                if (hasSubMenu) {
                  return (
                    <SidebarCollapse
                      key={item.id}
                      icon={IconComponent}
                      label={!activeItemId ? item.pathName : ""}
                      className={` ${activeItemId ? " flex-col bx-btn-collapse" : "flex-row"}
                       ${ isActive ? "bx-active" : "bx-collapse relative"}
                      `}
                      theme={{
                        label: {
                          icon: {
                            base: "ml-auto bx-collapse-arrow-right ",
                            open: {
                              on: "rotate-180",
                              off: "rotate-0",
                            },
                          },
                        },
                      }}
                    >
                      {item.SubMenuDate.map((subItem) => {
                        const isActiveSub = pathname === subItem.pathUrlSub;
                        return (
                          <SidebarItem
                            as={Link}
                            key={subItem.id}
                            href={subItem.pathUrlSub}
                            icon={subItem.icon}
                            className={`
                             ${ isActiveSub
                                ? "bx-active bg-[#3b9e62]"
                                : "bx-collapse-item"}
                            `}

                            theme={{
                      base: "bx-li-collapse-item", // this goes to <li
                    }}
                          >
                            {!activeItemId ? subItem.pathNameSub : ""}
                          </SidebarItem>
                        );
                      })}
                    </SidebarCollapse>
                  );
                }

                return (
                  <SidebarItem
                    as={Link}
                    key={item.id}
                    href={item.pathUrl}
                    icon={IconComponent}
                    className={`${activeItemId ? " flex-col" : ""} ${isActive ? "bx-active" : "bx-nav"}`}
                    theme={{
                      base: "bx-li-item", // this goes to <li
                    }}
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
