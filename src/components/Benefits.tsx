import { motion } from 'framer-motion';
import '../styles/components/Benefits.scss';

const Benefits = () => {
  const steps = [
    {
      number: '01',
      title: 'FIND YOUR FIT',
      description: 'Browse our available inventory and select the square footage that matches your operational needs.'
    },
    {
      number: '02',
      title: 'TAKE THE TOUR',
      description: 'Schedule a showing with our leasing team to inspect the power, docks, and offices.'
    },
    {
      number: '03',
      title: 'GET THE KEYS',
      description: 'Rapid digital lease signing and move-in coordination. Most tenants move in within 7 days.'
    }
  ];

  return (
    <section className="benefits section">
      <div className="container">
        <motion.div
          className="benefits__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="benefits__title">YOUR PATH TO A NEW HEADQUARTERS</h2>
          <p className="benefits__subtitle">The easiest leasing process in the industrial sector.</p>
        </motion.div>
        
        <div className="benefits__grid">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="benefits__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="benefits__number">{step.number}</div>
              <h3 className="benefits__card-title">{step.title}</h3>
              <p className="benefits__card-description">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
