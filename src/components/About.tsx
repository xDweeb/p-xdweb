import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Briefcase, GraduationCap, Download } from 'lucide-react';
import me from '../assets/me.png';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const timelineItems: TimelineItem[] = [
  {
    year: '2024',
    title: 'Data Analysis Student',
    description: 'Second-year student at City of Trades and Skills (CMC), specializing in data analytics and visualization',
    icon: GraduationCap,
  },
  {
    year: '2023',
    title: 'Software Engineering Program',
    description: 'Intensive training in full-stack development at ALX Software Engineering Program',
    icon: Briefcase,
  },
  {
    year: '2023',
    title: 'Robotics Competition Success',
    description: 'Won multiple national robotics competitions and achieved 3rd place internationally',
    icon: Calendar,
  },
];

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleDownloadCV = () => {
    // Add your CV download logic here
    const cvUrl = '/src/assets/TAIBI EL YAKOUTI - DA-CV.pdf'; // Update this with your actual CV URL
    window.open(cvUrl, '_blank');
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate about data analytics, AI, and robotics, with expertise in data visualization,
            machine learning, and automation. I specialize in Power BI, Python, SQL, R, and ETL tools
            like Talend, while actively participating in robotics competitions and mentoring students.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
              <img
                src={me}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-blue-500">{item.year}</span>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              onClick={handleDownloadCV}
              className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg w-full justify-center mt-6"
            >
              <Download className="w-5 h-5" />
              Download CV
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;