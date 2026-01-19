import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Software Developer',
    company: 'Tshrijanali Food and Services Pvt Ltd',
    location: 'Raipur, Chhattisgarh',
    period: '2025 - Present',
    type: 'Full-Time',
    description: 'Worked as a versatile Full Stack Developer and UI/UX Designer, contributing to end-to-end product development across web and mobile platforms.',
    responsibilities: [
      'Developed full-stack applications using MERN Stack',
      'Built mobile applications using React Native',
      'Designed user interfaces using Figma',
      'Integrated REST APIs and improved application performance',
      'Created dashboards using Power BI',
      'Collaborated with cross-functional teams',
      'Conducted debugging, testing, and documentation'
    ],
    color: 'border-l-orange-500',
  },
  {
    title: 'Computer Teacher',
    company: 'Milestone Softtech Pvt Ltd',
    location: 'Raipur, Chhattisgarh',
    period: 'Nov 2024 - Apr 2025',
    type: 'Teaching',
    description: 'Taught computer fundamentals and professional courses to students, focusing on building strong foundational skills.',
    responsibilities: [
      'Conducted classes for DCA and PGDCA programs',
      'Taught basic computer concepts including MS Office',
      'Prepared study materials and practical exercises',
      'Guided students in developing computer literacy',
      'Assisted students with practical labs',
      'Evaluated student performance'
    ],
    color: 'border-l-blue-500',
  },
  {
    title: 'Software Developer',
    company: 'Techonet Pvt Ltd',
    location: 'Durg, Chhattisgarh',
    period: 'Mar 2024 - Aug 2024',
    type: 'Internship',
    description: 'Completed a 6-month internship as a Software Developer, where I designed and developed a full-featured Job Searching Platform.',
    responsibilities: [
      'Developed Job Searching Platform using MERN Stack',
      'Built user dashboards for job seekers and recruiters',
      'Implemented job posting and filtering features',
      'Integrated backend APIs for job management',
      'Created admin panel for platform management',
      'Worked with REST APIs and JWT authentication',
      'Conducted testing and performance optimization'
    ],
    color: 'border-l-purple-500',
  },
];

export function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Work Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            My professional journey in software development
          </p>
        </motion.div>

        {/* Experience List */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 pl-4 ${exp.color} border-l-4`}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm">
                      {exp.type}
                    </span>
                    <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-4 text-sm">
                  <MapPin className="w-4 h-4" />
                  {exp.location}
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-3">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mt-2 flex-shrink-0" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {resp}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}