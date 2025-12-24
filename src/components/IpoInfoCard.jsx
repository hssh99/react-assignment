function InfoItem({ label, value, subValue }) {
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <span className="font-semibold">{value}</span>{" "}
      {subValue && (
        <span className="text-sm font-bold">
          (<span className="text-red-500">{subValue}</span>)
        </span>
      )}
    </div>
  );
}

function IpoInfoCard() {
  return (
    <div className="border border-gray-300 rounded-xl p-4 sm:p-6 mb-8">
      <h2 className="font-semibold mb-4">IPO details</h2>

      <div className="border border-gray-300 grid grid-cols-2 p-4 rounded-xl sm:grid-cols-4 gap-6">
        <InfoItem label="Issue size" value="₹3,600 - 3,700 Cr." />
        <InfoItem label="Price range" value="₹100 - 200" />
        <InfoItem label="Minimum amount" value="₹50,000" />
        <InfoItem label="Lot size" value="150 shares/lots" />

        <InfoItem label="Issue dates" value="12 Dec - 15 Dec 22" />
        <InfoItem label="Listed on" value="15 Dec 22" />
        <InfoItem label="Listed price" value="₹150" />
        <InfoItem label="Listing gains" value="₹10" subValue="10.0%" />
      </div>
    </div>
  );
}

export default IpoInfoCard;
