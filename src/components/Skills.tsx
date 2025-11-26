import { motion } from 'motion/react';
import { useInView } from './useInView';
import {
  Code2,
  Smartphone,
  Database,
  Palette,
  GitBranch,
  BarChart3,
  Globe,
  Server,
  FileJson,
  Shield,
  Cloud,
  Figma,
  Cylinder,
  Table,
  Flame,
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'ReactJS', icon: Code2 },
      { name: 'React Native', icon: Smartphone },
      { name: 'HTML/CSS', icon: Globe },
      { name: 'JavaScript', icon: FileJson },
      { name: 'Tailwind CSS', icon: Palette },
      { name: 'Bootstrap', icon: Palette },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', icon: Server },
      { name: 'Express.js', icon: Server },
      { name: 'Python', icon: Code2 },   // FIXED: correct spelling + correct icon
      { name: 'REST APIs', icon: Globe },
      { name: 'JWT Auth', icon: Shield },
    ],
  },
   {
    title: 'Tools & Others',
    icon: GitBranch,
    skills: [
      { name: 'Cloud Hosting', icon: Cloud },
      { name: 'Git & GitHub', icon: GitBranch },
      { name: 'Power BI', icon: BarChart3 },
      { name: 'Postman', icon: Globe },
     
    ],
  },
  {
    title: 'Database',
    icon: Database,
    skills: [
      { name: 'MongoDB', icon: Cylinder },     // Better icon for NoSQL DB
      { name: 'MySQL', icon: Table },          // Represents relational DB
      { name: 'Firebase', icon: Flame },       // Perfect icon for Firebase
    ],
  },

  {
    title: 'UI/UX',
    icon: Figma,
    skills: [
      { name: 'Figma', icon: Figma },
      { name: 'Canva', icon: Palette },
    ],
  },
];

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-blue-400">What I know</span>
          <h2 className="mt-2 text-slate-900 dark:text-white">Skills & Technologies</h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.08 }}
              className="group"
            >
              <div className="h-full p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-xl hover:scale-105">
                {/* Category Header */}
                <div className="flex flex-col items-center text-center space-y-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-sm text-slate-900 dark:text-white">{category.title}</h4>
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.08 + skillIndex * 0.03,
                      }}
                      className="flex items-center space-x-2 p-2 bg-slate-50 dark:bg-slate-900/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                    >
                      <skill.icon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                      <span className="text-xs text-slate-700 dark:text-slate-300 truncate">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '15+', label: 'Projects Completed' },
            { number: '5+', label: 'Technologies' },
            { number: '100%', label: 'Client Satisfaction' },
            { number: '2+', label: 'Years Experience' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-2xl border border-blue-500/20 text-center"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <p className="text-slate-600 dark:text-slate-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}