"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";


import CoursesListModule from "./courses-list-module";
import {
  uploadCourseFirestore,
  fetchCourse,
} from "@/assets/redux-store/store-redux-componets/courseListSilce";
import { useMediaQuery } from "react-responsive";

import { usePathname, useRouter } from "next/navigation";
import { setFilterSearch } from "@/assets/redux-store/store-redux-componets/searchFilterSlice";
import PaginationList from "@/components/pagination-list/pagination-list";




const CoursesWrapper = (props) => {
  const { items, limit, MAX_LENGTH, col, MAX_LENGTH_TITLE } = props;

  const pathname = usePathname();
  const router = useRouter();

const isPathePage = pathname === "/courses";

  const isMobileOrTablet = useMediaQuery({ maxWidth: 576, maxWidth: 991 });

  const isXs = useMediaQuery({ maxWidth: 599 });
  const isSm = useMediaQuery({ minWidth: 600, maxWidth: 899 });
  const isMd = useMediaQuery({ minWidth: 900, maxWidth: 1199 });
  const isLg = useMediaQuery({ minWidth: 1200, maxWidth: 1535 });
  const isXl = useMediaQuery({ minWidth: 1536 });
  const itemsPerPage = isXs ? 6 : isSm ? 6 : isMd ? 6 : isLg ? 6 : isXl ? 8 : 8;


  const dispatch = useDispatch();
  const { CourseDataState, loading } = useSelector(
    (state) => state.courseListReducer,
  );

  useEffect(() => {
    dispatch(uploadCourseFirestore()).then(() => {
      dispatch(fetchCourse());
    });
  }, [dispatch]);

// filterSearchItem

 const { filterSearchItem,  } = useSelector(
    (state) => state.searchFilterReducer,
  );

const filteredData = filterSearchItem
  ? CourseDataState.filter((item) =>
      item.title
        .toLowerCase()
        .includes(filterSearchItem.toLowerCase())
    )
  : CourseDataState;



const [currentPage, setCurrentPage] = useState(1);

const IndexofLastItems = currentPage * itemsPerPage;
const IndexOfFistItems = IndexofLastItems - itemsPerPage;


  const currentBaseData = limit
    ? filteredData.slice(0, limit)
    : filteredData;


  const CoursesLimit = currentBaseData.slice(IndexOfFistItems,IndexofLastItems)







  return (
    <>
      <ul
        className={`grid grid-cols-12 gap-4  bg-transparent border-transparent pt-[12px] mb-[30px]`}
      >
        {CoursesLimit.map((items, index) => (
          <CoursesListModule
            key={`${items.title}-${index}`}
            items={items}
            limit={limit}
            MAX_LENGTH={MAX_LENGTH}
            MAX_LENGTH_TITLE={MAX_LENGTH_TITLE}
            isMobileOrTablet={isMobileOrTablet}
            col={col}
          />
        ))}
      </ul>

      {isPathePage && currentBaseData.length > itemsPerPage &&(
      <PaginationList 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={currentBaseData.length}
        itemsPerPage={itemsPerPage}
        
        />
      )}

        

    </>
  );
};

export default CoursesWrapper;
