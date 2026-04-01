"use client";

import { Button, ButtonGroup } from "flowbite-react";
import { usePathname } from "next/navigation";

const ButtonPressable = (props) => {
  const { buttonClass, buttonName, isProcessing, IconName , onClickHandle, disabled} = props;
  const pathname = usePathname();
  return (
    <>
      <Button
        className={`bx-btn ${buttonClass || ""} ${
          isProcessing ? "opacity-50 pointer-events-none" : ""
        }`}
        onClick={onClickHandle}
         disabled={disabled || isProcessing}
      >
        <span>{isProcessing ? "Processing..." : buttonName}</span>
      </Button>
    </>
  );
};

export default ButtonPressable;
