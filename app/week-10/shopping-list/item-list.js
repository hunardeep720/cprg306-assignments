"use client";
import { useState } from "react";
import Item from "./item.js";

const ItemList = ({items, onItemSelect}) => {
  console.log(items);
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
        <div className="flex justify-evenly">
          <button
          onClick={() => handleSortChange("name")}
          style={{ backgroundColor: sortBy === "name" ? "rgb(74 222 128)" : "rgb(22 163 74)" }}
          className="p-4 px-8"
        >
          Sort by Name
        </button>
        <button
          onClick={() => handleSortChange("category")}
          style={{
            backgroundColor: sortBy === "category" ? "rgb(74 222 128)" : "rgb(22 163 74)",
            className: "p-4"
          }}
          
        >
          Sort by Category
        </button>
        </div>
        
        <ul className="justify-center text-center">
        {sort.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={onItemSelect}
              id = {item.id}
            />
          ))}
        </ul>
      </div>
    );
};
export default ItemList;
