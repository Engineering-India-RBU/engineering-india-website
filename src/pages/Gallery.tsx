import { useState, useCallback, useEffect } from "react";
import PageLayout from "../components/layout/PageLayout";
import ScrollProgress from "../components/ui/ScrollProgress";
import BackToTop from "../components/ui/BackToTop";
import { useScrollReveal, useStaggerReveal } from "../hooks/useScrollReveal";
import "./Gallery.css";

const categories = ["All", "Workshops", "Events", "Community", "Team"];

const galleryItems = [
  { title: "Workshop 2024", desc: "Hands-on technical workshop on modern engineering practices.", cat: "Workshops", icon: "build", color: "var(--primary-container)", img: "/gallery-1.jpeg" },
  { title: "Community Meetup", desc: "Students and faculty networking at the quarterly community meetup.", cat: "Community", icon: "groups", color: "var(--secondary-container)", img: "/gallery-2.jpeg" },
  { title: "Team Building", desc: "Celebrating milestones and team bonding moments together.", cat: "Team", icon: "emoji_events", color: "var(--tertiary-fixed)", img: "/gallery-3.jpeg" },
  { title: "Guest Lecture", desc: "Industry experts sharing insights on emerging technologies.", cat: "Events", icon: "record_voice_over", color: "var(--secondary-fixed)" },
  { title: "Field Visit", desc: "Real-world engineering exposure through industrial visits.", cat: "Workshops", icon: "location_on", color: "var(--primary-container)" },
  { title: "Award Ceremony", desc: "Recognizing outstanding contributions and achievements.", cat: "Events", icon: "emoji_events", color: "var(--tertiary-container)" },
  { title: "Hackathon Night", desc: "24-hour coding marathon building solutions for social impact.", cat: "Workshops", icon: "code", color: "var(--secondary-container)" },
  { title: "Culture Fest", desc: "Celebrating diversity and creativity within the engineering community.", cat: "Community", icon: "celebration", color: "var(--primary-container)" },
  { title: "Leadership Summit", desc: "Student leaders discussing vision and strategy for the year ahead.", cat: "Team", icon: "groups", color: "var(--tertiary-fixed)" },
];

function getSize(index: number) {
  const sizes = ["tall", "wide", "large", "", "", "tall", "wide", "", ""];
  return sizes[index] || "";
}

export default function Gallery() {
  const [activeCat, setActiveCat] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [filtered, setFiltered] = useState(galleryItems);

  const titleRef = useScrollReveal("fade-up");
  const gridRef = useStaggerReveal();

  useEffect(() => {
    if (activeCat === "All") {
      setFiltered(galleryItems);
    } else {
      setFiltered(galleryItems.filter((item) => item.cat === activeCat));
    }
  }, [activeCat]);

  const openLightbox = useCallback((index: number) => setLightbox(index), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const nextImage = useCallback(() => {
    setLightbox((prev) => prev !== null ? (prev + 1) % filtered.length : null);
  }, [filtered.length]);

  const prevImage = useCallback(() => {
    setLightbox((prev) => prev !== null ? (prev - 1 + filtered.length) % filtered.length : null);
  }, [filtered.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, closeLightbox, nextImage, prevImage]);

  return (
    <PageLayout>
      <ScrollProgress />
      <main className="gallery-page">
        <div ref={titleRef} className="gallery-header">
          <h1 className="display-lg">Gallery</h1>
          <p className="body-lg gallery-desc">
            Photos and memories from our events, meetups, and community initiatives.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="gallery-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery-tab ${activeCat === cat ? "gallery-tab-active" : ""}`}
              onClick={() => setActiveCat(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div ref={gridRef} className="gallery-grid">
          {filtered.map((item, index) => (
            <div
              key={item.title}
              className={`gallery-card ${getSize(index)}`}
              onClick={() => openLightbox(index)}
            >
              <div className="gallery-card-inner">
                <div className="gallery-card-bg" style={{ background: item.color }}>
                  {item.img ? (
                    <img src={item.img} alt={item.title} className="gallery-card-img" loading="lazy" />
                  ) : (
                    <span className="material-symbols-outlined gallery-card-icon">{item.icon}</span>
                  )}
                </div>
                <div className="gallery-card-overlay">
                  <div className="gallery-card-overlay-content">
                    <h3 className="headline-sm">{item.title}</h3>
                    <p className="body-md">{item.desc}</p>
                    <span className="gallery-card-cat">{item.cat}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox !== null && (
          <div className="lightbox" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-btn lightbox-prev" onClick={prevImage}>
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <div className="lightbox-image-wrap">
                {filtered[lightbox].img ? (
                  <img src={filtered[lightbox].img} alt={filtered[lightbox].title} className="lightbox-image" />
                ) : (
                  <div className="lightbox-icon-wrap" style={{ background: filtered[lightbox].color }}>
                    <span className="material-symbols-outlined lightbox-icon">{filtered[lightbox].icon}</span>
                  </div>
                )}
                <div className="lightbox-caption">
                  <h3 className="headline-sm">{filtered[lightbox].title}</h3>
                  <p className="body-md">{filtered[lightbox].desc}</p>
                </div>
              </div>
              <button className="lightbox-btn lightbox-next" onClick={nextImage}>
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
              <button className="lightbox-close" onClick={closeLightbox}>
                <span className="material-symbols-outlined">close</span>
              </button>
              <div className="lightbox-counter">{lightbox + 1} / {filtered.length}</div>
            </div>
          </div>
        )}
      </main>
      <BackToTop />
    </PageLayout>
  );
}
