import ContentTotal from "./home-compent/content-total";
import SilderCourse from "./home-compent/silder-course";
import WelcomeUser from "./home-compent/welcome-user";

const Homepage = () => {
  return (
    <>
      <section className={`bx-welcome-user-section`}>
        <WelcomeUser />
      </section>

      {/* WelcomeUser end*/}

      <section className={`bx-content-total-section mt-8`}>
        <ContentTotal />
      </section>

      {/* ContentTotal end*/}

      <section className={`bx-silder-course-section mt-8`}>
        <SilderCourse limit={6} />
      </section>

      {/* SilderCourse  end**/}
    </>
  );
};

export default Homepage;
