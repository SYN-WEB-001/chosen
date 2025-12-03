import HeroSection from "../components/HeroSection";
import EarlyAccessForm from "../components/EarlyAccessForm.jsx";
import Rezession from "../components/Rezessionen.jsx";
export default function Home() {
    return (
        <div>
            <HeroSection />
            <div className="flex flex-row mr-80">
            <EarlyAccessForm />
            < Rezession />
        </div>

        </div >
    );
}