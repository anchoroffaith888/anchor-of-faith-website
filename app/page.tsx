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
    <main style={{ backgroundColor: '#000', color: 'white', minHeight: '100vh' }}>
      <section
        style={{
          position: 'relative',
          backgroundImage: "url('/background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.65)',
          }}
        />
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <Image src="/logo.jpg" alt="Anchor of Faith Logistics logo" width={160} height={55} priority />
              <div>
                <div style={{ fontSize: 22, fontWeight: 700 }}>Anchor of Faith Logistics LLC</div>
                <div style={{ color: '#cbd5e1' }}>Valparaiso, Indiana 46385</div>
              </div>
            </div>
            <div style={{ textAlign: 'right', fontSize: 14 }}>
              <div>Dispatch: <a href="tel:7737176248" style={{ color: 'white' }}>773-717-6248</a></div>
              <div>Email: <a href="mailto:office@anchoroffaithlogistics.com" style={{ color: 'white' }}>office@anchoroffaithlogistics.com</a></div>
            </div>
          </div>

          <div style={{ padding: '90px 0 80px', maxWidth: 700 }}>
            <div style={{ letterSpacing: 1, textTransform: 'uppercase', fontSize: 12, marginBottom: 12 }}>
              Reliable • Responsive • Freight-Focused
            </div>
            <h1 style={{ fontSize: 56, lineHeight: 1.05, fontWeight: 800, margin: 0 }}>
              Reliable Hot Shot Freight &amp; Expedited Logistics
            </h1>
            <p style={{ marginTop: 20, fontSize: 18, color: '#e2e8f0', maxWidth: 650 }}>
              Anchor of Faith Logistics LLC provides fast, dependable transportation for time-sensitive freight.
              Built for urgency, professionalism, and direct shipper relationships.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
              <a
                href="tel:7737176248"
                style={{
                  background: 'white',
                  color: 'black',
                  padding: '12px 20px',
                  borderRadius: 12,
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                Call Dispatch
              </a>
              <a
                href="mailto:office@anchoroffaithlogistics.com"
                style={{
                  border: '1px solid white',
                  color: 'white',
                  padding: '12px 20px',
                  borderRadius: 12,
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '70px 24px' }}>
        <h2 style={{ fontSize: 36, marginBottom: 24 }}>Our Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.04)',
                borderRadius: 18,
                padding: 24,
              }}
            >
              <div style={{ fontSize: 30 }}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p style={{ color: '#cbd5e1' }}>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '60px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 36 }}>Contact Us</h2>
        <p style={{ color: '#cbd5e1' }}>Ready to move freight? Reach out now.</p>
        <div style={{ marginTop: 20, lineHeight: 2 }}>
          <div>📞 773-717-6248</div>
          <div>📧 office@anchoroffaithlogistics.com</div>
          <div>📍 Valparaiso, Indiana 46385</div>
        </div>
      </section>
    </main>
  );
}
3. Make sure your public folder has these exact files
