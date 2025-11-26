import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from './useInView';
import { ExternalLink, Github, Sparkles, Brain, Code, QrCode, Palette, ChevronUp, ChevronDown, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
    {
    id: 1,
    title: 'Sparsh PSC Education',
    subtitle: 'MERN Full Stack',
    category: 'web',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1641790016790-87f04a7fc9b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2IlMjBwb3J0YWwlMjB3ZWJzaXRlfGVufDF8fHx8MTc2NDA2OTMzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    demoUrl: 'https://sparshpsceducation.com',
    githubUrl: 'https://github.com/hemkumar/job-portal',
    description:
      'A complete job-searching platform where candidates can browse job listings, apply online, upload resumes, and manage their profiles. Recruiters can post jobs, track applications, and manage candidate data. Built with the MERN Stack, the platform provides a smooth and secure experience with dedicated dashboards for users and admins.',
    features: [
      'Job browsing with filters (location, role, experience, job type)',
      'Candidate & recruiter registration and login',
      'Resume upload and complete profile builder',
      'Job application system with application tracking',
      'Recruiter dashboard to post and manage job listings',
      'Admin dashboard to manage users, jobs, and site content',
      'Mobile-friendly and fully responsive UI',
      'Secure authentication using JWT',
    ],
    tech: ['React','Next.js', 'Node.js', 'MongoDB', 'Express'],
    gradient: 'from-blue-500 to-cyan-500',
  },

  {
    id: 2,
    title: 'EduChat AI',
    subtitle: 'Student Q&A Chatbot',
    category: 'ai',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGNoYXRib3QlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY0MDI4MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    demoUrl: '#demo-educhat',
    githubUrl: 'https://github.com/hemkumar/educhat-ai',
    description: 'AI-powered chatbot designed for students to solve doubts instantly with intelligent responses.',
    features: [
      'AI answer generation',
      'Study notes creator',
      'Subject-wise chat',
      'Voice input support',
    ],
    tech: ['ReactJS', 'Node.js', 'OpenAI API'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'CodeGen AI',
    subtitle: 'Developer Code Generator',
    category: 'ai',
    icon: Code,
    image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZWRpdG9yJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzY0MDY5MzM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    demoUrl: '#demo-codegen',
    githubUrl: 'https://github.com/hemkumar/codegen-ai',
    description: 'AI tool that generates code snippets for developers based on natural language prompts.',
    features: [
      'Multi-language support',
      'Code formatting',
      'Export & copy functions',
      'Syntax highlighting',
    ],
    tech: ['MERN Stack', 'AI API', 'Monaco Editor'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    title: 'Billing & Menu System',
    subtitle: 'QR Based Restaurant',
    category: 'mobile',
    icon: QrCode,
    image: 'https://images.unsplash.com/photo-1600147131759-880e94a6185f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxciUyMGNvZGUlMjByZXN0YXVyYW50fGVufDF8fHx8MTc2Mzk2OTIyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    demoUrl: '#demo-qr-menu',
    githubUrl: 'https://github.com/hemkumar/qr-menu-system',
    description: 'Restaurant menu QR scanning system to show items and generate bills seamlessly.',
    features: [
      'QR Table system',
      'Menu management',
      'Customer order page',
      'Admin billing dashboard',
    ],
    tech: ['React Native', 'Firebase', 'Node.js'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 5,
    title: 'UI/UX Portfolio',
    subtitle: 'Figma Design Projects',
    category: 'uiux',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWdtYSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjM5ODU1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    demoUrl: '#demo-uiux',
    githubUrl: 'https://github.com/hemkumar/uiux-portfolio',
    description: 'Collection of premium UI/UX designs including mobile apps, dashboards, and landing pages.',
    features: [
      'Mobile App UI',
      'Dashboard UI',
      'Landing page design',
      'E-commerce UI',
      'School App UI',
    ],
    tech: ['Figma', 'Adobe XD', 'Prototyping'],
    gradient: 'from-violet-500 to-purple-500',
  },
];

const filters = [
  { id: 'all', label: 'All Projects' },
  { id: 'ai', label: 'AI Projects' },
  { id: 'web', label: 'Web Apps' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'uiux', label: 'UI/UX' },
];

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleNextImage = () => {
    if (selectedProject !== null) {
      const project = projects.find(p => p.id === selectedProject);
      if (project) {
        setCurrentImageIndex((prev) => (prev + 1) % 3); // Cycle through 3 demo images
      }
    }
  };

  const handlePrevImage = () => {
    if (selectedProject !== null) {
      const project = projects.find(p => p.id === selectedProject);
      if (project) {
        setCurrentImageIndex((prev) => (prev - 1 + 3) % 3);
      }
    }
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, filteredProjects.length - 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setCurrentSlide(0);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-blue-600 dark:text-blue-400">My Work</span>
          <h2 className="mt-2 text-slate-900 dark:text-white">Featured Projects</h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => handleFilterChange(filter.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <div className="relative">
            {/* Desktop: Grid View */}
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} setSelectedProject={setSelectedProject} setCurrentImageIndex={setCurrentImageIndex} />
              ))}
            </motion.div>

            {/* Mobile: Single Slide View */}
            <div className="md:hidden relative">
              <motion.div
                key={`${activeFilter}-${currentSlide}`}
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  if (offset.x > 100 && currentSlide > 0) {
                    handlePrevSlide();
                  } else if (offset.x < -100 && currentSlide < filteredProjects.length - 1) {
                    handleNextSlide();
                  }
                }}
                className="w-full"
              >
                {filteredProjects[currentSlide] && (
                  <ProjectCard project={filteredProjects[currentSlide]} index={0} setSelectedProject={setSelectedProject} setCurrentImageIndex={setCurrentImageIndex} />
                )}
              </motion.div>

              {/* Navigation Arrows for Mobile */}
              {currentSlide > 0 && (
                <button
                  onClick={handlePrevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-transform"
                >
                  <ChevronLeft className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                </button>
              )}
              {currentSlide < filteredProjects.length - 1 && (
                <button
                  onClick={handleNextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-transform"
                >
                  <ChevronRight className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                </button>
              )}

              {/* Slide Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-600'
                        : 'w-2 bg-slate-300 dark:bg-slate-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </AnimatePresence>

        {/* Project Demo Modal with Vertical Slideshow */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 p-2 bg-white/90 dark:bg-slate-800/90 rounded-full hover:bg-white dark:hover:bg-slate-800 transition-colors"
                >
                  <X className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                </button>

                {/* Vertical Slideshow */}
                <div className="relative h-[60vh] overflow-hidden">
                  {/* Navigation Arrows */}
                  <button
                    onClick={handlePrevImage}
                    className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 p-3 bg-white/90 dark:bg-slate-800/90 rounded-full hover:bg-white dark:hover:bg-slate-800 transition-all hover:scale-110"
                  >
                    <ChevronUp className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 p-3 bg-white/90 dark:bg-slate-800/90 rounded-full hover:bg-white dark:hover:bg-slate-800 transition-all hover:scale-110"
                  >
                    <ChevronDown className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                  </button>

                  {/* Image Slideshow */}
                  <motion.div
                    className="h-full"
                    animate={{ y: `-${currentImageIndex * 100}%` }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    {[0, 1, 2].map((imgIndex) => {
                      const project = projects.find(p => p.id === selectedProject);
                      return (
                        <div key={imgIndex} className="h-full relative">
                          <ImageWithFallback
                            src={project?.image || ''}
                            alt={`${project?.title} - View ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${project?.gradient} opacity-20`} />
                          <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg">
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                              Demo View {imgIndex + 1} of 3 - Swipe up/down to see more
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                </div>

                {/* Project Details */}
                <div className="p-6 max-h-[30vh] overflow-y-auto">
                  {(() => {
                    const project = projects.find(p => p.id === selectedProject);
                    return project ? (
                      <>
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center`}>
                            <project.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-slate-900 dark:text-white">{project.title}</h3>
                            <p className="text-sm text-blue-600 dark:text-blue-400">{project.subtitle}</p>
                          </div>
                        </div>

                        <p className="text-slate-700 dark:text-slate-300 mb-4">{project.description}</p>

                        <div className="mb-4">
                          <h4 className="text-slate-900 dark:text-white mb-2">All Features:</h4>
                          <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-400">
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-blue-500 mr-2">✓</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-4">
                          <h4 className="text-slate-900 dark:text-white mb-2">Tech Stack:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm border border-blue-500/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <a
                            href={project.demoUrl}
                            className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all"
                          >
                            <ExternalLink className="w-5 h-5" />
                            <span>Live Demo</span>
                          </a>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                          >
                            <Github className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                            <span className="text-slate-900 dark:text-white">GitHub</span>
                          </a>
                        </div>
                      </>
                    ) : null;
                  })()}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, setSelectedProject, setCurrentImageIndex }: { project: any, index: number, setSelectedProject: (id: number | null) => void, setCurrentImageIndex: (index: number) => void }) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.08, y: -8 }}
      whileTap={{ scale: 0.98 }}
      className="group"
    >
      <div className="h-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-2xl">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project.id)}>
          <motion.div
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full"
          >
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-20 transition-opacity`} />
          <div className="absolute top-4 right-4 p-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg">
            <project.icon className="w-6 h-6 text-slate-700 dark:text-slate-300" />
          </div>
          <motion.div 
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1 }}
          >
            <div className="px-4 py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg">
              <p className="text-sm text-slate-900 dark:text-white">Click to view details</p>
            </div>
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-slate-900 dark:text-white mb-1">{project.title}</h3>
            <p className="text-sm text-blue-600 dark:text-blue-400">{project.subtitle}</p>
          </div>

          <p className="text-slate-700 dark:text-slate-300 text-sm line-clamp-2">{project.description}</p>

          {/* Features */}
          <div className="space-y-2">
            <p className="text-slate-900 dark:text-white flex items-center text-sm">
              <Sparkles className="w-4 h-4 mr-2 text-blue-500" />
              Key Features:
            </p>
            <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
              {project.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-xs border border-blue-500/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <a
              href={project.demoUrl}
              onClick={(e) => {
                e.preventDefault();
                setSelectedProject(project.id);
                setCurrentImageIndex(0);
              }}
              className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Demo</span>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
            >
              <Github className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}