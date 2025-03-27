import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Layout, PenTool, BarChart as ChartBar, Notebook as Robot } from 'lucide-react';

const skills = [
  {
    category: 'Data Analysis & BI',
    icon: ChartBar,
    skills: [
      { name: 'Power BI', level: 90 },
      { name: 'SQL & MySQL', level: 90 },
      { name: 'Talend & ETL', level: 75 },
      { name: 'R Programming', level: 70 },
    ],
  },
  {
    category: 'Programming & Development',
    icon: Code2,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Web Development', level: 75 },
      { name: 'Automation', level: 65 },
    ],
  },
  {
    category: 'AI & Robotics',
    icon: Robot,
    skills: [
      { name: 'Machine Learning', level: 75 },
      { name: 'Arduino & PCB Design', level: 90 },
      { name: 'Robotics Programming', level: 90 },
    ],
  },
  {
    category: 'Graphic Design',
    icon: PenTool,
    skills: [
      { name: 'Figma', level: 85 },
      { name: 'Canva', level: 90 },
      { name: 'UI/UX Design', level: 75 },
    ],
  },
];

const SkillBar = ({ name, level, inView }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-gray-700 font-medium">{name}</span>
      <span className="text-gray-500">{level}%</span>
    </div>
    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="h-full bg-blue-500 rounded-full"
      />
    </div>
  </div>
);

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600">
            My technical skills and areas of expertise in data analysis, programming, robotics, and design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <category.icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.category}
                </h3>
              </div>

              <div>
                {category.skills.map(skill => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    inView={inView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;