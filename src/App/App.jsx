
import MakeCard from '../MakeCard/MakeCard';
import { articles } from './articles.js';

export default function App() {
  const mydata = articles;

  return mydata.map((elem) => <MakeCard key={elem.id} article={elem}  />);
}
