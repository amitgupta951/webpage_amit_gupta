import React from 'react';
import '../index.css'; 

const Banner = ({ banners }) => {
  return (
    <div className="banner-container relative">
      {banners.map((banner, index) => (
        <div key={index} className="banner-item relative w-full">
          <img 
            src={banner.bannerImage.node.sourceUrl} 
            alt={banner.bannersTitle} 
            className="w-full h-auto"
          />
          <div className="banner-overlay"> 
            <h2 className="text-xl font-bold mt-4">{banner.bannersTitle}</h2>
            <p className="text-gray-600">{banner.bannerDescription}</p>
            <a
              href={banner.bannerButton.url}
              target={banner.bannerButton.target}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4 inline-block"
            >
              {banner.bannerButton.title}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
