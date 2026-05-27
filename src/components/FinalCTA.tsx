import { motion } from 'framer-motion';
import { trackCTACallClick } from '../utils/analytics';
import '../styles/components/FinalCTA.scss';

const FinalCTA = () => {
  const handleCallClick = () => {
    trackCTACallClick();
    window.location.href = 'tel:+15551234567';
  };

  return (
    <section className="final-cta">
      <div className="container">
        <motion.div 
          className="final-cta__content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="final-cta__title">
            READY TO SCALE YOUR BUSINESS?
          </h2>
          <p className="final-cta__subtitle">
            OUR LEASING EXPERTS ARE STANDING BY TO HELP YOU FIND THE RIGHT SPACE AT THE RIGHT PRICE. BOOK YOUR WALKTHROUGH TODAY.
          </p>
          
          <button className="final-cta__button" onClick={handleCallClick}>
            Give Us a Call
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
