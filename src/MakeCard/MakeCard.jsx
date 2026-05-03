import './MakeCard.css';

export default function MakeCard(props) {
  return (
    <div className="w-70 h-120 p-[2%] flex flex-col justify-between items-center  rounded-md border border-gray-300">
      <img
        src={props.article.image}
        alt={props.article.title}
        className="w-full max-h-[60%] mb-8"
      />
      <div className="w-full h-full flex flex-col justify-end">
        <h1 className="article-title">{props.article.title}</h1>
        <hr className=" article-line w-full border-0.5 my-3"></hr>
        <div className="w-full flex flex-row justify-between items-center">
          <div className="article-price">
            € <span>{props.article.price}</span>
          </div>
          <button className="article-button rounded-md text-xs">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
