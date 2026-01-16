import { motion } from 'motion/react';
import { useInView } from './useInView';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, ExternalLink, Trophy, CheckCircle2, Building2, ChevronRight } from 'lucide-react';

const education = [
  {
    id: 5,
    level: 'Post Graduation',
    degree: 'Master of Computer Applications',
    field: 'MCA',
    institution: 'Bhilai Institute of Technology, Durg',
    location: 'Durg, Chhattisgarh',
    period: '2022 - 2024',
    status: 'Completed',
    grade: 'CGPA: 7.5/10',
    description: 'Specialized in Software Development, Data Structures, Advanced Computing, and AI/ML applications.',
    icon: GraduationCap,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    achievements: 4,
  },
  {
    id: 4,
    level: 'Graduation',
    degree: 'Bachelor of Computer Applications',
    field: 'BCA',
    institution: 'Mahant Laxminarayan Das College, Raipur',
    location: 'Raipur, Chhattisgarh',
    period: '2019 - 2022',
    status: 'Completed',
    grade: '77.4%',
    description: 'Strong foundation in Programming, Database Management, Web Development, and Software Engineering.',
    icon: Building2,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    achievements: 4,
  },
  {
    id: 3,
    level: 'Diploma',
    degree: 'Diploma in Computer Applications',
    field: 'DCA',
    institution: 'Dr. C.V.Raman University, Bilaspur',
    location: 'Bilaspur, Chhattisgarh',
    period: '2018 - 2019',
    status: 'Completed',
    grade: '66%',
    description: 'Fundamentals of Programming, Database Management, and Web Development.',
    icon: Building2,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-100 dark:bg-cyan-900/30',
    achievements: 4,
  },
  {
    id: 2,
    level: 'Higher Secondary',
    degree: '12th (Science Stream - PCM)',
    field: 'CBSE Board',
    institution: 'Chhattisgarh Board of Secondary Education',
    location: 'Baloda Bazar, Chhattisgarh',
    period: '2016 - 2017',
    status: 'Completed',
    grade: '54.4%',
    description: 'Completed higher secondary education with Physics, Chemistry, Mathematics, and Computer Science.',
    icon: GraduationCap,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100 dark:bg-emerald-900/30',
    achievements: 4,
  },
  {
    id: 1,
    level: 'Secondary School',
    degree: '10th',
    field: 'CBSE Board',
    institution: 'Chhattisgarh Board of Secondary Education',
    location: 'Baloda Bazar, Chhattisgarh',
    period: '2014 - 2015',
    status: 'Completed',
    grade: '53%',
    description: 'Completed secondary education with focus on fundamental subjects.',
    icon: GraduationCap,
    color: 'text-green-600',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    achievements: 4,
  },
];

const certifications = [
  {
    title: 'MERN Stack Development',
    issuer: 'Udemy',
    date: '2023',
    skills: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'React Native Mobile Dev',
    issuer: 'Coursera',
    date: '2023',
    skills: ['React Native', 'Mobile Dev'],
  },
  {
    title: 'UI/UX Design Principles',
    issuer: 'Google Design',
    date: '2022',
    skills: ['Figma', 'Prototyping'],
  },
  {
    title: 'Power BI Data Analytics',
    issuer: 'Microsoft',
    date: '2022',
    skills: ['Power BI', 'Data Viz'],
  },
];

export function Education() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="education" className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 mb-4 shadow-lg shadow-purple-500/20">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Education & Certifications</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Academic journey and professional certifications
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2"
          >
            <GraduationCap className="w-5 h-5 text-purple-600" />
            Academic Timeline
          </motion.h3>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-blue-500 to-purple-500" />

            {/* Education Items */}
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 w-4 h-4 rounded-full bg-white dark:bg-slate-800 border-4 border-purple-500 z-10" />

                  {/* Content Card */}
                  <div className={`ml-10 p-4 rounded-xl border border-slate-200 dark:border-slate-700 ${edu.bgColor} hover:shadow-lg transition-shadow`}>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      {/* Left Column */}
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <div className={`p-2 rounded-lg ${edu.bgColor.replace('100', '200').replace('900/30', '800/50')}`}>
                            <edu.icon className={`w-4 h-4 ${edu.color}`} />
                          </div>
                          <span className="text-xs font-medium text-slate-600 dark:text-slate-400 px-2 py-1 rounded-full bg-white dark:bg-slate-700/50">
                            {edu.level}
                          </span>
                          <span className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            {edu.status}
                          </span>
                        </div>

                        <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{edu.degree}</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400">{edu.field}</p>
                        
                        <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
                          <div className="flex items-center gap-1">
                            <Building2 className="w-3 h-3" />
                            <span>{edu.institution}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-2 text-right">
                        <div className="flex items-center gap-2 justify-end">
                          <Calendar className="w-3 h-3 text-orange-500" />
                          <span className="text-xs text-slate-600 dark:text-slate-400">{edu.period}</span>
                        </div>
                        <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${edu.color.replace('text-', 'bg-').replace('600', '100')} dark:bg-opacity-20 ${edu.color}`}>
                          <Trophy className="w-3 h-3" />
                          {edu.grade}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-500">
                          {edu.achievements} achievements
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-orange-600" />
            Professional Certifications
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-purple-500/50 dark:hover:border-purple-500/50 p-4 transition-all hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1">{cert.title}</h4>
                    <p className="text-xs text-blue-600 dark:text-blue-400 mb-2">{cert.issuer}</p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-500">
                      <span>Issued {cert.date}</span>
                      <button className="flex items-center gap-1 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                        <span>Details</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all">
              View All Certifications
              <ExternalLink className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}