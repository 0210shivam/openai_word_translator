import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react';
import { storage } from '../setups/firebase_config';
import { openai } from '../setups/openai';
import { saveAs } from 'file-saver';


export default function UseCases() {

   const [data, setData] = useState("");
   const [filename, setfilename] = useState(null);
   const [mappings, setmappings] = useState("");
   const [loading, setLoading] = useState(false);
   const [ConfigurationFunction, setConfigurationFunction] = useState(false);

   const [selectedOption, setSelectedOption] = useState('');

   const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
   };

   let maths = Math.random();

   const setting_file = async () => {
      return `file-${maths}`
   }


   let inputArray;
   let outputArray;
   let mapping = {};

   const savingJsonObject = () => {

      for (let i = 0; i < inputArray.length; i++) {
         mapping[inputArray[i].trim()] = outputArray[i].trim();
      }

      return JSON.stringify(mapping);
   }


   async function callApi(e) {

      e.preventDefault();
      setConfigurationFunction(false);
      setLoading(true);
      const response = await openai.createCompletion({
         model: "text-davinci-003",
         prompt: `translate and write : "${data}" into "${selectedOption}" language fonts`,
         max_tokens: 2040,
         temperature: 0.7,
      });

      inputArray = data.split(",");

      const final_output = response.data.choices[0].text
      outputArray = final_output.split(",");

      const final_data = savingJsonObject();

      setmappings(final_data);

      const file = new Blob([final_data], { type: 'application/json' });


      const file_name = await setting_file()
      setfilename(file_name);

      const fileRef = ref(storage, file_name);
      uploadBytes(fileRef, file);

      //Function to Show download button Here: 
      setConfigurationFunction(true);
      setLoading(false);
   }


   const downloadJsonFile = async () => {
      try {
         // Get the download URL for the JSON file
         const url = await getDownloadURL(ref(storage, filename));

         // Fetch the JSON file
         const response = await fetch(url);
         const json = await response.json();

         // Convert JSON object to string
         const jsonString = JSON.stringify(json);

         // Create Blob object from the JSON string
         const blob = new Blob([jsonString], { type: "application/json" });

         // Save the Blob object as a file using FileSaver
         saveAs(blob, "Translated-words.json");

      } catch (error) {
         console.error(error);
      }
   };


   return (
      <div>
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

                  <div className="relative inline-flex items-center justify-center p-0.5 mb-4 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

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

                  <div className="relative inline-flex items-center justify-center p-0.5 mb-4 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

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

                  <div className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

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

                  <div className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

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

                  <div className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

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

                  <div className="relative inline-flex items-center justify-center p-0.5 mb-4 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

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

                  <div className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

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

                  <div className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

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

                  <div className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

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

                  <div className="relative inline-flex items-center justify-center p-0.5 mb-4 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

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

                  <div className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

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

                  <div className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

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

                  <div className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

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

                  <div className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

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

                  <div className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">

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

               {
                  (loading === false) ? <button onClick={callApi} className="mt-10 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                     Submit
                  </button> : <button onClick={callApi} className="mt-10 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                     Loading...
                  </button>
               }



            </div>

            {
               (ConfigurationFunction === true) ?
                  <div>
                     <div className='m-20'>
                        <div className='p-6 text-gray-500 font-medium border border-solid'>
                           Response :
                           {mappings}
                        </div>
                     </div>


                     <div className='text-center px-96 mt-20 mb-20'>

                        <button onClick={downloadJsonFile} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                           <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                           <span>Download (.json file)</span>
                        </button>
                     </div>
                  </div> : null
            }

         </div>

      </div >
   )
}
