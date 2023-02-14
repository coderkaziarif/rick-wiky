import React, { useState, useEffect } from "react";
import logo from "../../assets/Logo.png";
import bg from '../../assets/Home page/Background  Elements/Background.png';
import Hero from "../Hero/Hero";
import CastCard from "../CastCard/CastCard";


import Episodes from "../Episodes/Episodes";

const Header = () => {
const [fetchData, setFetchData] = useState([]);

 

  const getData = async () => {
    let data = await fetch("https://rickandmortyapi.com/api/character");
    data = await data.json();
    setFetchData(data.results);
    // console.log("results :",data.results,);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>

    <div className="w-full">
      
      <div className="bg-gradient-to-tr from-black to-gray-800 w-full h-screen relative backdrop-brightness-50 mix-blend-overlay  ">
      <img src={bg} alt="bgimg" className=" h-full absolute "/>
        <div className="w-24 md:w-60 mx-auto pt-8">
          <img src={logo} alt="Logo" className="w-fit"/>
        </div>
        <Hero />
        {/* //! Meet the Cast */}
        <section className=" mt-24 mx-1 lg:mx-40">
          <div className=" " >
                
            <div className="flex justify-between items-center text-white font-taravels">
              <h2 className="text-2xl">Meet The Cast</h2>
              <div>
                <button className="inline-block px-6 py-2 border-2 border-[#9DFE00] rounded-md focus:outline-none ] transition duration-150 ease-in-out cursor-pointer">View All</button>
              </div>
            </div>
          </div>
          <CastCard fetchData={fetchData}/>
         
        </section>
        <Episodes/>
      </div>
    </div>
    </>
  );
};

export default Header;
