import { db } from "./firebaseClient.js";
import { doc, setDoc } from "firebase/firestore";
import { HederMenuListDat } from "../api-datas/header-data/header-menu-list-data";

export const uploadHeaderMenu = async () => {
  try {
    await setDoc(doc(db, "settings", "headerMenu"), {
      menu: HederMenuListDat,
    });

    console.log("Header menu uploaded");
  } catch (error) {
    console.error("Upload error:", error);
  }
};
