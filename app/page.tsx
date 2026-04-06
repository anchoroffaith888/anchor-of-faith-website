import Image from 'next/image';

const services = [
  {
    title: 'Hot Shot Freight',
    description:
      'Fast, dedicated transportation for urgent and time-sensitive freight across regional and interstate lanes.',
    icon: '🚛',
  },
  {
    title: 'Direct Shipper Support',
    description:
      'Reliable service for manufacturers, construction suppliers, automotive vendors, and commercial accounts.',
    icon: '📦',
  },
  {
    title: 'Expedited Deliveries',
    description: 'Same-day and next-available scheduling options for critical shipments that cannot wait.',
    icon: '⏱️',
  },
  {
    title: 'Professional Communication',
    description: 'Clear updates, dependable coordination, and business-first service from pickup through delivery.',
    icon: '📱',
  },
];

export default function Page() {
  return (
    <main className="site-shell">
      <section className="topbar">
        <div className="container topbar-inner">
          <div className="brand-wrap">
            <Image src="/logo.jpg" alt="Anchor of Faith Logistics logo" width={243} height={84} className="logo" priority />
            <div>
              <div className="brand-name">Anchor of Faith Logistics LLC</div>
              <div className="brand-subtitle">Valparaiso, Indiana 46385</div>
            </div>
          </div>
          <div className="top-contact">
            <div><strong>Dispatch:</strong> <a href="tel:7737176248">773-717-6248</a></div>
            <div><strong>Email:</strong> <a href="mailto:office@anchoroffaithlogistics.com">office@anchoroffaithlogistics.com</a></div>
          </div>
        </div>
      </section>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Reliable • Responsive • Freight-Focused</div>
            <h1>Reliable Hot Shot Freight &amp; Expedited Logistics</h1>
            <p className="hero-copy">
              Anchor of Faith Logistics LLC provides fast, dependable transportation for time-sensitive freight. Built for urgency,
              professionalism, and direct shipper relationships.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="tel:7737176248">Call Dispatch</a>
              <a className="btn btn-secondary" href="mailto:office@anchoroffaithlogistics.com">Email Us</a>
            </div>
          </div>

          <div className="hero-card">
            <h2>Why shippers call us</h2>
            <ul>
              <li>Dedicated hot shot service</li>
              <li>Professional, responsive communication</li>
              <li>Urgent-load ready scheduling</li>
              <li>Midwest-based support and routing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Services</span>
            <h2>Transportation support designed for speed and reliability</h2>
            <p>We help businesses move freight with responsive communication and dependable execution.</p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col">
          <div>
            <span className="eyebrow">About</span>
            <h2>A business-first logistics partner for customers who need dependable service</h2>
            <p>
              Anchor of Faith Logistics LLC is built around responsiveness, professionalism, and urgency. Whether you are shipping a
              critical load or looking for a dependable transportation partner, our goal is to keep your freight moving with clear
              communication and reliable support.
            </p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <h3>Fast Response</h3>
              <p>Quick communication on quotes, scheduling, and shipment coordination.</p>
            </div>
            <div className="feature-card">
              <h3>Professional Service</h3>
              <p>A polished, business-minded approach that helps build customer confidence.</p>
            </div>
            <div className="feature-card">
              <h3>Urgent Freight Ready</h3>
              <p>Ideal for time-sensitive deliveries and direct customer freight opportunities.</p>
            </div>
            <div className="feature-card">
              <h3>Midwest Coverage</h3>
              <p>Positioned to support regional freight needs with flexible planning.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <span className="eyebrow">Contact</span>
            <h2>Let&apos;s move your freight</h2>
            <p>Need a quote or want to discuss a shipment? Reach out and we can build around your delivery needs.</p>
          </div>
          <div className="contact-card">
            <div><strong>Dispatch:</strong> <a href="tel:7737176248">773-717-6248</a></div>
            <div><strong>Email:</strong> <a href="mailto:office@anchoroffaithlogistics.com">office@anchoroffaithlogistics.com</a></div>
            <div><strong>Home Base:</strong> Valparaiso, Indiana 46385</div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>© 2026 Anchor of Faith Logistics LLC</div>
          <div>Valparaiso, Indiana 46385</div>
        </div>
      </footer>
    </main>
  );
}
