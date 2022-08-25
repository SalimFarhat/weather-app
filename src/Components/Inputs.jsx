import React, { useState } from 'react'
import {UilSearch, UilLocationPoint} from "@iconscout/react-unicons";

function Inputs({setQuery, units, setUnits}) {

    const [city, setCity] = useState("");

    
    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name;
        if (units !== selectedUnit) setUnits(selectedUnit);
};
    const handleSearchClick = () => {
        if(city !== '') {setQuery({q:city})};
    };
    const handleLocationClick = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                setQuery({lat, lon});
            })
        }
    }

    
  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row items-center justify-center w-3/4 space-x-4'>
            <input value={city} onChange={(e) => setCity(e.currentTarget.value)} type="text" placeholder="Search..." className='w-full p-2 text-xl font-light capitalize shadow-xl focus:outline-none'/>
            <UilSearch  size={25} className="text-black transition ease-out cursor-pointer hover:scale-125" onClick={handleSearchClick} />
            <UilLocationPoint size={25} className="text-black transition ease-out cursor-pointer hover:scale-125" onClick={handleLocationClick} />
        </div>

        <div className='flex flex-row items-center justify-center w-1/4'>
            <button name="metric" className='text-xl font-light text-black' onClick={handleUnitsChange} >C</button>
            <p className='mx-1 text-xl text-black'></p>
            <button name="imperial" className='text-xl font-light text-black' onClick={handleUnitsChange} >F</button>
        </div>
    </div>
  )
}

export default Inputs


// <div className='flex flex-row items-center justify-center w-3/4 space-x-4'>
// <input value={city} onChange={(e) => setCity(e.currentTarget.value)} type="text" placeholder="Search..." className='w-full p-2 text-xl font-light capitalize shadow-xl focus:outline-none'/>
// <UilSearch  size={25} className="text-black transition ease-out cursor-pointer hover:scale-125" onChange={handleSearchClick}/>
// <UilLocationPoint size={25} className="text-black transition ease-out cursor-pointer hover:scale-125" onChange={handleLocationClick}/>
// </div>

// <div className='flex flex-row items-center justify-center w-1/4'>
// <button name="metric" className='text-xl font-light text-black'>C</button>
// <p className='mx-1 text-xl text-black'></p>
// <button name="imperial" className='text-xl font-light text-black'>F</button>
// </div>