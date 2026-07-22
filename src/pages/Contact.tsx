import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import ScrollProgress from "../components/ui/ScrollProgress";
import BackToTop from "../components/ui/BackToTop";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Contact() {
  const titleRef = useScrollReveal("fade-up");
  const formRef = useScrollReveal("fade-up");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <ScrollProgress />
      <main className="container" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
        <div ref={titleRef} style={{ textAlign: "center", marginBottom: "var(--stack-xl)" }}>
          <h1 className="display-lg" style={{ marginBottom: "var(--stack-md)" }}>Contact Us</h1>
          <p className="body-lg" style={{ color: "var(--on-surface-variant)", maxWidth: "640px", margin: "0 auto" }}>
            Have a question or want to get involved? We'd love to hear from you.
          </p>
        </div>

        <div ref={formRef} style={{ maxWidth: "600px", margin: "0 auto" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "var(--stack-xl)", background: "var(--secondary-container)", borderRadius: "var(--radius-2xl)" }}>
              <span className="material-symbols-outlined" style={{ fontSize: "56px", color: "var(--on-secondary-container)", marginBottom: "var(--stack-md)" }}>check_circle</span>
              <h3 className="headline-md" style={{ marginBottom: "var(--stack-sm)" }}>Message Sent!</h3>
              <p className="body-md" style={{ color: "var(--on-secondary-container)" }}>We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "var(--stack-md)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--stack-md)" }}>
                <input placeholder="Your Name" style={inputStyle} required />
                <input placeholder="Your Email" type="email" style={inputStyle} required />
              </div>
              <input placeholder="Subject" style={inputStyle} required />
              <textarea placeholder="Your Message" rows={5} style={{ ...inputStyle, resize: "vertical" }} required />
              <button type="submit" className="ripple-btn" style={{ background: "var(--primary)", color: "var(--on-primary)", padding: "16px 40px", borderRadius: "var(--radius-full)", fontSize: "16px", fontWeight: "600", border: "none", cursor: "pointer" }}>
                Send Message
              </button>
            </form>
          )}
        </div>
      </main>
      <BackToTop />
    </PageLayout>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "14px 18px",
  borderRadius: "var(--radius-md)",
  border: "1px solid var(--outline-variant)",
  background: "var(--surface-container-lowest)",
  fontFamily: "var(--font-family)",
  fontSize: "16px",
  color: "var(--on-surface)",
  outline: "none",
  width: "100%",
};
