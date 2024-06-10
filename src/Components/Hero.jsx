import React from 'react';
import AboutIndustry from './AboutIndustry';
// import "./Hero.css"

const Hero = () => {
    return (
        <div>
          
          <div className="carousel w-full mt-3 lg:my-5 rounded-lg">
           <img className='w-full h-[30vh] md:h-[50vh] lg:h-[80vh]' src="/images/banner.gif" alt="" />
          </div>
          <div className="collapse hidden lg:flex lg:justify-between lg:bg-orange-800 lg:shadow-lg lg:shadow-slate-400 lg:-mt-20 lg:w-[1300px] lg:h-[150px] lg:mx-auto">
            <div className=" w-[50%] lg:my-3 place-content-center text-white">
            <p className="lg:mx-10 lg:-mt-2 font-medium lg:text-2xl">Global solutions meeting all needs.</p>
            <p className="lg:mx-10 lg:-mt-2 font-medium lg:text-2xl">+971 551 579 261</p>
            </div>

            <div className='border-r border-white ... h-[100px] mt-6'>

            </div>
            <div className="w-[50%] lg:my-3 place-content-center text-white">
              
              <p className="lg:mx-8 lg:-mt-2 font-medium lg:text-2xl">“Industrie has consistently embraced innovation to provide a superior level of excellence”</p>
              <p className="lg:mx-8 lg:-mt-2 font-medium lg:text-sm lg:mt-2">Donal Lue / CEO & Founder</p>
            </div>
            
            
            
          </div>

     <AboutIndustry></AboutIndustry>
            
        </div>
        
    );
};

export default Hero;