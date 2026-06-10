import Navbar from '../Components/Navbar';
import type { Article } from '../product.tsx';

function Checkout(props: { cart: Article[] }) {
  return (
    <div>
      <Navbar />

      <div>
        <h1 className="text-2xl font-bold flex justify-end pt-2 pb-2">
          Welcomerich!
        </h1>
        <ul>
          {props.cart.map((item) => (
            <li key={item.id}>{item.description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Checkout;
