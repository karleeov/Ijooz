import Image from "next/image"

export default function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-800">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "/home/image-5.png",
            "/home/image-6.png",
            "/home/image-7.png",
            "/home/image-8.png",
            "/home/image-9.png",
            "/home/image-10.png"
          ].map((image, index) => (
            <div 
              key={index} 
              className="aspect-square rounded-lg overflow-hidden"
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
