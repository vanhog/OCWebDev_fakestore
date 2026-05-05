import MakeCard from './components/MakeCard/MakeCard';
import { articles } from '../data/articles';


export default function App() {
  return (
    <main className="flex min-h-screen flex-row flex-wrap items-start justify-center gap-3 bg-gray-200 p-6">
      {articles.map((article) => (
        <MakeCard key={article.id} article={article} />
      ))}
    </main>
  );
}
