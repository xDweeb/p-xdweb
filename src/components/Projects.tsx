import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, X, Filter, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const projects = [
  {
    id: 1,
    title: 'Northwind Sales Dashboard',
    description: 'Business intelligence solution analyzing sales and performance',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
    category: 'Data Analysis',
    technologies: ['Talend', 'MySQL', 'Power BI', 'Python Dash'],
    githubUrl: '#',
    liveUrl: '#',
    longDescription: 'Built a comprehensive business intelligence solution analyzing sales, employee performance, and customer segmentation. Automated data extraction with Talend and developed interactive dashboards for real-time insights.',
  },
  {
    id: 2,
    title: 'Finance Dashboard',
    description: 'Interactive Power BI dashboard for financial analysis',
    image: '/public/5.png',
    category: 'Data Visualization',
    technologies: ['Power BI', 'DAX', 'Excel', 'Figma'],
    githubUrl: 'https://github.com/xDweeb/Finance-Dashboard-PowerBi',
    liveUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNGMyYjI2NzEtNjhmMi00NjNkLWJiM2YtOGRkYTU3MTg2NjkyIiwidCI6IjFjOTU3MTRkLTczMWEtNDVmZS04YjY2LWMwNTI2MmY4OGZjZSJ9',
    longDescription: 'Created an interactive finance dashboard to visualize key financial metrics, expenses, and trends. Implemented complex DAX measures and dynamic filtering options.',
  },
  {
    id: 3,
    title: 'Robotics Competition Projects',
    description: 'Award-winning robotics projects and competitions',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800',
    category: 'Robotics',
    technologies: ['Arduino', 'Python', 'C++', 'PCB Design'],
    githubUrl: '#',
    liveUrl: '#',
    longDescription: 'Led multiple robotics projects, winning first place twice in national competitions and third place internationally. Designed and programmed robots using Arduino, AI algorithms, and custom PCB designs.',
  },
  {
    id: 4,
    title: 'LinkedIn Automation',
    description: 'AI-powered automation for LinkedIn interactions',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800',
    category: 'Automation',
    technologies: ['Python', 'Make', 'Zapier', 'Phantombuster'],
    githubUrl: '#',
    liveUrl: '#',
    longDescription: 'Developed AI-powered automation solutions for LinkedIn interactions using Make, Zapier, Phantombuster, and custom Python scripts. Streamlined networking and engagement processes.',
  },
  {
    id: 5,
    title: 'Full-Stack Web App',
    description: 'AI-powered automation for LinkedIn interactions',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800',
    category: 'Automation',
    technologies: ['Python', 'Make', 'Zapier', 'Phantombuster'],
    githubUrl: '#',
    liveUrl: '#',
    longDescription: 'Developed AI-powered automation solutions for LinkedIn interactions using Make, Zapier, Phantombuster, and custom Python scripts. Streamlined networking and engagement processes.',
  },
  {
    id: 6,
    title: 'Full-Stack Web App',
    description: 'AI-powered automation for LinkedIn interactions',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800',
    category: 'Automation',
    technologies: ['Python', 'Make', 'Zapier', 'Phantombuster'],
    githubUrl: '#',
    liveUrl: '#',
    longDescription: 'Developed AI-powered automation solutions for LinkedIn interactions using Make, Zapier, Phantombuster, and custom Python scripts. Streamlined networking and engagement processes.',
  },
];

const ProjectModal = ({ project, onClose }) => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover rounded-t-xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 rounded-full p-2 hover:bg-white dark:hover:bg-gray-700 transition-colors"
          >
            <X className="w-5 h-5 text-gray-900 dark:text-white" />
          </button>
        </div>

        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{project.longDescription}</p>

          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">{t('projects.technologies')}</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href={project.githubUrl}
              target="_blank" // Add this attribute
              rel="noopener noreferrer" // Add this for security reasons
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              <Github className="w-5 h-5" />
              {t('projects.viewCode')}
            </a>
            <a
              href={project.liveUrl}
              target="_blank" // Add this attribute
              rel="noopener noreferrer" // Add this for security reasons
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-900 dark:text-white"
            >
              <ExternalLink className="w-5 h-5" />
              {t('projects.liveDemo')}
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t } = useTranslation();

  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const getCategoryTranslationKey = (category: string) => {
    const key = category.toLowerCase().replace(/\s+/g, '_');
    return `projects.categories.${key}`;
  };

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const displayedProjects = isExpanded ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section id="projects" className="py-20 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {t('projects.description')}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setSelectedCategory(category);
                  setIsExpanded(false);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category === 'All' && <Filter className="w-4 h-4" />}
                {t(getCategoryTranslationKey(category))}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium">
                      {t('projects.viewDetails')}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium">
                      {t(getCategoryTranslationKey(project.category))}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length > 4 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-12 mx-auto flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            <span className="font-medium text-gray-900 dark:text-white">
              {isExpanded ? t('timeline.showLess') : t('timeline.showMore')}
            </span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-gray-900 dark:text-white" />
            </motion.div>
          </motion.button>
        )}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;