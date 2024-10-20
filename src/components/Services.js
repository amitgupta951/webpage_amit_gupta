import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Wall Painting',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    imgUrl: 'path_to_wall_painting_image',
  },
  {
    title: 'Water Solution',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    imgUrl: 'path_to_water_solution_image',
  },
  {
    title: 'Painting',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    imgUrl: 'path_to_painting_image',
  },
];

const ServiceCard = ({ title, description, imgUrl }) => (
  <div className="service-card">
    <img src={imgUrl} alt={title} />
    <div className="service-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Read More</button>
    </div>
  </div>
);

const Services = () => (
  <section className="services-section">
    <h2>Make Your Life Comfortable</h2>
    <div className="services-grid">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          imgUrl={service.imgUrl}
        />
      ))}
    </div>
  </section>
);

export default Services;
