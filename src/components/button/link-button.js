"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkButton = (props) => {
  const { btnClass, PathUrl, BtnName, isProcessing , IconName} = props;
  const pathname = usePathname();

  return (
    <Link
      href={isProcessing ? "#" : PathUrl || "#"}
      className={`bx-btn ${btnClass || ""} ${
        isProcessing ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      {IconName}
      <span>{isProcessing ? "Processing..." : BtnName}</span>
    </Link>
  );
};

export default LinkButton;
