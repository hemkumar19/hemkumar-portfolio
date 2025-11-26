import { motion } from 'motion/react';
import { useInView } from './useInView';
import { BarChart3, Code2, Palette, Rocket, Smartphone, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    description: 'MERN Stack, React Native, Node.js',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Figma, Canva',
  },
  {
    icon: Smartphone,  
    title: 'Mobile App Development',
    description: 'Android & iOS apps using React Native',
  },
  {
    icon: BarChart3,     
    title: 'Data Analyst',
    description: 'Power BI Ms Excel dashboards & data insights',
  },
];

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="py-6 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400">Get to know me</span>
          <h2 className="mt-2 text-slate-900 dark:text-white">About Me</h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose dark:prose-invert">
              <p className="text-slate-700 dark:text-slate-300">
                I'm a passionate software developer with extensive experience in building innovative mobile apps, 
                web applications, and crafting beautiful UI/UX designs. My journey in tech is driven by curiosity 
                and a desire to create impactful solutions.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                With strong expertise in the MERN Stack, React Native, Node.js, MongoDB, and Express.js, I bring 
                ideas to life through clean, scalable code. I have a particular interest in AI-powered applications 
                and automation systems that solve real-world problems.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                Beyond coding, I've designed multiple high-impact UI/UX projects in Figma, always focusing on user 
                experience and intuitive design. As a quick learner and problem solver, I'm constantly exploring new 
                technologies and methodologies.
              </p>
              <p className="text-slate-700 dark:text-slate-300">
                I'm open to innovative opportunities where I can contribute to impactful projects and collaborate 
                with talented teams to build the future of technology.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full border border-blue-500/20">
                📍 Raipur,Chhattisgarh
              </span>
              <span className="px-4 py-2 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full border border-green-500/20">
                ✅ Available for Work & Freelancing
              </span>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-xl hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
