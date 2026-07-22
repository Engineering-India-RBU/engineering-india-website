import PageLayout from "../components/layout/PageLayout";
import "./Home.css";

export default function Home() {
  return (
    <main className="home">
      <PageLayout>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>
              Building Engineers.<br />
              Inspiring Leaders.<br />
              Creating Impact.
            </h1>
            <p>
              We are a collective of visionary students at RBU, dedicated to pushing the boundaries of technology, leadership, and community impact.
            </p>
            <div className="hero-actions">
              <button className="btn-primary">Explore Initiatives</button>
              <button className="btn-secondary">View Gallery</button>
            </div>
          </div>
          <div className="hero-visual">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJbPWC9Zw9MH6YFkd6eoGNzayyulRYFYSbvdNurrphNYR-eigzKedN_mGF5p5oC7UpuSYuuGoBUY2eEbwNsRgt5ISDn4iCEwHhaRJ_E8f3xDWKOClQq8-LvkbxrVou1XSGX1bGxazCL047k3Nd91F4dONEy3juB7PRSNH40oajipfv3MWVq5mTs6TCeRfCnv9dCMuEGyx9zMSTqSVTRp5sRBl1hJ0sAVN9gxgYVZ1Nlfu0S5GwNZutSZ-M4jYIpIwZS1DLBme2oKg" alt="Engineering India Students" className="hero-image" />
            <div className="badge badge-top">10+ Years</div>
            <div className="badge badge-bottom">50+ Events</div>
            <div className="badge badge-left">1000+ Students</div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section" id="about">
          <div className="mission-visual">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH9bIPSMlL3kmmPLko4FWmaTJ_Lz5KVmT3queBPTNAAPupb8xyeEq0ho6_jBO5WUtWDghJ0bIlBfBBWX8PiueMmIZ58EF-vhUsrcFEW2TnPiQl7BAGfUmLX5OTNOcPYLxg98qyrMp41XW-6FdJfgxJIaey7iCp1SAQDA9S6pBaL-p9ElEZr5YLRActIft0G3xdtnfsBkQ4TdMro4oLaGoIokcaBxo3X4YmXI4zuaO6bLP_iSmuSkBFFH0JpOwt-wRVV6xIojIRQBQ" alt="Students collaborating" />
          </div>
          <div className="mission-content">
            <h2>We believe engineering is more than academics.</h2>
            <p>It’s about cultivating a mindset that challenges the status quo. At Engineering India RBU, we bridge the gap between theoretical knowledge and real-world application.</p>
            <p>Our community thrives on innovation, peer-to-peer learning, and a shared ambition to leave a lasting impact on society through technology and leadership.</p>
            <div className="mission-label">
              <span className="line"></span>
              <span className="label-text">Our Mission</span>
            </div>
          </div>
        </section>

        {/* Impact Band */}
        <section className="impact-band">
          <div className="impact-item">
            <h3>50+</h3>
            <p>Events Hosted</p>
          </div>
          <div className="impact-item">
            <h3>10k+</h3>
            <p>Student Reach</p>
          </div>
          <div className="impact-item">
            <h3>15+</h3>
            <p>Core Teams</p>
          </div>
          <div className="impact-item">
            <h3>10 Yrs</h3>
            <p>Of Legacy</p>
          </div>
        </section>

        {/* Flagship - ABHYUDAYA */}
        <section className="flagship-section" id="abhyudaya">
          <div className="flagship-background">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIYib5w1GWcsVNWP3tKBubyrHv0YVSu79hmaHF1Cemh03fQiBNZ04T09Pt0vVspLgT7xjPZpR145NmMODR8Zo2r4R3RyKEDDYohbFRRIcacj1mjGhLxehCmw-XwNmT9qQActGFvZdryRWK1iJfOKbaAvssDufUuRr5Wqk96lh0F9iyXgWVEnsqM5vXd2PO1T5oA788SAvX01ep7czWumANIS7TOX5mKf5mnECpfhIqLsx6bbCLpUi3vzVuEXYsUWTo5CGpfjoeVq8" alt="ABHYUDAYA Techfest" />
            <div className="overlay"></div>
          </div>
          <div className="flagship-content">
            <span className="flagship-label">Our Flagship Techfest</span>
            <h2>ABHYUDAYA</h2>
            <p>A symphony of technology, innovation, and art. The largest student-driven technical symposium in Central India, drawing minds from across the nation to compete, collaborate, and create.</p>
            <button className="btn-primary">Experience the Legacy</button>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="gallery-preview" id="gallery">
          <h2>Moments of Brilliance</h2>
          <div className="gallery-grid">
            <div className="gallery-item large">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3rvSRJq5qEodqqeoJ1c1UEd7ybZxDrqXGGSpz3UmGfa76_Cu0cFsMm3lYGlveh2hpVbV87-CUVzr6F11ZIEDpHZgx1No5hnzCmvizsAJ5IsOiCtLsP1IsyguUjUfKi6OeNsrF3KwSuK2DceOIwqaebopIQ84j9lAa81AZSn5NzRL0z4uXkCosuCNHDVAjK7D47qz_O9YISRKInYOl9j2TGh_e1zNe_PlGRhBo0KcpJSgBIz2i8X11T0suEh0AtpEFxzrSZ9lJ7tg" alt="Hackathon" />
            </div>
            <div className="gallery-item">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhJkMj7igptfRAwJZFEEPsCeE0jwBq2RwO8TyJk4W1EuIz422WjEVh6GQR6sIxInNRcVb_XGXVowzWjq-FkWO33gzcKax5ReHhli3o9dsbWSufKh24Varnjnk_pTKIuwr8Grzy6bQb5HtfqiUD8nb11auQRgXD2IaZ6UoNTUo0AMbDyTn7LjB7dl9kAUsYTXT4TkAoHF_T2m5qwlrYhEixORXWD5E0utF9107XVfFKPQphNghXUjuU06Z1WJjqyLXLuDts6La7BsQ" alt="Students collaborating" />
            </div>
            <div className="gallery-item">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC01vNQXR1STyuBYRgrZJ9CyD-ssCiduUErw9uA3OKwmjI3ISDV6VeVxq-ssUdYjYLDQs0LIK8XE3fpvioIcAmcV3eJlaAWjjUrHr3Zu7Jm_X7YaBbd9pHoTwJMIvHiURfipyXDhNKZy3tW1RPPbHOOAwsueMfvcsztoGsN6sRMFMj-YiJrVwQhKR66rQMWJdp8bwK-jhZv8__FU3fuOEeXX72DP6C7ZOIaiFID4IlJ-BOEUK2rL5dpm97lS4P549ZIMYiCT6IwF7g" alt="Speaker" />
            </div>
            <div className="gallery-item wide">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcErow_5g6VLD9v5LQCoAnxF0e_aymfdByFfJIlpDEZprXvrR8WG0saOWLjTCCYv0ZBmvIPEPGGeGAk29PxZjzw3AYV3aZPYgEsBrNKrQnykoO_tGAuvCheDkCMJ2hsPtI73sueCYPaW5-mmryRPOXd98TyvOLHWrzolKE7uV9j8hTd3AC3OfwQwvrIdkMGy-AWG89yKuVGmf0LLlCmlP174k9iixy1RIIQxqxekNUAuVZpykrf2iBB3VdEIKukyxprDmNJyyq3pk" alt="Campus" />
            </div>
          </div>
        </section>
      </PageLayout>
    </main>
  );
}