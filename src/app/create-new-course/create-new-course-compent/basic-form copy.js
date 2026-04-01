"use client";
import { TextInput, Textarea, Label, Select } from "flowbite-react";

const BasicForm = ({ data, onChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="title">Course Title*</Label>
        <TextInput
          id="title"
          value={data.title || ""}
          onChange={(e) => onChange({ title: e.target.value })}
        />
      </div>

      <div>
        <Label htmlFor="shortDescription">Short Description*</Label>
        <TextInput
          id="shortDescription"
          value={data.shortDescription || ""}
          onChange={(e) => onChange({ shortDescription: e.target.value })}
        />
      </div>

      <div>
        <Label htmlFor="description">Course Description*</Label>
        <Textarea
          id="description"
          value={data.description || ""}
          onChange={(e) => onChange({ description: e.target.value })}
        />
      </div>

      <div>
        <Label htmlFor="level">Course Level*</Label>
        <Select
          id="level"
          value={data.level || ""}
          onChange={(e) => onChange({ level: e.target.value })}
        >
          <option value="">Select level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </Select>
      </div>

      <div>
        <Label htmlFor="category">Category*</Label>
        <Select
          id="category"
          value={data.category || ""}
          onChange={(e) => onChange({ category: e.target.value })}
        >
          <option value="">Select category</option>
          <option value="Web Development">Web Development</option>
          <option value="Business">Business</option>
          <option value="Design">Design</option>
        </Select>
      </div>
    </div>
  );
};

export default BasicForm;