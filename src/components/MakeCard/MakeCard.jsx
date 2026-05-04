import './MakeCard.css';

export default function MakeCard({ article }) {
  return (
    <div className="w-70 h-120 p-[2%] flex flex-col justify-between  rounded-md border article-card">
      <img
        src={article.image}
        alt={article.title}
        className="w-full max-h-[60%] mb-8"
      />
      <div className="w-full h-full flex flex-col justify-end">
        <h1 className="article-title ">{article.title}</h1>
        <hr className="article-line w-full border-[0.5px] my-3"></hr>
        <div className="w-full flex flex-row justify-between items-center">
          <div className="article-price">
            € <span>{article.price}</span>
          </div>
          <button className="article-button-add2card p-2 rounded ">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
