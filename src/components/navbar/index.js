import React from 'react';
import logomain from "./logomain.png";

export default function NavBar() {
   return (
      <div id='navbar' className='flex justify-between p-3 shadow sticky top-0 backdrop-blur z-20' >
         <div id="left">
            <img src={logomain} className="w-40" alt="" />
         </div>
      </div>
   )
}
