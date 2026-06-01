import AddToCartBtn from "@/components/button/add-to-cart-btn";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const CourseCardTooltip = (props) => {
  const { items, MAX_LENGTH_TITLE, MAX_LENGTH, memberNames } = props;

  const slugify = (title = "") =>
    title
      .toString()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  return (
    <>
      <div className="p-3 ">
        <Link
          href={`/courses/${slugify(items.title)}`}
          className={`bx-fcrse-title `}
        >
          <h2 className="font-bold  text-[#0a853ac2] text-[17px]">
            {items.title}
          </h2>
        </Link>
        <div className={`flex items-center justify-left mt-3`}>
          <div
            className={`bx-crse-timer mr-2 font-(family-name:--font-roboto) 
                   text-[12px] bg-[#000000c2] text-[#fff] py-[1px] px-[5px]`}
          >
            {items.CourseNew}
          </div>

          <div
            className={`bx-badge-seller  font-(family-name:--font-roboto) 
                  text-[12px] bg-[#0a853ac2] text-[#fff] py-[1px] px-[5px]`}
          >
            {items.seller}
          </div>
        </div>

        <h6 className="font-(family-name:--font-roboto) mt-2 font-bold">
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
          }).format(items.Courseprice)}
        </h6>

        <div className={`flex items-center justify-left`}>
          <h5
            className={`bx-badge-views text-[14px] font-(family-name:--font-roboto)`}
          >
            <Link
              href={`/courses/category/${slugify(items.CoursesCategoryName)}`}
            >
              {items.CoursesCategoryName}
            </Link>
          </h5>
          <span className="bx-line px-[5px]">|</span>
          <h5
            className={`bx-badge-seller text-[14px] font-(family-name:--font-roboto)`}
          >
            {items.subCategory}
          </h5>
          <span className="bx-line px-[5px]">|</span>
          <h5
            className={`bx-crse-timer text-[12px] font-(family-name:--font-roboto)  `}
          >
            {items.CourseHours}
          </h5>
        </div>

        <div className="relative mt-2 mb-2.5">
          <div className="border-b-2 border-dashed border-gray-300  group-hover:border-[#0a853ac2]"></div>
          <div className="absolute right-0 top-[-2px] w-[55px] h-[6px] bg-gray-300  group-hover:bg-[#0a853ac2]"></div>
        </div>

        <p className="text-[14px] font-(family-name:--font-roboto)">
          {items.Courseinfo.length > MAX_LENGTH
            ? `${items.Courseinfo.substring(0, MAX_LENGTH)}...`
            : items.Courseinfo}
        </p>

        <div className={`flex items-center justify-left mt-3`}>
            <AddToCartBtn buttonLabel="" items={items} />
        </div>

      </div>
    </>
  );
};

export default CourseCardTooltip;
