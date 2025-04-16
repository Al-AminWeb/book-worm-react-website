import React from 'react';
import bannerImg from '../../assets/pngwing 1.png'
const Banner = () => {
    return (
        <div className="rounded-[24px] bg-[rgba(19,19,19,0.05)] flex  justify-evenly items-center">
            <div>
                <h1 className="w-[526px] h-[168px] text-left text-[rgb(19,19,19)] font-playfair-display text-5xl font-bold ">Books to freshen up your bookshelf</h1>
                <button className="px-[28px] py-[21px] rounded-md bg-[rgb(35,190,10)] text-center text-white font-work-sans text-xl font-bold" >View The List</button>
            </div>
            <div>
                <img src={bannerImg} alt=""/>
            </div>
            
        </div>
    );
};

export default Banner;
