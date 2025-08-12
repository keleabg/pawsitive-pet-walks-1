export function Footer() {
  return (
    <footer className="mt-12 bg-white/60 border-t">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start justify-between gap-6">
        <div>
          <h4 className="font-semibold">Pasiënde Hondloop</h4>
          <p className="text-sm text-muted-foreground">Cape Town • Nairobi • Accra</p>
          <p className="text-sm mt-2">Tel: <a href="tel:+27123456789" className="underline">+27 12 345 6789</a></p>
          <p className="text-sm">E-pos: <a href="mailto:hello@pasiendehondloop.co.za" className="underline">hello@pasiendehondloop.co.za</a></p>
        </div>

        <div>
          <h5 className="font-semibold">Snelkoppelinge</h5>
          <ul className="mt-2 text-sm text-muted-foreground">
            <li><a href="#services" className="underline">Dienste</a></li>
            <li><a href="#how" className="underline">Hoe Dit Werk</a></li>
            <li><a href="#contact" className="underline">Kontak</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">Volg Ons</h5>
          <div className="mt-2 text-sm text-muted-foreground">Instagram • Facebook • WhatsApp</div>
        </div>
      </div>
    </footer>
  );
}
