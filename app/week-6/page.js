"use client";
import React from "react";
import { useState, useEffect} from "react";
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';
export default function Page() {
    const [items, setItems] = useState(itemsData);
    useEffect(() => {
      let data = [];
      data.concat(items);
      <ItemList items={data} />;
  }, [items]);
    const handleAddItem = (itemName,itemQuantity,itemCategory) => {
        const newItem = {name: itemName,quantity: itemQuantity,category: itemCategory};
        setItems([...items,newItem]);

    };
    return (
      <main>
        <h1 className="text-4xl font-bold justify-center text-center">Shopping List</h1>
        <div className="w-full flex flex-row mt-4">
            <div className="w-1/3">
               <NewItem handleAddItems={handleAddItem} /> 
            </div>
            <div className="w-2/3">
               <ItemList items={items} /> 
            </div>
        </div>
      </main>
    );
  }