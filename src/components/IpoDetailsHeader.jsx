import { Download } from "lucide-react";

function IpoDetailsHeader() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/sample-pdf.pdf";
    link.download = "sample-pdf.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        <div className="w-14 h-14 rounded-full text-white flex items-center justify-center font-bold">
          <img
            src="/oyo.webp"
            alt="oyo logo"
            className="w-14 h-14 rounded-full"
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">OYO</h1>
          <p className="text-lg text-gray-500">OYO Private Limited</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div
          onClick={handleDownload}
          className="p-3 mr-2 border border-blue-950 rounded-lg hover:bg-slate-100 cursor-pointer"
          title="Download pdf"
        >
          <Download size={25} className="text-orange-400" />
        </div>

        <button className="bg-indigo-900 text-white px-8 py-3 rounded-xl font-medium">
          Apply now
        </button>
      </div>
    </div>
  );
}

export default IpoDetailsHeader;
