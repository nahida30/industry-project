import React from 'react';
import Count from './Count';

const VideoShow = () => {
    return (
        <div>
             <div className="lg:mt-[100vh] mb-[16.5rem]">
       <img src="/images/industry.jpeg" alt="" className="lg:w-full lg:h-[70vh]" />
       <img src="https://i.ibb.co/LhkCW7g/play-Button-removebg-preview.png" alt="" className="mt-[-31%] md:mt-[-31%] lg:mt-[-20%] w-16 h-16 place-content-center mx-auto cursor-pointer" />
    </div>
    <Count></Count>
        </div>
        
    );
};

export default VideoShow;