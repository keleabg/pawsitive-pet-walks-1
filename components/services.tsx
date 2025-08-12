import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Services() {
  const services = [
    { id: 1, title: "15-minuut Loop", price: "R60", desc: "Kort verfrissings-wandeling vir vinnige oefening." },
    { id: 2, title: "30-minuut Loop", price: "R100", desc: "Ideaal vir energie-volle honde en daaglikse oefening." },
    { id: 3, title: "60-minuut Loop", price: "R180", desc: "Dieper oefening, sosialisering en verkenning." },
    { id: 4, title: "Groep Loop", price: "R80", desc: "Sosialisering in klein, gemonitorde groepe." },
    { id: 5, title: "Privaat Loop", price: "R150", desc: "Een-tot-een aandag vir spesiale behoeftes." },
    { id: 6, title: "Troeteldieroppas", price: "Op aanvraag", desc: "Betroubare oppas wanneer jy weg is." },
  ];

  return (
    <section id="services" className="py-16 bg-muted/40">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-6">Ons Dienste</h3>
        <p className="text-muted-foreground mb-8 max-w-2xl">Kies &apos;n diens wat by jou en jou hond se behoeftes pas. Pryste is riglyne; kontak ons vir &apos;n afgeronde kwotasie of pakketpryse.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card key={s.id} className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-lg font-semibold">{s.title}</h4>
                  <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold">{s.price}</div>
                  <div className="text-xs text-muted-foreground">Begintarief</div>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <div className="text-xs text-muted-foreground">Voordele: oefening, sosialisering, stresvermindering</div>
                <a href="#contact">
                  <Button variant="outline">Boek</Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
