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
  setToggleItem,
  setToggleDropdown,
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
  const { activeItemId, menuHeader, activeDropdownId } = useSelector(
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
        ${activeItemId ? "" : "overflow-hidden"}
        
        absolute
        top-[0]
        bottom-[0]
        w-[100%]
        bx-nav-root
      `}
      >
        <Sidebar
          aria-label="Sidebar with multi-level dropdown example"
          className={`bx-nav-sidebar w-[100%] `}
        >
          <SidebarItems className={`w-[100%]`}>
            <SidebarItemGroup className="bx-sidebar-group bx-flowbite-sidebar-item-group">
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
                     
                      label={item.pathName}
                      open={activeDropdownId === item.id}
                      onClick={() => dispatch(setToggleDropdown(item.id))}
                      className={`bx-li-item justify-left }
                      `}
                      theme={{
// base: "bx-li-collapse-item", 
                        list: "bx-collapse-ul  444444",
                       button: `bx-button-collapse ${activeItemId ? "inline-grid bx-btn-collapse justify-left" : "flex"} ${isActive ? "bx-active justify-left" : "bx-collapse-button relative"}`,
base: "bx-li-collapse-item",   // ✅ this is the <li>
    href: "bx-a-collapse-item", 

                        // base: "bx-li-item justify-left",
                        label: {
                          
                          base: `bx-span ${activeItemId ? "xl:hidden xs:block sm:block md:block" : "xl:block xs:hidden sm:hidden md:hidden"} `,
                          icon: {
                            base: `transition-all duration-300 whitespace-nowrap {ml-auto bx-collapse-arrow-right ${activeItemId ? "xl:hidden xs:block sm:block md:block" : "xl:block xs:hidden sm:hidden md:hidden"}  }`,
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
                             ${
                               isActiveSub
                                 ? "bx-active bg-[#3b9e62]"
                                 : "bx-collapse-item"
                             }
                            `}
                            theme={{
                              base: "bx-li-collapse-item 999",
                            }}
                          >
                            {subItem.pathNameSub}
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
                    //  label= {item.pathName}
                    className={`bx-li-item justify-left ffffff2222  ${activeItemId ? " inline-grid justify-left" : "flex "} 
                    ${isActive ? "bx-active justify-left" : "bx-nav "}`}
                    theme={{
                      base: "bx-li-collapse-item",   // ✅ this is the <li>
   
                      content: {
                        base: `bx-span transition-all duration-300 whitespace-nowrap {ml-auto bx-collapse-arrow-right ${activeItemId ? "xl:hidden xs:block sm:block md:block" : "xl:block xs:hidden sm:hidden md:hidden"}  }`,
                      },
                    }}
                  >
                    {item.pathName}
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
