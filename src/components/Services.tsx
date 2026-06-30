import { motion } from 'motion/react'
import { Camera, Video, Users, Image, Palette, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Camera,
    title: 'Wedding Photography',
    description:
      'Full-day wedding coverage capturing every ritual, emotion, and celebration in stunning detail.',
    highlight: 'Most Popular',
  },
  {
    icon: Sparkles,
    title: 'Pre-wedding Shoots',
    description:
      'Romantic cinematic pre-wedding sessions at breathtaking locations around Bhopal.',
    highlight: '',
  },
  {
    icon: Users,
    title: 'Portrait Photography',
    description:
      'Professional individual, couple, and family portraits that reflect your personality.',
    highlight: '',
  },
  {
    icon: Video,
    title: 'Cinematic Videography',
    description:
      'Story-driven wedding films and event highlights edited with a cinematic touch.',
    highlight: 'Premium',
  },
  {
    icon: Image,
    title: 'Product Photography',
    description:
      'Clean, professional product shots that elevate your brand and drive sales.',
    highlight: '',
  },
  {
    icon: Palette,
    title: 'Photo Editing & Retouching',
    description:
      'Professional color grading and retouching to make every image magazine-worthy.',
    highlight: '',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-400">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="max-w-xl mx-auto text-stone-400 text-lg">
            Comprehensive photography and videography services tailored to your unique vision.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 group hover:border-brand-400/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-400/10 flex items-center justify-center mb-5 group-hover:bg-brand-400/20 transition-colors">
                <service.icon className="w-6 h-6 text-brand-400" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                {service.highlight && (
                  <span
                    className={`text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full ${
                      service.highlight === 'Most Popular'
                        ? 'bg-accent-400/20 text-accent-300'
                        : 'bg-brand-400/20 text-brand-300'
                    }`}
                  >
                    {service.highlight}
                  </span>
                )}
              </div>
              <p className="text-stone-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
