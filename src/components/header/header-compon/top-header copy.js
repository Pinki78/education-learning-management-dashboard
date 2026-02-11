import LinkButton from "@/components/button/link-button";
import Link from "next/link";
import CartHeader from "./cart-header/cart-header";
import MsgHeader from "./dropdown-msg/msg-header";
import SideBarButton from "./side-bar/side-bar-button";
// import logo from "/images/";

const TopHeader = props => {
  return (
    <>
        <div
          className="
            bx-top-header
          "
        >
            <div
              className='
                grid grid-cols-12
                gap-4
              '
            >
                <div
                  className="
                    col-span-1
                  "
                >

                    <SideBarButton />

                </div>
                <div
                  className="
                    col-span-2
                  "
                >
                    <div
                      className="
                        bx-log
                      "
                    >
                        <Link href="/">
                            <img
                              src='/images/logo.png' alt="logo"
                              className="
                                w-96
                              "
                              /
                            >
                        </Link>
                    </div>
                </div>
                <div
                  className="
                    col-span-4
                  "
                ></div>
                <div
                  className="
                    col-span-5
                  "
                >
                    <LinkButton
                    PathUrl="/create-new-course"
                    BtnName="Create New Course"
                    />

                    <CartHeader />

                    <MsgHeader />
                </div>
            </div>
        </div>
    </>
  )
}



export default TopHeader