import { motion } from 'motion/react';
import { useInView } from './useInView';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, ExternalLink, School, Trophy, CheckCircle2, Building2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const education = [
  {
    id: 5,
    level: 'Post Graduation',
    degree: 'Master of Computer Applications',
    field: 'MCA',
    institution: 'Bhilai Institute of Technology,Durg',
    location: 'Durg,Chhattisgarh',
    period: '2022 - 2024',
    status: 'Completed',
    grade: 'CGPA: 7.5/10',
    description: 'Specialized in Software Development, Data Structures, Advanced Computing, and AI/ML applications with focus on modern software engineering practices and emerging technologies.',
    image: 'https://images.unsplash.com/photo-1557878074-d712c4680b76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXN0ZXIlMjBkZWdyZWUlMjBncmFkdWF0aW9uJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzY0MDcyMTA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: GraduationCap,
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    iconBg: 'bg-gradient-to-br from-violet-500 to-purple-600',
    achievements: [
      'Best Project Award for AI-powered Application',
      'Published Research Paper on Machine Learning',
      'Led Technical Team in College Fest',
      'Completed Advanced Computing Specialization',
    ],
  },
  {
    id: 4,
    level: 'Graduation',
    degree: 'Bachelor of Computer Applications',
    field: 'BCA',
    institution: 'Mahant Laxminarayan Das College,Raipur',
    location: 'Raipur,Chhattisgarh',
    period: '2019 - 2022',
    status: 'Completed',
    grade: '77.4%',
    description: 'Strong foundation in Programming, Database Management, Web Development, Software Engineering, and Computer Networks with hands-on practical experience.',
    image: 'https://images.unsplash.com/photo-1654443757328-7622d3938883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY0MDAxMzIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Building2,
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-600',
    achievements: [
      'Technical Club President',
      'Winner of Inter-College Hackathon',
      'Organized Multiple Tech Events',
      'Completed 3 Major Web Projects',
    ],
  },
  {
    id: 3,
    level: 'Deploma',
    degree: 'Deploma in Computer Applications',
    field: 'DCA',
    institution: 'Dr. C.V.Raman University, Bilaspur',
    location: 'Bilaspur,Chhattisgarh',
    period: '2018 - 2019',
    status: 'Completed',
    grade: '66%',
    description: 'Strong foundation in Programming, Database Management, Web Development, Software Engineering, and Computer Networks with hands-on practical experience.',
    image: 'https://images.unsplash.com/photo-1654443757328-7622d3938883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY0MDAxMzIxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    icon: Building2,
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-600',
    achievements: [
      'Technical Club President',
      'Winner of Inter-College Hackathon',
      'Organized Multiple Tech Events',
      'Completed 3 Major Web Projects',
    ],
  },
  {
    id: 2,
    level: 'Higher Secondary School',
    degree: ' 12th',
    field: 'Science Stream (PCM)',
    institution: 'Chhattisgarh Board of  Secondary Education Raipur',
    location: 'Baloda Bazar,Chhattisgarh',
    period: '2016 - 2017',
    status: 'Completed',
    grade: '54.4%',
    description: 'Completed higher secondary education with Physics, Chemistry, Mathematics, and Computer Science, building a strong foundation in analytical and logical thinking.',
    image: 'https://images.unsplash.com/photo-1624731556177-33d3cdf2d425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwZ3JhZHVhdGlvbiUyMHN0dWRlbnRzfGVufDF8fHx8MTc2NDA3MjEwOXww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: School,
    gradient: 'from-emerald-500 via-green-500 to-teal-500',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-green-600',
    achievements: [
      'School Computer Science Topper',
      'Participated in National Science Olympiad',
      'Led School Tech Club',
      'Excellence in Mathematics',
    ],
  },
  {
    id: 1,
    level: 'Higher School',
    degree: '10th',
    field: 'General Stream ',
    institution: 'Chhattisgarh Board of  Secondary Education Raipur',
    location: 'Baloda Bazar,Chhattisgarh',
    period: '2014 - 2015',
    status: 'Completed',
    grade: '53%',
    description: 'Completed higher secondary education with Physics, Chemistry, Mathematics, and Computer Science, building a strong foundation in analytical and logical thinking.',
    image: 'https://images.unsplash.com/photo-1624731556177-33d3cdf2d425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwZ3JhZHVhdGlvbiUyMHN0dWRlbnRzfGVufDF8fHx8MTc2NDA3MjEwOXww&ixlib=rb-4.1.0&q=80&w=1080',
    icon: School,
    gradient: 'from-emerald-500 via-green-500 to-teal-500',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-green-600',
    achievements: [
      'School Computer Science Topper',
      'Participated in National Science Olympiad',
      'Led School Tech Club',
      'Excellence in Mathematics',
    ],
  },
];

const certifications = [
  {
    title: 'MERN Stack Development',
    issuer: 'Udemy',
    date: '2023',
    credentialId: 'UC-MERN-2023',
    description: 'Full-stack development with MongoDB, Express.js, React, and Node.js',
    skills: ['React', 'Node.js', 'MongoDB', 'Express'],
    icon: Award,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'React Native Mobile Development',
    issuer: 'Coursera',
    date: '2023',
    credentialId: 'CRSA-RN-2023',
    description: 'Building cross-platform mobile applications with React Native',
    skills: ['React Native', 'Mobile Dev', 'Firebase'],
    icon: Award,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'UI/UX Design Principles',
    issuer: 'Google Design',
    date: '2022',
    credentialId: 'GD-UX-2022',
    description: 'User experience design, prototyping, and user research methodologies',
    skills: ['Figma', 'Prototyping', 'User Research'],
    icon: Award,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Power BI Data Analytics',
    issuer: 'Microsoft Learn',
    date: '2022',
    credentialId: 'MS-PBI-2022',
    description: 'Data visualization, business intelligence, and analytics with Power BI',
    skills: ['Power BI', 'Data Viz', 'Analytics'],
    icon: Award,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'JavaScript Advanced Concepts',
    issuer: 'freeCodeCamp',
    date: '2022',
    credentialId: 'FCC-JS-2022',
    description: 'Advanced JavaScript, ES6+, async programming, and design patterns',
    skills: ['JavaScript', 'ES6+', 'Async/Await'],
    icon: Award,
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Git & GitHub Fundamentals',
    issuer: 'GitHub Learning Lab',
    date: '2021',
    credentialId: 'GH-GIT-2021',
    description: 'Version control, collaboration, and open-source contribution',
    skills: ['Git', 'GitHub', 'Version Control'],
    icon: Award,
    gradient: 'from-slate-500 to-gray-600',
  },
];

export function Education() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto" ref={ref}>
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
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 mb-6 shadow-lg shadow-purple-500/30"
          >
            <BookOpen className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="mt-2 text-slate-900 dark:text-white">Education & Certifications</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My academic journey and professional certifications
          </p>
        </motion.div>

        {/* Education Timeline Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-slate-900 dark:text-white">Academic Journey</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">From school to post-graduation</p>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-blue-500 to-purple-500" />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                  className="relative group"
                >
                  {/* Timeline Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.15 }}
                    className={`absolute -top-3 -left-3 w-12 h-12 ${edu.iconBg} rounded-xl shadow-lg flex items-center justify-center z-10 group-hover:scale-110 transition-transform`}
                  >
                    <edu.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Education Card */}
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all shadow-lg hover:shadow-2xl overflow-hidden h-full"
                  >
                    {/* Card Header with Image */}
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <ImageWithFallback
                        src={edu.image}
                        alt={`${edu.degree} at ${edu.institution}`}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-70`} />
                      
                      {/* Overlay Content */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-between">
                        <div className="flex items-start justify-between">
                          <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg text-xs text-slate-900 dark:text-white shadow-md">
                            {edu.level}
                          </span>
                          <span className="px-3 py-1 bg-green-500/90 backdrop-blur-sm rounded-lg text-xs text-white shadow-md flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            {edu.status}
                          </span>
                        </div>
                        
                        <div>
                          <h4 className="text-white mb-2">{edu.degree}</h4>
                          <p className="text-white/90 text-sm mb-2">{edu.field}</p>
                          <div className="flex items-center gap-2 text-white/80 text-sm">
                            <Trophy className="w-4 h-4" />
                            <span>{edu.grade}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 space-y-4">
                      {/* Institution Info */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-700">
                        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                          <Building2 className="w-4 h-4 text-blue-500" />
                          <span className="text-sm">{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-purple-500" />
                          <span className="text-sm text-slate-600 dark:text-slate-400">{edu.location}</span>
                        </div>
                      </div>

                      {/* Period */}
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <Calendar className="w-4 h-4 text-orange-500" />
                        <span className="text-sm">{edu.period}</span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Achievements */}
                      <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                        <div className="flex items-center gap-2 mb-3">
                          <div className={`w-1 h-6 bg-gradient-to-b ${edu.gradient} rounded-full`} />
                          <p className="text-sm text-slate-900 dark:text-white">Key Achievements</p>
                        </div>
                        <div className="grid gap-2">
                          {edu.achievements.map((achievement, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.4, delay: 0.5 + index * 0.15 + idx * 0.05 }}
                              className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                            >
                              <span className="text-green-500 text-xs mt-0.5">✓</span>
                              <span>{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Gradient Bottom Border */}
                    <div className={`h-1 bg-gradient-to-r ${edu.gradient}`} />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Timeline Start Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative pl-16 md:pl-20 mt-8"
            >
              <div className="absolute left-2 md:left-4 w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full shadow-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400 italic">
                Academic journey begins
              </div>
            </motion.div>
          </div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center shadow-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-slate-900 dark:text-white">Professional Certifications</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Industry-recognized credentials and skills</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all shadow-lg hover:shadow-2xl overflow-hidden"
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${cert.gradient}`} />
                
                <div className="p-6 space-y-4">
                  {/* Icon and Title */}
                  <div className="flex items-start justify-between gap-3">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      <cert.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/50 px-2 py-1 rounded">
                      {cert.date}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h4 className="text-slate-900 dark:text-white mb-2">{cert.title}</h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">{cert.issuer}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Credential ID */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <span className="text-xs text-slate-500 dark:text-slate-500 font-mono">
                      {cert.credentialId}
                    </span>
                    <button className="flex items-center gap-1 text-xs text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}