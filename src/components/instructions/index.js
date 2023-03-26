import React from 'react'

export default function Instruct() {
   return (
      <div className='flex justify-between p-16 mt-10'>
         <div id='begin' className='text-6xl font-normal'>
            Let's Begin
         </div>
         <div className='text-xl pt-2 font-bold text-slate-800'>
            <div className='text-blue-500'>
               To use this Tool, Please write words seprated with comma.
            </div>
            <div className='text-red-400'>
               E.g. Hello, About Us, Welcome
            </div>
         </div>
      </div>
   )
}
