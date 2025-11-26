import { Github, Linkedin, Mail, Heart, Instagram, Facebook, ArrowUp, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub',
      gradient: 'from-slate-600 to-slate-800',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      icon: Instagram,
      href: 'https://instagram.com',
      label: 'Instagram',
      gradient: 'from-pink-500 via-purple-500 to-orange-500',
    },
    {
      icon: Facebook,
      href: 'https://facebook.com',
      label: 'Facebook',
      gradient: 'from-blue-600 to-blue-800',
    },
    {
      icon: Mail,
      href: 'mailto:hemkumarratre1999@gmail.com',
      label: 'Email',
      gradient: 'from-purple-500 to-pink-600',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border-t border-slate-200 dark:border-slate-800">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">H</span>
                </div>
                <div>
                  <span className="text-slate-900 dark:text-white block">Hemkumar</span>
                  <span className="text-xs text-slate-600 dark:text-slate-400">Software Developer</span>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Crafting innovative solutions and beautiful user experiences with modern web technologies.
              </p>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-white">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>Raipur , Chhattisgarh</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <Mail className="w-4 h-4 text-purple-500" />
                <a href="mailto:hemkumarratre1999@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  hemkumarratre1999@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                Quick Links
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-slate-400 dark:bg-slate-600 rounded-full group-hover:bg-blue-500 transition-colors" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                Let's Connect
              </h3>
              <div className="space-y-6">
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -4 }}
                      className={`group relative p-4 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl border border-slate-200 dark:border-slate-700 hover:border-transparent transition-all shadow-md hover:shadow-xl overflow-hidden`}
                      aria-label={social.label}
                    >
                      {/* Gradient Background on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                      
                      {/* Icon */}
                      <social.icon className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-white transition-colors relative z-10" />
                      
                      {/* Tooltip */}
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/5 dark:via-purple-500/5 dark:to-pink-500/5 border border-blue-500/20 dark:border-blue-500/10 rounded-xl p-4">
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    <span className="text-blue-600 dark:text-blue-400">💼 Open to opportunities</span> • Freelance projects & collaborations welcome
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-slate-600 dark:text-slate-400 text-sm text-center md:text-left"
            >
              © {currentYear} <span className="text-slate-900 dark:text-white">Hemkumar</span>. All rights reserved.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <p className="text-slate-600 dark:text-slate-400 text-sm flex items-center">
                Made with <Heart className="w-4 h-4 text-red-500 mx-1 fill-current animate-pulse" /> using React & Motion
              </p>
              
              {/* Scroll to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg shadow-lg hover:shadow-xl transition-all group"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4 text-white group-hover:translate-y-[-2px] transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </footer>
  );
}