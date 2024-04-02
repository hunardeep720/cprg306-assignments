"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import ItemList from "./item-list";
import { getItems, addItem} from "../_services/shopping-list-services";
import Login from "../page";

export default function Page() {
  const { user, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState([]);
  const loadItems = async () => {
    if (user) {
      const userItems = await getItems(user.uid);
      setItems(userItems);
      console.log('user found')
      console.log(items)
      console.log(userItems)
      console.log('user id'+user.uid)
    }
    else{
      console.log("no user")
    }
  };
  useEffect(() => {
  
  loadItems();
  }, [user]);

  async function handleSignOut() {
    await firebaseSignOut();
  }
  const [selectedItemName, setSelectedItemName] = useState(null);
  const handleItemSelect = (itemName) => {
    setSelectedItemName(itemName);
  };
  const handleAddItem = async (itemName, itemQuantity, itemCategory) => {
    const newItem = {
      name: itemName,
      quantity: itemQuantity,
      category: itemCategory,
    };
    if (
      items.some(
        (item) =>
          item.name === newItem.name &&
          item.quantity === newItem.quantity &&
          item.category === newItem.category
      )
    ) {
      alert("Item already exists");
    } else {
      if (user) {
        const userId = user.uid;
        const newItemDoc = await addItem(userId, newItem);
        setItems([...items, { id: newItemDoc.id, ...newItem }]);
      }
    }
  };
  return (
    <main className="p-4 bg-black h-screen">
      {user ? (
        <div className="bg-white font-black h-screen">
          <div className="flex flex-row w-full">
            <div className="w-5/6">
              <h1 className="text-5xl text-black mt-4 font-bold text-center mb-4 ml-48">
                Shopping List
              </h1>
            </div>
            <div className="w-1/6 flex justify-end mr-10 mt-6">
              <button className="bg-blue-500 w-20 h-10" onClick={handleSignOut}>
                Sign Out
              </button>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="w-1/3">
              <NewItem handleAddItems={handleAddItem} />
            </div>
            <div className="w-2/3">
              <ItemList items={items} onItemSelect={handleItemSelect}/>
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
