import { useEffect, useState, useRef } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { cn } from "../utils/cn";
import plant3 from '../assets/plant3.png'; // Importing only plant3

const items = [
  { id: 1, title: 'Spider Plant', category: 'Outdoor', price: '25€', image: plant3 },
  { id: 2, title: 'Spider Plant', category: 'Outdoor', price: '25€', image: plant3 },
  { id: 3, title: 'Spider Plant', category: 'Outdoor', price: '25€', image: plant3 },
  { id: 4, title: 'Spider Plant', category: 'Outdoor', price: '25€', image: plant3 },
  { id: 5, title: 'Spider Plant', category: 'Outdoor', price: '25€', image: plant3 },
  { id: 6, title: 'Spider Plant', category: 'Outdoor', price: '25€', image: plant3 },
];

const MovingCards = () => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      setStart(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-7xl overflow-hidden mx-auto',
        'md:px-14 sm:px-10'
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
          start && 'animate-scroll-slow',
          'hover:[animation-play-state:paused]' // Pause animation on hover
        )}
      >
        {items.map((item) => (
          <li
            key={item.id}
            className='w-[350px] max-w-full relative rounded-2xl flex-shrink-0 px-8 py-6 md:w-[450px]'
          >
            <div className="w-full h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-t-2xl w-full h-full object-contain"
              />
            </div>
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-400">{item.category}</p>
              <p className="text-gray-800 font-bold">{item.price}</p>
              <button className="mt-4 flex items-center justify-center bg-teal-900 text-white px-4 py-2 rounded-md">
                <FaShoppingCart />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovingCards;