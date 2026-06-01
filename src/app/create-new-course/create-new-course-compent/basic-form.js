"use client";

import { TextInput, Textarea, Label, Select, HelperText } from "flowbite-react";

import "react-quill-new/dist/quill.snow.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dynamic from "next/dynamic";
import { updateFormValue } from "@/assets/redux-store/store-redux-componets/courseNewFormSlice";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const BasicForm = () => {
  const dispatch = useDispatch();

  const { fieldsFormInput, loading, formValues } = useSelector(
    (state) => state.courseNewFormReducer,
  );

  // const [editorValue, setEditorValue] = useState("");
  // const [formDataValue, setFormDataValue] = useState({});

  if (loading) {
    return <div className="text-center py-6">Loading form fields...</div>;
  }

  const basicSection = fieldsFormInput.find(
    (item) => item.FormTitle === "Basic",
  );

  const fields = basicSection.FormData || [];
  const getTextLength = (html) => {
    const text = html?.replace(/<[^>]+>/g, "") || "";
    return text.trim().length;
  };

  return (
    <>
      <div className="space-y-4">
        {fields.map((field) => {
          // TEXT INPUT
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
                {/* {field.maxLength && (
                  <p className="text-sm text-gray-500 mt-1">
                    {getTextLength(formValues[field.inputName])}/
                    {field.maxLength}
                  </p>
                )} */}
                <HelperText>
                  <span className="font-medium">
                    {field.subText}
                    
                    </span>
                </HelperText>
              </div>
            );
          }

          // TEXTAREA → ReactQuill
          if (field.type === "textarea") {
            return (
              <div key={field.id}>
                <Label className="mb-2 block">{field.label}</Label>

                <ReactQuill
                  theme="snow"
                  value={formValues[field.inputName] || ""}
                  placeholder={field.placeholder}
                  maxLength={field.maxLength}
                  className="bg-white quill-editor"
                  onChange={(value) =>
                    dispatch(
                      updateFormValue({
                        name: field.inputName,
                        value: value,
                      }),
                    )
                  }
                />
                {field.maxLength && (
                  <p className="text-sm text-gray-500 mt-1">
                    {getTextLength(formValues[field.inputName])}/
                    {field.maxLength}
                  </p>
                )}
                <HelperText>
                  <span className="font-medium">{field.subText}</span>
                </HelperText>
              </div>
            );
          }

          // SELECT INPUT
          if (field.type === "select") {
            return (
              <div key={field.id}>
                <Label className="mb-2 block">{field.label}</Label>

                <Select
                  value={formValues[field.inputName] || ""}
                  onChange={(e) =>
                    dispatch(
                      updateFormValue({
                        name: field.inputName,
                        value: e.target.value,
                      }),
                    )
                  }
                >
                  {(field.options || []).map((opt, i) => {
                    if (typeof opt === "object") {
                      return (
                        <optgroup key={opt.id} label={opt.subTitel}>
                          {(opt.subOptions || []).map((item, j) => (
                            <option key={j} value={item}>
                              {item}
                            </option>
                          ))}
                        </optgroup>
                      );
                    }

                    return (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    );
                  })}
                </Select>

                <HelperText>
                  <span className="font-medium">{field.subText}</span>
                </HelperText>
              </div>
            );
          }

          return null;
        })}
      </div>
    </>
  );
};

export default BasicForm;
