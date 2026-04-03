import { PiStudentFill } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
let idTotalContent = 0;

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

    const getFaqIdForm = (titel, suffix = "") => {
  const slug = slugify(titel);
  idTotalContent++;
  return `${slug}-${idTotalContent}${suffix}`;
};


export const ContentTotalData =[
    {
        id:getFaqIdForm('Total Students'),
        titel:"Total Students",
        iconName:<PiStudentFill />,
        ToletNo:'150',
        successtext:'15.4',
    },
    {
        id:getFaqIdForm('Total Course'),
        titel:"Total Course",
        iconName:<FaGraduationCap />,
        ToletNo:'20',
        successtext:'12.11',
    },
    {
        id:getFaqIdForm('Total Video'),
        titel:"Total Video",
        iconName:<FaVideo />,
        ToletNo:'25',
        successtext:'25.21',
    },
    {
        id:getFaqIdForm('Total Earning'),
        titel:"Total Earning",
        iconName:<FaWallet />,
        ToletNo:'8,015.30',
        successtext:'25.21',
    },
]