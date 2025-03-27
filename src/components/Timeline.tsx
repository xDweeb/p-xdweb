import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, GraduationCap, Briefcase, Award, Star, X, ExternalLink } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
  category: 'education' | 'work' | 'achievement';
  details?: string[];
  image?: string;
  period?: string;
  link?: {
    url: string;
    text: string;
  };
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '2024 - 2025',
    title: 'Second Year in Artificial Intelligence (Data Analyst Specialization)',
    description: 'Pursuing advanced studies in AI with a focus on Data Analysis at CMC Rabat.',
    icon: GraduationCap,
    category: 'education',
    period: '2024 - 2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8REFUQSUyMEFOQUxZU1R8ZW58MHx8MHx8fDA%3D',
    details: [
      'Advanced coursework in data analytics and machine learning',
      'Engaged in innovative data-driven projects',
      'Preparing to lead in technological innovation'
    ]
  },
  {
    year: '2023 - Present',
    title: 'Teacher at Algoritmics',
    description: 'Part-time programming instructor teaching Scratch, Python, and web development.',
    icon: Briefcase,
    category: 'work',
    period: '2023 - Present',
    image: 'https://media.istockphoto.com/id/670712598/photo/back-view-of-schoolboy-raising-hand-to-answer-the-question.webp?a=1&b=1&s=612x612&w=0&k=20&c=zUKwb6lLQ9c4wkYyr401oWZxuSEPjZXZkOXZxXLo2IU=',
    details: [
      'Teaching students aged 6-18',
      'Developing interactive curriculum and projects',
      'Mentoring young and aspiring developers'
    ],
    link: {
      url: 'https://algoritmics.com',
      text: 'Visit Algoritmics'
    }
  },
  {
    year: '2025',
    title: 'ALX Software Engineering Program',
    description: 'Completed intensive full-stack development training through ALX.',
    icon: GraduationCap,
    category: 'education',
    period: 'May 2023 - Jan 2025',
    image: '/public/Taibi El Yakouti.png',
    details: [
      'Learned modern web development technologies',
      'Gained experience in DevOps, cloud infrastructure, and production-grade projects',
      'Collaborated on team projects and solved real-world challenges'
    ]
  },
  {
    year: '2024 - Present',
    title: 'Robotics Competition Success',
    description: 'Achieved multiple awards in national and international robotics competitions.',
    icon: Award,
    category: 'achievement',
    period: 'May 2023 - Nov 2024',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800',
    details: [
      '1st place in national robotics competitions (twice)',
      '3rd place in an international competition in Tunisia',
      'Led a team to develop innovative robotics solutions',
      '1st place at EHTP Casablanca (Jun 2024)',
      '1st place at l’ENSA El Jadida (May 2024)',
      '1st place at FST Tanger (Jun 2023)',
      '1st place at l’ENSA Agadir (Jun 2023)',
      '2nd place at l’ENSA El Jadida (May 2023)'
    ]
  },
  {
    year: '2022 - Present',
    title: 'Hospitality Business',
    description: 'Managing properties on Airbnb and Booking.com.',
    icon: Star,
    category: 'work',
    period: 'Jun 2022 - Present',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800',
    details: [
      'Overseeing multiple high-end properties',
      'Achieving high guest satisfaction and ratings',
      'Implementing efficient booking and management systems'
    ],
    link: {
      url: 'https://www.airbnb.com',
      text: 'View Properties'
    }
  },
  {
    year: '2023 - 2024',
    title: 'First Year in Artificial Intelligence',
    description: 'Enrolled in the Artificial Intelligence program at CMC Rabat.',
    icon: GraduationCap,
    category: 'education',
    period: '2023 - 2024',
    image: 'https://media.istockphoto.com/id/1761638528/photo/education-technology-and-ai-artificial-intelligence-concept-women-use-laptops-learn-lessons.webp?a=1&b=1&s=612x612&w=0&k=20&c=tWnlTBmtZoVNTQDDfZs7EcN903wbkiFyrBXW2UZgIvM=',
    details: [
      'Introduction to AI, data analytics, and machine learning',
      'Engaged in hands-on projects and tech competitions'
    ]
  },
  {
    year: '2022 - 2023',
    title: 'Second Year in SMPC',
    description: 'Continued studies in Sciences Mathématiques et Physiques at Université Mohammed V de Rabat.',
    icon: GraduationCap,
    category: 'education',
    period: '2022 - 2023',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800',
    details: [
      'Advanced coursework in mathematics and physics',
      'Strengthened analytical and critical thinking abilities'
    ]
  },
  {
    year: '2021 - 2022',
    title: 'First Year in SMPC',
    description: 'Studied Sciences Mathématiques et Physiques at Université Hassan II de Casablanca (Ben M\'SICK).',
    icon: GraduationCap,
    category: 'education',
    period: '2021 - 2022',
    image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800',
    details: [
      'Focused on mathematics and physics fundamentals',
      'Developed analytical and problem-solving skills'
    ]
  },
  {
    year: '2019 - 2021',
    title: 'Bac in Sciences de Physique et Chimie',
    description: 'Completed high school at Lycée Abderrahmane Belkorchi, Casablanca with Mention Bien.',
    icon: GraduationCap,
    category: 'education',
    period: '2019 - 2021',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800',
    details: [
      'Bac Science de Physique et Chimie, Option Français',
      'High academic achievement with Mention Bien',
      'Solid foundation in scientific principles'
    ]
  }
];



interface TimelineModalProps {
  event: TimelineEvent;
  onClose: () => void;
}

const TimelineModal: React.FC<TimelineModalProps> = ({ event, onClose }) => (
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
        {event.image && (
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-48 object-cover rounded-t-xl"
          />
        )}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 rounded-full p-2 hover:bg-white dark:hover:bg-gray-700 transition-colors"
        >
          <X className="w-5 h-5 text-gray-900 dark:text-white" />
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-500/10 dark:bg-blue-500/20 rounded-lg">
            <event.icon className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{event.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{event.period}</p>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-6">{event.description}</p>

        <div className="space-y-6">
          {event.details && (
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Details</h4>
              <ul className="space-y-3">
                {event.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {event.link && (
            <a
              href={event.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              {event.link.text}
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Timeline: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const displayedEvents = isExpanded ? timelineEvents : timelineEvents.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Roadmap & Timeline</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            My journey through education, work, and achievements
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />

          {/* Timeline Events */}
          <div className="space-y-12">
            {displayedEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Point */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full border-2 border-blue-500 flex items-center justify-center">
                  <event.icon className="w-4 h-4 text-blue-500" />
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
                    onClick={() => setSelectedEvent(event)}
                  >
                    <span className="text-sm font-semibold text-blue-500">{event.year}</span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{event.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{event.description}</p>
                    
                    {event.image && (
                      <div className="mt-4 aspect-video rounded-lg overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    
                    <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <span>Click to view details</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* See More Button */}
          {timelineEvents.length > 3 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-12 mx-auto flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all relative"
            >
              <span className="font-medium text-gray-900 dark:text-white">
                {isExpanded ? 'Show Less' : 'See More'}
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
      </div>

      <AnimatePresence>
        {selectedEvent && (
          <TimelineModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Timeline;