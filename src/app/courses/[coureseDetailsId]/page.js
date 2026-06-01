"use client";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import CoureseDetails from "./courese-details";

const CoureseDetailsPage = () => {
  const params = useParams();

  const coureseDetailsId = params.coureseDetailsId.toLowerCase();

  const { CourseDataState } = useSelector(
    (state) => state.courseListReducer
  );

  const slugify = (title = "") =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const coureseDetails = CourseDataState.find(
    (item) => slugify(item.title) === coureseDetailsId
  );

  if (!coureseDetails) {
    return <h2>Course not found</h2>;
  }
console.log(params);
console.log(coureseDetailsId);

  return <>
    
    <CoureseDetails items={coureseDetails} />
  
  </>;
};

export default CoureseDetailsPage;