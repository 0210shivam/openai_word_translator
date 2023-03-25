import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react';
import { storage } from '../setups/firebase_config';
import { openai } from '../setups/openai';
import { saveAs } from 'file-saver';


export default function UseCases() {

   const [data, setData] = useState("");
   const [res, setRes] = useState("");
   const [lang, setLang] = useState("");
   const [filename, setfilename] = useState(null);
   const [ConfigurationFunction, setConfigurationFunction] = useState(false);

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
      const response = await openai.createCompletion({
         model: "text-davinci-003",
         prompt: `translate and write : "${data}" into "${lang}" language fonts`,
         max_tokens: 2040,
         temperature: 0.7,
      });

      inputArray = data.split(",");

      const final_output = response.data.choices[0].text
      setRes(final_output);
      outputArray = final_output.split(",");

      const final_data = savingJsonObject();

      const file = new Blob([final_data], { type: 'application/json' });


      const file_name = await setting_file()
      setfilename(file_name);

      const fileRef = ref(storage, file_name);
      uploadBytes(fileRef, file);

      //Function to Show download button Here: 
      setConfigurationFunction(true);
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
            {res}
         </div>

         <div>
            {
               (ConfigurationFunction === true) ?
                  <button className='rounded border border-solid m-5' onClick={downloadJsonFile}>
                     Download JSON File
                  </button> : null
            }

         </div>

         <textarea rows='2'
            value={data}
            onChange={(e) => setData(e.target.value)} placeholder='Ask Something' id='InputChat' className='p-3 w-20 md:w-[820px] border border-solid'>
         </textarea>
         <textarea rows='2'
            value={lang}
            onChange={(e) => setLang(e.target.value)} placeholder='Ask Something' id='InputChat' className='p-3 w-20 md:w-[820px] border border-solid'>
         </textarea>
         <button onClick={callApi} id='SubmitChat' className='p-2 border border-solid rounded-lg'>
            Submit
         </button>
      </div >
   )
}
