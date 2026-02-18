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

  console.log("Component rendered");
  console.log("pathname:", pathname);
  console.log("menuHeader:", menuHeader);

  useEffect(() => {
    dispatch(fetchHeaderMenu());
  }, [dispatch]);

  const normalizePath = (path = "") =>
    path.trim().replace(/\/+$/, "").toLowerCase();

  const getCurrentPageTitle = (menuList = [], pathname) => {
  const cleanPath = normalizePath(pathname);

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

  for (const menu of menuList) {
    const menuPath = normalizePath(menu.pathUrl);

    if (menuPath === cleanPath) {
      return menu.pathName?.trim() || generateTitle(menu.pathUrl);
    }

    if (Array.isArray(menu.SubMenuDate)) {
      for (const sub of menu.SubMenuDate) {
        const subPath = normalizePath(sub.pathUrlSub);

        if (subPath === cleanPath) {
          return (
            sub.pathNameSub?.trim() ||
            generateTitle(sub.pathUrlSub)
          );
        }
      }
    }
  }

  // if not found in menu → auto title
  return generateTitle(pathname);
};


  const pageTitle = getCurrentPageTitle(menuHeader, pathname);

  console.log("Final page title:", pageTitle);

  return <PageTitleHeading PageName={pageTitle} />;
};

export default PageTitleArea;
