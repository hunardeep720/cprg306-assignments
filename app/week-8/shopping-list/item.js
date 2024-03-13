import React from 'react';

const Item = ({name, quantity, category, onSelect}) => {
  return (
    <div className='w-full'>

      <div><ul className=' cursor-pointer border p-2 m-4 bg-green-500 text-white hover:bg-green-700' >
            <li className='text-xl font-bold' onClick={()=> onSelect(name)} >{name}</li>
            <li className='text-sm ' onClick={()=> onSelect(name)}>Buy {quantity} in {category}</li>
            </ul>
        </div>
        
    </div>
  );
};

export default Item;
