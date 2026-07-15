import Navbar from "../Components-landingpage/Navbar";
import Header from "../Components-landingpage/Header";
import TrustedCompanies from "../Components-landingpage/TrustedCompanies";
import FeatuersGrid from "../Components-landingpage/FeatuersGrid"
import CallToAction from "../Components-landingpage/CallToAction";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <TrustedCompanies />
      <FeatuersGrid />
      <CallToAction />
    </>
  );
}
export default LandingPage;