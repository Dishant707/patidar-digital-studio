import { useState } from 'react'
import { motion } from 'motion/react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 98934 77769',
    href: 'tel:+919893477769',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@patidardigital.studio',
    href: 'mailto:hello@patidardigital.studio',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Behind Bank of Baroda, Trilanga, Bhopal, MP 462039',
    href: 'https://www.google.com/maps/search/?api=1&query=Bank+of+Baroda+Trilanga+Bhopal+Madhya+Pradesh+462039',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon - Sat, 10 AM - 8 PM',
    href: '#',
  },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-brand-500/10 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-400">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="max-w-xl mx-auto text-stone-400 text-lg">
            Ready to create something beautiful together? Reach out and let's discuss your vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-stone-500 focus:outline-none focus:border-brand-400/50 focus:ring-2 focus:ring-brand-400/20 transition-all"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-stone-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-stone-500 focus:outline-none focus:border-brand-400/50 focus:ring-2 focus:ring-brand-400/20 transition-all"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-stone-300 mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-brand-400/50 focus:ring-2 focus:ring-brand-400/20 transition-all appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22none%22%20stroke%3D%22%239ca3af%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_16px_center] bg-no-repeat"
                >
                  <option value="" className="bg-stone-900">Select a service</option>
                  <option value="wedding" className="bg-stone-900">Wedding Photography</option>
                  <option value="prewedding" className="bg-stone-900">Pre-wedding Shoot</option>
                  <option value="portrait" className="bg-stone-900">Portrait Photography</option>
                  <option value="videography" className="bg-stone-900">Cinematic Videography</option>
                  <option value="product" className="bg-stone-900">Product Photography</option>
                  <option value="other" className="bg-stone-900">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-300 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-stone-500 focus:outline-none focus:border-brand-400/50 focus:ring-2 focus:ring-brand-400/20 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 text-white font-semibold text-base hover:from-brand-400 hover:to-accent-400 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {contactInfo.map((info, idx) => (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 flex items-center gap-4 group hover:border-brand-400/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-400/10 flex items-center justify-center group-hover:bg-brand-400/20 transition-colors shrink-0">
                  <info.icon className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 uppercase tracking-wider">{info.label}</p>
                  <p className="text-white font-medium mt-1">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Google Maps link */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Bank+of+Baroda+Trilanga+Bhopal+Madhya+Pradesh+462039"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-1 aspect-[4/3] overflow-hidden rounded-2xl mt-2 group cursor-pointer hover:border-brand-400/40 transition-all"
            >
              <div className="w-full h-full rounded-xl bg-stone-800 flex items-center justify-center group-hover:bg-stone-700/80 transition-colors relative">
                {/* Decorative map grid */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </div>
                <div className="text-center relative z-10 group-hover:scale-105 transition-transform">
                  <MapPin className="w-8 h-8 text-brand-400 mx-auto mb-2 group-hover:text-accent-400 transition-colors" />
                  <p className="text-stone-400 text-sm group-hover:text-white transition-colors">Behind Bank of Baroda, Trilanga</p>
                  <p className="text-stone-600 text-xs mt-1">Bhopal, MP 462039</p>
                  <span className="inline-block mt-3 text-xs font-medium text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Open in Google Maps ↗
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
