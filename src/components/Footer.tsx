import { motion } from 'motion/react'
import { Camera, Heart } from 'lucide-react'

function InstagramIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    )
}

export default function Footer() {
    return (
        <footer className="border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-16 md:px-12 lg:px-24">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <a href="#home" className="flex items-center gap-2 mb-4">
                            <Camera className="w-7 h-7 text-brand-400" />
                            <span className="text-lg font-bold tracking-tight text-white">
                                Patidar<span className="gradient-text">Digital</span>
                            </span>
                        </a>
                        <p className="text-stone-400 leading-relaxed max-w-xs">
                            Capturing life's most precious moments with artistry and passion. Behind Bank of
                            Baroda, Trilanga, Bhopal, MP 462039.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <div className="flex flex-col gap-2">
                            {['Home', 'Gallery', 'About', 'Services', 'Contact'].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    className="text-stone-400 hover:text-brand-400 transition-colors w-fit"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                        <a
                            href="https://instagram.com/patidardigital.studio__"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-brand-500/20 to-accent-500/20 border border-brand-400/20 text-white hover:from-brand-500/30 hover:to-accent-500/30 transition-all"
                        >
                            <InstagramIcon className="w-5 h-5 text-accent-400" />
                            <span className="font-medium">@patidardigital.studio__</span>
                        </a>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-stone-500 text-sm">
                        &copy; {new Date().getFullYear()} Patidar Digital Studio. All rights reserved.
                    </p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-1 text-stone-500 text-sm"
                    >
                        Made with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> in Bhopal
                    </motion.p>
                </div>
            </div>
        </footer>
    )
}
