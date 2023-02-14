import React,{ useState, useEffect } from "react";
import '../CastCard/CastCard';
import sprial from '../../assets/Home page/Background  Elements/Spiral.png';

const Episodes = () => {
  const [fetchData, setFetchData] = useState([]);
  const sliceData = fetchData.slice(0, 6);

 console.log("Episodes:-",fetchData);

  const getData = async () => {
    let data = await fetch("https://rickandmortyapi.com/api/episode");
    data = await data.json();
    setFetchData(data.results);
    console.log("Episodes :-",data.results,);
  };

  useEffect(() => {
    getData();
  }, []);
  
  return (
    <div className="bg-gradient-to-tr from-black to-gray-800 w-full h-screen relative backdrop-brightness-50 mix-blend-overlay  ">

    <img src={sprial} alt="sprial" className="absolute "/>
          
                
            <div className=" mb-5 text-white font-taravels">
              <h2 className="text-2xl">Episodes</h2>   
          </div>
    
         
       
          <div className='grid grid-cols-3'>
            

   
       {
          sliceData.map((e) => (

                      
                    <div key={e.id} className='episode'>
                         
                            <div className='contenttext-white text-lg font-taravels py-2 mb-4'>
                                <h2 className=''>{e.episode}</h2>
                                <h2 className='text-white text-lg font-taravels py-2'>{e.name}</h2>
                            </div>
                         
                        </div>
                                   
                ))
       } 

</div>
    </div>
  );
};

export default Episodes;
