"use client";
import categories from "@/staticData/categories";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

const FilterSection = () => {
  return (
    <div className="w-full bg-white text-center py-2 flex flex-col gap-4 md:flex-row items-center md:px-10 justify-between">
      <Searchbar />
      <div className="flex gap-4">
        <SelectCategory />
        {/* sort section */}
        <select name="sort" id="sort" defaultValue={"Sort By"}>
          <option value="Sort By" disabled>
            Sort By
          </option>
        </select>
        {/* filter icon */}
        <div className="flex gap-1 items-center">
          <span>Filter By</span>
          <HiOutlineAdjustmentsHorizontal
            size={25}
            className="hover:scale-105 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSection;

const SelectCategory = () => {
  return (
    <select
      name="category"
      id="category"
      className="rounded-lg shadow-md py-1 px-2 border"
      defaultValue={"Select category"}
    >
      <option value="Select category" disabled>
        Select Category
      </option>
      {categories.map((category, index) => {
        return (
          <option value={category.name} key={index}>
            {category.name}
          </option>
        );
      })}
    </select>
  );
};

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = () => {
    console.log(searchInput);
  };
  return (
    <div className="bg-blue-100 shadow-lg rounded-lg flex gap-1 px-2 py-1 items-center w-80">
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="w-full p-1 border-none pl-2 bg-blue-100 outline-none"
        type="search"
        id="productName"
        name="ProductName"
        placeholder="Search ..."
      />
      <CiSearch
        size={35}
        onClick={handleSearch}
        className="hover:scale-105 cursor-pointer"
      />
    </div>
  );
};
