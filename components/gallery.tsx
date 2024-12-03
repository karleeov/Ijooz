import Image from "next/image"

export default function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-800">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div 
              key={item} 
              className="aspect-square bg-orange-100 rounded-lg flex items-center justify-center text-orange-500"
            >
              Image {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
