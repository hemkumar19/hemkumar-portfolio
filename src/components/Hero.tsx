import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ChevronDown, Instagram } from 'lucide-react';
import profileImg from '../assets/Profile.jpg';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center  pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-600 dark:text-blue-400">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-slate-900 dark:text-white"
            >
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Hemkumar</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-slate-600 dark:text-slate-400"
            >
              Software Developer & UI/UX Designer | MERN Stack | React Native | Figma Expert | Power BI Analyst | Problem Solver | Seeking Innovative Opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all transform hover:scale-105"
              >
                View Projects
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center space-x-4 pt-4"
            >
              <a
                href="https://github.com/hemkumar19"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-all transform hover:scale-110 shadow-md"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              </a>
              <a
                href="www.linkedin.com/in/hem-kumar-07b846248"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-all transform hover:scale-110 shadow-md"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </a>
              <a
                href="mailto:hemkumarratre1999@gmail.com"
                className="p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-all transform hover:scale-110 shadow-md"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </a>
              <a
                href="https://www.instagram.com/hemkumar_9r/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-all transform hover:scale-110 shadow-md"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </a>

            </motion.div>
          </motion.div>

          {/* Profile Image with 3D effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center z-10"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Glowing rings */}
              <div className="absolute inset-0 -z-10">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-2xl"
                />
              </div>

              {/* Profile container with glassmorphism */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm p-2 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/50 dark:border-slate-800/50 shadow-inner">
                  <img
                    src={profileImg}
                    alt="Hemkumar"
                    className="w-full h-full object-fill"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-blue-500/90 to-blue-600/90 backdrop-blur-md text-white rounded-full shadow-lg border border-white/20"
              >
                <span className="text-sm">⚛️ ReactJS</span>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-4 -left-4 px-4 py-2 bg-gradient-to-r from-purple-500/90 to-purple-600/90 backdrop-blur-md text-white rounded-full shadow-lg border border-white/20"
              >
                <span className="text-sm">📱 React Native</span>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -12, 0],
                  x: [0, -5, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-1/4 -left-6 px-4 py-2 bg-gradient-to-r from-pink-700/90 to-rose-600/90 backdrop-blur-md text-white rounded-full shadow-lg border border-white/20"
              >
                <span className="text-sm">🎨 UI/UX</span>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 12, 0],
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="absolute top-1/2 -right-6 px-4 py-2 bg-gradient-to-r from-emerald-700/90 to-teal-600/90 backdrop-blur-md text-white rounded-full shadow-lg border border-white/20"
              >
                <span className="text-sm">📊 Data Analyst</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-slate-400" />
      </motion.div>
    </section>
  );
}