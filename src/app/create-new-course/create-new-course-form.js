"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   Button,
//   Checkbox,
//   FileInput,
//   Label,
//   Radio,
//   RangeSlider,
//   Select,
//   Textarea,
//   TextInput,
//   ToggleSwitch,
// } from "flowbite-react";

import { PiUploadFill } from "react-icons/pi";
import { IoInformationCircle } from "react-icons/io5";
import { PiNotebookFill } from "react-icons/pi";
import { IoIosImages } from "react-icons/io";
import { IoIosPricetags } from "react-icons/io";

import { getFormFields,uploadFormFFirestore, setStep } from "@/assets/redux-store/store-redux-componets/courseNewFormSlice";

import CourseStepper from "./create-new-course-compent/course-stepper";
import BasicForm from "./create-new-course-compent/basic-form";
import CurriculumFoem from "./create-new-course-compent/curriculum/curriculum";


const CreateNewCourseForm = (props) => {
  const dispatch = useDispatch();


  const { fieldsFormInput } = useSelector(
    (state) => state.courseNewFormReducer,
  );
  const { loading, step } = useSelector((state) => state.courseNewFormReducer);

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
    // setFormData({
    //   ...formData,
    //   [e.target.name]: e.target.value,
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(createCourse(formData));
  };

useEffect(() => {
  dispatch(setStep(1)); // reset step

  dispatch(uploadFormFFirestore()).then(() => {
    dispatch(getFormFields());
  });

}, [dispatch]);
 const basicSection = fieldsFormInput.find(
    (item) => item.FormTitle ,
  );


fieldsFormInput
  const renderStep = () => {
    switch (step) {
      case 1:
        return {
          title: "Basic Information",
          iconTite:<IoInformationCircle />,
          component: <BasicForm />,
        };

      case 2:
        return {
          title: "Curriculum",
          iconTite:<PiNotebookFill />,
          component: <CurriculumFoem />,
        };

      case 3:
        return {
          title: "Media Upload",
          iconTite:<IoIosImages />,
          component: <div>Media Upload</div>,
        };

      case 4:
        return {
          title: "Pricing",
          iconTite:<IoIosPricetags />,
          component: <div>Pricing</div>,
        };

      case 5:
        return {
          title: "Publish Course",
          iconTite:<PiUploadFill />,
          component: <div>Publish Course</div>,
        };

      default:
        return null;
    }
  };

  const stepContent = renderStep();

  return (
    <>
      <div className="mx-auto p-6">
        {/* <CourseStepper step={1} /> */}

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium mb-6 flex items-center">
            {stepContent.title}
            <span className="ml-[5px]">{stepContent.iconTite}</span>
            </h3>

          <CourseStepper
           
            componentStep={stepContent.component}
          />
          {/* <form className="">
           
            <div>
              <Label htmlFor="title" className="text-gray-700 font-medium">
                Course Title
              </Label>
              <TextInput
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter course title"
                required
              />
            </div>
          </form> */}
        </div>
      </div>
    </>
  );
};

export default CreateNewCourseForm;
