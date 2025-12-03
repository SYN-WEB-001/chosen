import testimonialsData from "./data/testimonials.json";

export default function Rezession() {
  return (
    <section className="mt-15 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Erfahrungsberichte</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map(({ quote, name, location, rating, avatarUrl }, idx) => (
            <div key={idx} className="p-6 shadow-xl rounded-2xl bg-gradient-to-br from-gray-50 to-gray-400  text-black">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={avatarUrl}
                  alt={name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{name}</p>
                  <p className="text-sm text-black">{location}</p>
                </div>
              </div>

              <p className="italic mb-4">"{quote}"</p>

              <div className="flex gap-1">
                {[...Array(rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
