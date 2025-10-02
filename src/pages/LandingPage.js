
import React from "react";

export default function LandingPage() {
  return (
    <div className="lp-root">
      {/* Top Nav */}
      <header className="lp-header">
        <div className="lp-container lp-header-bar">
          <div className="lp-brand">
            <span className="lp-logo-circle" aria-hidden="true" />
            <span className="lp-logo-text">Azai</span>
          </div>
          <nav className="lp-nav">
            <a href="#features">Features</a>
            <a href="#book">Book a Meeting</a>
            <a href="#client">Client Login</a>
            <a href="#contact" className="lp-btn lp-btn-dark">Contact Sales</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="lp-hero">
        <div className="lp-container lp-hero-grid">
          <div className="lp-hero-copy">
            <div className="lp-kicker">Trustworthy Project Management</div>
            <h1 className="lp-hero-title">
              The Future of <br /> Project Excellence
            </h1>
            <p className="lp-hero-sub">
              Revolutionary project management platform engineered for
              enterprise teams who demand precision, <b>intelligence</b>, and
              results at scale.
            </p>
            <div className="lp-cta-row">
              <a href="#book" className="lp-btn lp-btn-primary">Calendar Booking</a>
              <a href="#contact" className="lp-btn lp-btn-outline">Contact Us</a>
            </div>
          </div>
          <div className="lp-hero-media">
            <div className="lp-hero-card">
              <img src="/assets/design.png" alt="Team meeting" className="lp-hero-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions card */}
      <section className="lp-solutions" id="features">
        <div className="lp-container">
          <div className="lp-card lp-solutions-card">
            <div className="lp-sol-header">
              <div className="lp-kicker">SOLUTIONS</div>
              <h3>Advanced Risk <br/>Management Module</h3>
              <p>
                Harness the power of AI‑driven risk assessment and mitigation.
                Our flagship module transforms how you identify, analyze, and
                respond to project risks before they impact your timeline.
              </p>
            </div>

            <div className="lp-sol-features">
              <div className="lp-sol-item">
                <div className="lp-icon" aria-hidden="true">🔎</div>
                <div>
                  <div className="lp-sol-title">Risk Intelligence</div>
                  <div className="lp-sol-desc">
                    AI powered models to detect risk‑prone patterns
                    before they happen.
                  </div>
                </div>
              </div>
              <div className="lp-sol-item">
                <div className="lp-icon" aria-hidden="true">📈</div>
                <div>
                  <div className="lp-sol-title">Real‑time Analytics</div>
                  <div className="lp-sol-desc">
                    Live dashboards that keep your finger on the
                    pulse of every project.
                  </div>
                </div>
              </div>
              <div className="lp-sol-item">
                <div className="lp-icon" aria-hidden="true">⚙️</div>
                <div>
                  <div className="lp-sol-title">Smart Automation</div>
                  <div className="lp-sol-desc">
                    Automated workflows that eliminate manual project
                    management overheads.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics strip */}
      <section className="lp-metrics">
        <div className="lp-container">
          <div className="lp-metrics-head">
            <div className="lp-kicker center">STATS</div>
            <h3 className="lp-center">Trusted by Project Leaders Worldwide</h3>
            <p className="lp-center small">Join thousands of teams delivering exceptional results.</p>
            <div className="lp-center">
              <a href="#talk" className="lp-btn lp-btn-light small">Talk With Us →</a>
            </div>
          </div>

          <div className="lp-metrics-grid">
            <div className="lp-metric-box">
              <div className="lp-metric-value">95%</div>
              <div className="lp-metric-label">Risk Prediction Accuracy</div>
            </div>
            <div className="lp-metric-box">
              <div className="lp-metric-value">$2.4M</div>
              <div className="lp-metric-label">Average Cost Savings</div>
            </div>
            <div className="lp-metric-box">
              <div className="lp-metric-value">40%</div>
              <div className="lp-metric-label">Faster Project Delivery</div>
            </div>
            <div className="lp-metric-chart">
              <img src="/assets/page.svg" alt="Minimal KPI chart" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature with screenshot */}
      <section className="lp-feature-split">
        <div className="lp-container lp-split-grid">
          <div className="lp-split-copy">
            <div className="lp-kicker">FEATURES</div>
            <h3>Revolutionary Project <br/>Management Features</h3>
            <ul className="lp-checklist">
              <li>
                <span className="lp-pill">Advanced Risk Management Module</span>
                <span className="lp-badge">Available Now</span>
                <p className="lp-check-desc">
                  Harness the power of AI‑driven risk assessment and mitigation.
                  Our flagship module transforms how you identify, analyze, and
                  respond to project risks before they impact your timeline.
                </p>
                <a className="lp-btn lp-btn-light xs" href="#details">Details</a>
              </li>
              <li>
                <span className="lp-pill">Cost Management</span>
                <p className="lp-check-desc">
                  Accurate budget oversight with predictive financial modeling
                  and real‑time cost allocation.
                </p>
              </li>
              <li>
                <span className="lp-pill">Time Management</span>
                <span className="lp-badge warning">Coming Soon</span>
                <p className="lp-check-desc">
                  Revolutionize time tracking and resource allocation powered by
                  machine learning algorithms.
                </p>
              </li>
            </ul>
          </div>
          <div className="lp-split-media">
            <div className="lp-app-window">
              <div className="lp-window-bar">
                <span /><span /><span />
              </div>
              <div className="lp-window-body">
                <img src="/assets/page.svg" alt="App screenshot preview" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise band */}
      <section className="lp-enterprise">
        <div className="lp-container">
          <h3 className="lp-center">Built for Enterprise Scale</h3>
          <p className="lp-center small">
            Modern React architecture engineered for mission‑critical performance, bulletproof security, and
            seamless scalability.
          </p>

          <div className="lp-tiles">
            <div className="lp-tile">
              <div className="lp-tile-ico">🧱</div>
              <div className="lp-tile-title">Modern Technology Stack</div>
              <p>React + Vite • TypeScript<br/>Tailwind & CSS Grid • Docker</p>
            </div>
            <div className="lp-tile">
              <div className="lp-tile-ico">⚡</div>
              <div className="lp-tile-title">Exceptional Performance</div>
              <p>SSR-ready • 60 FPS UI<br/>Edge caching • Optimized bundles</p>
            </div>
            <div className="lp-tile">
              <div className="lp-tile-ico">🔒</div>
              <div className="lp-tile-title">Enterprise Security</div>
              <p>Encryption • SSO & RBAC<br/>Zero‑trust architecture</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="lp-testimonials">
        <div className="lp-container">
          <h4 className="lp-center muted">Loved by Project Leaders Worldwide</h4>
          <div className="lp-test-grid">
            <figure className="lp-quote">
              <blockquote>
                “Azai Elevate identified a critical risk 3 weeks before it derailed the team. Their proactive alerts
                saved us six figures. Game‑changer for mid‑to‑large programs.”
              </blockquote>
              <figcaption>Sarah Martinez, VP Operations, TechCorp</figcaption>
            </figure>
            <figure className="lp-quote">
              <blockquote>
                “The risk management capabilities exceeded anything else we’ve deployed—especially the speed at which
                our teams can operationalize Azai’s insights.”
              </blockquote>
              <figcaption>James Lee, Project Director, Global Systems</figcaption>
            </figure>
            <figure className="lp-quote">
              <blockquote>
                “Finally, a project management platform that speaks our language. The focus on measurable delivery and
                executive readiness is unmatched.”
              </blockquote>
              <figcaption>Enea Kovač, Head of PMO, InnovateCorp</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="lp-process" id="book">
        <div className="lp-container">
          <h4 className="lp-center">Get Started in Minutes, Not Months</h4>
          <p className="lp-center small">
            Our proven implementation process gets you value from day one.
          </p>

          <div className="lp-steps">
            <div className="lp-step">
              <div className="lp-step-num">1</div>
              <div className="lp-step-title">Connect Your Data</div>
              <div className="lp-step-desc">
                Seamlessly integrate with your existing tools and data sources in under 30 minutes.
              </div>
            </div>
            <div className="lp-step">
              <div className="lp-step-num">2</div>
              <div className="lp-step-title">Configure Your Workspace</div>
              <div className="lp-step-desc">
                Create global standards and sprint rituals to match your project management needs.
              </div>
            </div>
            <div className="lp-step">
              <div className="lp-step-num">3</div>
              <div className="lp-step-title">Start Managing</div>
              <div className="lp-step-desc">
                Begin tracking risks, monitoring roadmaps, and making data‑driven decisions immediately.
              </div>
            </div>
            <div className="lp-step">
              <div className="lp-step-num">4</div>
              <div className="lp-step-title">Scale & Optimize</div>
              <div className="lp-step-desc">
                Expand across your organization with enterprise‑grade security and performance.
              </div>
            </div>
          </div>

          <div className="lp-center">
            <a href="#contact" className="lp-btn lp-btn-primary">Let’s Get in Touch</a>
          </div>
        </div>
      </section>

      {/* CTA footer */}
      <section className="lp-cta-footer">
        <div className="lp-container">
          <h3 className="lp-center">Ready to Transform Your Projects?</h3>
          <p className="lp-center small">
            Join the thousands of project leaders who’ve already discovered the power of AI‑driven project management.
          </p>
          <div className="lp-cta-row center">
            <a href="#contact" className="lp-btn lp-btn-dark">Contact Sales</a>
            <a href="#request" className="lp-btn lp-btn-outline">Request a Demo</a>
          </div>
          <ul className="lp-assurances">
            <li>No credit card required</li>
            <li>30‑day free trial</li>
            <li>Setup in minutes</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="lp-footer" id="contact">
        <div className="lp-container lp-footer-grid">
          <div>
            <div className="lp-brand">
              <span className="lp-logo-circle" aria-hidden="true" />
              <span className="lp-logo-text">Azai</span>
            </div>
            <p className="lp-footer-sub">
              Azai is the AI‑powered project management platform built to
              deliver measurable results in time, on budget, and with complete confidence.
            </p>
            <p className="lp-footer-copy">© 2025 Azai AG. All rights reserved.</p>
          </div>
          <div>
            <div className="lp-footer-title">Links</div>
            <ul className="lp-footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#book">Book a Meeting</a></li>
            </ul>
          </div>
          <div>
            <div className="lp-footer-title">Contact</div>
            <ul className="lp-footer-links">
              <li><a href="mailto:info@azai.ch">info@azai.ch</a></li>
              <li>+41 22 456 789</li>
              <li>Azai AG, Zürich</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
