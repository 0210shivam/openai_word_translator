import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {

   return (
      <div className=''>
         <div className='font-semibold text-8xl text-center mt-16'>

            Welcome to {' '}
            <span style={{ color: 'red'}}>
               {/* Style will be inherited from the parent element */}
               <Typewriter
                  words={['Word Finder', 'शब्द खोजक', 'ਸ਼ਬਦ ਲੱਭਣਵਾਲਾ', 'শব্দ খোঁজক']}
                  loop={false}
                  cursor
                  cursorStyle='|'
                  typeSpeed={90}
                  deleteSpeed={70}
                  delaySpeed={1000}
               />
            </span>

         </div>
         <div className='font-medium text-4xl text-center mt-8'>
            Easily Convert & Easily Export
         </div>
     <div className='mt-8  text-2xl text-center'> This tool is useful for translate words into another language Effeciently 😎
         </div>
      </div>
   )
}


// TODO : Word Stratch 