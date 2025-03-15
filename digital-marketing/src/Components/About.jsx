import React from 'react'
import  loginPic from '../assets/rafiki.png';
import memberPic from '../assets/Member.png';
import groupPic from '../assets/Group 2.png';
import vectorPic from '../assets/Vector.png';
import paymentPic from '../assets/payment.png';

function About() {
  return (
    <div  id='about'>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
        <div >
            <img src={loginPic} alt="" />
        </div>
        <div className='md:w-3/5 mx-auto'>
            <h2 className='text-4xl font-semibold text-neutralDgrey mb-4 md:w-4/5'>The unseen of spending three years at Pixelgrade</h2>
            <p className='md:w-3/4 text-sm text-neutralDgrey mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDgrey transition-all duration-300 hover:-translate-y-2'>Learn More</button>
        </div>
        </div>
        </div>

        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralsilver py-16'>
           <div className="flex flex-col md:flex-row justify-between items-center gap-8 ">
           <div  className="md:w-1/2">
            <h1 className='text-4xl text-neutralDgrey font-semibold mb-4 md:w-2/3'>Helping a local 
               <br/> <span className='text-brandPrimary'>business reinvent itself</span></h1>
                <p>We reached here with our hard work and dedication</p>
            </div>
                {/* cards stats*/}
            <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:w-2/3 mx-auto">
               <div className='flex items-center gap-4'>
               <img src={memberPic} alt="" />
               <div>
                <h4 className='text-2xl text-neutralDgrey font-semibold'>2,245,341</h4>
                <p>Members</p>
               </div>
               </div>
             
               
               <div className='flex items-center gap-4'>
               <img src={groupPic} alt=''/>
               <div>
                <h4 className='text-2xl text-neutralDgrey font-semibold'>46,328</h4>
                <p>Clubs</p>
               </div>
               </div>
              
               <div className='flex items-center gap-4'>
               <img src={vectorPic} alt="" />
               <div>
                <h4 className='text-2xl text-neutralDgrey font-semibold'>828,867</h4>
                <p>Event Bookings</p>
               </div>
                 </div>

              
               <div className='flex items-center gap-4'>
               <img src={paymentPic} alt="" />
               <div>
                <h4 className='text-2xl text-neutralDgrey font-semibold'>1,926,4362</h4>
                <p>Payments</p>
               </div>
               </div>
             
               

                 
               </div>

             </div>
                 
               </div>

             </div>
             </div>
           
        

    
  )
}

export default About