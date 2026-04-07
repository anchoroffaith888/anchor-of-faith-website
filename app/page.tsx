import Image from "next/image";

export default function HomePage() {
  const services = [
    {
      icon: "🚚",
      title: "Expedited Hot Shot Freight",
      text: "Direct transportation for urgent, time-sensitive shipments that need fast pickup and dependable delivery.",
    },
    {
      icon: "🏗️",
      title: "Construction & Equipment",
      text: "Reliable support for construction materials, equipment, and job-site freight across key Midwest lanes.",
    },
    {
      icon: "🛡️",
      title: "Professional Carrier Service",
      text: "Clear communication, safety-first operation, and responsive dispatch from load tender to final delivery.",
    },
    {
      icon: "⚡",
      title: "Direct Shipper Support",
      text: "Fast response for brokers and shippers who need a dependable carrier for urgent freight needs.",
    },
  ];

  const features = [
    "2024 Ram 3500 Dually",
    "40 Ft Gooseneck Trailer",
    "MC# 1759816",
    "USDOT# 4462007",
    "Dispatch: 773-717-6248",
    "Office: 708-428-0248",
  ];

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand-wrap">
            <Image
              src="/anchor-logo.jpg"
              alt="Anchor Of Faith Logistics logo"
              width={180}
              height={90}
              className="logo"
            />
            <div>
              <div className="brand-name">Anchor Of Faith Logistics LLC</div>
              <div className="brand-subtitle">
                Hot Shot Trucking • Expedited Freight • Direct Service
              </div>
            </div>
          </div>

          <div className="top-contact">
            <div>Dispatch: 773-717-6248</div>
            <div>Office: 708-428-0248</div>
            <div>office@anchoroffaithlogistics.com</div>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" style={{ position: "relative", overflow: "hidden" }}>
          <Image
            src="/anchor-bg.jpg"
            alt="Anchor Of Faith background"
            fill
            priority
            style={{
              objectFit: "cover",
              zIndex: 0,
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(2, 8, 23, 0.82), rgba(2, 8, 23, 0.62), rgba(3, 18, 45, 0.82))",
              zIndex: 1,
            }}
          />

          <div
            className="container hero-grid"
            style={{ position: "relative", zIndex: 2 }}
          >
            <div>
              <span className="eyebrow">Premium Hot Shot Freight Service</span>
              <h1>Fast, reliable freight service for urgent loads and direct shippers.</h1>

              <p className="hero-copy">
                Anchor Of Faith Logistics LLC provides fast, reliable, and cost-effective
                hot shot trucking services. We specialize in delivering time-sensitive
                freight such as construction materials, equipment, and urgent shipments.
                With experienced drivers, well-maintained trucks, and a commitment to
                safety and customer satisfaction, we ensure freight is delivered on time,
                every time.
              </p>

              <div className="cta-row">
                <a href="#quote" className="btn btn-primary">Get A Quote</a>
                <a href="tel:7737176248" className="btn btn-secondary">Call Dispatch</a>
              </div>
            </div>

            <div className="hero-card">
              <h3>Freight Ready</h3>
              <p className="hero-copy">
                Built for urgent transportation needs across Midwest lanes with direct,
                professional service.
              </p>

              <ul>
                <li>Construction materials, equipment, and urgent shipments</li>
                <li>Experienced drivers and maintained equipment</li>
                <li>Responsive communication from pickup to delivery</li>
                <li>
                  Hebrews 6:19–20 “We have this as a sure and steadfast anchor of the soul...”
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="services" className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Services</span>
              <h2>Freight solutions designed for urgent business needs</h2>
              <p>
                We help brokers, contractors, and direct shippers move critical freight
                with speed, professionalism, and dependable communication.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <div key={service.title} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="equipment" className="section">
          <div className="container two-col">
            <div>
              <div className="section-heading">
                <span className="eyebrow">Equipment</span>
                <h2>Set up for serious freight</h2>
                <p>
                  A clean equipment presentation helps brokers understand exactly what
                  kind of freight you are built to move.
                </p>
              </div>
            </div>

            <div className="feature-grid">
              {features.map((item) => (
                <div key={item} className="feature-card">
                  <h3>{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="coverage" className="section section-alt">
          <div className="container two-col">
            <div className="section-heading">
              <span className="eyebrow">Coverage</span>
              <h2>Midwest lanes with dependable service</h2>
              <p>
                Indiana, Illinois, Ohio, Michigan, Wisconsin, Missouri, and Kentucky.
                Built for urgent freight, direct shippers, and broker support.
              </p>
            </div>

            <div className="hero-card">
              <h3>Regional Coverage</h3>
              <ul>
                <li>Indiana</li>
                <li>Illinois</li>
                <li>Ohio</li>
                <li>Michigan</li>
                <li>Wisconsin</li>
                <li>Missouri</li>
                <li>Kentucky</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="quote" className="section">
          <div className="container two-col quote-layout">
            <div className="hero-card quote-main-card">
              <div className="section-heading">
                <span className="eyebrow">Get Quote</span>
                <h2>Request a fast quote for your shipment</h2>
                <p>Send your load details to our dispatch team for a quick response.</p>
              </div>

              <div className="cta-row">
                <a href="mailto:office@anchoroffaithlogistics.com" className="btn btn-primary">
                  Email Load Details
                </a>
                <a href="tel:7737176248" className="btn btn-secondary">
                  Call Dispatch
                </a>
              </div>
            </div>

            <div className="quote-side-grid">
              <div className="feature-card quote-side-card">
                <h3>Send Rate Confirmation Here</h3>
                <p className="email-break">office@anchoroffaithlogistics.com</p>
              </div>
              <div className="feature-card quote-side-card">
                <h3>Broker Packet</h3>
                <p>Add your broker packet link here for fast onboarding.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section section-alt">
          <div className="container contact-grid">
            <div className="section-heading">
              <span className="eyebrow">Contact</span>
              <h2>Ready to move your next urgent shipment?</h2>
              <p>
                Anchor Of Faith Logistics LLC supports brokers and direct shippers with
                responsive communication, dependable service, and a professional freight
                experience.
              </p>

              <div className="cta-row">
                <a href="tel:7737176248" className="btn btn-primary">Call Dispatch</a>
                <a href="mailto:office@anchoroffaithlogistics.com" className="btn btn-secondary">
                  Email Office
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div><strong>Dispatch:</strong> 773-717-6248</div>
              <div><strong>Office:</strong> 708-428-0248</div>
              <div><strong>Email:</strong> office@anchoroffaithlogistics.com</div>
              <div><strong>MC#:</strong> 1759816</div>
              <div><strong>USDOT#:</strong> 4462007</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>© Anchor Of Faith Logistics LLC</div>
          <div>Hot Shot Trucking • Expedited Freight • Direct Service</div>
        </div>
      </footer>
    </div>
  );
}
.quote-layout {
  align-items: stretch;
}

.quote-main-card {
  height: 100%;
}

.quote-side-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
  align-items: stretch;
}

.quote-side-card {
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.email-break {
  overflow-wrap: anywhere;
  word-break: break-word;
  line-height: 1.7;
}

@media (max-width: 960px) {
  .quote-side-grid {
    grid-template-columns: 1fr;
  }
}
