import React from 'react';
import { deleteItem } from '../_services/shopping-list-services';
import { useUserAuth } from '../_utils/auth-context';

const Item = ({name, quantity, category, onSelect,id}) => {
  const {user} = useUserAuth();
  return (
    <div className='w-full'>

      <div><ul className='group grid grid-cols-3 cursor-pointer border p-2 m-4 bg-green-500 text-white hover:bg-green-700' >
            <div className='col-start-2 grid-row-2 '>
            <li className='text-xl font-bold col-start-2 row-span-1' onClick={()=> onSelect(name)} >{name}</li>
            <li className='text-sm col-span-3' onClick={()=> onSelect(name)}>Buy {quantity} in {category}</li>
            </div>
            <div className='hidden group-hover:grid grid-row-2 justify-end'>
            <button onClick={()=>{deleteItem(user.uid,id)
            console.log(user.uid)
            console.log(id)}} className='font-grey-500'>Delete</button>

            </div>
            </ul>
        </div>
        
    </div>
  );
};

export default Item;
