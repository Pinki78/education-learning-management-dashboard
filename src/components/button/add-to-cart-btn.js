"use client";

import { Button, ButtonGroup } from "flowbite-react";
import { useRouter } from "next/navigation";
import { IoCartOutline } from "react-icons/io5";
import { BsCartCheckFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/assets/redux-store/store-redux-componets/addToCartSilce";
import { setLoading } from "@/assets/redux-store/store-redux-componets/loadingSlice";

const AddToCartBtn = (props) => {
  const { onClickCart, buttonLabel, items } = props;
  const router = useRouter();
  const slugify = (title = "") =>
    title
      .toString()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const productId = slugify(items.title);
  const getProductUrl = (id) => `/courses/${`${slugify(items.title)}`}`;

  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.addToCartReducer);
  console.log(cartItems);
  const cartItemAdd = cartItems.find((item) => item.id === productId);
  const quantity = cartItemAdd?.quantity || 0;
  const isInCart = quantity > 0;

  const handleAddToCart = () => {
    if (isInCart) {
      router.push(getProductUrl());
      //  dispatch(setLoading(true));
      dispatch(setLoading(true));
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      dispatch(
        addToCart({
          ...items,
          id: productId,
        }),
      );
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <Button
        className="bx-add-cart-btn bx-btn text-[12px] p-2"
        onClick={handleAddToCart}
      >
        <span className="bx-icon-list-icon flex items-center">
          <span className="mr-2">
            {isInCart ? <BsCartCheckFill /> : <IoCartOutline />}
          </span>
          <span className="bx-cart-text text-[12px]">
            {isInCart ? "View More" : "Add to cart"}

            {/* {buttonLabel} */}
          </span>
          {isInCart && <span className="bx-quantity ml-2">{quantity}</span>}
        </span>
      </Button>
    </>
  );
};

export default AddToCartBtn;
