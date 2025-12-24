import IpoHeader from "../components/IpoHeader";
import IpoRow from "../components/IpoRow";
import { ipoData } from "../mockData/ipodata";

function IpoList() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen p-6">
        <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow ">
          <h2 className="text-xl font-semibold mb-4">IPO List</h2>
          <IpoHeader />
          {ipoData.map((ipo) => (
            <IpoRow key={ipo.id} ipo={ipo} />
          ))}
        </div>
      </div>
    </>
  );
}

export default IpoList;
