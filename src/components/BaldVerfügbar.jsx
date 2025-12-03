import { Smartphone, SmartphoneCharging, Globe } from "lucide-react";

export default function BaldVerfuegbar() {
  const items = [
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "iOS",
      status: "bald verfügbar",
    },
    {
      icon: <SmartphoneCharging className="w-12 h-12" />,
      title: "Android",
      status: "bald verfügbar",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Web App",
      status: "in Entwicklung",
    },
  ];

  return (
    <section className=" bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Bald verfügbar auf</h2>

        <div className=" card shadow-2xl grid gap-8 md:grid-cols-3">
          {items.map(({ icon, title, status }, index) => (
            <div
              key={index}
              className="p-6 shadow-lg rounded-2xl bg-gray-50 hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{icon}</div>
              <h3 className="font-semibold mt-2 text-lg">{title}</h3>
              <p className="text-gray-500 text-sm">{status}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
