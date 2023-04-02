import React, { useEffect, useState } from "react";
import Pricecard from "../Pricecard/Pricecard";

const Pricelist = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);
  return (
    <div>
      <h2 className="text-5xl bg-purple-500 text-center text-white p-5">
        Awesome affordable price
      </h2>
    <div className="grid grid-cols-3 gap-3 p-9">  {
        prices.map(price=> <Pricecard
         key={price.id}
         price={price}
         > </Pricecard> )
      }</div>
    </div>
  );
};

export default Pricelist;
