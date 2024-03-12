import React from 'react';

const Item = ({name, quantity, category, onSelect}) => {
  return (
    <div className='w-full'>

      <div><ul className=' cursor-pointer border p-2 m-4 bg-purple-900 text-white hover:bg-purple-500' >
            <li className='text-xl font-bold' onClick={()=> onSelect(name)} >{name}</li>
            <li className='text-sm ' onClick={()=> onSelect(name)}>Buy {quantity} in {category}</li>
            </ul>
        </div>
        
    </div>
  );
};

export default Item;
