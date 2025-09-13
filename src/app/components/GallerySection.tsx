export default function GallerySection() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-gray-200 rounded-lg overflow-hidden"
          >
            <img
              src={`https://placehold.co/400x400?text=Image+${i + 1}`}
              alt={`Gallery ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
