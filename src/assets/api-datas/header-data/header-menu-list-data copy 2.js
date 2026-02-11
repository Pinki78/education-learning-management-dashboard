import { ImHome } from "react-icons/im";
import { RiCodeView } from "react-icons/ri";
import { IoLayers, IoSettings } from "react-icons/io5";
import { IoMdHeart, IoMdHelpCircle } from "react-icons/io";
import { TbWindsockFilled } from "react-icons/tb";
import { BiSolidCommentDetail } from "react-icons/bi";
import {
  MdBusinessCenter,
  MdAddAPhoto,
  MdDesignServices,
} from "react-icons/md";
import { SiLibreofficeimpress } from "react-icons/si";
import { PiMonitorFill } from "react-icons/pi";
import { FaChartPie, FaBookOpen, FaMusic, FaFile } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";
// import * as ImIcons from "react-icons/im";
// import * as RiIcons from "react-icons/ri";
// import * as IoIcons from "react-icons/io5";
// import * as IoMdIcons from "react-icons/io";
// import * as TbIcons from "react-icons/tb";
// import * as BiIcons from "react-icons/bi";
// import * as MdIcons from "react-icons/md";
// import * as SiIcons from "react-icons/si";
// import * as PiIcons from "react-icons/pi";
// import * as FaIcons from "react-icons/fa";

let IdCounters = {
  MainMenu: 0,
  SubMenu: 0,
};

const getIdHeaderMenu = (type = " MainMenu", suffix = "") => {
  IdCounters[type]++;
  return `${IdCounters[type]}${suffix}`;
};

export const HederMenuListDat = [
  {
    id: getIdHeaderMenu("MainMenu", "he"),
    pathName: "Home",
    pathUrl: "/",
    icon: ImHome,
  },

  {
    id: getIdHeaderMenu("MainMenu", "he"),
    pathName: "Live Streams",
    pathUrl: "/live-streams",
    icon: RiLiveFill,
  },

  {
    id: getIdHeaderMenu("MainMenu", "he"),
    pathName: "Categories ",
    icon: IoLayers,

    SubMenuDate: [
      {
        id: getIdHeaderMenu("SubMenu", "sub"),
        pathNameSub: "Development",
        pathUrlSub: "/development",
        icon: RiCodeView,
        TopYes: "Yes",
      },

      {
        id: getIdHeaderMenu("SubMenu", "sub"),
        pathNameSub: "Business",
        pathUrlSub: "/business",
        icon: MdBusinessCenter,
        TopYes: "Yes",
      },

      {
        id: getIdHeaderMenu("SubMenu", "sub"),
        pathNameSub: "Web Design",
        pathUrlSub: "/design",
        icon: MdDesignServices,
      },

      {
        id: getIdHeaderMenu("SubMenu", "sub"),
        pathNameSub: "Marketing",
        pathUrlSub: "/marketing",
        icon: FaChartPie,
        TopYes: "Yes",
      },

      {
        id: getIdHeaderMenu("SubMenu", "sub"),
        pathNameSub: "Wed Development",
        pathUrlSub: "/web-development",
        icon: FaBookOpen,
        TopYes: "Yes",
      },

      {
        id: getIdHeaderMenu("SubMenu", "sub"),
        pathNameSub: "IT & Software",
        pathUrlSub: "/it-software",
        icon: PiMonitorFill,
      },

      {
        id: getIdHeaderMenu("SubMenu", "sub"),
        pathNameSub: "Music",
        pathUrlSub: "/music",
        icon: FaMusic,
        TopYes: "Yes",
      },

      {
        id: getIdHeaderMenu("SubMenu", "sub"),
        pathNameSub: "Photography",
        pathUrlSub: "/photography",
        icon: MdAddAPhoto,
        TopYes: "Yes",
      },
    ],
  },

  {
    id: getIdHeaderMenu("MainMenu", "he"),
    pathName: "Saved Courses",
    pathUrl: "/saved-courses",
    icon: IoMdHeart,
  },

  {
    id: getIdHeaderMenu("MainMenu", "he"),
    pathName: "Pages ",
    icon: FaFile,

    SubMenuDate: [
      {
        id: getIdHeaderMenu("SubMenu", "sub"),
        pathNameSub: "About",
        pathUrlSub: "/about",
      },

      {
        id: getIdHeaderMenu("SubMenu", "sub"),
        pathNameSub: "Paid Membership",
        pathUrlSub: "/paid-membership",
      },

      {
        id: getIdHeaderMenu("SubMenu", "sub"),
        pathNameSub: "Our Blog",
        pathUrlSub: "/blog",
      },

      {
        id: getIdHeaderMenu("SubMenu", "sub"),
        pathNameSub: "Career",
        pathUrlSub: "/career",
      },

      {
        id: getIdHeaderMenu("SubMenu", "sub"),
        pathNameSub: "Live Stream View",
        pathUrlSub: "/live-stream-view",
      },

      {
        id: getIdHeaderMenu("SubMenu", "sub"),
        pathNameSub: "Error 404",
        pathUrlSub: "/error-404",
      },

      {
        id: getIdHeaderMenu("SubMenu", "sub"),
        pathNameSub: "Coming Soon",
        pathUrlSub: "/coming-soon",
      },

      {
        id: getIdHeaderMenu("SubMenu", "sub"),
        pathNameSub: "Checkout",
        pathUrlSub: "/checkout",
      },

      {
        id: getIdHeaderMenu("SubMenu", "sub"),
        pathNameSub: "Payout",
        pathUrlSub: "/payout",
      },
      {
        id: getIdHeaderMenu("SubMenu", "sub"),
        pathNameSub: "Students",
        pathUrlSub: "/students",
      },

      {
        id: getIdHeaderMenu("SubMenu", "sub"),
        pathNameSub: "Pricing Plan",
        pathUrlSub: "/pricing-plan",
      },

      {
        id: getIdHeaderMenu("SubMenu", "sub"),
        pathNameSub: "FAQ",
        pathUrlSub: "/faq",
      },

      {
        id: getIdHeaderMenu("SubMenu", "sub"),
        pathNameSub: "Notifications",
        pathUrlSub: "/notifications",
      },

      {
        id: getIdHeaderMenu("SubMenu", "sub"),
        pathNameSub: "My Profile",
        pathUrlSub: "/my-profile",
      },

      {
        id: getIdHeaderMenu("SubMenu", "sub"),
        pathNameSub: "Messages",
        pathUrlSub: "/messages",
      },

      {
        id: getIdHeaderMenu("SubMenu", "sub"),
        pathNameSub: "Earnings",
        pathUrlSub: "/earnings",
      },
    ],
  },

  {
    id: getIdHeaderMenu("MainMenu", "he"),
    pathName: "Setting",
    pathUrl: "/setting",
    icon: IoSettings,
  },

  {
    id: getIdHeaderMenu("MainMenu", "he"),
    pathName: "Help",
    pathUrl: "/help",
    icon: IoMdHelpCircle,
  },

  {
    id: getIdHeaderMenu("MainMenu", "he"),
    pathName: "Report History ",
    pathUrl: "/report-history ",
    icon: TbWindsockFilled,
  },

  {
    id: getIdHeaderMenu("MainMenu", "he"),
    pathName: "Send Feedback",
    pathUrl: "/send-feedback",
    icon: BiSolidCommentDetail,
  },
];
