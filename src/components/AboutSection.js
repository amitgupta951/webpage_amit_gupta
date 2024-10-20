import React from 'react';

const AboutSection = ({ about }) => {
  return (
    <div className="about-section bg-white py-8 px-4 flex">
      <div className="about-text flex-1"> 
        <h2 className="text-2xl font-bold mb-4">{about.homeAboutTitle}</h2>
        <p className="text-gray-600 mb-4">{about.homeAboutSubtitle}</p>
        <p>{about.homeAboutDescription}</p>
        <a
          href={about.homeAboutButton.url}
          target={about.homeAboutButton.target}
          className="bg-green-500 text-white px-4 py-2 rounded mt-4 inline-block"
        >
          {about.homeAboutButton.title}
        </a>
      </div>
      <div className="about-image ml-4 w-1/2"> 
        <img 
          src={about.homeAboutVideoImage.node.sourceUrl} 
          alt="About Video" 
          className="w-full h-auto" 
        />
      </div>
    </div>
  );
};

export default AboutSection;
