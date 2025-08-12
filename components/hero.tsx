"use client";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Betroubare Hondloopdienste in jou Omgee</h2>
          <p className="text-lg text-muted-foreground max-w-xl">Ons gee jou hond die oefening, liefde en sorg wat hy verdien — veilige, professionele en pasgemaakte loop-sessies in Cape Town en omliggende areas.</p>

          <div className="flex items-center gap-4">
            <a href="#contact">
              <Button variant="default">Kry &apos;n Kwotasie</Button>
            </a>
            <a href="#services" className="text-sm underline text-muted-foreground">Verken Dienste</a>
          </div>

          <div className="mt-6 text-sm text-muted-foreground">
            <strong>Ons fokus:</strong> veiligheid, konstantheid, en &apos;n gelukkige hond elke dag.
          </div>

          <div className="mt-6 flex gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">🐶</div>
              <div>
                <div className="font-semibold">Geoefende Stappers</div>
                <div className="text-xs text-muted-foreground">Gehandhaafde veiligheid & opleiding</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">📅</div>
              <div>
                <div className="font-semibold">Buigsame Skedules</div>
                <div className="text-xs text-muted-foreground">Oggend, middag en aand beskikbaar</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <img src={`https://images.unsplash.com/photo-1517849845537-4d257902454a?w=1400&h=1050&fit=crop&auto=format`} alt="Gelukkige hond tydens &apos;n wandeling" className="w-full h-full object-cover" loading="lazy" />
          </div>

          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-amber-200 to-rose-100 rounded-full opacity-90 blur-3xl" aria-hidden />
        </div>
      </div>
    </section>
  );
}
