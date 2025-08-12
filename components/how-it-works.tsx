export function HowItWorks() {
  const steps = [
    { id: 1, title: "Kontak Vir Kwotasie", body: "Vul ons kontakvorm in of skakel ons om jou hond se behoeftes te deel." },
    { id: 2, title: "Ooreenkoms & Boekings", body: "Ons stem 'n geskikte tyd en roete af, inkl. spesiale instruksies." },
    { id: 3, title: "Geniet Die Diens", body: "Ons kom by die afgesproke tyd en gee jou hond veilige, liefdevolle aandag." },
    { id: 4, title: "Terugvoer & Betaling", body: "Jy ontvang 'n opsomming na die sessie en betaal via jou voorkeurmetode." },
  ];

  return (
    <section id="how" className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-6">Hoe Dit Werk</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div key={s.id} className="p-6 bg-white/60 rounded-lg shadow-sm">
              <h4 className="font-semibold">{s.id}. {s.title}</h4>
              <p className="text-muted-foreground mt-2">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
