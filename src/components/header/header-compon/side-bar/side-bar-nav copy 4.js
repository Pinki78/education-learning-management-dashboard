"use client";

import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
// import { useEffect, useRef } from "react";
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
      bg-white shadow-lg z-40 transform transition-all duration-300
      absolute top-[0] bottom-[0] w-[100%] bx-nav-root
      bx-side-bar
      ${activeItemId ? "2xl:overflow-visible" : " 2xl:overflow-hidden md:overflow-visible 7"}
    `}
      >
        <Sidebar className={`bx-nav-sidebar w-[100%]   ${activeItemId ? "28" : "overflow-y-scroll overflow-x-hidden 8"}` } >
          <SidebarItems className="w-[100%] 555">
            <SidebarItemGroup
              className="bx-sidebar-group"
              theme={{
                base: "bx-li-itemyour-classes",
                label: {
                  base: "bx-li-itemyour-classes555",
                },
              }}
            >
              {menuHeader.map((item) => {
                const hasSubMenu = item.SubMenuDate?.length > 0;
                const IconComponent = allIcons[item.iconName?.trim()];
                const isActive = pathname === item.pathUrl;

                if (hasSubMenu) {
                  return (
                    
                    <SidebarCollapse
                      // as={Link}
                      key={item.id}
                      icon={IconComponent}
                      label={item.pathName}
                      open={activeDropdownId === item.id}
                      // {...(activeItemId
                      //                     ? {
                      //                         onMouseEnter: () => dispatch(setToggleDropdown(item.id)),
                      //                         onMouseLeave: () => dispatch(setToggleDropdown(null)),
                      //                       }
                      //                     : {
                      //                         onClick: () => dispatch(setToggleDropdown(item.id)),
                      //                       }
                      //                   )}
                       
                         onClick={() => dispatch(setToggleDropdown(item.id))}
                     theme={{
                      button: `
                        bx-button-collapse flex p-2 w-full items-center
                        ${activeItemId === item.id ? "justify-center px-0 bx-btn-no-click" : "justify-start px-2 bx-btn-click"}
                        ${isActive ? "bx-active" : ""}
                      `,

                      list: `
                        bx-collapse-ul overflow-y-scroll transition-all duration-300
                        ${activeItemId ? "bx-collapse-ul-hover h-[50%]" : ""}
                        ${activeDropdownId === item.id ? "bx-collapse-ul-open" : " bx-collapse-ul-hover-no"}
                      `,

                      collapse: {
                        listItem: "88n",
                      },

                      item: {
                        listItem: "888y",
                      },

                      label: {
                        base: `
                          bx-button-span text-left overflow-hidden whitespace-nowrap transition-all duration-300
                          ${activeItemId === item.id
                            ? "w-0 opacity-0 ml-0 pointer-events-none"
                            : "ml-3 w-auto opacity-100 000"}
                        `,

                        icon: {
                          base: `
                            ml-auto shrink-0 bx-collapse-arrow-right
                            ${activeItemId ? " sm:block  md:block lg:hidden xl:hidden  2xl:hidden" : " 111 sm:hidden md:hidden lg:hidden xl:hidden 2xl:block "}
                          `,
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
                            // ✅ className targets the <a> inside
                            className={ `
                              ${isActiveSub ? "bx-active bx-a-collapse-item" : "bx-collapse-a-item"}`
                            }
                            theme={{
                              listItem: "bx-li-item-sub mb-0", // ✅ <li>
                              base: "bx-a-collapse-item",
                              href: "bx-a-collapse-item2", // ✅ <a>
                              content: {
                                base: ` text-left ${activeItemId ? "block bx-span-subSunMenu " : "hidden bx-span-sub-subManu"}`,
                              },
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
                    // as="li"
                    key={item.id}
                    href={item.pathUrl}
                    icon={IconComponent}
                    className={`bx-nav  ${isActive ? "bx-active" : ""}`}
                    theme={{
                      listItem: "bx-li-item-path",

                      base: "bx-li-item", // ✅ <li>
                      href: "bx-a-item", // ✅ <a>
                      content: {
                        base: `bx-span-sub pointer-events-none text-left overflow-hidden whitespace-nowrap transition-all duration-300
                          ${activeItemId
                            ? ` 9o 
                            ml-3 w-auto opacity-100 pl-0
                              
                            bx-span-sub-big
                            
                            
                            `
                            : `
                            ss
                            
                       
                            ml-3 w-auto opacity-100 pl-0

                           bx-span-sub-small
                             
                            
                            `}
                        `,
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
