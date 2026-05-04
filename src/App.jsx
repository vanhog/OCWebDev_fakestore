import MakeCard from './components/MakeCard/MakeCard.jsx';
import { articles } from '../data/articles.js';

export default function App() {
  return (
    <main className="flex min-h-screen flex-row flex-wrap items-start justify-center gap-3 bg-gray-200 p-6">
      {articles.map((article) => (
        <MakeCard key={article.id} article={article} />
      ))}
    </main>
  );
}
