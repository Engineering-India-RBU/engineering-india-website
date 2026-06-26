import PageLayout from "../components/layout/PageLayout";
import "./Home.css";

export default function Home() {
  return (
    <main className="home">
      <PageLayout>
        <section className="hero">
        <p className="hero-tag">Engineering India RBU</p>

        <h1>
          Empowering Students Through
          <span> Innovation & Social Impact</span>
        </h1>

        <p className="hero-description">
          Welcome to the official Engineering India website.
          This project is being developed collaboratively following
          professional software engineering practices including GitHub
          Projects, Pull Requests, Code Reviews and Sprint Planning.
        </p>

        <div className="hero-buttons">
          <button>Explore Events</button>
          <button className="secondary">Meet the Team</button>
        </div>
      </section>

      <section className="development-status">
        <h2>🚧 Website Under Active Development</h2>

        <p>
          Version 1 focuses on building a modern, responsive frontend using
          React, Vite and TypeScript.
        </p>

        <div className="status-grid">
          <div className="card">
            <h3>Frontend</h3>
            <p>React + Vite + TypeScript</p>
          </div>

          <div className="card">
            <h3>Project Management</h3>
            <p>GitHub Projects & Issues</p>
          </div>

          <div className="card">
            <h3>Collaboration</h3>
            <p>Discord + Daily Standups</p>
          </div>

          <div className="card">
            <h3>Code Quality</h3>
            <p>Pull Requests & Reviews</p>
          </div>
        </div>
      </section>
      </PageLayout>
    </main>
  );
}