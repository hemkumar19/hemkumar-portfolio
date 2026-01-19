import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from './useInView';
import { ExternalLink, Github, Sparkles, ChevronLeft, ChevronRight, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Sparsh PSC Education',
    subtitle: 'MERN Full Stack',
    category: 'web',
    description: 'A complete job-searching platform with dashboards for candidates, recruiters and admin.',
    features: [
      'Job browsing with filters',
      'Candidate & recruiter registration',
      'Resume upload and profile builder',
      'Job application tracking system',
      'Recruiter dashboard for job management',
      'Admin dashboard for site management',
      'Mobile-friendly responsive UI',
      'Secure JWT authentication',
    ],
    tech: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Express'],
    demoUrl: 'https://sparshpsceducation.com',
    githubUrl: 'https://github.com/hemkumar/job-portal',
    color: 'bg-blue-50 dark:bg-blue-900/20',
    borderColor: 'border-blue-200 dark:border-blue-800',
  },
  {
    id: 2,
    title: 'EduChat AI',
    subtitle: 'Student Q&A Chatbot',
    category: 'ai',
    description: 'AI-powered chatbot designed for students to solve doubts instantly with intelligent responses.',
    features: [
      'AI answer generation',
      'Study notes creator',
      'Subject-wise chat',
      'Voice input support',
    ],
    tech: ['ReactJS', 'Node.js', 'OpenAI API'],
    demoUrl: '#demo-educhat',
    githubUrl: 'https://github.com/hemkumar/educhat-ai',
    color: 'bg-purple-50 dark:bg-purple-900/20',
    borderColor: 'border-purple-200 dark:border-purple-800',
  },
  {
    id: 3,
    title: 'CodeGen AI',
    subtitle: 'Developer Code Generator',
    category: 'ai',
    description: 'AI tool that generates code snippets for developers based on natural language prompts.',
    features: [
      'Multi-language support',
      'Code formatting',
      'Export & copy functions',
      'Syntax highlighting',
    ],
    tech: ['MERN Stack', 'AI API', 'Monaco Editor'],
    demoUrl: '#demo-codegen',
    githubUrl: 'https://github.com/hemkumar/codegen-ai',
    color: 'bg-green-50 dark:bg-green-900/20',
    borderColor: 'border-green-200 dark:border-green-800',
  },
  {
    id: 4,
    title: 'Billing & Menu System',
    subtitle: 'QR Based Restaurant',
    category: 'mobile',
    description: 'Restaurant menu QR scanning system to show items and generate bills seamlessly.',
    features: [
      'QR Table system',
      'Menu management',
      'Customer order page',
      'Admin billing dashboard',
    ],
    tech: ['React Native', 'Firebase', 'Node.js'],
    demoUrl: '#demo-qr-menu',
    githubUrl: 'https://github.com/hemkumar/qr-menu-system',
    color: 'bg-orange-50 dark:bg-orange-900/20',
    borderColor: 'border-orange-200 dark:border-orange-800',
  },
  {
    id: 5,
    title: 'UI/UX Portfolio',
    subtitle: 'Figma Design Projects',
    category: 'uiux',
    description: 'Collection of premium UI/UX designs including mobile apps, dashboards, and landing pages.',
    features: [
      'Mobile App UI',
      'Dashboard UI',
      'Landing page design',
      'E-commerce UI',
      'School App UI',
    ],
    tech: ['Figma', 'Adobe XD', 'Prototyping'],
    demoUrl: '#demo-uiux',
    githubUrl: 'https://github.com/hemkumar/uiux-portfolio',
    color: 'bg-violet-50 dark:bg-violet-900/20',
    borderColor: 'border-violet-200 dark:border-violet-800',
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Apps' },
  { id: 'ai', label: 'AI Projects' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'uiux', label: 'UI/UX' },
];

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentProject, setCurrentProject] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const current = filteredProjects[currentProject];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            A showcase of my recent work
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setCurrentProject(0);
              }}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Main Slideshow */}
        <div className="relative">
          <motion.div
            key={currentProject}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className={`rounded-xl border ${current.borderColor} ${current.color} p-6`}
          >
            {/* Project Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {current.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {current.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm">
                    {current.category.toUpperCase()}
                  </span>
                </div>
              </div>
              
              <p className="text-slate-700 dark:text-slate-300">
                {current.description}
              </p>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h4 className="font-medium text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Key Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {current.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="font-medium text-slate-900 dark:text-white mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {current.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowDetails(true)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                View Details
              </button>
              <a
                href={current.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Github className="w-5 h-5" />
                Code
              </a>
              <a
                href={current.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                Demo
              </a>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          {filteredProjects.length > 1 && (
            <>
              <button
                onClick={prevProject}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-lg hover:scale-110 transition-transform"
              >
                <ChevronLeft className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              </button>
              <button
                onClick={nextProject}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 p-2 bg-white dark:bg-sl300 border border-slate-200 dark:border-slate-700 rounded-full shadow-lg hover:scale-110 transition-transform"
              >
                <ChevronRight className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              </button>
            </>
          )}
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {filteredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentProject
                  ? 'w-8 bg-blue-600'
                  : 'w-2 bg-slate-300 dark:bg-slate-700'
              }`}
            />
          ))}
        </div>

        {/* Details Modal */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
              onClick={() => setShowDetails(false)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-xl p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowDetails(false)}
                  className="absolute top-4 right-4 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {current.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {current.subtitle}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-3">
                      Full Description
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300">
                      {current.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-3">
                      All Features
                    </h4>
                    <ul className="space-y-2">
                      {current.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-slate-600 dark:text-slate-400">
                          <span className="mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={current.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </a>
                    <a
                      href={current.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}