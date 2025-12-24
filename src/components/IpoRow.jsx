import { Link } from "react-router-dom";

function IpoRow({ ipo }) {
  return (
    <div className="grid grid-cols-4 items-center py-4 text-center">
      <Link to="/ipo-details">
        <div className="flex items-center gap-2">
          <img
            src={ipo.logo}
            alt={ipo.name}
            className="w-12 h-12 rounded-full"
          />
          <div className="text-left">
            <p className="font-semibold text-gray-900">{ipo.name}</p>
            <p className="text-sm text-gray-500">{ipo.issueDate}</p>
          </div>
        </div>
      </Link>
      <div className="font-semibold text-gray-900">{ipo.issueSize}</div>
      <div className="font-semibold text-gray-900">{ipo.priceRange}</div>
      <div>
        <p className="font-semibold text-gray-900">{ipo.minInvest}</p>
        <p className="text-sm text-gray-500">{ipo.lots}</p>
      </div>
    </div>
  );
}

export default IpoRow;
