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

let idMember = 0;
const getIdMember = (memberName, suffix = "") => {
  const memberNameTitleId = memberName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  idMember++;
  return `${memberNameTitleId}-${idMember}${suffix}`;
};

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
  memberListData = [],
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
    memberListData: memberListData.map((member) => ({
      id: getIdMember(member.memberName), // ✅ memberName from each member object
      ...member,
    })),
  };
};

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
    "New", // CourseNew
    "25 hours", // duration
    "100k", // like
    "Bestseller", // seller
    "Development",
    "Python", // subCategory

    [
      {
        memberName: "John Doe",
        memberImage: "/images/membaer/img-1.jpg",
        memberBio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it 
        to make a type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
     `,
        memberRole: "Development",
        Students:"100k",
         memberCourses:15,
        membeRating: 4.5,
        social: [
          { socialName: "Facebook", url: "https://facebook.com" },
          { socialName: "Instagram", url: "https://instagram.com" },
          { socialName: "LinkedIn", url: "https://linkedin.com" },
          { socialName: "Twitter", url: "https://twitter.com" },
        ],
      },
      
    ],
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
    "New", // CourseNew
    "20 hours", // duration
    "150k", // like
    "Bestseller", // seller
    "Development",
    "c++", // subCategory

    [
      {
        memberName: "Kerstin Cable",
        memberImage: "/images/membaer/img-2.jpg",
        memberBio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it 
        to make a type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
     `,
        memberRole: "Development",
         Students:"100k",
         memberCourses:15,
        membeRating: 4.5,
        social: [
          { socialName: "Facebook", url: "https://facebook.com" },
          { socialName: "Instagram", url: "https://instagram.com" },
          { socialName: "LinkedIn", url: "https://linkedin.com" },
          { socialName: "Twitter", url: "https://twitter.com" },
        ],
      },
    ],
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
    "New", // CourseNew
    "20 hours", // duration
    "140k", // like
    "Bestseller", // seller
    "Development",
    "Java", // subCategory
    [
      {
        memberName: "Jose Portilla",
        memberImage: "/images/membaer/img-3.jpg",
        memberBio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it 
        to make a type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
     `,
        memberRole: "Development",
         Students:"100k",
         memberCourses:15,
        membeRating: 4.5,
        social: [
          { socialName: "Facebook", url: "https://facebook.com" },
          { socialName: "Instagram", url: "https://instagram.com" },
          { socialName: "LinkedIn", url: "https://linkedin.com" },
          { socialName: "Twitter", url: "https://twitter.com" },
        ],
      },
    ],
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
    null, // CourseNew
    "200 hours", // duration
    "140k", // like
    "Bestseller", // seller
    "Development",
    "node", // subCategory

    [
      {
        memberName: "Farhat Amin",
        memberImage: "/images/membaer/img-4.jpg",
        memberBio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it 
        to make a type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
     `,
        memberRole: "Development",
         Students:"100k",
         memberCourses:15,
        membeRating: 4.5,
        social: [
          { socialName: "Facebook", url: "https://facebook.com" },
          { socialName: "Instagram", url: "https://instagram.com" },
          { socialName: "LinkedIn", url: "https://linkedin.com" },
          { socialName: "Twitter", url: "https://twitter.com" },
        ],
      },
    ],
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
    null, // CourseNew
    "100 hours", // duration
    "240k", // like
    "Bestseller", // seller
    "Development",
    "react", // subCategory
    [
      {
        memberName: "Farhat Amin",
        memberImage: "/images/membaer/img-4.jpg",
        memberBio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it 
        to make a type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
     `,
        memberRole: "Development",
         Students:"100k",
         memberCourses:15,
        membeRating: 4.5,
        social: [
          { socialName: "Facebook", url: "https://facebook.com" },
          { socialName: "Instagram", url: "https://instagram.com" },
          { socialName: "LinkedIn", url: "https://linkedin.com" },
          { socialName: "Twitter", url: "https://twitter.com" },
        ],
      },
    ],
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
    null, // CourseNew
    "100 hours", // duration
    "240k", // like
    "Bestseller", // seller
    "IT & Software",
    "data engineer", // subCategory
    [
      {
        memberName: "Farhat Amin",
        memberImage: "/images/membaer/img-4.jpg",
        memberBio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it 
        to make a type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
     `,
        memberRole: "IT & Software",
         Students:"100k",
         memberCourses:15,
        membeRating: 4.5,
        social: [
          { socialName: "Facebook", url: "https://facebook.com" },
          { socialName: "Instagram", url: "https://instagram.com" },
          { socialName: "LinkedIn", url: "https://linkedin.com" },
          { socialName: "Twitter", url: "https://twitter.com" },
        ],
      },
    ],
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
    "New", // CourseNew
    "100 hours", // duration
    "240k", // like
    "Bestseller", // seller
    "IT & Software",
    "data engineer", // subCategory
    [
      {
        memberName: "Kyle Pew",
        memberImage: "/images/membaer/img-5.jpg",
        memberBio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it 
        to make a type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
     `,
        memberRole: "IT & Software",
         Students:"100k",
         memberCourses:15,
        membeRating: 4.5,
        social: [
          { socialName: "Facebook", url: "https://facebook.com" },
          { socialName: "Instagram", url: "https://instagram.com" },
          { socialName: "LinkedIn", url: "https://linkedin.com" },
          { socialName: "Twitter", url: "https://twitter.com" },
        ],
      },
    ],
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
    "New", // CourseNew
    "100 hours", // duration
    "240k", // like
    "Bestseller", // seller
    "IT & Software",
    "data engineer", // subCategory
    [
      {
        memberName: "Jaysen Batchelor",
        memberImage: "/images/membaer/img-7.jpg",
        memberBio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it 
        to make a type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
     `,
        memberRole: "IT & Software",
         Students:"100k",
         memberCourses:15,
        membeRating: 4.5,
        social: [
          { socialName: "Facebook", url: "https://facebook.com" },
          { socialName: "Instagram", url: "https://instagram.com" },
          { socialName: "LinkedIn", url: "https://linkedin.com" },
          { socialName: "Twitter", url: "https://twitter.com" },
        ],
      },
    ],
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
    null, // CourseNew
    "10 hours", // duration
    "240k", // like
    "Bestseller", // seller
    "Web Design",
    "figma", // subCategory
    [
      {
        memberName: "Quinton Batchelor",
        memberImage: "/images/membaer/img-8.jpg",
        memberBio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it 
        to make a type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
     `,
        memberRole: "Web Design",
         Students:"100k",
         memberCourses:15,
        membeRating: 4.5,
        social: [
          { socialName: "Facebook", url: "https://facebook.com" },
          { socialName: "Instagram", url: "https://instagram.com" },
          { socialName: "LinkedIn", url: "https://linkedin.com" },
          { socialName: "Twitter", url: "https://twitter.com" },
        ],
      },
    ],
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
    null, // CourseNew
    "100 hours", // duration
    "240k", // like
    "Bestseller", // seller
    "Web Design",
    "Photoshop", // subCategory
    [
      {
        memberName: "Eli Natoli",
        memberImage: "/images/membaer/img-8.jpg",
        memberBio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it 
        to make a type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
     `,
        memberRole: "Web Design",
         Students:"100k",
         memberCourses:15,
        membeRating: 4.5,
        social: [
          { socialName: "Facebook", url: "https://facebook.com" },
          { socialName: "Instagram", url: "https://instagram.com" },
          { socialName: "LinkedIn", url: "https://linkedin.com" },
          { socialName: "Twitter", url: "https://twitter.com" },
        ],
      },
    ],
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
    null, // CourseNew
    "100 hours", // duration
    "240k", // like
    "Bestseller", // seller
    "Business",
    "", // subCategory
    [
      {
        memberName: "Eli Natoli",
        memberImage: "/images/membaer/img-8.jpg",
        memberBio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it 
        to make a type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
     `,
        memberRole: "Business",
         Students:"100k",
         memberCourses:15,
        membeRating: 4.5,
        social: [
          { socialName: "Facebook", url: "https://facebook.com" },
          { socialName: "Instagram", url: "https://instagram.com" },
          { socialName: "LinkedIn", url: "https://linkedin.com" },
          { socialName: "Twitter", url: "https://twitter.com" },
        ],
      },
    ],
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
    "New", // CourseNew
    "100 hours", // duration
    "240k", // like
    "Bestseller", // seller
    "Marketing",
    "", // subCategory
    [
      {
        memberName: "Eli Natoli",
        memberImage: "/images/membaer/img-8.jpg",
        memberBio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it 
        to make a type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
     `,
        memberRole: "Marketing",
         Students:"100k",
         memberCourses:15,
        membeRating: 4.5,
        social: [
          { socialName: "Facebook", url: "https://facebook.com" },
          { socialName: "Instagram", url: "https://instagram.com" },
          { socialName: "LinkedIn", url: "https://linkedin.com" },
          { socialName: "Twitter", url: "https://twitter.com" },
        ],
      },
    ],
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
    "New", // CourseNew
    "100 hours", // duration
    "240k", // like
    "Bestseller", // seller
    "Music",
    "", // subCategory
    [
      {
        memberName: "Eli Natoli",
        memberImage: "/images/membaer/img-8.jpg",
        memberBio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it 
        to make a type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
     `,
        memberRole: "Music",
         Students:"100k",
         memberCourses:15,
        membeRating: 4.5,
        social: [
          { socialName: "Facebook", url: "https://facebook.com" },
          { socialName: "Instagram", url: "https://instagram.com" },
          { socialName: "LinkedIn", url: "https://linkedin.com" },
          { socialName: "Twitter", url: "https://twitter.com" },
        ],
      },
    ],
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
    null, // CourseNew
    "100 hours", // duration
    "240k", // like
    "Bestseller", // seller
    "Photography",
    "Photography", // subCategory
    [
      {
        memberName: "Eli Natoli",
        memberImage: "/images/membaer/img-8.jpg",
        memberBio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it 
        to make a type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
     `,
        memberRole: "Photography",
         Students:"100k",
         memberCourses:15,
        membeRating: 4.5,
        social: [
          { socialName: "Facebook", url: "https://facebook.com" },
          { socialName: "Instagram", url: "https://instagram.com" },
          { socialName: "LinkedIn", url: "https://linkedin.com" },
          { socialName: "Twitter", url: "https://twitter.com" },
        ],
      },
    ],
  ),
];
