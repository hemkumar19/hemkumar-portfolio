import { motion } from 'motion/react';
import {
  GraduationCap,
  Building2,
  Calendar,
  MapPin,
  Award,
} from 'lucide-react';

const education = [
  {
    level: 'MCA',
    degree: 'Master of Computer Applications',
    institution: 'Bhilai Institute of Technology, Durg',
    location: 'Durg, Chhattisgarh',
    period: '2022 - 2024',
    grade: 'CGPA: 7.5',
  },
  {
    level: 'BCA',
    degree: 'Bachelor of Computer Applications',
    institution: 'Mahant Laxminarayan Das College, Raipur',
    location: 'Raipur, Chhattisgarh',
    period: '2019 - 2022',
    grade: '77.4%',
  },
  {
    level: 'DCA',
    degree: 'Diploma in Computer Applications',
    institution: 'Dr. C.V. Raman University',
    location: 'Bilaspur, Chhattisgarh',
    period: '2018 - 2019',
    grade: '66%',
  },
];

const certifications = [
  { title: 'MERN Stack Development', issuer: 'Udemy', year: '2023' },
  { title: 'React Native Development', issuer: 'Coursera', year: '2023' },
  { title: 'UI/UX Design Basics', issuer: 'Google', year: '2022' },
];

export function Education() {
  return (
    <section
      id="education"
      className="py-12 px-4 bg-white dark:bg-slate-900"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-8">
          Education & Certifications
        </h2>

        {/* Education */}
        <div className="space-y-4 mb-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
            >
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-purple-600 mt-1" />

                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-2 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <Building2 className="w-3 h-3" />
                      {edu.grade}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
