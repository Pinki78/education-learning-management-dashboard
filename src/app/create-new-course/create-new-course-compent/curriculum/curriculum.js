"use client";

import { TextInput, Label, Button } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormValue } from "@/assets/redux-store/store-redux-componets/courseNewFormSlice";
import ButtonPressable from "@/components/button/button-pressable";
import ItemModal from "../modal/item-modal";
import { useState } from "react";

const CurriculumForm = () => {
  //  const [openModal, setOpenModal] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  const dispatch = useDispatch();

  const { fieldsFormInput, loading, formValues } = useSelector(
    (state) => state.courseNewFormReducer,
  );

  if (loading) {
    return <div className="text-center py-6">Loading form fields...</div>;
  }

  const curriculumSection = fieldsFormInput.find(
    (item) => item.FormTitle === "Curriculum",
  );

  const fields = curriculumSection?.FormData || [];

  const formSections = curriculumSection?.FormSections || [];

  const formSectionsItems = curriculumSection?.FormSectionsItems || [];

  return (
    <>
      <div className="space-y-4">
        <div className={``}>
          {fields.map((field) => {
            if (field.type === "text") {
              return (
                <div key={field.id}>
                  <Label className="mb-2 block">{field.label}</Label>

                  <TextInput
                    name={field.inputName}
                    value={formValues[field.inputName] || ""}
                    placeholder={field.placeholder}
                    maxLength={field.maxLength}
                    onChange={(e) =>
                      dispatch(
                        updateFormValue({
                          name: field.inputName,
                          value: e.target.value,
                        }),
                      )
                    }
                  />
                </div>
              );
            }

            return null;
          })}
          <ButtonPressable
            // onClickHandle={() => dispatch(prevStep())}
            buttonClass="btn-secondary-revious rounded-none"
            buttonName="Add Section"
          />
        </div>

        {/* ✅ FormSections (Introduction, etc.) */}
        {formSections.map((section) => {
          return (
            <div key={section.id} className="border rounded-lg p-4 space-y-4">
              {/* Section Title */}
              <h3 className="text-lg font-semibold">{section.Sectionstitle}</h3>

              {/* ✅ FormSectionsItems (Lecture, Quiz) */}
            </div>
          );
        })}

        <div className="flex gap-2">
          {formSectionsItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="border px-3 py-1 rounded text-sm font-medium hover:bg-gray-100"
            >
              + {item.addItemHeader} {/* "Add Lecture" | "Add Quiz" */}
            </button>
          ))}
        </div>
      </div>

      <ItemModal
        selectedItem={selectedItem} // ✅ pass selected item
        openModal={selectedItem !== null} // ✅ open only when item selected
        setOpenModal={() => setSelectedItem(null)}
      />
    </>
  );
};

export default CurriculumForm;
