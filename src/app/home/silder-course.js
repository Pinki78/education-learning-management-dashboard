import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import CoursesListModule from "@/app/courses/courses-compent/courses-list-module";
import PopoverCourses from "@/app/courses/courses-compent/popover-courses/popover-courses";

const SilderCourse = (props) => {
  const {
    limit,
    col = { xs: 12, sm: 12, md: 12, lg: 12, xl: 12, xxl: 12 },
  } = props;

  const isMobileOrTablet = useMediaQuery({ maxWidth: 576, maxWidth: 991 });

  const dispatch = useDispatch();
  const { CourseDataState, loading } = useSelector(
    (state) => state.courseListReducer,
  );

  // ✅ Filter only new courses
  const newCourses = CourseDataState.filter((course) => course.CourseNew);

  const NewCoursesLimit = limit ? newCourses.slice(0, limit) : newCourses ;

  //  const offerItems = itemsMenuList.filter((item) => item.offer);

  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        loop
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{
          "--swiper-navigation-color": "#ff0000ff",
          "--swiper-pagination-color": "#ff0000ff",
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        //   1280: { slidesPerView: 5 },
        }}
        className="bx-course-slider "
      >
        {NewCoursesLimit.map((items) => (
          <PopoverCourses key={items.id} items={items} MAX_LENGTH_TITLE="39">
          <SwiperSlide key={items.id}>
            <CoursesListModule
              items={items}
              limit={limit}
              MAX_LENGTH="30"
              isMobileOrTablet={isMobileOrTablet}
              col={col}
              MAX_LENGTH_TITLE="39"
            />
          </SwiperSlide>
          </PopoverCourses>
        ))}
      </Swiper>
    </>
  );
};

export default SilderCourse;
