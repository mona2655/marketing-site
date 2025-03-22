import React from 'react'
import company1 from "../assets/vite.svg";
import rightArr from "../assets/Right.png";

function Testomonial() {
  return (
    <div id='testomonial' className='flex items-center  bg-neutralsilver px-6 md:px-14 py-10 max-w-screen-xl mx-auto mt-20 mb-20'>

         {/* Right Side - Empty Space */}
      <div className='md:w-1/3'></div>

        <div className='md:2/3 text-right'>
            <p className='md:w-4/5 text-sm text-neutralDgrey mb-6 ml-auto leading-7'>Maecenas dignissim justo eget nulla rutrum molestie. 
                Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper.
                 Proin eu enim metus. Vivamus sed libero ornare, tristique quam in,
                  gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit 
                  at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices,
                   quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium.
                    Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
                     Quisque vulputate odio neque, eget efficitur libero condimentum id.
                      Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                      <h2 className='text-brandPrimary text-xl font-semibold mb-2'>Tim Smith</h2>
                      <p className='text-sm text-neutralDgrey font-bold'>British Dragon Boat Racing Association</p>
                      <div>
                        <div className='flex items-center gap-4 justify-end mt-4'>
                            <img src={company1} alt="" />
                            <img src={company1} alt="" />
                            <img src={company1} alt="" />
                            <div className=' flex items-center gap-8'>
                                <a href='/' className='font-bold text-brandPrimary
                                 hover:text-neutral-700 flex items-center '>
                                Meet all customers <img src={rightArr} className='inline-block ml-2 ' /></a>
                            </div>
                        </div>


        
                      </div>
        </div>


</div>
    
        
  )
}

export default Testomonial