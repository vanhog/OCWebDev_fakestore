import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar.tsx';
import type { Article } from '../product.tsx';
import './pages.css';

function Cartview(props: { cart: Article[] }) {
  return (
    <div className="h-screen">
      <Navbar />

      <div>
        <h1 className="text-2xl font-bold flex justify-end pt-2 pb-2">
          Your cart
        </h1>
        <h2>
          {' '}
          <Link to="/" className="border border-black px-4 py-2 rounded">
            Continue shopping
          </Link>
        </h2>
        <div className="flex justify-center items-center">
          <table className="mt-10">
            <thead>
              <tr className="border-b">
                <th className="cart-header-number min-w-20"></th>
                <th className="cart-header-text min-w-60"></th>
                <th className="cart-header-number min-w-20">Price</th>
              </tr>
            </thead>
            <tbody>
              {props.cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full max-h-15 mb-8 mt-4"
                    />
                  </td>
                  <td className="flex flex-col justify-center items-start cart-item-text">
                    <div className="">{item.title}</div>
                    <label>
                      {' '}
                      <input
                        type="number"
                        className="w-10 border-2 border-pink-700 rounded-lg px-1"
                        id={String(item.id)}
                        name="item"
                        min="0"
                        defaultValue={1}
                      />
                    </label>
                  </td>
                  <td className="cart-item-number">
                    {(Math.round(item.price * 100) / 100).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Cartview;
