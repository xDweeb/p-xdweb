import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Palette, Lightbulb } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services: React.FC = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: t('services.mentoring.title'),
      description: t('services.mentoring.description'),
      icon: BookOpen,
      features: t('services.mentoring.features', { returnObjects: true }) as string[]
    },
    {
      title: t('services.design.title'),
      description: t('services.design.description'),
      icon: Palette,
      features: t('services.design.features', { returnObjects: true }) as string[]
    },
    {
      title: t('services.consultancy.title'),
      description: t('services.consultancy.description'),
      icon: Lightbulb,
      features: t('services.consultancy.features', { returnObjects: true }) as string[]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('services.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-lg">
                  <service.icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;