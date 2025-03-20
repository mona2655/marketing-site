import React from 'react'
import rightArr from "../assets/Right.png";
import blogImg1 from "../assets/image_18.png";
import blogImg2 from "../assets/image_19.png";
import blogImg3 from "../assets/image_20.png";



function Blog() {

    const blogs = [
        {id: 1 ,
             title:"Creating Streamlined Safeguarding Processes with OneRen",
             image:blogImg1},
        {id: 2 , 
            title:"What are your safeguarding responsibilities and how can you manage them?",
            image:blogImg2},
        {id: 3 ,
             title:"Revamping the Membership Model with Triathlon Australia",
             image:blogImg3}
    ] 
  return (

    <div id='blog' className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12'>
        <div className='text-center md:w-1/2 mx-auto' >
            <h1 className='text-4xl text-neutralDgrey  font-semibold mb-4 '>Caring is the new marketing</h1>
            <p className='text-neutralDgrey text-sm mb-8 md:w-3/4 mx-auto'>The Nexcent blog is the best place to read about
                 the latest membership insights, trends and more. 
                 See who's joining the community, read about how our
                  community are increasing their membership income
                   and lot's more.​</p>
        </div>
        {/* all blogs*/}
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
            {
                blogs.map(blog => <div key={blog.id} className='mx-auto relative mb-12  cursor-pointer' >
                <img src={blog.image} alt="image" className='hover:scale-95 transition-all duration-300' />
                <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto
                absolute left-0 right-0 -bottom-12'>
                    <h3 className='mb-3 text-neutralDgrey font-semibold'>{blog.title}</h3>
                
                <div className=' flex items-center justify-center gap-8'>
                                                <a href='/' className='font-bold text-brandPrimary
                                                 hover:text-neutral-700 '>
                                                ReadMore <img src={rightArr} className='inline-block ml-2 ' /></a>
                                            </div>
                                            </div>
                    </div>)
            }
        </div>
    
    </div>
  )
}

export default Blog