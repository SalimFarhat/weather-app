import React from 'react'
import { iconUrlFromCode } from "../services/weatherService";

function Forecast({title, items}) {
  return (
    <div>
        <div className='flex items-center justify-start mt-6'>
            <p className='font-medium text-black uppercase'>
                {title}
            </p>

        </div>
        <hr className='my-2'/>
        <div className='flex flex-row items-start justify-between text-black'>
            
            {items.map((item, index)=> (    
            <div key={index} className='flex flex-col items-center justify-center'>
                <p className='text-sm font-light'>
                    {item.title}
                    </p>
                    <img src={iconUrlFromCode(item.icon)} alt=""className='w-12 my-1'/>
                    <p className='font-medium'>{`${item.temp.toFixed()}degrees`}</p>
                    </div>))}
                    
            </div>

    </div>
    )
}

export default Forecast