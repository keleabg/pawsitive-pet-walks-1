export function About() {
  const team = [
    { name: "Amina Khumalo", role: "Stigter & Hoofstapper", bio: "10+ jaar ervaring met diere, in Afrika gesertifiseer in hondgedrag.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&auto=format" },
    { name: "Sipho Ndlovu", role: "Stapper & Oppasser", bio: "Spesialiseer in sosialisering en kalm handeling van skugter honde.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&auto=format" },
  ];

  return (
    <section id="about" className="py-16 bg-muted/40">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-4">Oor Ons</h3>
        <p className="text-muted-foreground max-w-3xl mb-8">Ons het in Cape Town begin met &apos;n eenvoudige doel: gee honde daaglikse liefde en veilige oefening. Ons missie is om gemeenskappe sterker te maak deur gesonde troeteldiere en betroubare diens.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.map((t) => (
            <div key={t.name} className="flex gap-4 items-center bg-white/70 p-4 rounded-lg shadow-sm">
              <img src={t.img} alt={t.name} className="w-20 h-20 rounded-full object-cover" />
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
                <p className="text-sm mt-2 text-muted-foreground">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
