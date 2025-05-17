import React from 'react';

const Footer = () => {
    return (
        <div className='container lg:w-8/12 max-w-6xl mx-auto text-center mt-6 px-2 md:px-0'>
            <div className='flex justify-between flex-col sm:flex-row items-center'>
                <div className='flex gap-4'>
                    <h2>Thanks</h2>
                    <h2>شكرًا</h2>
                    <h2>ধন্যবাদ</h2>
                </div>
                <h3>from <span className='text-lg font-bold'>Shihab Uddin</span></h3>
            </div>

        </div>
    );
};

export default Footer;