import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {

   return (
      <div className=''>
         <div className='font-semibold text-8xl text-center mt-16'>

            <div style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
               Welcome to {' '}
               <span style={{ color: 'red', fontWeight: 'bold' }}>
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                     words={['Eat', 'Sleep', 'Code', 'Repeat!']}
                     loop={5}
                     cursor
                     cursorStyle='_'
                     typeSpeed={70}
                     deleteSpeed={50}
                     delaySpeed={1000}
                  />
               </span>
            </div>
         </div>
         <div className='font-medium text-4xl text-center mt-8'>
            Easily Convert & Easily Export
         </div>
      </div>
   )
}


// TODO : Word Stratch 