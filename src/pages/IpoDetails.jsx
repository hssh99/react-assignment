import IpoDetailsHeader from "../components/IpoDetailsHeader";
import IpoInfoCard from "../components/IpoInfoCard";
import IpoTimeline from "../components/IpoTimeline";
import AboutCompany from "../components/AboutCompany";
import Breadcrumb from "../components/Breadcrumb";

function IpoDetails() {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      <Breadcrumb />
      <IpoDetailsHeader />
      <IpoInfoCard />
      <IpoTimeline />
      <AboutCompany />
    </div>
  );
}

export default IpoDetails;
