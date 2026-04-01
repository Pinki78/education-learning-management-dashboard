"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicForm from "./basic-form";
import ButtonPressable from "@/components/button/button-pressable";

import {
  nextStep,
  prevStep,
  setStep,
} from "@/assets/redux-store/store-redux-componets/courseNewFormSlice";

const CourseStepper = ({ componentStep }) => {
  const dispatch = useDispatch();

  const { loading, step, success, error } = useSelector(
    (state) => state.courseNewFormReducer,
  );


  const handleChange = (data) => {
    //   dispatch(updateCourseData(data))
    // ;
  };
  const handleSubmit = async () => {
    // await dispatch(createCourse(courseData));
  };


  //   switch (step) {

  //     case 1:
  //        return {
  //       title: "Basic Information",
  //       component: <BasicForm />
  //     };

  //     case 2:
  //     return {
  //       title: "Curriculum",
  //       component: <div>Curriculum Form</div>
  //     };

  //   case 3:
  //     return {
  //       title: "Media Upload",
  //       component: <div>Media Upload</div>
  //     };

  //   case 4:
  //     return {
  //       title: "Pricing",
  //       component: <div>Pricing</div>
  //     };

  //   case 5:
  //     return {
  //       title: "Publish Course",
  //       component: <div>Publish Course</div>
  //     };

  //     default:
  //       return null;

  //   }
  // };

  return (
    <>
      <div className="p-6 bg-white shadow rounded-lg mx-auto">
        {componentStep}

        <div className="flex justify-between mt-6">
          {step > 1 && (
            <ButtonPressable
              onClickHandle={() => dispatch(prevStep())}
              buttonClass="btn-secondary-revious rounded-none"
              buttonName="Previous"
            />
          )}

          {step < 5 && (
            <ButtonPressable
              onClickHandle={() => dispatch(nextStep())}
              buttonClass="btn-primary-next rounded-none"
              buttonName="Next"
            />
          )}

          {step === 5 && (
            <ButtonPressable
              onClickHandle={() => console.log("Submit")}
              buttonClass="btn-primary-submit rounded-none"
              buttonName={loading ? "Saving..." : "Save & Publish"}
              disabled={loading}
            />
          )}
        </div>

        {error && <p className="text-red-500 mt-3">{error}</p>}
        {success && (
          <p className="text-green-500 mt-3">Course saved successfully!</p>
        )}
      </div>
    </>
  );
};

export default CourseStepper;
