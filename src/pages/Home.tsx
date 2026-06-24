import Navbar from '../Components/Navbar';
import type { Article } from '../product.tsx';
import MakeCard from '../Components/MakeCard/MakeCard.tsx';
import { useEffect, useState } from 'react';

type HomeProps = {
  cart: Article[];
  setCart: React.Dispatch<React.SetStateAction<Article[]>>;
};

function Home({ cart, setCart }: HomeProps) {
  const [products, setProducts] = useState<Article[]>([]);
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('none');

  function addToCart(product: Article) {
    setCart((prevCart) => {
      const next = [...prevCart, product];
      console.log('cart after add:', next);
      console.log(next.length);
      return next;
    });
  }

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) throw new Error('Fetch failed');
        const data: Article[] = await res.json();
        setProducts(data);
      } catch (e) {
        console.error(e);
      }
    }
    load();
  }, []);

  const filtered = products
    .filter((p) => {
      const matchesCategory = category === '' || p.category === category;
      const matchesSearch =
        search === '' || p.title.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      return 0;
    });

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <div className="bg-rose-400 p-6 rounded-xl flex flex-col md:flex-row gap-1 items-center justify-between mb-8">
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
              onClick={() => setCategory(cat)}
              className={`
                bg-white text-rose-600 px-3 py-1 rounded-full text-sm
                ${
                  category === cat
                    ? ' text-rose-900 font-bold shadow-md'
                    : ' text-rose-500 hover:bg-rose-300'
                }
               `}
            >
              {cat}
            </button>
          ))}
          <button
            onClick={() => setCategory('')}
            className={`
                bg-white text-rose-600 px-3 py-1 rounded-full text-sm
                ${
                  category === ''
                    ? ' text-rose-900 font-bold shadow-md'
                    : ' text-rose-500 hover:bg-rose-300'
                }
               `}
          >
            All
          </button>
        </div>
      </div>

      {/* Products  */}

      <div className="flex min-h-screen flex-row flex-wrap items-start justify-center gap-3 bg-gray-200 p-6">
        {filtered.map((product) => (
          <MakeCard
            key={product.id}
            article={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
