


let IdCounters = {
  MainMenu:0,
  SubMenu:0,
};


const getIdHeaderMenu = (type=" MainMenu" , suffix="") => {
  IdCounters[type]++
  return `${IdCounters[type]}${suffix}`
};

export const HederMenuListDat = [

    {
      id:getIdHeaderMenu("MainMenu" , "he"),
       pathName: "Dashboard",
      pathUrl:"/",
      iconName: "ImHome ",
    },

    {
      id:getIdHeaderMenu("MainMenu" , "he"),
      pathName:"Live Streams",
      pathUrl:"/live-streams",
      iconName: "RiLiveFill ",
    },

    {
      id:getIdHeaderMenu("MainMenu" , "he"),
      pathName:"Categories ",
      iconName: "IoLayers",

      SubMenuDate:[

        {
          id:getIdHeaderMenu("SubMenu" , "sub"),
          pathNameSub:"All Courses",
          pathUrlSub:"/courses",
          iconName: " GiBookCover",
          
        },

        {
          id:getIdHeaderMenu("SubMenu" , "sub"),
          pathNameSub:"Development",
          pathUrlSub:"/development",
          iconName: "RiCodeView ",
          TopYes:"Yes",
        },

        {
          id:getIdHeaderMenu("SubMenu" , "sub"),
          pathNameSub:"Business",
          pathUrlSub:"/business",
          iconName: "MdBusinessCenter",
          TopYes:"Yes",
        },

        {
          id:getIdHeaderMenu("SubMenu" , "sub"),
          pathNameSub:"Web Design",
          pathUrlSub:"/design",
          iconName: "MdDesignServices ",
        },

        {
          id:getIdHeaderMenu("SubMenu" , "sub"),
          pathNameSub:"Marketing",
          pathUrlSub:"/marketing",
          iconName: "FaChartPie",
          TopYes:"Yes",
        },

        {
          id:getIdHeaderMenu("SubMenu" , "sub"),
          pathNameSub:"Wed Development",
          pathUrlSub:"/web-development",
          iconName: "FaBookOpen ",
          TopYes:"Yes",
        },

        {
          id:getIdHeaderMenu("SubMenu" , "sub"),
          pathNameSub:"IT & Software",
          pathUrlSub:"/it-software",
           iconName:"PiMonitorFill ",
        },

        {
          id:getIdHeaderMenu("SubMenu" , "sub"),
          pathNameSub:"Music",
          pathUrlSub:"/music",
           iconName:"FaMusic ",
          TopYes:"Yes",
        },

        {
          id:getIdHeaderMenu("SubMenu" , "sub"),
          pathNameSub:"Photography",
          pathUrlSub:"/photography",
           iconName:"MdAddAPhoto ",
          TopYes:"Yes",
        },

       


      ]
    },

    {
      id:getIdHeaderMenu("MainMenu" , "he"),
      pathName:"Saved Courses",
      pathUrl:"/saved-courses",
      iconName: "IoMdHeart ",
    },

    {
      id:getIdHeaderMenu("MainMenu" , "he"),
      pathName:"Pages ",
      iconName:"FaFile " ,

      SubMenuDate:[
        {
          id:getIdHeaderMenu("SubMenu" , "sub"),
          pathNameSub:"About",
          pathUrlSub:"/about",
        },

        {
          id:getIdHeaderMenu("SubMenu" , "sub"),
          pathNameSub:"Paid Membership",
          pathUrlSub:"/paid-membership",
        },

        {
          id:getIdHeaderMenu("SubMenu" , "sub"),
          pathNameSub:"Our Blog",
          pathUrlSub:"/blog",
        },

        {
          id:getIdHeaderMenu("SubMenu" , "sub"),
          pathNameSub:"Career",
          pathUrlSub:"/career",
        },

        {
          id:getIdHeaderMenu("SubMenu" , "sub"),
          pathNameSub:"Live Stream View",
          pathUrlSub:"/live-stream-view",
        },

        {
          id:getIdHeaderMenu("SubMenu" , "sub"),
          pathNameSub:"Error 404",
          pathUrlSub:"/error-404",
        },

         {
          id:getIdHeaderMenu("SubMenu" , "sub"),
          pathNameSub:"Coming Soon",
          pathUrlSub:"/coming-soon",
        },
      

      {
          id:getIdHeaderMenu("SubMenu" , "sub"),
          pathNameSub:"Checkout",
          pathUrlSub:"/checkout",
        },

         {
          id:getIdHeaderMenu("SubMenu" , "sub"),
          pathNameSub:"Payout",
          pathUrlSub:"/payout",
        },
      {
          id:getIdHeaderMenu("SubMenu" , "sub"),
          pathNameSub:"Students",
          pathUrlSub:"/students",
        },

         {
          id:getIdHeaderMenu("SubMenu" , "sub"),
          pathNameSub:"Pricing Plan",
          pathUrlSub:"/pricing-plan",
        },

        {
          id:getIdHeaderMenu("SubMenu" , "sub"),
          pathNameSub:"FAQ",
          pathUrlSub:"/faq",
        },

         {
          id:getIdHeaderMenu("SubMenu" , "sub"),
          pathNameSub:"Notifications",
          pathUrlSub:"/notifications",
        },

         {
          id:getIdHeaderMenu("SubMenu" , "sub"),
          pathNameSub:"My Profile",
          pathUrlSub:"/my-profile",
        },

      {
          id:getIdHeaderMenu("SubMenu" , "sub"),
          pathNameSub:"Messages",
          pathUrlSub:"/messages",
        },

         {
          id:getIdHeaderMenu("SubMenu" , "sub"),
          pathNameSub:"Earnings",
          pathUrlSub:"/earnings",
        },
      










      ]


    },

    {
      id:getIdHeaderMenu("MainMenu" , "he"),
      pathName:"Setting",
      pathUrl:"/setting",
      iconName:"IoSettings " ,
    },

    {
      id:getIdHeaderMenu("MainMenu" , "he"),
      pathName:"Help",
      pathUrl:"/help",
      iconName: "IoMdHelpCircle ",
    },

    {
      id:getIdHeaderMenu("MainMenu" , "he"),
      pathName:"Report History ",
      pathUrl:"/report-history ",
      iconName:"TbWindsockFilled " ,
    },

    {
      id:getIdHeaderMenu("MainMenu" , "he"),
      pathName:"Send Feedback",
      pathUrl:"/send-feedback",
      iconName: "BiSolidCommentDetail " ,
    },

    















]