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
  return `${setCourseTitleId}${suffix}`;
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

let idSocial = 0;
const getIdSocial = (suffix = "") => {
  idSocial++;
  return `${idSocial}${suffix}`;
};

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const createCourseList = (
  title,
  imageName,
  info,
  price,
  rating,
  categoryName,
  offer = null,
  member,
  subCategory= null,
  badge = null,
  views = null,
    socialiocn = null,
  duration = null,
) => {
 const slugCategory = categoryName
    .toLowerCase()
    .replace(/\s+/g, "-");

  const imagePath = `/images/courses/${slugCategory}/${imageName}`;

  return {
    id: getIdCourse(title),
    slug: slugify(title),
    imagePath,
    title,
    info,
    price,
    rating,
    member,
    offer,
    badge,
    views,
    socialiocn,
    duration,
    categoryName,
    subCategory,
    // SocialIcon: socialiocn.map((Itemicon) => ({
    //   //  const socialname = item.socialname ?? "Facebook",
    //   id: getIdSocial("-social"),
    //   socialname: Itemicon.socialname,
    //   url: Itemicon.url,
    //   // IconBase: SOCIAL_ICONS[Itemicon.socialname] || RiFacebookFill,
    // })),
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
    10000,
    4.5,
    "Development",

    // instructor array
    [
      {
        memberName: "John Doe",
        bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it 
        to make a type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
     `,
        membeRating: 4.5,
        social: [
          { socialName: "Facebook", url: "https://facebook.com" },
          { socialName: "Instagram", url: "https://instagram.com" },
          { socialName: "LinkedIn", url: "https://linkedin.com" },
          { socialName: "Twitter", url: "https://twitter.com" },
        ],
      },
    ],

    "Python", // subCategory
    "20%", // offer
    "Bestseller", // badge
    "109k", // views       // social icons for course (if needed)
    "25 hours", // duration
  ),

  createCourseList(
    "Complete Python Bootcamp: Go from zero to hero in Python 3",
    "c++.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it .
     `,
    20000,
    4.5,
    "Development",

    // instructor array
    [
      {
        memberName: "Sanu Doe",
        bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it 
        to make a type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
     `,
        membeRating: 4.5,
        social: [
          { socialName: "Facebook", url: "https://facebook.com" },
          { socialName: "Instagram", url: "https://instagram.com" },
          { socialName: "LinkedIn", url: "https://linkedin.com" },
          { socialName: "Twitter", url: "https://twitter.com" },
        ],
      },
    ],

    "c++", // subCategory
    "5%", // offer
    "Bestseller", // badge
    "1009k", // views       // social icons for course (if needed)
    "20 hours", // duration
  ),

  createCourseList(
    "Complete C++ Bootcamp: Go from zero to hero in C++ 3",
    "c++.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it .
     `,
    20000,
    4.5,
    "Development",

    // instructor array
    [
      {
        memberName: "Sanu Doe",
        bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it 
        to make a type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
     `,
        membeRating: 4.5,
        social: [
          { socialName: "Facebook", url: "https://facebook.com" },
          { socialName: "Instagram", url: "https://instagram.com" },
          { socialName: "LinkedIn", url: "https://linkedin.com" },
          { socialName: "Twitter", url: "https://twitter.com" },
        ],
      },
    ],

    "c++", // subCategory
    "5%", // offer
    "Bestseller", // badge
    "1009k", // views       // social icons for course (if needed)
    "20 hours", // duration
  ),

  createCourseList(
    "Complete Java Bootcamp: Go from zero to hero in Java 3",
    "Java.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it .
     `,
    20000,
    4.5,
    "Development",

    // instructor array
    [
      {
        memberName: "Ram Ray",
        bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it 
        to make a type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
     `,
        membeRating: 4.5,
        // memberCategories: ["Development", "IT & Software"],
        // memberSubCategories: ["Java", "Java"],
        social: [
          { socialName: "Facebook", url: "https://facebook.com" },
          { socialName: "Instagram", url: "https://instagram.com" },
          { socialName: "LinkedIn", url: "https://linkedin.com" },
          { socialName: "Twitter", url: "https://twitter.com" },
        ],
      },
    ],

    "Java", // subCategory
    "1009k", // views       // social icons for course (if needed)
    "20 hours", // duration
  ),

  createCourseList(
    "Complete node Bootcamp: Go from zero to hero in node 3",
    "node.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it .
     `,
    15000,
    4.8,
    "Development",

    // instructor array
    [
      {
        memberName: "Joginder Singh",
        bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it 
        to make a type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
     `,
        membeRating: 5.5,
        social: [
          { socialName: "Facebook", url: "https://facebook.com" },
          { socialName: "Instagram", url: "https://instagram.com" },
          { socialName: "LinkedIn", url: "https://linkedin.com" },
          { socialName: "Twitter", url: "https://twitter.com" },
        ],
      },
    ],

    "node", // subCategory
    "109k", // views       // social icons for course (if needed)
    "200 hours", // duration
  ),

  createCourseList(
    "Complete react Bootcamp: Go from zero to hero in react 3",
    "react.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it .
     `,
    10000,
    4.8,
    "Development",

    // instructor array
    [
      {
        memberName: "Joginder Singh",
        bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it 
        to make a type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
     `,
        membeRating: 5.5,
        social: [
          { socialName: "Facebook", url: "https://facebook.com" },
          { socialName: "Instagram", url: "https://instagram.com" },
          { socialName: "LinkedIn", url: "https://linkedin.com" },
          { socialName: "Twitter", url: "https://twitter.com" },
        ],
      },
    ],

    "react", // subCategory
    "5%", // offer
    "Bestseller", // badge
    "109k", // views       // social icons for course (if needed)
    "20 hours", // duration
  ),

  createCourseList(
    "Complete data engineering Bootcamp: Go from zero to hero in data engineering 3",
    "data-engineering-1.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it .
     `,
    10000,
    4.8,
    "IT & Software",

    // instructor array
    [
      {
        memberName: "John Doe",
        bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it 
        to make a type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
     `,
        membeRating: 5.5,
        social: [
          { socialName: "Facebook", url: "https://facebook.com" },
          { socialName: "Instagram", url: "https://instagram.com" },
          { socialName: "LinkedIn", url: "https://linkedin.com" },
          { socialName: "Twitter", url: "https://twitter.com" },
        ],
      },
    ],

    "data engineer", // subCategory
    // offer
    "Bestseller", // badge
    "109k", // views       // social icons for course (if needed)
    "220 hours", // duration
  ),

  createCourseList(
    "Complete data engineering Bootcamp: Go from zero to hero in data engineering 3",
    "data-engineering-2.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it .
     `,
    15000,
    4.9,
    "IT & Software",

    // instructor array
    [
      {
        memberName: "Poonam Verma",
        bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it 
        to make a type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
     `,
        membeRating: 5.5,
        social: [
          { socialName: "Facebook", url: "https://facebook.com" },
          { socialName: "Instagram", url: "https://instagram.com" },
          { socialName: "LinkedIn", url: "https://linkedin.com" },
          { socialName: "Twitter", url: "https://twitter.com" },
        ],
      },
    ],

    "data engineer", // subCategory
    "10%", // offer
    "Bestseller", // badge
    "109k", // views       // social icons for course (if needed)
    "220 hours", // duration
  ),

  createCourseList(
    "Complete data analysis Bootcamp: Go from zero to hero in data analysis 3",
    "data-analysis-1.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it .
     `,
    25000,
    5,
    "IT & Software",

    // instructor array
    [
      {
        memberName: "Poonam Verma",
        bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it 
        to make a type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
     `,
        membeRating: 5.4,
        social: [
          { socialName: "Facebook", url: "https://facebook.com" },
          { socialName: "Instagram", url: "https://instagram.com" },
          { socialName: "LinkedIn", url: "https://linkedin.com" },
          { socialName: "Twitter", url: "https://twitter.com" },
        ],
      },
    ],

    "data analysis", // subCategory
    "15%", // offer
    "Bestseller", // badge
    "159k", // views       // social icons for course (if needed)
    "290 hours", // duration
  ),

  createCourseList(
    "Complete Figma: Go from zero to hero in Web Design",
    "figma.png",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it .
     `,
    25000,
    5,
    "Web Design",

    // instructor array
    [
      {
        memberName: "Poo Verma",
        bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it 
        to make a type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
     `,
        membeRating: 5.4,
        social: [
          { socialName: "Facebook", url: "https://facebook.com" },
          { socialName: "Instagram", url: "https://instagram.com" },
          { socialName: "LinkedIn", url: "https://linkedin.com" },
          { socialName: "Twitter", url: "https://twitter.com" },
        ],
      },
    ],

    "figma", // subCategory
    "15%", // offer
    "Bestseller", // badge
    "159k", // views       // social icons for course (if needed)
    "290 hours", // duration
  ),


  createCourseList(
    "Complete Photoshop: Go from zero to hero in Web Design",
    "Photoshop.jpeg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it .
     `,
    25000,
    5,
    "Web Design",

    // instructor array
    [
      {
        memberName: "Poo Verma",
        bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it 
        to make a type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
     `,
        membeRating: 5.4,
        social: [
          { socialName: "Facebook", url: "https://facebook.com" },
          { socialName: "Instagram", url: "https://instagram.com" },
          { socialName: "LinkedIn", url: "https://linkedin.com" },
          { socialName: "Twitter", url: "https://twitter.com" },
        ],
      },
    ],

    "Photoshop", // subCategory
    "Bestseller", // badge
    "159k", // views       // social icons for course (if needed)
    "290 hours", // duration
  ),

 createCourseList(
    "Complete business: Go from zero to hero in business",
    "business-2.jpeg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it .
     `,
    25000,
    5,
    "Business",

    // instructor array
    [
      {
        memberName: "Joy Verma",
        bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it 
        to make a type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
     `,
        membeRating: 5.4,
        social: [
          { socialName: "Facebook", url: "https://facebook.com" },
          { socialName: "Instagram", url: "https://instagram.com" },
          { socialName: "LinkedIn", url: "https://linkedin.com" },
          { socialName: "Twitter", url: "https://twitter.com" },
        ],
      },
    ],

    
    "15%", // offer
    "Bestseller", // badge
    "159k", // views       // social icons for course (if needed)
    "290 hours", // duration
  ),

createCourseList(
    "Complete marketing: Go from zero to hero in marketing",
    "marketing-3.jpeg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it .
     `,
    25000,
    5,
    "Marketing",

    // instructor array
    [
      {
        memberName: "Pinki Verma",
        bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it 
        to make a type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
     `,
        membeRating: 5.4,
        social: [
          { socialName: "Facebook", url: "https://facebook.com" },
          { socialName: "Instagram", url: "https://instagram.com" },
          { socialName: "LinkedIn", url: "https://linkedin.com" },
          { socialName: "Twitter", url: "https://twitter.com" },
        ],
      },
    ],

    
    "Bestseller", // badge
    "159k", // views       // social icons for course (if needed)
    "290 hours", // duration
  ),


createCourseList(
    "Complete music: Go from zero to hero in music",
    "music-3.jpeg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it .
     `,
    25000,
    5,
    "music",

    // instructor array
    [
      {
        memberName: "Pinki Verma",
        bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it 
        to make a type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
     `,
        membeRating: 5.4,
        social: [
          { socialName: "Facebook", url: "https://facebook.com" },
          { socialName: "Instagram", url: "https://instagram.com" },
          { socialName: "LinkedIn", url: "https://linkedin.com" },
          { socialName: "Twitter", url: "https://twitter.com" },
        ],
      },
    ],

     "15%", // offer
    "Bestseller", // badge
    "159k", // views       // social icons for course (if needed)
    "290 hours", // duration
  ),


createCourseList(
    "Complete photography: Go from zero to hero in photography",
    "photography-3.jpg",
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since
     the 1500s, when an unknown printer took a galley of type and scrambled it .
     `,
    25000,
    5,
    "Photography",

    // instructor array
    [
      {
        memberName: "Puja Verma",
        bio: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it 
        to make a type specimen book. It has survived not only five centuries, but 
        also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing 
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
     `,
        membeRating: 5.4,
        social: [
          { socialName: "Facebook", url: "https://facebook.com" },
          { socialName: "Instagram", url: "https://instagram.com" },
          { socialName: "LinkedIn", url: "https://linkedin.com" },
          { socialName: "Twitter", url: "https://twitter.com" },
        ],
      },
    ],

     "15%", // offer
    "Bestseller", // badge
    "159k", // views       // social icons for course (if needed)
    "290 hours", // duration
  ),


];
