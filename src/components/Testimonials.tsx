import { motion } from 'framer-motion';
import '../styles/components/Testimonials.scss';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "The Matheson units are perfectly located for our distribution routes. The 12×14 doors changed our logistics efficiency overnight.",
      name: "Marcus Thorne",
      title: "CEO, Thorne Logistics",
      rating: 5
    },
    {
      id: 2,
      quote: "Professional management that actually understands industrial needs. The 3-phase power was ready for my CNC machines on day one.",
      name: "Sarah Jenkins",
      title: "Owner, SJ Custom Metals",
      rating: 5
    }
  ];

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="testimonials__wrapper">
          <motion.div
            className="testimonials__left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="testimonials__badge">Success Stories</span>
            <h2 className="testimonials__title">BUILT FOR REAL BUSINESS OPERATIONS</h2>
            <p className="testimonials__description">
              Join over 45 local businesses that have scaled their operations within our industrial parks.
            </p>
            <div className="testimonials__arrows">
              <button className="testimonials__arrow" aria-label="Previous testimonial">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="testimonials__arrow testimonials__arrow--active" aria-label="Next testimonial">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </motion.div>

          <div className="testimonials__grid">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="testimonials__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="testimonials__rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="testimonials__star">★</span>
                  ))}
                </div>
                
                <p className="testimonials__quote">"{testimonial.quote}"</p>
                
                <div className="testimonials__author">
                  <div className="testimonials__avatar"></div>
                  <div className="testimonials__author-info">
                    <p className="testimonials__name">{testimonial.name}</p>
                    <p className="testimonials__title">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
