"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import ItemList from "./item-list";
import itemsData from "./items.json";
import Login from "../page";
export default function Page() {
  const { user, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  async function handleSignOut() {
    await firebaseSignOut();
  }
  const [selectedItemName, setSelectedItemName] = useState(null);
  const handleItemSelect = (itemName) => {
    const clean = itemName.split(",")[0].trim();
    const cleanedItemName = clean
      .replace(
        /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F700}-\u{1F77F}]|[\u{1F780}-\u{1F7FF}]|[\u{1F800}-\u{1F8FF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA00}-\u{1FA6F}]|[\u{1FA70}-\u{1FAFF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{2300}-\u{23FF}]|[\u{2B50}]|[\u{2934}]|[\u{25AA}]|[\u{FE0F}]|[\u{200D}]|[\u{23}]|[\u{2A}]|[\u{30}-\u{39}]|[\u{23}-\u{25}]|[\u{40}]|[\u{3A}-\u{3B}]|[\u{28}-\u{29}]|[\u{5B}-\u{5D}]|[\u{2F}]|[\u{7B}-\u{7D}]|[\u{3E}]|[\u{3C}]|[\u{7C}]|[\u{3D}]|[\u{3F}]|[\u{21}]|[\u{60}]|[\u{2D}]|[\u{2E}]|[\u{5F}]|[\u{2C}]|[\u{22}]|[\u{5E}]|[\u{A}]|[\u{9}]|[\u{D}]|[\u{C}]/gu,
        ""
      )
      .trim();

    // Update state
    setSelectedItemName(cleanedItemName);
  };
  const handleAddItem = (itemName, itemQuantity, itemCategory) => {
    const newItem = {
      name: itemName,
      quantity: itemQuantity,
      category: itemCategory,
    };
    if (items.some(item => (
        item.name === newItem.name &&
        item.quantity === newItem.quantity &&
        item.category === newItem.category
      ))) {
        alert("Item already exists");
      } else {
        setItems([...items, newItem]);
      }
    console.log(items);
    console.log("newItem")
    console.log(newItem);
    console.log(items.includes(newItem));
  };
  return (
    <main className="p-4 bg-black">
      {user ? (
        <div className="bg-white font-black">
            <div className="flex flex-row w-full">
                <div className="w-5/6">
                    <h1 className="text-5xl text-black mt-4 font-bold text-center mb-4 ml-48">
                        Shopping List
                    </h1>
                </div>
                <div className="w-1/6 flex justify-end mr-10 mt-6">
                    <button className="bg-blue-500 w-20 h-10" onClick={handleSignOut}>Sign Out</button>
                </div>
            </div>

          <div className="flex flex-row">
            <div className="w-1/3">
              <NewItem handleAddItems={handleAddItem} />
            </div>
            <div className="w-2/3">
              <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="w-1/3 flex justify-center">
              <MealIdeas ingredient={selectedItemName} />
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </main>
  );
}
