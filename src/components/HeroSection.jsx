import PhoneMockUp from "./PhoneMockUp";

export default function HeroSection() {
    return (
        <section
            className="hero-section relative flex flex-row  text-black py-20 overflow-hidden"
            style={{
                backgroundImage: "url('/Hintergrundbild.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <div className="relative container ml-40 mx-auto px-6">
                <h1 className="text-6xl font-bold mb-4">Chosen: Für Verbindungen, die zählen.</h1>
                <h2 className="text-2xl mb-2">
                    Das soziale Netzwerk für tiefgehende Passionen. Schluss mit oberflächlichem Scrollen.
                    Finde dein Tribe – mit Purpose.
                </h2>
                <div className="font-bold flex flex-row gap-3">
                    <p>Sehe in Echtzeit, welche Menschen gerade am selben Ort sind.</p>
                    <p>Starte direkt ein Gespräch, ohne tausend Hürden.</p>
                    <p>Erstelle dein Profil in Sekunden, finde Kontakte in Minuten.</p>
                </div>
            </div>
            <div className="relative mt-12 flex mr-50">
                <PhoneMockUp />
            </div>
        </section>
    );
}



