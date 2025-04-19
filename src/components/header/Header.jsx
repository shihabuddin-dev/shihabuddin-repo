import React from 'react';
import AnimatedStatusCircle from '../AnimatedStatusCircle/AnimatedStatusCircle';


const Header = () => {
    return (
        <div className='sm:w-7/12 container mx-auto mt-8 text-center px-2'>
            <div className='profile-image-wrapper'>
                <img className=' mx-auto w-42 rounded-full border-4 border-dotted border-gray-600 p-2 hover:grayscale-50 transition-all duration-500 ease-in-out hover:scale-102 hover:skew-0.5' src={"https://i.ibb.co.com/svJ5v3XH/shihab-img.jpg"} alt="profile picture" />
                <AnimatedStatusCircle
                    size={28}
                    color="#4CAF50"
                    duration={2000}
                />
            </div>
            <h1 className='text-3xl md:text-4xl font-black md:pt-4'>SHIHAB UDDIN</h1>
            <p className='text-xl md:text-2xl font-bold text-gray-500'>(shihabuddin-dev)</p>
            <p className='pt-4 text-lg'>This is Shihab Uddin, Trying to explore Programming Language, I always like to learn new things and have experience with new stuff </p>
            <hr className='border-2 border-gray-500 mt-6' />
        </div>
    );
};

export default Header;