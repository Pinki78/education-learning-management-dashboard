"use client";

import React, { useEffect } from "react";
import { fetchHeaderMenu } from "@/assets/redux-store/store-redux-componets/headerMenuSlice";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import PageTitleHeading from "./page-title";

const PageTitleArea = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();

  const { menuHeader } = useSelector(
    (state) => state.headerMenuReducer
  );

  useEffect(() => {
    dispatch(fetchHeaderMenu());
  }, [dispatch]);

  const normalizePath = (path = "") =>
    path.trim().replace(/\/+$/, "").toLowerCase();

  const generateTitle = (path = "") => {
    const clean = path.replace(/^\/+/, "");
    if (!clean) return "Dashboard";

    return clean
      .split("/")
      .pop()
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const getCurrentPageData = (menuList = [], pathname) => {
    const cleanPath = normalizePath(pathname);

    for (const menu of menuList) {
      if (normalizePath(menu.pathUrl) === cleanPath) {
        return {
          title: menu.pathName?.trim() || generateTitle(menu.pathUrl),
          icon: menu.iconName || null,
        };
      }

      if (Array.isArray(menu.SubMenuDate)) {
        for (const sub of menu.SubMenuDate) {
          if (normalizePath(sub.pathUrlSub) === cleanPath) {
            return {
              title:
                sub.pathNameSub?.trim() ||
                generateTitle(sub.pathUrlSub),
              icon: sub.iconNameSub || null,
            };
          }
        }
      }
    }

    return {
      title: generateTitle(pathname),
      icon: null,
    };
  };

  const { title: pageTitle, icon: iconName } =
    getCurrentPageData(menuHeader, pathname);

  // Update body class
  useEffect(() => {
    const bodyClass = `bx-${pageTitle
      .toLowerCase()
      .replace(/\s+/g, "-")}-layout-root`;

    document.body.classList.add(bodyClass);

    return () => {
      document.body.classList.remove(bodyClass);
    };
  }, [pageTitle]);

  // Update browser title
  useEffect(() => {
    document.title = `${pageTitle} | Education Web App`;
  }, [pageTitle]);

  // console.log(iconName);
  

  return (
    <PageTitleHeading
      PageName={pageTitle}
      IconName={iconName}
    />
  );
};

export default PageTitleArea;