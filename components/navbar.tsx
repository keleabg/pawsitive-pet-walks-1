"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white/60 backdrop-blur-md sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-white font-bold">PW</div>
          <div>
            <h1 className="text-lg font-semibold">Pasiënde Hondloop</h1>
            <p className="text-xs text-muted-foreground">Cape Town • Nairobi • Accra</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-sm hover:underline">Dienste</a>
          <a href="#how" className="text-sm hover:underline">Hoe Dit Werk</a>
          <a href="#about" className="text-sm hover:underline">Oor Ons</a>
          <a href="#gallery" className="text-sm hover:underline">Galery</a>
          <a href="#testimonials" className="text-sm hover:underline">Getuigskrifte</a>
          <a href="#contact">
            <Button variant="default">Kry &apos;n Kwotasie</Button>
          </a>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="menu" className="p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white/90 border-t">
          <div className="px-6 py-4 flex flex-col gap-3">
            <a href="#services" className="text-sm">Dienste</a>
            <a href="#how" className="text-sm">Hoe Dit Werk</a>
            <a href="#about" className="text-sm">Oor Ons</a>
            <a href="#gallery" className="text-sm">Galery</a>
            <a href="#testimonials" className="text-sm">Getuigskrifte</a>
            <a href="#contact" className="pt-2">
              <Button variant="default">Kry &apos;n Kwotasie</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
