"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkButton = (props) => {
  const { btnClass, PathUrl, BtnName } = props;
  const pathname = usePathname();

  return (
    <Link href={PathUrl || "#"} className={`bx-btn ${btnClass || ""}`}>
      <span>{BtnName}</span>
    </Link>
  );
};

export default LinkButton;
