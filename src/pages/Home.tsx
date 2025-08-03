import React from 'react';
import { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const [products, setProducts] = useState([]);
  const currentTheme = useSelector((state: any) => state.theme.currentTheme);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const cardBg = useMemo(() => {
    return currentTheme === 'theme2' ? 'bg-gray-800 text-white' : 'bg-white text-black';
  }, [currentTheme]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((p: any) => (
        <div
          key={p.id}
          className={`border p-4 rounded shadow ${cardBg} transition-colors duration-300`}
        >
          <h3 className="font-bold text-lg mb-2">{p.title}</h3>
          <img src={p.image} alt={p.title} className="h-32 object-contain mx-auto" />
          <p className="text-sm mt-2">${p.price}</p>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Home);
