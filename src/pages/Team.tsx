import React, { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { FaLinkedin, FaGithub, FaEnvelope, FaGlobe } from "react-icons/fa";
import { HiLightningBolt, HiAcademicCap } from "react-icons/hi";

// Import data from your existing team data file
import { facultyCoordinator, coreTeam } from "../data/team";
import "../styles/team.css";

export default function Team() {
  const [activeTab, setActiveTab] = useState("core"); // Defaulting to core team

  return (
    <PageLayout>
      <div className="team-container">
        {/* Creative Header */}
        <header className="team-header">
          <h1 className="team-title">Our Leadership</h1>
          <p className="team-subtitle">
            Meet the visionaries and technical minds driving Engineering India RBU towards national excellence.
          </p>

          {/* Creative Toggle Switch */}
          <div className="toggle-wrapper">
            <div className="creative-toggle">
              <button
                className={`toggle-btn ${activeTab === "faculty" ? "toggle-btn--active" : ""}`}
                onClick={() => setActiveTab("faculty")}
              >
                <HiAcademicCap size={18} />
                Faculty
              </button>
              <button
                className={`toggle-btn ${activeTab === "core" ? "toggle-btn--active" : ""}`}
                onClick={() => setActiveTab("core")}
              >
                <HiLightningBolt size={18} />
                Core Team
              </button>
            </div>
          </div>
        </header>

        {/* Dynamic View Content */}
        <main className="view-content">
          {activeTab === "faculty" ? (
            <div className="faculty-showcase">
              <article className="faculty-card-creative">
                <div className="faculty-image-container">
                  <img src={facultyCoordinator.image} alt={facultyCoordinator.name} />
                </div>
                <div className="faculty-info">
                  <span className="faculty-label">Faculty Coordinator</span>
                  <h2 className="faculty-name">{facultyCoordinator.name}</h2>
                  <blockquote className="faculty-quote">
                    {facultyCoordinator.introduction || "Guiding the next generation of engineers with a vision for a technically proficient and socially responsible India."}
                  </blockquote>
                  
                  <div className="faculty-stats">
                    <div className="stat-item">
                      <span>Department</span>
                      <strong>Computer Science</strong>
                    </div>
                    <div className="stat-item">
                      <span>Specialization</span>
                      <strong>Systems Architecture</strong>
                    </div>
                  </div>

                  <div className="member-socials" style={{ marginTop: '2.5rem' }}>
                    <a href="#" className="social-icon"><FaEnvelope /></a>
                    <a href={facultyCoordinator.linkedin} className="social-icon"><FaLinkedin /></a>
                    <a href="#" className="social-icon"><FaGlobe /></a>
                  </div>
                </div>
              </article>
            </div>
          ) : (
            <div className="team-grid-creative">
              {coreTeam.map((member) => (
                <article key={member.id} className="member-card-creative">
                  <div className="member-image-wrapper">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <span className="member-role-tag">{member.role}</span>
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-dept">Computer Science & Engineering</p>
                  
                  <div className="member-socials">
                    <a href={member.linkedin} className="social-icon"><FaLinkedin /></a>
                    <a href="#" className="social-icon"><FaGithub /></a>
                    <a href="#" className="social-icon"><FaEnvelope /></a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </main>
      </div>
    </PageLayout>
  );
}
