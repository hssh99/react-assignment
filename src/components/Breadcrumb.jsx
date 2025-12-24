import { Link } from "react-router-dom";

function Breadcrumb() {
  return (
    <div className="text-sm text-gray-500 mb-12">
      <Link to="/">
        <span className="cursor-pointer">Home</span>
      </Link>
      <span className="mx-2">{">"}</span>
      <span>Market watch</span>
    </div>
  );
}

export default Breadcrumb;
