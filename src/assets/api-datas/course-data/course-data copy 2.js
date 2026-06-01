import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { IconBase } from "react-icons/lib";

let IdCourse = 0;

const getIdCourse = (title, suffix = "") => {
  const setCourseTitleId = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  IdCourse++;

  return `${setCourseTitleId}-${IdCourse}${suffix}`;
};

let IdCategoryMenu = 0;

const getIdCategoryMenu = (categoryName, suffix = "") => {
  const setCategoryTitleId = categoryName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  IdCategoryMenu++;
  return `${setCategoryTitleId}${suffix}`;
};

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const createCourseList = (
  title,
  imageName,
  Courseinfo,
  Courseprice,
  Courserating,
  Courseoffer = null,
  Courseviews = null,
  CourseNew = null,
  CourseHours = null,
  CourseLike = null,
  seller = null,
  CoursesCategoryName,
  subCategory = null,
  // memberListData = [],
) => {
  const slugCategory = CoursesCategoryName.toLowerCase().replace(/\s+/g, "-");

  const imagePath = `/images/courses/${slugCategory}/${imageName}`;

  return {
    id: getIdCourse(title),
    title,
    imagePath,
    Courseinfo,
    Courseprice,
    Courserating,
    Courseoffer,
    Courseviews,
    CourseNew,
    CourseHours,
    CourseLike,
    seller,
    CoursesCategoryName,
    subCategory,
    // memberListData,
  };
};

// export const createMemBerList = (
// memberName,
// imageMember,
//   memberDescription,
//   memberCourseName,
//   memberLike = null,
//   socialiocn = null,

// ) => {
//   // const slugCategory = CoursesCategoryName.toLowerCase().replace(/\s+/g, "-");

//   // const imagePath = `/images/courses/${slugCategory}/${imageName}`;

//   return {
//      id:getIdMember(memberName),
//     memberName,
//     imageMember,
//     memberDescription,
//     memberCourseName,
//     memberLike,
//     socialiocn,

//   };
// };

export const courseListData = [
  createCourseList(
    "Complete Python Bootcamp: Go from zero to hero in Python 3",
    "python-bootcamp.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it .
     `,
    10000, // price
    4.5, // rating
    "20%", // offer
    "109k", // views
    "New",
    "25 hours", // duration
    "100k", // like
    "Bestseller", // seller
    "Development",
    "Python", // subCategory
  ),

  createCourseList(
    "Complete C++: Go from zero to hero in C++ 3",
    "c++.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it .
     `,
    15000, // price
    4.5, // rating
    "5%", // offer
    "109k", // views
    "New",
    "20 hours", // duration
    "150k", // like
    "Bestseller", // seller
    "Development",
    "c++", // subCategory
  ),

  createCourseList(
    "Complete Java Bootcamp: Go from zero to hero in Java 3",
    "Java.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it .
     `,
    15000, // price
    4.5, // rating
    "5%", // offer
    "1090k", // views
    "New", // New
    "20 hours", // duration
    "140k", // like
    "Bestseller", // seller
    "Development",
    "Java", // subCategory
  ),

  createCourseList(
    "Complete node Bootcamp: Go from zero to hero in node 3",
    "node.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it .
     `,
    15800, // price
    4.5, // rating
    "15%", // offer
    "1090k", // views
    null, // New
    "200 hours", // duration
    "140k", // like
    "Bestseller", // seller
    "Development",
    "node", // subCategory
  ),

  createCourseList(
    "Complete react Bootcamp: Go from zero to hero in react 3",
    "react.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it .
     `,
    10500, // price
    4.5, // rating
    "15%", // offer
    "190k", // views
    null, // New
    "100 hours", // duration
    "240k", // like
    "Bestseller", // seller
    "Development",
    "react", // subCategory
  ),

  createCourseList(
    "Complete data engineering Bootcamp: Go from zero to hero in data engineering 3",
    "data-engineering-1.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it .
     `,
    10500, // price
    4.8, // rating
    null, // offer
    "190k", // views
    null, // New
    "100 hours", // duration
    "240k", // like
    "Bestseller", // seller
    "IT & Software",
    "data engineer", // subCategory
  ),

  createCourseList(
    "Complete data engineering Bootcamp: Go from zero to hero in data engineering 3",
    "data-engineering-2.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it .
     `,
    10500, // price
    4.8, // rating
    "10%", // offer
    "190k", // views
    "New", // New
    "100 hours", // duration
    "240k", // like
    "Bestseller", // seller
    "IT & Software",
    "data engineer", // subCategory
  ),

  createCourseList(
    "Complete data analysis Bootcamp: Go from zero to hero in data analysis 3",
    "data-analysis-1.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it .
     `,
    10800, // price
    4.8, // rating
    "15%", // offer
    "190k", // views
    "New", // New
    "100 hours", // duration
    "240k", // like
    "Bestseller", // seller
    "IT & Software",
    "data engineer", // subCategory
  ),

  createCourseList(
    "Complete Figma: Go from zero to hero in Web Design",
    "figma.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it .
     `,
    10500, // price
    4, // rating
    "5%", // offer
    "170k", // views
    null, // New
    "10 hours", // duration
    "240k", // like
    "Bestseller", // seller
    "Web Design",
    "figma", // subCategory
  ),

  createCourseList(
    "Complete Photoshop: Go from zero to hero in Web Design",
    "Photoshop.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it .
     `,
    10500, // price
    4, // rating
    null, // offer
    "170k", // views
    null, // New
    "100 hours", // duration
    "240k", // like
    "Bestseller", // seller
    "Web Design",
    "Photoshop", // subCategory
  ),

  createCourseList(
    "Complete business: Go from zero to hero in business",
    "business-2.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it .
     `,
    25000, // price
    4.2, // rating
    null, // offer
    "170k", // views
    null, // New
    "100 hours", // duration
    "240k", // like
    "Bestseller", // seller
    "Business",
    "", // subCategory
  ),

  createCourseList(
    "Complete marketing: Go from zero to hero in marketing",
    "marketing-3.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it .
     `,
    25000, // price
    4.2, // rating
    "5%", // offer
    "159k", // views
    "New", // New
    "100 hours", // duration
    "240k", // like
    "Bestseller", // seller
    "Marketing",
    "", // subCategory
  ),

  createCourseList(
    "Complete music: Go from zero to hero in music",
    "music-3.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it .
     `,
    25000, // price
    4.2, // rating
    "7%", // offer
    "159k", // views
    "New", // New
    "100 hours", // duration
    "240k", // like
    "Bestseller", // seller
    "Music",
    "", // subCategory
  ),

  createCourseList(
    "Complete photography: Go from zero to hero in photograph",
    "photography-3.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it .
     `,
    25000, // price
    4.2, // rating
    null, // offer
    "159k", // views
    null, // New
    "100 hours", // duration
    "240k", // like
    "Bestseller", // seller
    "Photography",
    "Photography", // subCategory
  ),
];
