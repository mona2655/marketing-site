import React from 'react'
import vite from "../assets/vite.svg"
import Membership from "../assets/Membership.png"
import National from "../assets/National.png";
import Club from "../assets/Club.png";

function Services() {
    const services =[
        {id: 1, title: "Membership Organisations",descroption: "Our membership management software provides full automation of membership renewals and payments", 
            Image:Membership,},
        {id: 2, title: "National Associations",
             descroption:"Our membership management software provides full automation of membership renewals and payments",
             Image:National,},
        {id: 3, title: "Clubs And Groups",
             descroption:"Our membership management software provides full automation of membership renewals and payments",
             Image:Club,}
    ]
  return (
    <div className='md:px-14 px-4 py-6 max-w-screen-2xl mx-auto' id='service'>
        <div className='text-center my-8'>
            <h1 className='text-4xl text-neutralDgrey font-semibold mb-2'>Our Clients</h1>
            <p className='text-neutralDgrey'>We have been working with some Fortune 500+ clients</p>

            {/* company logo*/}
            <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
            <img src={vite} alt="logo" />
            <img src={vite} alt="logo" />
            <img src={vite} alt="logo" />
            <img src={vite} alt="logo" />
            <img src={vite} alt="logo" />
            </div>
            {/* Service card*/}
            <div className='mt-20 md:w-1/2 mx-auto text-center '>
                <h1 className=' text-4xl text-neutralDgrey font-semibold mb-3'>Manage your entire community 
                in a single system</h1>
                <p className='text-neutralDgrey'>Who is Nextcent suitable for?</p>

            </div>
             {/* Cards*/}
             <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto  gap-12'>
                    {
                        services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px]
                        mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4
                        hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                            <div>
                                <div className='bg-[#E8FSE9] h-14 mb-4 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'><img src={service.Image}
                                 alt='image' className='ml-5'/></div>
                                <h4 className='text-2xl font-bold text-neutralDgrey mb-2 px-2'>{service.title}</h4>
                                <p className='text-sm text-neutralDgrey'>{service.descroption}</p>
                            </div>

                        </div>)
                    }    
                        </div>
        </div>
        </div>
  )
}

export default Services
