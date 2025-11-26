import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Briefcase, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    title: 'Software Developer',
    company: 'Tshrijanali Food and Services Pvt Ltd',
    location: 'Raipur,Chhattisgarh',
    period: '2025- Present',
    type: 'Full-Time',
    description: 'Worked as a versatile Full Stack Developer and UI/UX Designer, contributing to end-to-end product development across web and mobile platforms.',
    responsibilities: [
      'Developed full-stack applications using MERN Stack (MongoDB, ExpressJS, ReactJS, NodeJS)',
      'Built and optimized mobile applications using React Native',
      'Designed user-friendly interfaces and prototypes using Figma',
      'Integrated REST APIs and improved application performance across systems',
      'Created dashboards and analytical visualizations using Power BI',
      'Collaborated with cross-functional teams to deliver scalable and efficient software solutions',
      'Conducted debugging, testing, and documentation for high-quality deployment'
    ],
    gradient: 'from-orange-500 via-pink-600 to-rose-500',
    iconBg: 'bg-gradient-to-br from-orange-500 to-pink-600',
  },
  {
    title: 'Computer Teacher',
    company: 'Milestone Softtech Pvt Ltd',
    location: 'Raipur,Chhattisgarh',
    period: 'Nov/2024 - Apr/2025',
    type: 'Teaching',
    description: 'Taught computer fundamentals and professional courses to students, focusing on building strong foundational skills.',
    responsibilities: [
      'Conducted classes for DCA and PGDCA programs',
      'Taught basic computer concepts including MS Office, Internet, and operating systems',
      'Prepared study materials, assignments, and practical exercises',
      'Guided students in developing computer literacy and essential technical skills',
      'Assisted students with practical labs and project work',
      'Evaluated student performance and provided personalized feedback'
    ],
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500',
  },
  {
    title: 'Software Developer',
    company: 'Techonet Pvt Ltd',
    location: 'Durg,Chhattisgarh',
    period: 'Mar/2024 - Aug/2024',
    type: 'Internship',
    description: 'Completed a 6-month internship as a Software Developer, where I designed and developed a full-featured Job Searching Platform as a part of my academic project.',
    responsibilities: [
      'Developed a complete Job Searching Platform using the MERN Stack (MongoDB, ExpressJS, ReactJS, NodeJS)',
      'Built user dashboards for job seekers and recruiters with secure authentication and authorization',
      'Implemented job posting, job filtering, application tracking, and saved jobs features',
      'Integrated backend APIs for job listings, applications, and profile management',
      'Created an admin panel to manage jobs, users, and platform data',
      'Worked with REST APIs, JWT authentication, and database schema design',
      'Conducted testing, debugging, and performance optimization across the platform',
      'Collaborated with faculty mentors and peers to meet project milestones and requirements'
    ],
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500',
  },
];

export function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mb-6 shadow-lg shadow-blue-500/30"
          >
            <Briefcase className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="mt-2 text-slate-900 dark:text-white">Work Experience</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My professional journey in software development and design
          </p>
        </motion.div>

        {/* e */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-20 md:pl-28 group"
              >
                {/* Timeline Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className={`absolute left-4 md:left-8 top-6 w-8 h-8 ${exp.iconBg} rounded-xl shadow-lg flex items-center justify-center z-10 group-hover:scale-110 transition-transform`}
                >
                  <Briefcase className="w-4 h-4 text-white" />
                </motion.div>

                {/* Experience Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-slate-700 p-6 md:p-8 shadow-lg hover:shadow-2xl hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all relative overflow-hidden"
                >
                  {/* Gradient Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.gradient}`} />

                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-slate-900 dark:text-white mb-2 flex items-center gap-3">
                        {exp.title}
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs bg-gradient-to-r ${exp.gradient} text-white shadow-md`}>
                          {exp.type}
                        </span>
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                          <Award className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/50 px-4 py-2 rounded-xl">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>Experience Timelin

                  {/* Responsibilities */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`w-1 h-6 bg-gradient-to-b ${exp.gradient} rounded-full`} />
                      <p className="text-slate-900 dark:text-white">Key Responsibilities</p>
                    </div>
                    <div className="grid gap-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                          className="flex items-start gap-3 group/item"
                        >
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${exp.gradient} flex items-center justify-center mt-0.5 shadow-sm group-hover/item:scale-110 transition-transform`}>
                            <CheckCircle2 className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed group-hover/item:text-slate-900 dark:group-hover/item:text-slate-200 transition-colors">
                            {resp}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Timeline End Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: experiences.length * 0.2 + 0.3 }}
            className="relative pl-20 md:pl-28 mt-8"
          >
            <div className="absolute left-4 md:left-8 w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full shadow-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400 italic">
              Beginning of professional journey
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
