"use client"
import React, {useState} from 'react'

export default function FashionGallery() {
  const galleryItems = [
    { src: '/assets/galleries/img1.jpeg', fit: 'Elegant summer dress' },
    { src: '/assets/galleries/img2.jpeg', fit: 'With My Dog' },
    { src: '/assets/galleries/img3.jpeg', fit: 'Stylish evening gown' },
    { src: '/assets/galleries/img4.jpeg', fit: 'Trendy streetwear look' },
    { src: '/assets/galleries/img5.jpeg', fit: 'Casual day outfit' },
    { src: '/assets/galleries/img6.jpeg', fit: 'Khmer Tradition Dress' },
  ]
  const [selected, setSelected] = useState(null)

  const handlePrev = (e) => {
    e.stopPropagation()
    if (selected > 0) setSelected(selected - 1)
  }

  const handleNext = (e) => {
    e.stopPropagation()
    if (selected < galleryItems.length - 1) setSelected(selected + 1)
  }

  return (
    <section className="p-8 rounded-lg shadow-lg mx-auto max-w-screen-lg mt-20 bg-gray-800">
      <h2 className="text-3xl font-bold mb-2 text-center text-white">Fashion Gallery</h2>
      <p className="text-white text-center mb-8">I enjoy exploring fashion and capturing my style through photography. Here’s a glimpse into my creative side.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {galleryItems.map((item, idx) => (
          <div
            key={idx}
            className="relative rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-200 bg-gray-50 cursor-pointer"
            onClick={() => setSelected(idx)}
          >
            <img
              src={item.src}
              alt={item.fit}
              className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-200">
              <span className="text-white text-lg font-semibold px-4 text-center">{item.fit}</span>
            </div>
          </div>
        ))}
      </div>
      {selected !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div className="relative flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <div className="flex items-center">
              <button
                className="bg-white text-black px-3 py-2 rounded-full font-bold mx-2 disabled:opacity-50"
                onClick={handlePrev}
                disabled={selected === 0}
                aria-label="Previous"
              >
                &#8592;
              </button>
              <img
                src={galleryItems[selected].src}
                alt={galleryItems[selected].fit}
                className="max-w-full max-h-[80vh] rounded-lg"
              />
              <button
                className="bg-white text-black px-3 py-2 rounded-full font-bold mx-2 disabled:opacity-50"
                onClick={handleNext}
                disabled={selected === galleryItems.length - 1}
                aria-label="Next"
              >
                &#8594;
              </button>
              <button
                className="absolute top-2 right-2 bg-white rounded-full px-3 py-1 text-black font-bold"
                onClick={() => setSelected(null)}
              >
                ×
              </button>
            </div>
            <div className="mt-4 text-white text-center text-lg font-semibold max-w-full">
              {galleryItems[selected].fit}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
