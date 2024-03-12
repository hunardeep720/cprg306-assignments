"use client";
import React from "react";
import { useState, useEffect} from "react";
import NewItem from './new-item';
import MealIdeas from "./meal-ideas";
import ItemList from './item-list';
import itemsData from './items.json';
export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(null);
    const handleItemSelect = (itemName) => {
      const clean = itemName.split(',')[0].trim();
      const cleanedItemName = clean.replace(/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F700}-\u{1F77F}]|[\u{1F780}-\u{1F7FF}]|[\u{1F800}-\u{1F8FF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA00}-\u{1FA6F}]|[\u{1FA70}-\u{1FAFF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{2300}-\u{23FF}]|[\u{2B50}]|[\u{2934}]|[\u{25AA}]|[\u{FE0F}]|[\u{200D}]|[\u{23}]|[\u{2A}]|[\u{30}-\u{39}]|[\u{23}-\u{25}]|[\u{40}]|[\u{3A}-\u{3B}]|[\u{28}-\u{29}]|[\u{5B}-\u{5D}]|[\u{2F}]|[\u{7B}-\u{7D}]|[\u{3E}]|[\u{3C}]|[\u{7C}]|[\u{3D}]|[\u{3F}]|[\u{21}]|[\u{60}]|[\u{2D}]|[\u{2E}]|[\u{5F}]|[\u{2C}]|[\u{22}]|[\u{5E}]|[\u{A}]|[\u{9}]|[\u{D}]|[\u{C}]/gu, '').trim();

      



      // Update state
      setSelectedItemName(cleanedItemName);
    };
    const handleAddItem = (itemName,itemQuantity,itemCategory) => {
        const newItem = {name: itemName,quantity: itemQuantity,category: itemCategory};
        setItems([...items, newItem]);
    };
    return (
      <main className="p-4 bg-black">
            <h1 className="text-4xl font-bold text-center mb-4">Shopping List</h1>
            <div className="flex flex-row">
                <div className="w-1/3">
                    <NewItem handleAddItems={handleAddItem} />
                </div>
                <div className="w-2/3">
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="w-1/3">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
  }