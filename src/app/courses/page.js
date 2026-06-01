import PageTitleArea from "@/components/page-title-area/page-title-area"
import CoursesWrapper from "./courses-compent/courses-wrapper"



const CoursesPage = props => {
  return (
    <>
    {/* <PageTitleArea PageTitle={PageTitle} /> */}
    <section className="bx-all-course-section mt-[20px]">
       <CoursesWrapper 
      col={{
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
    </section>
       
    </>
  )
}



export default CoursesPage