import React from "react";

const OPTIONS = ["all", "completed", "uncompleted"];

const FilterTodos = ({ filteredBy, setFilteredBy }) => {
  return (
    <form className="text-center mt-8">
      <select
        className="outline-none text-black p-2"
        value={filteredBy}
        onChange={(e) => {
          setFilteredBy(e.target.value);
        }}
      >
        {OPTIONS.map((option) => (
          <option key={option} value={option} className="hover:bg-amber-400">
            {option}
          </option>
        ))}
      </select>
    </form>
  );
};

export default FilterTodos;
