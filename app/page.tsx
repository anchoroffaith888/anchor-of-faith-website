export default function AnchorOfFaithLogisticsWebsite() {
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
      description:
        'Same-day and next-available scheduling options for critical shipments that cannot wait.',
      icon: '⏱️',
    },
    {
      title: 'Professional Communication',
      description:
        'Clear updates, dependable coordination, and business-first service from pickup through delivery.',
      icon: '📱',
    },
  ];

  const trustPoints = [
    'Dispatch available and responsive',
    'Professional communication from pickup to delivery',
    'Ideal for urgent, direct, and high-priority freight',
    'Midwest-based support with flexible routing',
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-slate-950/30" />

        <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-black/30 p-4 backdrop-blur md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/logo.jpg"
                alt="Anchor of Faith Logistics logo"
                className="h-14 w-auto rounded-xl border border-white/10 bg-white/90 p-1 shadow-lg"
              />
              <div>
                <div className="text-xl font-semibold tracking-wide">Anchor of Faith Logistics LLC</div>
                <div className="text-sm text-slate-300">Valparaiso, Indiana 46385</div>
              </div>
            </div>

            <div className="grid gap-1 text-sm text-slate-200 md:text-right">
              <a href="tel:7737176248" className="transition hover:text-white">
                Dispatch: 773-717-6248
              </a>
              <a href="mailto:office@anchoroffaithlogistics.com" className="transition hover:text-white">
                office@anchoroffaithlogistics.com
              </a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-24 pt-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pb-32 lg:pt-16">
          <div className="flex flex-col justify-center">
            <div className="mb-5 inline-flex w-fit rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100 shadow-lg shadow-cyan-500/10">
              Reliable • Responsive • Freight Focused
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.55)] sm:text-6xl lg:text-7xl">
              Premium hot shot service for urgent freight and direct shippers.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Anchor of Faith Logistics LLC delivers time-sensitive freight with professional communication,
              dependable scheduling, and a business-first approach built to earn trust.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:7737176248"
                className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 shadow-xl transition hover:-translate-y-0.5"
              >
                Call Dispatch
              </a>
              <a
                href="mailto:office@anchoroffaithlogistics.com"
                className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Email Us
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-100 backdrop-blur shadow-lg"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-end">
            <div className="w-full rounded-[2rem] border border-white/10 bg-black/35 p-6 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-cyan-300/15 bg-slate-900/80 p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-100/80">
                  Why shippers call us
                </div>
                <div className="mt-4 space-y-4 text-sm leading-7 text-slate-200">
                  <div>• Dedicated hot shot service</div>
                  <div>• Professional, responsive communication</div>
                  <div>• Urgent-load ready scheduling</div>
                  <div>• Midwest-based support and routing</div>
                </div>
                <div className="mt-6 rounded-2xl border border-white/10 bg-cyan-300/10 p-4 text-sm text-cyan-50">
                  Need a quote fast? Call dispatch now at 773-717-6248.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Services</div>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Built for urgent freight, direct customers, and dependable delivery</h2>
          <p className="mt-4 text-slate-300">
            A clean, professional transportation experience from first contact through final delivery.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-xl transition hover:-translate-y-1 hover:bg-white/[0.05]"
            >
              <div className="text-3xl">{service.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-20 lg:grid-cols-3 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-xl">
            <div className="text-sm uppercase tracking-[0.2em] text-cyan-200">Fast Response</div>
            <div className="mt-3 text-2xl font-bold">Professional communication that keeps freight moving</div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-xl">
            <div className="text-sm uppercase tracking-[0.2em] text-cyan-200">Urgent Ready</div>
            <div className="mt-3 text-2xl font-bold">Built for time-sensitive and high-priority shipments</div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-xl">
            <div className="text-sm uppercase tracking-[0.2em] text-cyan-200">Midwest Based</div>
            <div className="mt-3 text-2xl font-bold">Flexible routing support out of Valparaiso, Indiana</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Contact</div>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Ready to move freight?</h2>
            <p className="mt-4 max-w-xl text-slate-300 leading-8">
              Reach out for quotes, scheduling, and direct shipper opportunities. We’re built to respond fast and handle urgent transportation needs with professionalism.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-2xl">
            <div className="space-y-4 text-base text-slate-200">
              <div>
                <span className="font-semibold text-white">Dispatch:</span> 773-717-6248
              </div>
              <div>
                <span className="font-semibold text-white">Email:</span> office@anchoroffaithlogistics.com
              </div>
              <div>
                <span className="font-semibold text-white">Home Base:</span> Valparaiso, Indiana 46385
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © 2026 Anchor of Faith Logistics LLC
      </footer>
    </div>
  );
}
