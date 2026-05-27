import { motion } from 'framer-motion';
import { Building } from '../data/buildings';
import { trackBuildingCardClick } from '../utils/analytics';
import '../styles/components/BuildingCard.scss';

interface BuildingCardProps {
  building: Building;
  onScheduleTour: (buildingName: string) => void;
}

const BuildingCard = ({ building, onScheduleTour }: BuildingCardProps) => {
  const handleScheduleTour = () => {
    trackBuildingCardClick(building.name);
    onScheduleTour(building.name);
  };

  return (
    <motion.div
      className="building-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <div className="building-card__image-wrapper">
        <img 
          src={building.image} 
          alt={building.name}
          className="building-card__image"
        />
        <span className="building-card__address">
          {building.name}
        </span>
      </div>
      
      <div className="building-card__content">
        <div className="building-card__header">
          <span className="building-card__status">AVAILABLE NOW</span>
          <div className="building-card__pricing">
            <span className="building-card__price">{building.price}</span>
            <span className="building-card__price-unit">per sq ft / yr</span>
          </div>
        </div>

        <div className="building-card__size">{building.size}</div>
        
        <ul className="building-card__features">
          {building.features.map((feature, index) => (
            <li key={index} className="building-card__feature">
              {feature}
            </li>
          ))}
        </ul>
        
        <button onClick={handleScheduleTour} className="building-card__button">
          Inquire for Details
        </button>
      </div>
    </motion.div>
  );
};

export default BuildingCard;
