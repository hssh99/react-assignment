import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex gap-6">
        <button
          onClick={() => navigate("/ipo-list")}
          className="px-6 py-3 rounded-xl bg-indigo-900 text-white font-medium cursor-pointer"
        >
          IPO List
        </button>

        <button
          onClick={() => navigate("/ipo-details")}
          className="px-6 py-3 rounded-xl bg-indigo-900 text-white font-medium cursor-pointer"
        >
          IPO Details
        </button>
      </div>
    </div>
  );
}

export default Home;
