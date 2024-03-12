"use client";
import { useState } from "react";
import Item from "./item.js";
const ItemList = ({items, onItemSelect}) => {
  const [sortBy, setSortBy] = useState("name");
  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy);
  };
  const sort = items.slice().sort((a, b) => {
    if (sortBy === "name") {
      items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "category") {
      items.sort((a, b) => a.category.localeCompare(b.category));
    } else {
      return 0;
    }
  });
    
  return (
      <div className=" w-full justify-center text-center">
        <button
          onClick={() => handleSortChange("name")}
          style={{ backgroundColor: sortBy === "name" ? "green" : "orange" }}
          className="mr-40 h-10 mt-10"
        >
          Sort by Name
        </button>
        <button
          onClick={() => handleSortChange("category")}
          style={{
            backgroundColor: sortBy === "category" ? "green" : "orange",
          }}
          className="ml-4 h-10"
        >
          Sort by Category
        </button>
        <ul className="justify-center text-center">
        {sort.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={onItemSelect}
            />
          ))}
        </ul>
      </div>
    );
};
export default ItemList;
