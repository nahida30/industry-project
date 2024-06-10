import React from 'react';
import ProjectSlider from './ProjectSlider/ProjectSlider';

const Count = () => {
    return (
        <div>
            <div className="w-[100%] h-[30vh] bg-base-200 grid grid-cols-1 mt-[-153px] md:grid-cols-2 md:mt-10 lg:grid-cols-4  p-10">
      <div className="w-[90%] h-[100%] ">
        <h1 className="text-9xl font-bold text-center text-transparent" style={{ WebkitTextStroke: '2px #ffa500', MozTextStroke: '2px orange', textStroke: '2px orange' }}>50+</h1>
      

        <hr className="w-[60%] place-content-center mx-auto" style={{ borderColor: 'black' }} />

        <p className="text-center text-xl mt-2 text-[#ffa500]">Drilling Fields</p>

      </div>
       
      <div className="w-[90%] h-[100%] ">
        <h1 className="text-9xl font-bold text-center text-transparent" style={{ WebkitTextStroke: '2px #ffa500', MozTextStroke: '2px orange', textStroke: '2px orange' }}>49%</h1>

        <hr className="w-[60%] place-content-center mx-auto" style={{ borderColor: 'black' }} />

        <p className="text-center text-xl mt-2 text-[#ffa500]">Crane Equipment</p>

      </div>  <div className="w-[90%] h-[100%] ">
        <h1 className="text-9xl font-bold text-center text-transparent"style={{ WebkitTextStroke: '2px #ffa500', MozTextStroke: '2px orange', textStroke: '2px orange' }}>20m</h1>

        <hr className="w-[60%] place-content-center mx-auto" style={{ borderColor: 'black' }} />

        <p className="text-center text-xl mt-2 text-[#ffa500]">Metal Factory</p>

      </div>

      <div className="w-[90%] h-[100%] ">
        <h1 className="text-9xl font-bold text-center text-transparent" style={{ WebkitTextStroke: '2px #ffa500', MozTextStroke: '2px orange', textStroke: '2px orange' }}>25k</h1>

        <hr className="w-[60%] place-content-center mx-auto" style={{ borderColor: 'black' }} />

        <p className="text-center text-xl mt-2 text-[#ffa500]">Special Machinery</p>

      </div> 
     
      
      

    </div>

    <ProjectSlider></ProjectSlider>
        </div>
    );
};

export default Count;