let IdCList = 0;

const getIdList = (type = " ", suffix = "") => {
  const setitleId = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  IdCList++;
  return `${setitleId}${suffix}`;
};
const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const createTotalList = (
  title,
  iconImage,
  info,
  price,
  newLsit = null,
) => {
  return {
    id: getIdList(title),
    slug: slugify(title),
    iconImage,
    info,
  price,
  newLsit
  };
};

export const DashboardTotalList = [

    createTotalList(
        `Total Sales`,
        `images/total/sale.png`,
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
        '350',
        '50'
    ),

    createTotalList(
        `Total Enroll`,
        `images/total/enroll.png`,
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
        '1350',
        '500'
    ),

     createTotalList(
        `Total Courses`,
        `images/total/courses.png`,
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
        '1450',
        '100'
    ),

     createTotalList(
        `Total Students`,
        `images/total/students.png`,
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry. `,
        '3450',
        '1000'
    ),




];
