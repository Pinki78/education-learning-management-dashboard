"use client";

import { Label, TextInput } from "flowbite-react";
import { RiSearchLine } from "react-icons/ri";

const SearchInputForm = () => {
  return (
    <>
        <div className="max-w-md">
            <TextInput id="search" type="text" rightIcon={RiSearchLine } placeholder="Search" 
            className={`border-2 border-green-500 rounded-0 focus:ring-0 focus:border-green-600`}
            />
        </div>
    </>
  )
}

export default SearchInputForm