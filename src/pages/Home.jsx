import React from "react";
import styles from "./Home.module.css";

import heroIllustration from "../assets/hero-illustration.png";
import clientLogos from "../assets/clientlogos.png";

const services = [
  { title: "IT Staffing & Contract Hiring", desc: "Developers, data engineers, QA, UI/UX, PMs, freshers, upcoming roles." },
  { title: "Offshore Engineering Teams", desc: "Dedicated India delivery pods with leadership & delivery management." },
  { title: "Long-Term Talent Deployment", desc: "Full-time, contract-to-hire, remote integration." },
  { title: "Global Talent Mobility", desc: "Remote international jobs, visa opportunities, client-site deployments." },
  { title: "POSH Compliance & Training", desc: "External committee member, workshops, documentation, sensitization." },
  { title: "Learning & Development (L&D)", desc: "Communication, leadership, workplace behavior, job-readiness." },
];

const benefits = [
  "Elite IIT/NIT/IIIT talent + job-ready freshers",
  "Fast hiring cycles (72hrs–7 days)",
  "Offshore team structure with delivery oversight",
  "Professional growth via L&D programs",
  "Safer workplace via POSH programs",
  "Up to 40% cost advantage",
];

const Home = () => {
  return (
    <div className={styles.homepage}>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Build World-Class Engineering Teams — Fast, Compliant & Affordable</h1>
          <p>Connecting elite Indian & global tech talent with high-growth companies worldwide.</p>
          <strong>Staffing | Offshore Teams | Talent Deployment | Global Hiring | POSH | L&D</strong>
          <div className={styles.heroCTAs}>
            <button className={styles.primaryCTA}>Hire Engineering Talent</button>
            <button className={styles.secondaryCTA}>Apply for Global Roles</button>
          </div>
          <div className={styles.trustBadges}>
            <span>✔ Trusted by Global Startups</span>
            <span>✔ PAN-India Networks</span>
            <span>✔ IIT/NIT Talent Pool</span>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <img src={heroIllustration} alt="Global Engineers Network" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className={styles.about}>
        <div className={styles.aboutText}>
          <h2>About Sunsys Global</h2>
          <p>
            Sunsys Global is the international Talent & Workforce Solutions Division of Sunsys Techsol Pvt. Ltd. 
            We help global companies scale engineering capacity with elite developers, skilled professionals, and fresh talent — 
            at up to 40% lower cost. We also open global career pathways for Indian engineers through remote roles, international deployments, and startup opportunities.
          </p>
        </div>
        <div className={styles.aboutStats}>
          <div>40% Cost Advantage</div>
          <div>72 Hours–7 Days Deployment Speed</div>
          <div>500+ Tech Professionals in Network</div>
          <div>Global Talent Mobility Enabled</div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className={styles.services}>
        <h2>Our Services</h2>
        <div className={styles.serviceCards}>
          {services.map((service, i) => (
            <div key={i} className={styles.card}>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className={styles.benefits}>
        <h2>Why Choose Sunsys Global</h2>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, i) => (
            <div key={i} className={styles.benefitCard}>
              <span>🎯</span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOR ENGINEERS SECTION */}
      <section className={styles.forEngineers}>
        <h2>Build Your Global Tech Career</h2>
        <p>We help Indian engineers of all levels access remote international roles, relocation opportunities, and startup engineering positions.</p>
        <div className={styles.engineerCTAs}>
          <button>Apply Now</button>
          <button>Join Talent Community</button>
        </div>
        <div className={styles.featuredOpenings}>
          <p>Featured Openings Carousel Here (CMS)</p>
        </div>
      </section>

      {/* CLIENT LOGOS SECTION */}
      <section className={styles.clientLogos}>
        <h2>Our Clients</h2>
        <img src={clientLogos} alt="Client Logos" />
      </section>

      {/* CONTACT SECTION */}
      <section className={styles.contact}>
        <h2>Contact Us</h2>
        <p>Sunsys Global — Talent & Workforce Solutions Division</p>
        <p>📧 careers@sunsystechsol.com | 📞 +91 9105837321 | 🌐 www.sunsysglobal.com</p>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone" />
          <input type="text" placeholder="Requirement" />
          <input type="file" placeholder="Attach JD" />
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <h3>Sunsys Global</h3>
          <p>Global Talent • Offshore Engineering • Workforce Solutions</p>
        </div>
        <div className={styles.footerMiddle}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.footerRight}>
          <span>Social Icons + WhatsApp CTA Here</span>
        </div>
      </footer>

    </div>
  );
};

export default Home;
