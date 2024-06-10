import React from 'react';
import img1 from "/images/industry1.jpg"
import img2 from "/images/industry2.jpg"
import img3 from "/images/industry3.jpg"
import img4 from "/images/industry4.jpg"
import img5 from "/images/industry5.jpg"
import img6 from "/images/industry6.jpg"
import TimeLine from '../TimeLine/TimeLine';
import Footer from '../Footer/Footer';


const ProjectSlider = () => {
    
    return (
      <div>
        <h1 className='text-4xl mx-28 text-orange-800 font-bold mt-16 mb-5'>Recent Works</h1>
        <div className="card card-compact ">
        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class=" object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl font-bold text-white">Beauty</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>
       
       
 
</div>
          
{/* <TimeLine></TimeLine> */}
<Footer></Footer>
      </div>
            
       
    );
};

export default ProjectSlider;