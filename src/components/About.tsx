import { motion } from 'motion/react'
import { Camera, Award, Users, Heart } from 'lucide-react'

const stats = [
  { icon: Camera, value: '500+', label: 'Shoots Completed' },
  { icon: Users, value: '300+', label: 'Happy Clients' },
  { icon: Award, value: '5+', label: 'Years Experience' },
  { icon: Heart, value: '100%', label: 'Client Satisfaction' },
]

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative glow behind image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-500/20 via-accent-500/10 to-brand-500/20 rounded-[3rem] blur-2xl" />

            {/* Main image with decorative border */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-brand-500/20">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80"
                  alt="Patidar Digital Studio photography"
                  className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
                />
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-brand-400/40 rounded-tl-2xl" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-accent-400/40 rounded-br-2xl" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, type: 'spring' }}
              className="absolute -bottom-8 -right-8 glass-card p-5 max-w-[180px] backdrop-blur-2xl border-brand-400/20"
            >
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent-500 flex items-center justify-center shadow-lg shadow-accent-500/30">
                <span className="text-white text-xs">✦</span>
              </div>
              <p className="text-4xl font-bold gradient-text">5+</p>
              <p className="text-xs text-stone-300 mt-1.5 leading-relaxed">Years capturing beautiful moments</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-400">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-6 leading-tight">
              We Don't Just Take
              <br />
              Photos, We Craft
              <br />
              <span className="gradient-text">Memories</span>
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed mb-6">
              Patidar Digital Studio is Bhopal's premier photography destination, founded by
              Manoj Patidar. With a passion for visual storytelling, we specialize in capturing
              the raw emotions and authentic moments that make your special occasions truly
              unforgettable.
            </p>
            <p className="text-stone-400 text-lg leading-relaxed mb-8">
              From grand wedding celebrations to intimate portrait sessions, our team brings
              creativity, technical excellence, and an eye for detail to every project. Visit us
              behind Bank of Baroda, Trilanga — we believe every moment is a story waiting to be
              told beautifully.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card p-4 text-center">
                  <stat.icon className="w-5 h-5 text-brand-400 mx-auto mb-2" />
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-stone-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
