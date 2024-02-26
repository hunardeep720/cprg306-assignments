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
        const inputForm = () => {
            return(
                <input required value={name} placeholder="Item name" onChange={ChangeName}  className="text-black w-full h-16"/>                
            );
        };
        const numberForm = () => {
            return(
                <input value={quantity} type="number" defaultValue={quantity} onChange={ChangeQuantity} min={1} max={99}  className="text-black h-12 w-5/6" required/>
            );
        }
        const selectForm = () => {
            return(
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
            );
        }
        const buttonForm = () => {
            return(
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full h-16 py-9" required>+</button>
            );
        }
        return(
            <div className="flex items-center justify-center h-screen">
                <div className="border border-green-500 border-4 rounded-lg min h-60 w-1/4">
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-x-5  h-20 flex flex-wrap">
                            <input required value={name} placeholder="Item name" onChange={ChangeName}  className="text-black w-full h-16"/>
                            {/* {inputForm()} */}
                        </div>
                        <div className="flex flex-row gap-y-5 h-20">
                            <div className="w-1/2">
                                <input value={quantity} type="number" defaultValue={quantity} onChange={ChangeQuantity} min={1} max={99}  className="text-black h-12 w-5/6" required/>
                                {/* {numberForm()} */}
                            </div>
                            <div className="w-1/2 flex content-end justify-end">
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
                                {/* {selectForm()} */}
                            </div>
                        </div>
                        <div className="grid gap-x-5  h-20 flex flex-wrap">
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full h-16 py-9" required>+</button>
                                {/* {buttonForm()} */}
                        </div>
                    </form>
                </div> 
            </div>
        );
};
export default NewItem;