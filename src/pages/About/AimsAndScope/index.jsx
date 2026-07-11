import StatsBar from "../../../components/StatsBar/StatsBar";
import HeroSection from "../../../components/JournalDashboard/HeroSection";
import AcceptancePanel from "./partials/AcceptancePanel";
import PeerIconCards from "./partials/PeerIconCards";
import { PeerReview } from "./partials/PeerReview";
import PeerReview2 from "./partials/PeerReview2";

export default function AimsAndScope() {
  return (
    <>
      <HeroSection />
      <section className="stat-sec">
        <StatsBar />
      </section>
      <section className="peer-review-sec">
        <PeerReview />
      </section>
      <section>
        <PeerIconCards />
      </section>
      <section>
        <PeerReview2 />
      </section>
      <section>
        <AcceptancePanel />
      </section>
    </>
  );
}
