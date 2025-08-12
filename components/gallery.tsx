export function Gallery() {
  const images = [
    `https://images.unsplash.com/photo-1507149833265-60c372daea22?w=800&h=600&fit=crop&auto=format`,
    `https://images.unsplash.com/photo-1558788353-f76d92427f16?w=800&h=600&fit=crop&auto=format`,
    `https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=600&fit=crop&auto=format`,
    `https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&h=600&fit=crop&auto=format`,
  ];

  return (
    <section id="gallery" className="py-16 bg-muted/40">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-6">Galery</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow-sm">
              <img src={src} loading="lazy" alt={`Hond galery ${i + 1}`} className="w-full h-40 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
