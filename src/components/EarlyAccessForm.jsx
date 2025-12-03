import React, { useState } from 'react';

export default function EarlyAccessForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [interests, setInterests] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`Angemeldet mit:\nName: ${name}\nE-Mail: ${email}\nInteressen: ${interests}`);
    };

    return (
        <div
            className="
                p-8 rounded-3xl w-full max-w-sm mx-auto  mt-20
                shadow-2xl text-white
                bg-gradient-to-br from-pink-500 to-purple-600 
                font-sans"
            style={{
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
                minWidth: '300px'
            }}
        >
            <h2 className="text-2xl font-semibold mb-6 text-center">
                Jetzt unverbindlich vorregistrieren.
            </h2>
            <p className="text-center text-base text-white mb-4">
                Sei einer der ersten, die Chosen tester der App, die dich mit Menschen verbindet,
                die gerade jetzt in deiner Nähe sind.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

                <input
                    type="text"
                    placeholder="Dein Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}

                    className="
                        input w-full bg-white text-gray-800 
                        focus:outline-none placeholder:text-gray-500/80 
                        border-none text-base p-4 h-auto rounded-xl" />

                <input
                    type="email"
                    placeholder="Email address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                    className="
                        input w-full bg-white text-gray-800 
                        focus:outline-none placeholder:text-blue-500/80 
                        border-none text-base p-4 h-auto rounded-xl " />

                <input
                    type="text"
                    placeholder="Dein Interesse (z.B. Reisen, Essen)"
                    value={interests}
                    onChange={(e) => setInterests(e.target.value)}

                    className="
                        input w-full bg-white text-gray-800 
                        focus:outline-none placeholder:text-gray-500/80 
                        border-none text-base p-4 h-auto rounded-xl" />
                <button
                    type="submit"
                    className="
                        btn w-full text-lg font-bold 
                        text-white border-none h-auto p-4 rounded-xl
                        shadow-lg"
                    style={{
                        background: 'linear-gradient(145deg, #8a5ee0, #cc69e7)',
                        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
                    }}
                >
                    Benachrichtigen Sie mich
                </button>
            </form>
        </div>
    );
}