"use client";
import { useState } from "react";
const NewItem = ({handleAddItems}) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const onAddItem = () => {
    handleAddItems(name, quantity, category);
    console.log(name, quantity, category);
  };
  let ChangeName = (event) => {
    setName(event.target.value);
  };
  let ChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };
  let ChangeCategory = (event) => {
    setCategory(event.target.value);
  };
  return (
    <div className="ml-7 mt-10">
      <div className="w-full">
        <form onSubmit={onAddItem}>
          <div className="grid gap-x-5  h-20 flex flex-wrap">
            <input
              required
              value={name}
              placeholder="Item name"
              onChange={ChangeName}
              className="text-black w-full h-16"
            />
          </div>
            <div className="w-full mb-4">
              <input
                value={quantity}
                type="number"
                defaultValue={quantity}
                onChange={ChangeQuantity}
                min={1}
                max={99}
                className="text-black h-12 w-5/6"
                required
              />
            </div>
            <div className="w-full flex content-end justify-end">
              <select
                value={category}
                defaultValue={category}
                onChange={ChangeCategory}
                required
                className="text-black h-12 w-full"
              >
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
                <option value="Frozen Foods">Frozen Foods</option>
                <option value="Canned Goods">Canned Goods</option>
                <option value="Dry Goods">Dry Goods</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Household">Household</option>
                <option value="Other">Other</option>
              </select>
            </div>
          <div className="grid gap-x-5  h-20 flex mt-2 flex-wrap">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded w-full h-16"
              required
            >
              +
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default NewItem;
