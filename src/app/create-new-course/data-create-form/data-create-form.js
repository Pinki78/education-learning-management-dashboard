let idFormFaq = 0;
let idFormFaqOptions = 0;
let idFormItemName = 0;
let idSections = 0;
let idSectionsItems = 0;
let IdFormSectionsItemsTab = 0;
let IdItemsTabForm = 0;
let IdRadioFormTab = 0;

let IdmakeInputTitle = 0;

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const getFaqIdForm = (label, suffix = "") => {
  const slug = slugify(label);
  idFormFaq++;
  return `${slug}-${idFormFaq}${suffix}`;
};

const getFaqIdFormsubOptions = (subTitel, suffix = "") => {
  const slug = slugify(subTitel);
  idFormFaqOptions++;
  return `${slug}-${idFormFaqOptions}${suffix}`;
};

const getFormItemName = (FormTitle, suffix = "") => {
  const slug = slugify(FormTitle);
  idFormItemName++;
  return `${slug}`;
};

const getSectionsId = (Sectionstitle, suffix = "") => {
  const slug = slugify(Sectionstitle);
  idSections++;
  return `${slug}-${idSections}${suffix}`;
};

const getSectionsItemsId = (Itemstitle, suffix = "") => {
  const slug = slugify(Itemstitle);
  idSectionsItems++;
  return `${slug}-${idSectionsItems}${suffix}`;
};

const getIdFormSectionsItemsTab = (tabItemName, suffix = "") => {
  const slug = slugify(tabItemName);
  IdFormSectionsItemsTab++;
  return `${slug}-${IdFormSectionsItemsTab}${suffix}`;
};

const getIdItemsTabForm = (tabLabel, suffix = "") => {
  const slug = slugify(tabLabel);
  IdItemsTabForm++;
  return `${slug}-${IdItemsTabForm}${suffix}`;
};

const getIdRadioFormTab = (RadiotabLabel, suffix = "") => {
  const slug = slugify(RadiotabLabel);
  IdRadioFormTab++;
  return `${slug}-${IdRadioFormTab}${suffix}`;
};

const getIdmakeInputTitle = (makeInputTitle, suffix = "") => {
  const slug = slugify(makeInputTitle);
  IdmakeInputTitle++;
  return `${slug}-${IdmakeInputTitle}${suffix}`;
};
let IdtabTextRadio=0;
const getIdItemsRadioForm = (tabTextRadio, suffix = "") => {
  const slug = slugify(tabTextRadio);
  IdtabTextRadio++;
  return `${slug}-${IdtabTextRadio}${suffix}`;
};




// ✅ Helper functions to create objects dynamically
const makeSection = (FormTitle, rest) => ({
  FormTitle,
  id: getFormItemName(FormTitle), // ✅ FormTitle is a variable here
  ...rest,
});

const makeField = (label, rest) => ({
  label,
  id: getFaqIdForm(label), // ✅ label is a variable here
  ...rest,
});

const makeSubOption = (subTitel, rest) => ({
  subTitel,
  id: getFaqIdFormsubOptions(subTitel), // ✅
  ...rest,
});

const makeSectionBlock = (Sectionstitle, rest) => ({
  Sectionstitle,
  id: getSectionsId(Sectionstitle), // ✅
  ...rest,
});

const makeSectionItem = (Itemstitle, rest) => ({
  Itemstitle,
  id: getSectionsItemsId(Itemstitle), // ✅
  ...rest,
});

const makeTab = (tabItemName, rest) => ({
  tabItemName,
  id: getIdFormSectionsItemsTab(tabItemName), // ✅
  ...rest,
});

const makeTabForm = (tabLabel, rest) => ({
  tabLabel,
  id: getIdItemsTabForm(tabLabel), // ✅
  ...rest,
});

const makeRadio = (RadiotabLabel, rest) => ({
  RadiotabLabel,
  id: getIdRadioFormTab(RadiotabLabel), // ✅
  ...rest,
});

const makeTabTextRadio = (tabTextRadio, rest) => ({
  tabTextRadio,
  id: getIdItemsRadioForm(tabTextRadio), // ✅
  ...rest,
});

const makeAssignmentField = (makeInputTitle, rest) => ({
  makeInputTitle,
  id: getIdmakeInputTitle(makeInputTitle), // ✅
  ...rest,
});

export const CreateNewCourseFormData = [
  makeSection("Basic", {
    FormData: [
      makeField("Course Title*", {
        inputName: "title",
        type: "text",
        maxLength: 100,
        required: true,
        subText: "(Please make this a maximum of 100 characters and unique.)",
      }),
      makeField("Short Description*", {
        inputName: "shortDescription",
        type: "text",
        maxLength: 220,
        required: true,
        subText: "220 words",
      }),
      makeField("Course Description*", {
        inputName: "description",
        type: "textarea",
        maxLength: 220,
        required: true,
        subText: "220 words",
      }),
      makeField("What will students learn in your course?*", {
        inputName: "learn",
        type: "textarea",
        subText:
          "Student will gain skills after completing this course. (One per line).",
      }),
      makeField("Requirements*", {
        inputName: "requirements",
        type: "textarea",
        subText: `What knowledge, technology, tools required by users to start this course. (One per line).`,
      }),
      makeField("Course Level*", {
        inputName: "level",
        type: "select",
        subText: "",
        options: ["Beginner", "Intermediate", "Expert"],
      }),
      makeField("Audio Language*", {
        inputName: "language",
        type: "select",
        subText: "",
        options: ["English", "Español", "Português"],
      }),
      makeField("Course Category", {
        inputName: "category",
        type: "select",
        subText: "",
        options: [
          makeSubOption("Development", {
            subOptions: [
              "Web Development",
              "Data Science",
              "Programming Languages",
              "Mobile Apps",
              "Game Development",
            ],
          }),
          makeSubOption("Business", {
            subOptions: [
              "Finance",
              "Entrepreneurship",
              "Management",
              "Sales",
              "Project Management",
            ],
          }),
          makeSubOption("Design", {
            subOptions: [
              "Web Design",
              "Graphic Design",
              "3D Animation",
              "Interior Design",
            ],
          }),
        ],
      }),
    ],
  }),
  
  makeSection("Curriculum", {
    FormData: [
      makeField("Section Name*", {
        inputName: "sectionname",
        type: "text",
        placeholder: "Section title here",
      }),
    ],

    FormSections: [makeSectionBlock("Introduction", {})],

    FormSectionsItems: [
      makeSectionItem("Lecture", {
        // Itemstype: "lecture",
        // ItemsIcon: "",
        addItemHeader: "Add Lecture",
        FormSectionsItemsTab: [
          makeTab("Basic", {
            iconTab: "",
            ItemsTabForm: [
              makeTabForm("Lecture Title", {
                tabInputName: "lecturetitle",
                tabType: "text",
                tabPlaceholder: "",
              }),
              makeTabForm("Description", {
                tabInputName: "description",
                tabType: "textarea",
                tabPlaceholder: "",
              }),
              makeTabForm("Free Preview", {
                tabType: "switch",
              }),
            ],
          }),

          makeTab("Video", {
            iconTab: "",
            tabHelpeText: `Select your preferred video type. (.mp4, YouTube, Vimeo etc.)`,
            ItemsTabForm: [
              makeTabTextRadio("HTML5(mp4)", {
                RadioFormTab: [
                  makeRadio("Upload Video", {
                    RadiotabType: "file",
                    Radioaccept: "video/mp4",
                    RadioaFileid: "Uploaded ID:12",
                    RadioaHelper: `File Format: .mp4`,
                  }),
                  makeRadio("Video Poster", {
                    RadiotabType: "file",
                    Radioaccept: "image/png,image/jpg,image/jpeg",
                    RadioaFileid: "Uploaded id:preview.jpg",
                    RadioaHelper: `Size: 590x300 pixels. Supports: jpg,jpeg, or png`,
                  }),
                  makeRadio("Video Runtime", {
                    RadiotabType: "time",
                    RadiotabLabelSub: "hh:mm:ss",
                  }),
                ],
              }),

              makeTabTextRadio("External URL", {
                RadioFormTab: [
                  makeRadio("External Video URL", {
                    RadiotabType: "text",
                    RadiotabPlaceholder: "External Video URL",
                  }),
                  makeRadio("Video Runtime", {
                    RadiotabType: "time",
                    RadiotabLabelSub: "hh:mm:ss",
                  }),
                ],
              }),

              makeTabTextRadio("Youtube URL", {
                RadioFormTab: [
                  makeRadio("Youtube Video URL", {
                    RadiotabType: "text",
                    RadiotabPlaceholder: "Youtube Video URL",
                  }),
                  makeRadio("Video Runtime", {
                    RadiotabType: "time",
                    RadiotabLabelSub: "hh:mm:ss",
                  }),
                ],
              }),

              makeTabTextRadio("Vimeo URL", {
                RadioFormTab: [
                  makeRadio("Vimeo Video URL", {
                    RadiotabType: "text",
                    RadiotabPlaceholder: "Vimeo Video URL",
                  }),
                  makeRadio("Video Runtime", {
                    RadiotabType: "time",
                    RadiotabLabelSub: "hh:mm:ss",
                  }),
                ],
              }),

              makeTabTextRadio("Embedded Code", {
                RadioFormTab: [
                  makeRadio("Place your embedded code here", {
                    RadiotabType: "textarea",
                    RadiotabPlaceholder: "Place your embedded code here",
                  }),
                  makeRadio("Video Runtime", {
                    RadiotabType: "time",
                    RadiotabLabelSub: "hh:mm:ss",
                  }),
                ],
              }),
            ],
          }),

          makeTab("Attachments", {
            iconTab: "",
            ItemsTabForm: [
              makeTabForm("Attachments", {
                tabType: "file",
                tabHelper: `Supports: jpg, jpeg, png, pdf or .zip`,
                tabaccept: "video/mp4",
              }),
            ],
          }),
        ],
      }),

      makeSectionItem("Quiz", {
        Itemstype: "quiz",
        ItemsIcon: "",
        addItemHeader: "Add Quiz",
        FormSectionsItemsTab: [
          makeTab("Basic", {
            iconTab: "",
            ItemsTabForm: [
              makeTabForm("Quiz Title*", {
                tabInputName: "quiztitle",
                tabType: "text",
                tabPlaceholder: "",
              }),
              makeTabForm("Description", {
                tabInputName: "description",
                tabType: "textarea",
                tabPlaceholder: "",
              }),
            ],
          }),

          makeTab("Questions", {
            iconTab: "",
            ItemsTabForm: [
              makeTabForm("Quiz Title*", {
                tabInputName: "quiztitle",
                tabType: "text",
                tabPlaceholder: "",
              }),
              makeTabForm("Description", {
                tabInputName: "description",
                tabType: "textarea",
                tabPlaceholder: "",
              }),
            ],
          }),
        ],
      }),

      makeSectionItem("Assignment", {
        Itemstype: "Assignment",
        ItemsIcon: "",
        addItemHeader: "Add Assignment",

        assignmentForm: [
          makeAssignmentField("Assignment Title*", {
            inputName: "title",
            type: "text",
            placeholder: "Assignment title here",
          }),

          makeAssignmentField("Description*", {
            inputName: "description",
            type: "textarea",
          }),

          makeAssignmentField("Time Duration*", {
            inputName: "duration",
            type: "number",

            subText: `Assignment time duration, set 0 for no limit.`,
          }),

          makeAssignmentField("Select", {
            inputName: "select",
            type: "select",
            options: ["Weeks", "Days", "Hours"],
            subText: ``,
          }),

          makeAssignmentField("Total Number*", {
            inputName: "number",
            type: "number",

            subText: `Maximum points a student can score`,
          }),

          makeAssignmentField("Minimum Pass Number*", {
            inputName: "minimum ",
            type: "number",

            subText: `Minimum points required for the student to pass this assignment.`,
          }),

          makeAssignmentField("Upload attachment limit*", {
            inputName: "upload",
            type: "number",
            subText: `Maximum attachment size limit`,
          }),

          makeAssignmentField("Maximum attachment size limit", {
            inputName: "attachment",
            type: "number",
            subText: `Define maximum attachment size in MB`,
          }),

          makeAssignmentField("Attachment", {
            inputName: "attachment",
            type: "file",
            placeholder: "Supports: jpg, jpeg, png, pdf or .zip",
            subText: `Supports: jpg, jpeg, png, pdf or .zip`,
          }),
        ],
      }),
    ],
  }),

  makeSection("Media", {
    mediaSubText: `Intro Course overview provider type. (.mp4, YouTube, Vimeo etc.)`,
    FormData: [
      makeField(
        "HTML5(mp4)",
        {
          type: "file",
          label: "Choose Thumbnail",
          subText: `File Format: .mp4`,
        },
        {
          type: "file",
          label: "Choose Thumbnail",
          subText: `Size: 590x300 pixels. Supports: jpg,jpeg, or png`,
        },
      ),

      makeField(
        "External URL",
        {
          type: "text",
          label: "External URL*",
          subText: ``,
        },
        {
          type: "file",
          label: "Course thumbnail*",
          subText: `Size: 590x300 pixels. Supports: jpg,jpeg, or png`,
        },
      ),

      makeField(
        "YouTube",
        {
          type: "text",
          label: "YouTube*",
          subText: ``,
        },
        {
          type: "file",
          label: "Course thumbnail*",
          subText: `Size: 590x300 pixels. Supports: jpg,jpeg, or png`,
        },
      ),

      makeField(
        "Vimeo",
        {
          type: "text",
          label: "Vimeo*",
          subText: ``,
        },
        {
          type: "file",
          label: "Course thumbnail*",
          subText: `Size: 590x300 pixels. Supports: jpg,jpeg, or png`,
        },
      ),

      makeField(
        "Embedded",
        {
          type: "textarea",
          label: "Embedded*",
          subText: ``,
        },
        {
          type: "file",
          label: "Course thumbnail*",
          subText: `Size: 590x300 pixels. Supports: jpg,jpeg, or png`,
        },
      ),
    ],
  }),

  makeSection("Price", {
    subText: `If the course is free, if student require to enroll your course, 
    if not required enroll, if students required sign in to your website to take this course.`,
    FormData: [
      makeField("Free", {
        iconName: "",

        FormCheck: [
          {
            labelName: "Require Log In",
            type: "checkbox",
          },
        ],
      }),

      makeField("Paid", {
        iconName: "",

        FormCheck: [
          {
            labelName: "Require Enroll",
            type: "checkbox",
          },
        ],
      }),
    ],
  }),

  makeSection("Submit", {
    subText: `Your course is in a draft state. Students cannot view, purchase or enroll in this course. For students that
     are already enrolled, this course will not appear on their student Dashboard.`,
    iconName: "",
  }),
];
