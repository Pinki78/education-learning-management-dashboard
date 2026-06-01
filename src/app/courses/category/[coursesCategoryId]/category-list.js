import {  ListGroupItem } from "flowbite-react";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
const CategoryList = props => {

  const { items, limit, MAX_LENGTH, isMobileOrTablet, col, MAX_LENGTH_TITLE } =
    props;

       const memberNames = items.memberListData?.map((item) => item.memberName) || [];


  const slugify = (title = "") =>
    title
      .toString()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  // const getUrl = (id) => `/blog/${`${slugify(blogItem.title)}`}`;
console.log(`/courses/${slugify(items.title)}`);


  return (
    <>
    <li
         className={`col-span-12
         sm:col-span-${col.sm ?? 6} 
          md:col-span-${col.md ?? 4} 
          lg:col-span-${col.lg ?? 3} 
          xl:col-span-${col.xl ?? 3}
          2xl:col-span-${col.xxl ?? 3}
          bx-course-col shadow-lg ba
           hover:-translate-y-1 bg-white border-b-4 rounded-2xl overflow-hidden duration-300 hover:border-[#0a853ac2] group
           border-transparent
           `}
     
      >
      <div 
        className={`bx-course-featured  rounded-2xl overflow-hidden h-full flex flex-col` }
        // className="bg"
        
        >
          <div className={`bx-course-overlay relative`}>
            <Link
               href={`/courses/${slugify(items.title)}`}
              className={`bx-fcrse-img w-[100%] h-[206px] block
                
                before:content-[''] 
                    before:absolute before:top-0 before:right-0
                    before:w-[100%] before:h-[100%]
                    before:bg-black/20
                   
                
                `}
            >
              <img
                src={items.imagePath}
                alt={items.title}
                className={`object-cover w-[100%] h-[100%]`}
              />
            </Link>

            <div
              className={`bx-crse-timer absolute left-0 font-(family-name:--font-roboto) top-2.5 text-[14px] bg-[#0a853ac2] text-[#fff] py-[1px] px-[5px]`}
            >
              {items.CourseHours}
            </div>

            <div
              className={`bx-badge-seller absolute font-(family-name:--font-roboto) text-[14px] bg-[#0a853ac2] text-[#fff] py-[1px] px-[5px] bottom-0 right-0`}
            >
              {items.seller}
            </div>
          </div>

          <div
            className={`bx-course-fcrse-content flex-1 px-[15px] py-[15px] relative`}
          >
            <Link  href={`/courses/${slugify(items.title)}`} className={`bx-fcrse-title `}>
              <h2 className="font-bold text-lg text-[#0a853ac2] ">
                {items.title.length > MAX_LENGTH_TITLE
                  ? `${items.title.substring(0, MAX_LENGTH_TITLE)}...`
                  : items.title}
              </h2>
              <div className="relative mt-2 mb-2.5">
                <div className="border-b-2 border-dashed border-gray-300  group-hover:border-[#0a853ac2]"></div>
                <div className="absolute right-0 top-[-2px] w-[55px] h-[6px] bg-gray-300  group-hover:bg-[#0a853ac2]"></div>
              </div>
            </Link>

            <div className={`flex items-center justify-left `}>
              <h5 className={`bx-crse-timer font-(family-name:--font-roboto)  `}>{items.CourseHours}</h5>
              <span className="bx-line text-[#005e24c2] px-[5px]">|</span>
              <h5 className={`bx-crse-reviews font-(family-name:--font-roboto)`}>{items.Courseviews}</h5>
              <span className="bx-line text-[#005e24c2] px-[5px]">|</span>
              <h5 className={`bx-crse-rating flex items-center justify-left font-(family-name:--font-roboto) `}>
                <FaStar className="mr-[3px]" />
                {items.Courserating}
              </h5>
            </div>

            <div className={`flex items-center justify-left`}>
              <h5 className={`bx-badge-views font-(family-name:--font-roboto)`}>
                {items.CoursesCategoryName}
              </h5>
              <span className="bx-line px-[5px]">|</span>
              <h5 className={`bx-badge-seller font-(family-name:--font-roboto)`}>{items.subCategory}</h5>
            </div>

            <div>
              {memberNames.map((name, index) => (
                <h5 key={index} className="font-(family-name:--font-roboto)">{name}</h5>
              ))}
            </div>

            <div className={`bx-fcrse-view-more`}>
              <Link  href={items.id} className={`bx-view-more`}>
                View More
              </Link>
            </div>
          </div>
        </div>

    </li>
    
    </>
  )
}



export default CategoryList 