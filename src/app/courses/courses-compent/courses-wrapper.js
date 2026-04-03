"use client";

import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import Link from "next/link";

import CoursesListModule from "./courses-list-module"
import { uploadCourseFirestore,fetchCourse } from "@/assets/redux-store/store-redux-componets/courseListSilce";

const CoursesWrapper = props => {

 const dispatch = useDispatch();
  const { CourseCreate } = useSelector(
    (state) => state.courseListReducer,
  );

  useEffect(() => {
  dispatch(uploadCourseFirestore()).then(() => {
    dispatch(fetchCourse());
  });
}, [dispatch]);


  return (
    <>
    {CourseCreate.map((items) =>(
        <div className="" key={items.title}>
            {items.title}
        </div>
    ))}
        <CoursesListModule />
    
    </>
  )
}



export default CoursesWrapper