import React, { useState } from 'react'
import './App.css'

import products from './product.tsx';

export default function App() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("none");

  const filtered = products
    .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-orange-500 mb-6">
        SuperFakeStore
      </h1>

      <div className="bg-orange-400 p-6 rounded-xl flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
        <input
          type="text"
          placeholder="Search by title"
          className="px-4 py-2 rounded-md w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="px-4 py-2 rounded-md"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="none">Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>

        <div className="flex gap-2 flex-wrap justify-center">
          {["electronics", "jewelery", "men's clothing", "women's clothing"].map(
            (cat) => (
              <button
                key={cat}
                className="bg-white text-orange-500 px-3 py-1 rounded-full text-sm"
              >
                {cat}
              </button>
            )
          )}
        </div>
      </div>

      {/* Products  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-60 object-contain mb-4"
            />

            <h2 className="text-gray-700 font-semibold text-sm mb-2">
              {product.title}
            </h2>

            <div className="mt-auto flex items-center justify-between">
              <span className="text-green-600 font-bold">
                $ {product.price}
              </span>
              <button className="bg-orange-500 text-white px-3 py-1 rounded-md">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

