import React from 'react';
import Feature from '../Feature/Feature';

const Pricecard = ({price}) => {
    return (
        <div className="bg-green-500  rounded-md p-4 text-center flex flex-col">
            <h2 >
                <span className='text-5xl font-extrabold text-purple-500'>{price.price} </span>
                <span className='text-2xl text-white'>/month</span>
                </h2>
            <h1 className='text-2xl font-bold my-10'>{price.name}</h1>
            <p className=' text-blue-950 font-bold text-white'>Features :  </p>
        {
            price.features.map((feature,Idx )=> <Feature 
            key={Idx}
            feature={feature}
            ></Feature>)
        }

        <button className='w-full bg-purple-400 py-2 px-2 hover:bg-purple-300 text-white rounded  mt-auto'>Buy Now</button>
           
        </div>
    );
};

export default Pricecard;