import React from 'react';
import productPic from '../assets/pana.png';

function Product() {
  return (
    <div id='product' className='flex flex-col md:flex-row items-center justify-between px-6 md:px-14 max-w-screen-xl mx-auto my-10 gap-12'>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img src={productPic} alt="Product" className="w-full max-w-md" />
      </div>

      {/* Text Section */}
      <div className='md:w-1/2'>
        <h1 className='text-neutralDgrey font-semibold text-4xl mb-4'>
          How To Design Your Site Footer Like We Did
        </h1>
        <p className="text-sm text-neutralDgrey mb-4">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, 
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna.
          Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst.
          Vivamus vehicula leo dui, at porta nisi facilisis finibus.
        </p>
        <button className='bg-brandPrimary text-white px-6 py-2 rounded mt-2'>
          Learn More
        </button>
      </div>

    </div>
  );
}

export default Product;
