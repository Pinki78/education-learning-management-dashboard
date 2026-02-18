"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextInput, Textarea, Select, Button, Label } from "flowbite-react";
import { createCourse } from "@/assets/redux-store/store-redux-componets/courseFormSlice";
import CourseStepper from "./create-new-course-compent/course-stepper";

const CreateNewCourseForm = props => {

 const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.courseFormReducer);

  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    description: "",
    learn: "",
    requirements: "",
    level: "",
    language: "",
    category: "Web Development",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCourse(formData));
  };


  return (
    <>
       <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">Create New Course</h2>

      {/* <CourseStepper step={1} /> */}

      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium mb-6">Basic Information</h3>

        
      </div>
    </div>
    </>
  )
}

export default CreateNewCourseForm