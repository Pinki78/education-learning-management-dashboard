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
  const { activeItemId, menuHeader, showCloseClass, activeDropdownId } =
    useSelector((state) => state.headerMenuReducer); // assuming your slice has 'open'
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
      
    `}
      >
        <Sidebar
          className={`bx-nav-sidebar w-[100%]  ${activeItemId ? "bx-Sidebar28 sm:overflow-y-scroll sm:overflow-x-hidden  " : "overflow-y-scroll overflow-x-hidden bx-Sidebar-8"} `}
        >
          <SidebarItems className="w-[100%] 555">
            <SidebarItemGroup
              className={`bx-sidebar-group ${activeItemId ? "bx-sidebar-group-2" : "overflow-x-hidden bx-sidebar-group-1 "} `}
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
                const subMenuLength = item.SubMenuDate?.length || 0;

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
                            ${activeItemId ? " bx-btn-no-click" : " px-2 bx-btn-click"}
                            ${isActive ? "bx-active" : ""}
                          `,

                        list: `
                          overflow-y-scroll transition-all duration-300

                          ${activeItemId ? "bx-collapse-ul-list" : "bx-collapse-ul"}

                          ${
                            activeDropdownId === item.id
                              ? "bx-collapse-ul-open 2xl;"
                              : "bx-collapse-ul-hover-no"
                          }

                          ${
                            activeItemId && subMenuLength >= 6
                              ? "h-[450px] sm:h-auto bx-subMenuLength-1"
                              : "sm:h-[450px] bx-subMenuLength-2"
                          }

                          ${showCloseClass ? "bx-close-anim" : "bx-close-anim-55"}
                        `,

                        label: {
                          base: `
                            text-left overflow-hidden whitespace-nowrap transition-all duration-300
                            ${
                              activeItemId
                                ? "w-auto opacity-0 ml-0 pointer-events-none flex-[0] bx-button-span-4"
                                : "w-auto opacity-100 ml-3   bx-button-span-3"
                            }
                            ${
                              activeDropdownId === item.id
                                ? " bx-button-span"
                                : "bx-button-span-2"
                            }
                          `,

                          icon: {
                            base: `
                            ml-auto shrink-0 bx-collapse-arrow-right
                            ${activeItemId ? " hidden" : " 111 block "}
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
                            {...(activeItemId
                                          ? {
                                              onClick: () => dispatch(setToggleDropdown(false)),
                                            }
                                          : {
                                             
                                            }
                                        )}
                            className={`
                              ${isActiveSub ? "bx-active bx-a-collapse-item" : "bx-collapse-a-item"}`}
                            theme={{
                              // list: `
                              //      ${activeItemId && item.SubMenuDate?.length === 6 ? "h-[300px]" : ""}
                              // `,
                              content: {
                                base: `bx-span-sub-subManu text-left ${activeItemId ? "block " : "block"}`,
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
                    className={`bx-nav  ${isActive ? "bx-active" : ""}  ${activeItemId ? `eeeee bx-nav-a` : `rrrr justify-start bx-a-nav-1`}`}
                    onClick={() => dispatch(setToggleDropdown(false))}
                    theme={{
                      content: {
                        base: `{
                          bx-span-sub pointer-events-none 
                          text-left 
                          whitespace-nowrap transition-all 
                          duration-300
                          ${activeItemId ? `33y opacity-0 hidden ml-0 w-[0%] flex-[0] x-span-sub-ml2` : `p-0 ml-3 bx-span-sub-ml3 ddddddd`}
                        }`,
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
