import React from 'react';
import {MdChevronLeft,MdChevronRight} from 'react-icons/md';
import './CastCard.css';

const CastCard = ({fetchData}) => {
    const sliceData = fetchData.slice(0, 3);
    console.log(sliceData, "slicedata");
    // console.log("fetchData -", fetchData);
    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollRight = slider.scrollRight + 500;
    }
    return (
        <>
        <div className='relative flex items-center'>
            <MdChevronLeft className='fill-white opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={30}/>
            <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
                <div className='grid grid-cols-3'>
                            
            {
                sliceData.map((e) => (
                      
                    <div key={e.id} className='card'>
                         
                            <img src={e.image} alt="data"  className='w-30 h-30'/>
                            <div className='content mb-0'>
                                <h2 className='text-white text-[20px] font-taravels py-2'>{e.name}</h2>
                            </div>
                         
                        </div>
                      
                                   
                ))
            }
            {/* grid close */}
               </div>
            </div>
       
            <MdChevronRight  className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={30}/>
             
        </div> 
        </>
    );
};

export default CastCard;