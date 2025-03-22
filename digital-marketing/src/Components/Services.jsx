import React from 'react';


function Services() {

   


    const services = [
        { id: 1, title: "Search Engine Optimization (SEO)", description: "Improve your website's visibility on search engines with our expert SEO strategies." },
        { id: 2, title: "Pay-Per-Click (PPC) Advertising", description: "Maximize your ROI with targeted PPC campaigns on Google Ads and social media." },
        { id: 3, title: "Social Media Marketing", description: "Engage your audience and grow your brand through strategic social media campaigns." },
        { id: 4, title: "Website Designing (WordPress)", description: "Get a stunning and user-friendly website designed in WordPress tailored to your business needs." },
        { id: 5, title: "Web Development (React & JavaScript)", description: "Build modern, high-performance web applications using React.js and JavaScript." },
        { id: 6, title: "Custom Web Solutions", description: "Tailor-made web solutions for businesses that need custom development beyond standard platforms." }
    ];

    return (
        <div className='md:px-14 px-4 py-6 max-w-screen-2xl mx-auto mt-16 bg-gray-50' id='service'>
            <div className='text-center my-8'>
                <h1 className='text-4xl text-neutralDgrey font-semibold mb-2'>Our Services</h1>
                <p className='text-neutralDgrey'>We provide expert digital solutions to help your business grow.</p>
            </div>

            {/* Service Cards */}
            <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
                {services.map(service => (
                    <div key={service.id} className='px-4 py-6 text-center md:w-[300px] mx-auto rounded-md shadow-lg hover:-translate-y-2 transition-all duration-300'>
                        <h4 className='text-2xl font-bold text-neutralDgrey mb-2'>{service.title}</h4>
                        <p className='text-sm text-neutralDgrey'>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
