import React from 'react';
import banerImg from "../../assets/baner.png"
const Baner = () => {
    return (
        <div className='flex flex-col md:flex-row justify-around gap-10 md:gap-20 items-center max-w-7xl p-8 mx-auto bg-[#F3F3F3] rounded-lg mt-2'>
            <div>
                <h1 className='text-5xl font-bold leading-15'>Books to freshen up <br /> your bookshelf</h1>
                <button className='mt-6 btn bg-primary-color text-white text-lg rounded-lg py-6 px-8'>View The List</button>
            </div>
            <div>
                <img src={banerImg} alt="" />
            </div>
        </div>
    );
};

export default Baner;