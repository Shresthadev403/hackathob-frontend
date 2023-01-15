import React, { useState } from "react";
import { data } from "./childPages/data1";
import { motion, AnimatePresence } from "framer-motion";
import {FaShoppingCart} from 'react-icons/fa'

const Food = () => {
  const [foods, setFoods] = useState(data);
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
        setCount(count - 1);
      }
  
  };

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1240px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center dark:text-white">
        OUR FAVOURITE MENUS
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700 dark:text-white">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1 dark:text-white "
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1 dark:text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1 dark:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1 dark:text-white"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1 dark:text-white"
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700 dark:text-white">
            Filter Price
          </p>
          <div className="flex justify-between flex-wrap max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("1RS")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1 dark:text-white"
            >
              1RS
            </button>
            <button
              onClick={() => filterPrice("100RS")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1 dark:text-white"
            >
              10RS
            </button>
            <button
              onClick={() => filterPrice("1000RS")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1 dark:text-white"
            >
              100RS
            </button>
            <button
              onClick={() => filterPrice("1200RS")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1 dark:text-white"
            >
              1000RS
            </button>
          </div>
        </div>
      </div>

      {/* diplay food */}
      <AnimatePresence>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {foods.map((item, index) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              key={item.id}
              className="border shadow-lg rounded-lg hover:scale-105 duration-500 cursor-pointer"
            >
              <img
                className="w-full h-[150px] md:h-[200px] object-cover rounded-t-lg"
                src={item.image}
                alt={item.name}
              />
              <div className="flex justify-between px-2 py-4">
                <p>{item.name}</p>
                <p>
                  <span className="bg-orange-500 text-white p-1 rounded-md">
                    {item.price}
                  </span>

                  <div className="flex m-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full m-0"
                      onClick={handleDecrement}
                    >
                      -
                    </button>
                    <div className="text-xl font-bold px-2 py-2">{count}</div>
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full m-0"
                      onClick={handleIncrement}
                    >
                      +
                    </button>
                    <FaShoppingCart size={40} className='text-black dark:text-white '/>
                  </div>
                  
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Food;
