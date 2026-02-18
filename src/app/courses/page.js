import PageTitleArea from "@/components/page-title-area/page-title-area"
import CoursesWrapper from "./courses-compent/courses-wrapper"



const CoursesPage = props => {
  return (
    <>
    <PageTitleArea PageTitle={PageTitle} />
        <CoursesWrapper />
    </>
  )
}



export default CoursesPage