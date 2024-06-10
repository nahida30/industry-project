import React, { useEffect } from 'react';
import "./Slider.css";
import img1 from "/images/industry1.jpg"
import img2 from "/images/industry2.jpg"
import img3 from "/images/industry3.jpg"
import img4 from "/images/industry4.jpg"
import img5 from "/images/industry5.jpg"
import img6 from "/images/industry6.jpg"
import VideoShow from '../VideoShow';

const Slider = () => {
    useEffect(() => {
        const next = document.querySelector('.next');
        const prev = document.querySelector('.prev');
    
        const handleNextClick = () => {
          const items = document.querySelectorAll('.item');
          document.querySelector('.slide').appendChild(items[0]);
        };
    
        const handlePrevClick = () => {
          const items = document.querySelectorAll('.item');
          document.querySelector('.slide').prepend(items[items.length - 1]);
        };
    
        next.addEventListener('click', handleNextClick);
        prev.addEventListener('click', handlePrevClick);
    
        return () => {
          next.removeEventListener('click', handleNextClick);
          prev.removeEventListener('click', handlePrevClick);
        };
      }, []); 
    
    return (
        <div>
             <div className='hidden md: hidden lg:inline'>
        <div className="container">

          <div className="slide">
  
              
              <div className="item" style={{backgroundImage: `url(${img1})`}}> 
                  <div className="content">
                      <div className="name">Switzerland</div>
                      <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                      <button className="button w-26 h-14 bg-orange-700">See More</button>
                  </div>
              </div>
              <div className="item" style={{backgroundImage: `url(${img2})`}}>
                  <div className="content">
                      <div className="name">Finland</div>
                      <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                      <button className="button w-26 h-14 bg-orange-700">See More</button>
                  </div>
              </div>
              <div className="item" style={{backgroundImage: `url(${img3})`}}>
                  <div className="content">
                      <div className="name">Iceland</div>
                      <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                      <button className="button w-26 h-14 bg-orange-700">See More</button>
                  </div>
              </div>
              <div className="item" style={{backgroundImage: `url(${img4})`}}>
                  <div className="content">
                      <div className="name">Australia</div>
                      <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                      <button className="button w-26 h-14 bg-orange-700">See More</button>
                  </div>
              </div>
              <div className="item" style={{backgroundImage: `url(${img5})`}}>
                  <div className="content">
                      <div className="name">Netherland</div>
                      <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                      <button className="button w-26 h-14 bg-orange-700">See More</button>
                  </div>
              </div>
              <div className="item" style={{backgroundImage: `url(${img6})`}}>
                  <div className="content">
                      <div className="name">Ireland</div>
                      <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
                      <button className="button w-26 h-14 bg-orange-700">See More</button>
                  </div>
              </div>
  
          </div>
  
          <div className="button1">
              <button className="prev"><i className="fa-solid fa-arrow-left">←</i></button>
              <button className="next"><i className="fa-solid fa-arrow-right">→</i></button>
          </div>
  
      </div>
      </div>
      <VideoShow></VideoShow>
        </div>
    );
};

export default Slider;