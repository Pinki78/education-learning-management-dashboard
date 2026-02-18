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

      <CourseStepper step={1} />

      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-medium mb-6">Basic Information</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <Label value="Course Title*" />
            <TextInput
              name="title"
              placeholder="Course title here"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Short Description */}
          <div>
            <Label value="Short Description*" />
            <Textarea
              name="shortDescription"
              placeholder="Item description here..."
              rows={4}
              value={formData.shortDescription}
              onChange={handleChange}
              required
            />
          </div>

          {/* Course Description */}
          <div>
            <Label value="Course Description*" />
            <Textarea
              name="description"
              rows={6}
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          {/* Learn + Requirements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label value="What will students learn?" />
              <Textarea
                name="learn"
                rows={4}
                value={formData.learn}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label value="Requirements*" />
              <Textarea
                name="requirements"
                rows={4}
                value={formData.requirements}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Selects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Label value="Course Level*" />
              <Select
                name="level"
                value={formData.level}
                onChange={handleChange}
              >
                <option value="">Select level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </Select>
            </div>

            <div>
              <Label value="Audio Language*" />
              <Select
                name="language"
                value={formData.language}
                onChange={handleChange}
              >
                <option value="">Select language</option>
                <option>English</option>
                <option>Hindi</option>
              </Select>
            </div>

            <div>
              <Label value="Course Category*" />
              <Select
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option>Web Development</option>
                <option>Design</option>
                <option>Marketing</option>
              </Select>
            </div>
          </div>

          <Button type="submit" isProcessing={loading}>
            Save & Continue
          </Button>
        </form>
      </div>
    </div>
    </>
  )
}

export default CreateNewCourseForm