import React from 'react';

const Pricecard = ({price}) => {
    return (
        <div>
            <h2 >
                <span className='text-5xl font-extrabold text-purple-500'>{price.price} </span>
                <span className='text-2xl'>/month</span>
                </h2>
            <h1 className='text-2xl font-bold '>{price.name}</h1>
        </div>
    );
};

export default Pricecard;