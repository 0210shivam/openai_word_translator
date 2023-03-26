import React, { useState } from 'react';
import { openai } from '../../setups/openai';

export default function UseCase() {

   const [data, setData] = useState("");
   const [res, setRes] = useState("");

   const [selectedOption, setSelectedOption] = useState('');

   const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
   };


   async function callApi(e) {

      e.preventDefault();
      const response = await openai.createCompletion({
         model: "text-davinci-003",
         prompt: `translate and write : "${data}" into "${selectedOption}" language fonts`,
         max_tokens: 2040,
         temperature: 0.7,
      });
      setRes(response.data.choices[0].text);
   }

   return (
      <div>
         <div className='grid grid-cols-2 p-2'>
            <div>
               <textarea
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                  rows='10'
                  placeholder='Write Words Seprated with Comma'
                  className=" font-medium text-gray-900 w-[550px] mt-2 mx-14 border-2 border-solid rounded border-blue-600 p-3 mb-3">

               </textarea>
            </div>
            <div className=''>
               <div className='text-xl mb-4 font-bold text-slate-800'>
                  Select Language :
               </div>

               <div class="relative inline-flex items-center justify-center p-0.5 mb-4 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

                  <label className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                     <input
                        className='mr-2'
                        type="radio"
                        value="hindi"
                        checked={selectedOption === "hindi"}
                        onChange={handleOptionChange}
                     />
                     Hindi
                  </label>
               </div>

               <div class="relative inline-flex items-center justify-center p-0.5 mb-4 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

                  <label className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                     <input
                        className='mr-2'
                        type="radio"
                        value="tamil"
                        checked={selectedOption === "tamil"}
                        onChange={handleOptionChange}
                     />
                     Tamil
                  </label>
               </div>

               <div class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

                  <label className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                     <input
                        className='mr-2'
                        type="radio"
                        value="punjabi"
                        checked={selectedOption === "punjabi"}
                        onChange={handleOptionChange}
                     />
                     Punjabi
                  </label>
               </div>

               <div class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

                  <label className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                     <input
                        className='mr-2'
                        type="radio"
                        value="malayalam"
                        checked={selectedOption === "malayalam"}
                        onChange={handleOptionChange}
                     />
                     Malayalam
                  </label>
               </div>

               <div class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

                  <label className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                     <input
                        className='mr-2'
                        type="radio"
                        value="Konkani"
                        checked={selectedOption === "Konkani"}
                        onChange={handleOptionChange}
                     />
                     Konkani
                  </label>
               </div>

               <div class="relative inline-flex items-center justify-center p-0.5 mb-4 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

                  <label className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                     <input
                        className='mr-2'
                        type="radio"
                        value="Rajasthani"
                        checked={selectedOption === "Rajasthani"}
                        onChange={handleOptionChange}
                     />
                     Rajasthani
                  </label>
               </div>

               <div class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

                  <label className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                     <input
                        className='mr-2'
                        type="radio"
                        value="gujrati"
                        checked={selectedOption === "gujrati"}
                        onChange={handleOptionChange}
                     />
                     Gujrati
                  </label>
               </div>

               <div class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

                  <label className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                     <input
                        className='mr-2'
                        type="radio"
                        value="Haryanvi"
                        checked={selectedOption === "Haryanvi"}
                        onChange={handleOptionChange}
                     />
                     Haryanvi
                  </label>
               </div>

               <div class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

                  <label className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                     <input
                        className='mr-2'
                        type="radio"
                        value="Nagamese"
                        checked={selectedOption === "Nagamese"}
                        onChange={handleOptionChange}
                     />
                     Nagamese
                  </label>
               </div>

               <div class="relative inline-flex items-center justify-center p-0.5 mb-4 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

                  <label className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                     <input
                        className='mr-2'
                        type="radio"
                        value="Kashmiri"
                        checked={selectedOption === "Kashmiri"}
                        onChange={handleOptionChange}
                     />
                     Kashmiri
                  </label>
               </div>

               <div class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

                  <label className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                     <input
                        className='mr-2'
                        type="radio"
                        value="Assamese"
                        checked={selectedOption === "Assamese"}
                        onChange={handleOptionChange}
                     />
                     Assamese
                  </label>
               </div>

               <div class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

                  <label className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                     <input
                        className='mr-2'
                        type="radio"
                        value="Kannada"
                        checked={selectedOption === "Kannada"}
                        onChange={handleOptionChange}
                     />
                     Kannada
                  </label>
               </div>

               <div class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

                  <label className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                     <input
                        className='mr-2'
                        type="radio"
                        value="Bengali"
                        checked={selectedOption === "Bengali"}
                        onChange={handleOptionChange}
                     />
                     Bengali
                  </label>
               </div>

               <div class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

                  <label className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                     <input
                        className='mr-2'
                        type="radio"
                        value="Marathi"
                        checked={selectedOption === "Marathi"}
                        onChange={handleOptionChange}
                     />
                     Marathi
                  </label>
               </div>

               <div class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

                  <label className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                     <input
                        className='mr-2'
                        type="radio"
                        value="Telugu"
                        checked={selectedOption === "Telugu"}
                        onChange={handleOptionChange}
                     />
                     Telugu
                  </label>
               </div>
            </div>
         </div>

         <div className='text-center mb-10'>

            <button onClick={callApi} className="mt-10 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
               Submit
            </button>

         </div>

         <div>
            <div className='m-20'>
               <div className='p-6 text-gray-500 font-medium border border-solid'>
                  Response :
                  {res}
               </div>
            </div>


            <div className='text-center px-96 mt-20 mb-20'>

               <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                  <span>Download (.json file)</span>
               </button>
            </div>
         </div>
      </div >
   )
}
