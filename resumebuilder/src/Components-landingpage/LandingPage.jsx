import Navbar from "../Components-landingpage/Navbar";
import Header from "../Components-landingpage/Header";
import TrustedCompanies from "../Components-landingpage/TrustedCompanies";
import FeaturesGrid from "../Components-landingpage/FeatuersGrid";
import CallToAction from "../Components-landingpage/CallToAction";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <TrustedCompanies />
      <FeaturesGrid />
      <CallToAction />
    </>
  );
}
export default LandingPage;