import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-[128px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-400/5 rounded-full blur-[200px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase rounded-full border border-brand-400/30 bg-brand-400/10 text-brand-300">
                        Bhopal's Finest Photography
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-none mb-6"
                >
                    Capturing
                    <br />
                    <span className="gradient-text">Moments</span>
                    <br />
                    That Last Forever
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-stone-400 mb-10 leading-relaxed"
                >
                    We transform fleeting moments into timeless art. From weddings to portraits,
                    every frame tells a story worth remembering.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#contact"
                        className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-stone-950 font-semibold text-base overflow-hidden transition-transform hover:scale-105"
                    >
                        <span className="relative z-10 group-hover:text-white transition-colors">Book a Session</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-accent-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a
                        href="#gallery"
                        className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-all"
                    >
                        View Gallery
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-500"
            >
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
        </section>
    )
}
