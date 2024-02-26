"use client";
import { useState } from "react";
import Item from "./item.js";
import items from "./items.json";
const ItemList = () => {
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
      <div className="mt-4">
        <button
          onClick={() => handleSortChange("name")}
          style={{ backgroundColor: sortBy === "name" ? "green" : "orange" }}
          className="mr-4 ml-4"
        >
          Sort by Name
        </button>
        <button
          onClick={() => handleSortChange("category")}
          style={{
            backgroundColor: sortBy === "category" ? "green" : "orange",
          }}
          className="ml-4"
        >
          Sort by Category
        </button>
        <ul>
          {sort.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      </div>
    );
};
export default ItemList;
