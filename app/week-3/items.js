// Item.js

import React from 'react';

const Item = ({name, quantity, category}) => {
  return (
    <div className='w-4/12'>
      <div><ul className='border p-2 m-4 bg-purple-900 text-white' >
            <li className='text-xl font-bold'  >{name}</li>
            <li className='text-sm ' >Buy {quantity} in {category}</li>
            </ul>
        </div>
        
    </div>
  );
};

export default Item;
