import React, { useState } from 'react';

export default function EarlyAccessForm() {
    // Optional: State-Management für die E-Mail-Eingabe
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Angemeldet mit: ${email}`);
        // Hier würde die API-Anbindung zur E-Mail-Verarbeitung stehen
    };

    return (
        // Haupt-Container:
        // - Benutzerdefinierter Farbverlauf (bg-gradient-br from-[#a77ff8] to-[##e782f0])
        // - Abgerundete Ecken (rounded-3xl)
        // - Schatten (shadow-2xl)
        <div
            className="
                p-8 rounded-3xl w-full max-w-sm mx-auto  mt-20
                shadow-2xl text-black 
                font-sans
            "
            style={{
                // Für den weichen Schatten, der im Bild sichtbar ist
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
                minWidth: '300px'
            }}
        >
            {/* Titel */}
            <h2 className="text-2xl font-semibold mb-2 text-center">
                Jetzt unverbindlich vorregistrieren.
            </h2>

            <p className="text-center text-base text-gray-700 mb-4">
                Sei einer der ersten, die Chosen tester der App, die dich mit Menschen verbindet,
                die gerade jetzt in deiner Nähe sind.
            </p>


            {/* Formular */}
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* E-Mail-Eingabefeld */}
                <input
                    type="email"
                    placeholder="Email address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    // Tailwind und daisyUI Klassen für das weiße Feld
                    className="
                        input w-full bg-gray-100 text-gray-800 
                        focus:outline-none placeholder:text-blue-500/80 
                        border-blue-300 text-base p-4 h-auto rounded-xl
                    "
                />

                {/* Button */}
                <button
                    type="submit"
                    // Tailwind und daisyUI Klassen für den Button
                    className="
                        btn w-full text-lg font-bold 
                        text-white border-none h-auto p-4 rounded-xl
                        shadow-lg
                    "
                    style={{
                        // Der dunklere, lila Gradient für den Button
                        background: 'linear-gradient(145deg, #8a5ee0, #cc69e7)',
                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
                    }}
                >
                    Notify me
                </button>
            </form>
        </div>
    );
};

