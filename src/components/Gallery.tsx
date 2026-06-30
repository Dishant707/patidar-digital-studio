import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'

interface GalleryItem {
    id: number
    src: string
    alt: string
    category: string
}

/*
 * GALLERY IMAGES
 * ──────────────────────────────────
 * 1. Download your best photos from Instagram
 * 2. Rename them and drop into: public/gallery/
 * 3. Use these filenames (or edit the src paths below):
 *    - wedding-1.jpg, wedding-2.jpg, wedding-3.jpg
 *    - prewedding-1.jpg
 *    - portrait-1.jpg, portrait-2.jpg
 *    - event-1.jpg
 *    - product-1.jpg
 * 4. Refresh the page — your images will appear!
 *
 * Tip: Use .jpg or .webp, keep files under 500KB for fast loading.
 */

const galleryItems: GalleryItem[] = [
    { id: 1, src: '/gallery/wedding-1.jpg', alt: 'Bride & groom portrait', category: 'Wedding' },
    { id: 2, src: '/gallery/wedding-2.jpg', alt: 'Wedding ceremony moment', category: 'Wedding' },
    { id: 3, src: '/gallery/wedding-3.jpg', alt: 'Traditional wedding rituals', category: 'Wedding' },
    { id: 4, src: '/gallery/portrait-1.jpg', alt: 'Bridal portrait session', category: 'Portrait' },
    { id: 5, src: '/gallery/portrait-2.jpg', alt: 'Artistic couple portrait', category: 'Portrait' },
    { id: 6, src: '/gallery/portrait-3.jpg', alt: 'Studio portrait photography', category: 'Portrait' },
    { id: 7, src: '/gallery/prewedding-1.jpg', alt: 'Pre-wedding couple shoot', category: 'Pre-wedding' },
    { id: 8, src: '/gallery/event-1.jpg', alt: 'Event celebration moments', category: 'Event' },
    { id: 9, src: '/gallery/product-1.jpg', alt: 'Creative photography', category: 'Portrait' },
]

const categories = ['All', 'Wedding', 'Pre-wedding', 'Portrait', 'Event']

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState('All')
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

    const filteredItems =
        activeCategory === 'All'
            ? galleryItems
            : galleryItems.filter((item) => item.category === activeCategory)

    return (
        <section id="gallery" className="section-padding">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-xs font-semibold tracking-widest uppercase text-brand-400">
                        Portfolio
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-4">
                        Our <span className="gradient-text">Gallery</span>
                    </h2>
                    <p className="max-w-xl mx-auto text-stone-400 text-lg">
                        A curated selection of our finest work across weddings, portraits, and events.
                    </p>
                </motion.div>

                {/* Category filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                                    ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25'
                                    : 'bg-white/5 text-stone-400 hover:bg-white/10 hover:text-white border border-white/10'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                onClick={() => setSelectedImage(item)}
                                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                            >
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div>
                                        <span className="text-xs font-semibold tracking-widest uppercase text-brand-300">
                                            {item.category}
                                        </span>
                                        <p className="text-white font-medium mt-1">{item.alt}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-xl flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
