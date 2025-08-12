export function Testimonials() {
  const items = [
    { name: "Lindiwe", location: "Cape Town", text: "My hond Kiki is altyd so opgewonde na 'n loop. Profesioneel en vriendelik!" },
    { name: "Mohamed", location: "Nairobi", text: "Betroubare diens en uitstekende kommunikasie. Hoog aanbeveel!" },
  ];

  return (
    <section id="testimonials" className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-6">Wat kliënte sê</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((t) => (
            <blockquote key={t.name} className="p-6 bg-white/60 rounded-lg shadow-sm">
              <p className="text-muted-foreground">“{t.text}”</p>
              <footer className="mt-4 text-sm font-semibold">{t.name} <span className="text-xs text-muted-foreground">— {t.location}</span></footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
