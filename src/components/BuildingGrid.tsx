import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BuildingCard from './BuildingCard';
import { Building } from '../data/buildings';
import '../styles/components/BuildingGrid.scss';

const BuildingGrid = () => {
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/buildings.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load buildings');
        return res.json();
      })
      .then((data: Building[]) => setBuildings(data))
      .catch(() => setError(true));
  }, []);

  const handleScheduleTour = (buildingName: string) => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="building-grid section">
      <div className="container">
        <motion.div
          className="building-grid__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="building-grid__title">EXPLORE AVAILABLE UNITS</h2>
          <p className="building-grid__subtitle">
            Discover the perfect base for your business operations. Our units are designed with functional features to keep your business growing.
          </p>
        </motion.div>

        {error && (
          <p className="building-grid__error">
            Unable to load listings. Please try again later.
          </p>
        )}

        <div className="building-grid__grid">
          {buildings.map((building) => (
            <BuildingCard
              key={building.id}
              building={building}
              onScheduleTour={handleScheduleTour}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildingGrid;
