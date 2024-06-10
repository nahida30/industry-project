import React from 'react';
import Slider from './Slider/Slider';

const AboutIndustry = () => {
    return (
        <div>
             <div className="">
        <div className="hero  lg:min-h-screen lg:w-full ">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
              <img src="/images/work1.png" className="w-[45%]" />
              <div>
                <h1 className="text-2xl font-bold text-orange-800"> ABOUT INDUSTRY</h1>
                <p className="py-2 lg:text-5xl font-semibold">We work for you <span className="text-orange-800">since 1989</span>. Industrial around the world</p>
                <p className="text-xl text-gray-500 font-semibold w-96 lg: w-full">Welcome to Industrie, a leading industry innovator with a rich history of excellence.</p>

                <div className="join join-horizontal mt-5">
                  <button className="btn join-item w-36 text-lg border-t-4 border-orange-800 ...  text-orange-800">Our History</button>
                  <button className="btn join-item w-36 text-lg">Our Mission</button>
                  <button className="btn join-item w-36 text-lg">Our Vision</button>
                </div>

                <div className="mt-5">
                  <p className="text-xl text-gray-500">Welcome to Industrie, a leading industry innovator with a rich history of excellence with a passion make also for precision we have been empowering industries and driving progress for over 30 years.</p>
                </div>

                <div className="grid grid-cols-3 gap-5 mt-5">
                  <button className="btn h-16 text-xl bg-orange-800 text-white hover:bg-orange-700 hover:border-2 hover:border-orange-700">Explore More →</button>
                  <img src="/images/user.png" alt="" className="w-16 h-16 rounded-full" />
                  <img src="/images/signature.png" alt="" className="w-32 h-24 ml-[-9rem]" />
                </div>
              
              </div>
              
            </div>
          </div>
      </div>

      <Slider></Slider>
        </div>
    );
};

export default AboutIndustry;