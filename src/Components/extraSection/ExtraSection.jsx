import React from 'react';
import logo from './Best-Music-Podcasts-featured-image-1000.webp';
import logo3 from './DJ_Blog-banner_1280x478-1-1024x382.jpg'
import logo2 from './valentines-day-songs-1580753251.jpg'
import logo5 from './abstract-music-notes-design-music-background-use-vector-illustration_460848-3973.avif'
import logo6 from './depositphotos_5471823-stock-illustration-musical-notes-background.jpg'
import { FaAppStore, FaGooglePlay } from 'react-icons/fa';

const ExtraSection = () => {
    return (
        <div className="flex mx-auto w-[90%]">
            <div className="mx-auto">
                    <div className="">
                           <h1 className='text-green-900 text-2xl'>Music ALBUM</h1>
                            <hr  className='border-2'/>
                            <h1>WELL TACH TOU TO</h1>
                            <h1 className='text-3xl text-red-700'>MUSIC</h1>
                            <p>Music is generally defined as the art of arranging <br /> sound to create some combination <br /> of form, harmony, melody, rhythm or otherwise expressive content.</p>
                            <button className='btn my-5'>READ MORE</button>
                            <h1 className='text-green-700'>NEW ALBUM</h1>
                             <h2>Out NOW</h2>
                            <h1 className='btn mr-4 my-5'>Google PLAY <FaGooglePlay></FaGooglePlay></h1> 
                            <h2 className='btn'>APP Store <FaAppStore></FaAppStore></h2>
                    </div>
             </div>
                <div className="">
                    <img className='w-[500px]' src={logo6} alt="" />
                </div>
        </div>
    );
};

export default ExtraSection;