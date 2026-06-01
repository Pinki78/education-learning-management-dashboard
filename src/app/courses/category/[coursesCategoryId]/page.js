"use client";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { useMemo, useState } from "react";

import { useMediaQuery } from "react-responsive";
import PaginationList from "@/components/pagination-list/pagination-list";
import CategoryList from "./category-list";

import { ListGroup, ListGroupItem } from "flowbite-react";


const CoureseCategoryIdPage = () => {


  const isXs = useMediaQuery({ maxWidth: 599 });
  const isSm = useMediaQuery({ minWidth: 600, maxWidth: 899 });
  const isMd = useMediaQuery({ minWidth: 900, maxWidth: 1199 });
  const isLg = useMediaQuery({ minWidth: 1200, maxWidth: 1535 });
  const isXl = useMediaQuery({ minWidth: 1536 });
  const itemsPerPage = isXs ? 6 : isSm ? 6 : isMd ? 6 : isLg ? 6 : isXl ? 8 : 8;

const params = useParams();

  const coursesCategoryId = params.coursesCategoryId.toLowerCase();

  const { CourseDataState } = useSelector((state) => state.courseListReducer);

  const slugify = (CategoryName = "") =>
    CategoryName.toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const filterCategoryCourses = useMemo(() => {
    return CourseDataState.filter((item) => {
      return slugify(item.CoursesCategoryName) === coursesCategoryId;
    });
  }, [CourseDataState, coursesCategoryId]);


 const { filterSearchItem,  } = useSelector(
    (state) => state.searchFilterReducer,
  );

  const filteredData = filterSearchItem ? filterCategoryCourses.filter((item) =>
   item.title.toLowerCase().includes(filterSearchItem.toLowerCase())
  )  : filterCategoryCourses;


const [currentPage, setCurrentPage] = useState(1);

const IndexofLastItems = currentPage * itemsPerPage;
const IndexOfFistItems = IndexofLastItems - itemsPerPage;
 const CoursesLimit = filteredData.slice(IndexOfFistItems,IndexofLastItems)

if (CoursesLimit.length === 0) {
  return <h2>Course not found</h2>;
}
    if (!CoursesLimit === 0) {
    return <h2>Course not found</h2>;
  }

  return (
    <>
      <section className="bx-course-category-section">
        <ul
          className={`grid grid-cols-12 gap-4  bg-transparent border-transparent pt-[12px] mb-[30px]`}
        >
          {CoursesLimit.map((item) => (
            <CategoryList key={item.id} items={item} col={{
                xs: 12,
                sm: 6,
                md: 6,
                lg: 3,
                xl: 3,
                xxl: 3,
              }} 
               MAX_LENGTH="30"
       MAX_LENGTH_TITLE="39"
              
              
              />
          ))}
        </ul>
      </section>

  {filterCategoryCourses.length > itemsPerPage &&(
      <PaginationList 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={filterCategoryCourses.length}
        itemsPerPage={itemsPerPage}
        
        />
      )}

    </>
  );
};

export default CoureseCategoryIdPage;
