import React from 'react';
import banner1 from '../assets/banner1.png';

function Home() {
  return (
    <div className='bg-neutralsilver' id='home'>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex items-center'>
        <div className="carousel w-full relative">
          
          {/* Slide 1 */}
          <div id="slide1" className="carousel-item relative w-full flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div><img src={banner1} alt='Banner' className="w-full mx-auto" /></div>
            <div className='md:w-1/2 text-center md:text-left'>
              <h1 className='text-5xl font-semibold mb-4 text-neutralDgrey md:w-3/4 leading-snug'>
                Lesson and insights <br />
                <span className='text-brandPrimary leading-snug'>from 8 years</span>
              </h1>
              <p className='text-neutralDgrey text-base mb-8'>
                Where to grow your business as a photographer: site or social media?
              </p>
              <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDgrey transition-all duration-300 hover:-translate-y-2'>
                Register
              </button>
            </div>
            {/* Navigation for Slide 1 */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a> 
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>

          {/* Slide 2 */}
          <div id="slide2" className="carousel-item relative w-full flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div><img src={banner1} className="w-full mx-auto" alt="Banner" /></div>
            <div className='md:w-1/2 text-center md:text-left'>
              <h1 className='text-5xl font-semibold mb-4 text-neutralDgrey md:w-3/4 leading-snug'>
                Let's Learn and Earn <br />
                <span className='text-brandPrimary leading-snug'>in 4 months</span>
              </h1>
              <p className='text-neutralDgrey text-base mb-8'>
                Where to grow your business as a photographer: site or social media?
              </p>
              <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDgrey transition-all duration-300 hover:-translate-y-2'>
                Register
              </button>
            </div>
            {/* Navigation for Slide 2 */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a> 
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>

          {/* Slide 3 */}
          <div id="slide3" className="carousel-item relative w-full flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div><img src={banner1} className="w-full mx-auto" alt="Banner" /></div>
            <div className='md:w-1/2 text-center md:text-left'>
              <h1 className='text-5xl font-semibold mb-4 text-neutralDgrey md:w-3/4 leading-snug'>
                Lesson and insights <br />
                <span className='text-brandPrimary leading-snug'>from 8 years</span>
              </h1>
              <p className='text-neutralDgrey text-base mb-8'>
                Where to grow your business as a photographer: site or social media?
              </p>
              <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDgrey transition-all duration-300 hover:-translate-y-2'>
                Register
              </button>
            </div>
            {/* Navigation for Slide 3 */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a> 
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>

          {/* Slide 4 */}
          <div id="slide4" className="carousel-item relative w-full flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div><img src={banner1} className="w-full mx-auto" alt="Banner" /></div>
            <div className='md:w-1/2 text-center md:text-left'>
              <h1 className='text-5xl font-semibold mb-4 text-neutralDgrey md:w-3/4 leading-snug'>
                Lesson and insights <br />
                <span className='text-brandPrimary leading-snug'>from 8 years</span>
              </h1>
              <p className='text-neutralDgrey text-base mb-8'>
                Where to grow your business as a photographer: site or social media?
              </p>
              <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDgrey transition-all duration-300 hover:-translate-y-2'>
                Register
              </button>
            </div>
            {/* Navigation for Slide 4 */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a> 
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;