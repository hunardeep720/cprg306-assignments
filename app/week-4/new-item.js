"use client";
import { useState } from "react";
const NewItem = () => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    let item = [name, quantity, category];

    let ChangeName = (event) => {
        setName(event.target.value);
    }
    let ChangeQuantity = (event) => {
        setQuantity(event.target.value);
    }
    let ChangeCategory = (event) => {
        setCategory(event.target.value);
    }
    const handleSubmit = () => {
            alert("Added item: " +item[0]+" quantity: "+item[1]+" category: "+item[2]);
        }
        return(
            <div className="flex items-center justify-center h-screen">
                <div className="border border-green-500 border-4 rounded-lg min h-60 w-1/4">
                    <div className="grid gap-x-5  h-20 flex flex-wrap">
                        <form>
                        <input required value={name} placeholder="Item name" onChange={ChangeName}  className="text-black w-full h-16"/>           
                        </form>
                    </div>
                    <div className="flex flex-row gap-y-5 h-20">
                        <div className="w-1/2">
                            <form>
                            <input value={quantity} type="number" defaultValue={quantity} onChange={ChangeQuantity} min={1} max={99}  className="text-black h-12 w-5/6" required/>
                            </form>
                        </div>
                        <div className="w-1/2 flex content-end justify-end">
                            <form>
                                <select value={category} defaultValue={category} onChange={ChangeCategory} required className="text-black h-12 w-full">
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
                            </form>
                        </div>
                    </div>
                    <div className="grid gap-x-5  h-20 flex flex-wrap">
                        <form onSubmit={handleSubmit}>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full h-16 py-9" required>+</button>
                        </form>
                    </div>
                </div> 
            </div>
            
        );
};
export default NewItem;