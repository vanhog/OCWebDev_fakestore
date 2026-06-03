import Navbar from "../Components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />

      <div>
        <h1 className="text-2xl font-bold flex justify-end pt-2 pb-2">
          Welcome!
        </h1>
      </div>
    </div>
  );
}

export default Home;