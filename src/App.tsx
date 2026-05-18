<<<<<<< HEAD
import MakeCard from './components/MakeCard/MakeCard';
import { articles } from '../data/articles';


export default function App() {
  return (
    <main className="flex min-h-screen flex-row flex-wrap items-start justify-center gap-3 bg-gray-200 p-6">
      {articles.map((article) => (
        <MakeCard key={article.id} article={article} />
      ))}
    </main>
=======
import React, { useState } from 'react';
import './App.css';

import { products } from './product.tsx';
import MakeCard from './Components/MakeCard/MakeCard.tsx';

export default function App() {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('none');

  const filtered = products
    .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-6">
        SuperFakeStore
      </h1>

      <div className="bg-orange-400 p-6 rounded-xl flex flex-col md:flex-row gap-1 items-center justify-between mb-8">
        <input
          type="text"
          placeholder="Search by title"
          className="px-2 py-2 rounded-md w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="px-2 py-2 rounded-md"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="none">Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>

        <div className="flex gap-2 flex-wrap justify-center">
          {[
            'electronics',
            'jewelery',
            "men's clothing",
            "women's clothing",
          ].map((cat) => (
            <button
              key={cat}
              className="bg-white text-orange-500 px-3 py-1 rounded-full text-sm"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products  */}

      <div className="flex min-h-screen flex-row flex-wrap items-start justify-center gap-3 bg-gray-200 p-6">
        {filtered.map((product) => (
          <MakeCard key={product.id} article={product} />
        ))}
      </div>
    </div>
>>>>>>> main
  );
}
