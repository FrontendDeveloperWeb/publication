import StatsBar from "../../../components/StatsBar/StatsBar";
import HeroSection from "../../LatestIssues/partials/HeroSection";

export default function AimsAndScope() {
  return (
    <>
      <HeroSection />
      <section className="stat-sec">
        <StatsBar />
      </section>
       <section>
        <img src="../../../../public/assets/img/girl-img.png" alt="" />
       </section>
    </>
  );
}