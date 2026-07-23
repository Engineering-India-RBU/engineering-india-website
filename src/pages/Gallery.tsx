import React, { useState, useEffect } from 'react';
import { galleryData, GalleryItem } from '../data/gallery';
import './Gallery.css';

export default function Gallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading data to show loading state if necessary
  useEffect(() => {
    const timer = setTimeout(() => {
      setItems(galleryData);
      setIsLoading(false);
    }, 500); // Small delay to simulate fetching

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="gallery-container">
      <header className="gallery-header">
        <h2 className="gallery-subtitle">Our Journey In Moments</h2>
        <h1 className="gallery-title">Photo Gallery</h1>
        <div className="gallery-divider">
          <span className="gallery-divider-icon">❁</span>
        </div>
        <p className="gallery-description">
          Relive our journey through events, celebrations, and memories. 
          A visual story of Engineering India.
        </p>
      </header>

      {isLoading ? (
        <div className="gallery-empty">
          <p>Loading gallery moments...</p>
        </div>
      ) : items.length === 0 ? (
        <div className="gallery-empty">
          <p>No moments found. More memories coming soon...</p>
        </div>
      ) : (
        <ul className="gallery-grid">
          {items.map((item) => (
            <li key={item.id} className="gallery-card">
              <div className="gallery-media-wrapper">
                <img 
                  src={item.thumbnailUrl || item.url} 
                  alt={item.title} 
                  className="gallery-media"
                  loading="lazy"
                />
                {item.type === 'video' && (
                  <div className="gallery-video-icon" aria-label="Video content"></div>
                )}
              </div>
              <div className="gallery-content">
                {item.date && <time className="gallery-date">{item.date}</time>}
                <h3 className="gallery-item-title">{item.title}</h3>
                {item.description && <p className="gallery-item-desc">{item.description}</p>}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}