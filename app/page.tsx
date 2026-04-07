export default function AnchorOfFaithWebsite() {
  const services = [
    {
      title: "Hot Shot Freight",
      text: "Direct, time-sensitive transportation for critical shipments that cannot sit on a dock waiting.",
    },
    {
      title: "Construction & Equipment",
      text: "Reliable hauling support for materials, equipment, and urgent job-site freight throughout the Midwest.",
    },
    {
      title: "Expedited Response",
      text: "Fast communication, quick dispatch coordination, and dependable updates from pickup to delivery.",
    },
  ];

  const trustItems = [
    "MC# 1759816",
    "USDOT# 4462007",
    "Dispatch: 773-717-6248",
    "Office: 708-428-0248",
    "office@anchoroffaithlogistics.com",
    "Midwest Hot Shot Coverage",
  ];

  const equipment = [
    "2024 Ram 3500 Dually",
    "40 Ft Gooseneck Trailer",
    "Time-Sensitive Freight",
    "Construction Materials",
    "Equipment Transport",
    "Direct Shipper Support",
  ];

  const lanes = [
    "Indiana",
    "Illinois",
    "Ohio",
    "Michigan",
    "Wisconsin",
    "Missouri",
    "Kentucky",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(2,6,23,0.78), rgba(2,6,23,0.92)), url('/anchor-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-10">
          <nav className="flex items-center justify-between rounded-full border border-white/10 bg-slate-950/50 px-4 py-3 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <img
                src="/anchor-logo.jpg"
                alt="Anchor Of Faith Logistics logo"
                className="h-12 w-12 rounded-full border border-white/10 bg-white/90 object-cover p-1"
              />
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-white sm:text-base">
                  Anchor Of Faith Logistics LLC
                </div>
                <div className="text-[11px] text-slate-300 sm:text-xs">
                  Hot Shot Trucking • Expedited Freight • Direct Service
                </div>
              </div>
            </div>

            <div className="hidden items-center gap-6 text-sm text-slate-200 lg:flex">
              <a href="#services" className="transition hover:text-white">Services</a>
              <a href="#equipment" className="transition hover:text-white">Equipment</a>
              <a href="#coverage" className="transition hover:text-white">Coverage</a>
              <a href="#quote" className="transition hover:text-white">Quote</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </div>
          </nav>

          <div className="grid gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
            <div>
              <div className="inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-cyan-200 sm:text-sm">
                Premium Hot Shot Freight Service
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                Fast, reliable freight service for urgent loads and direct shippers.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                Anchor Of Faith Logistics LLC provides fast, reliable, and cost-effective hot shot trucking services. We specialize in delivering time-sensitive freight such as construction materials, equipment, and urgent shipments. With experienced drivers, well-maintained trucks, and a commitment to safety and customer satisfaction, we ensure freight is delivered on time, every time.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#quote"
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-2xl transition hover:-translate-y-0.5"
                >
                  Get A Quote
                </a>
                <a
                  href="tel:7737176248"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Call Dispatch
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {trustItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-sm text-slate-100 backdrop-blur-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-cyan-400/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/55 shadow-2xl backdrop-blur-md">
                <div className="border-b border-white/10 px-6 py-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-cyan-300">Freight Ready</div>
                      <div className="mt-2 text-2xl font-semibold">Built for urgent transportation needs</div>
                    </div>
                    <img
                      src="/anchor-logo.jpg"
                      alt="Anchor emblem"
                      className="h-16 w-16 rounded-2xl border border-white/10 bg-white/90 object-cover p-1"
                    />
                  </div>
                </div>

                <div className="grid gap-4 p-6">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-sm text-slate-400">Primary Freight</div>
                    <div className="mt-2 text-lg font-medium text-white">
                      Construction materials, equipment, and urgent shipments
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-sm text-slate-400">Service Standard</div>
                    <div className="mt-2 text-lg font-medium text-white">
                      Professional communication, maintained equipment, and dependable on-time service
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <div className="text-sm text-slate-400">Faith Verse</div>
                    <div className="mt-2 text-sm leading-7 text-slate-200">
                      Hebrews 6:19–20 “We have this as a sure and steadfast anchor of the soul, a hope that enters into the inner place behind the curtain, where Jesus has gone as a forerunner on our behalf.”
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900/80">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 py-5 text-sm text-slate-200 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
            Fast Quote Turnaround
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
            Broker & Direct Shipper Support
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
            Midwest Regional Coverage
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
            Time-Sensitive Freight Focus
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">Services</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Freight solutions designed for urgent business needs
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            We help brokers, contractors, and direct shippers move critical freight with speed, professionalism, and dependable communication.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-7 shadow-xl transition hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-cyan-200">
                Anchor Of Faith
              </div>
              <div className="mt-5 text-2xl font-semibold text-white">{service.title}</div>
              <p className="mt-4 leading-8 text-slate-300">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="equipment" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">Equipment</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Set up for hot shot, direct, and urgent freight
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                Presenting your equipment clearly gives brokers and shippers confidence in your capacity, lane fit, and service type before they even call.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {equipment.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/80 p-5 text-slate-100 shadow-lg">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-2xl">
              <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">Carrier Profile</div>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-slate-400">Truck</div>
                  <div className="mt-1 text-xl font-semibold text-white">2024 Ram 3500 Dually</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-slate-400">Trailer</div>
                  <div className="mt-1 text-xl font-semibold text-white">40 Ft Gooseneck</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-slate-400">Ideal Freight</div>
                  <div className="mt-1 text-xl font-semibold text-white">Equipment, materials, and time-critical loads</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="coverage" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">Coverage</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Strong Midwest lane presence
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Your site should instantly communicate where you run. This version highlights your strongest Midwest service region in a clean, premium format instead of using a weak placeholder.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {lanes.map((state) => (
                <div key={state} className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-slate-100">
                  {state}
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 shadow-2xl">
            <div className="border-b border-white/10 px-6 py-5">
              <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">Regional Map</div>
              <div className="mt-2 text-2xl font-semibold text-white">Midwest Service Area</div>
            </div>
            <div className="grid min-h-[360px] place-items-center p-8">
              <div className="grid w-full max-w-2xl grid-cols-3 gap-4 text-center text-sm font-medium text-white sm:grid-cols-4">
                <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/12 px-4 py-6">WI</div>
                <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/12 px-4 py-6">MI</div>
                <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/12 px-4 py-6">OH</div>
                <div className="hidden rounded-2xl border border-cyan-400/30 bg-cyan-400/12 px-4 py-6 sm:block">KY</div>
                <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/18 px-4 py-10 text-base shadow-lg">IL</div>
                <div className="rounded-2xl border border-cyan-400/40 bg-cyan-400/25 px-4 py-10 text-base shadow-lg">IN</div>
                <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/18 px-4 py-10 text-base shadow-lg">OH</div>
                <div className="hidden rounded-2xl border border-cyan-400/30 bg-cyan-400/18 px-4 py-10 text-base shadow-lg sm:block">MO</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6">MO</div>
                <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/12 px-4 py-6">KY</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6">Regional</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6">Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/85 p-8 shadow-2xl lg:p-10">
              <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">Get Quote</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Request a fast quote for your shipment
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                Built to give brokers and shippers a quick path to send load details and reach your dispatch team fast.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <input className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-400" placeholder="Company name" />
                <input className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-400" placeholder="Contact name" />
                <input className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-400" placeholder="Phone number" />
                <input className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-400" placeholder="Email address" />
                <input className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-400 sm:col-span-2" placeholder="Pickup and delivery locations" />
                <input className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-400" placeholder="Freight type" />
                <input className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-400" placeholder="Weight / dimensions" />
                <textarea className="min-h-[150px] rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-400 sm:col-span-2" placeholder="Shipment details, timing, urgency, appointments, and special instructions" />
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-2xl transition hover:-translate-y-0.5">
                  Submit Quote Request
                </button>
                <a href="mailto:office@anchoroffaithlogistics.com" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Email Load Details
                </a>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-blue-950 p-8 shadow-2xl">
                <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">Rate Confirmations</div>
                <h3 className="mt-4 text-2xl font-semibold">Send Rate Confirmation Here</h3>
                <p className="mt-4 leading-8 text-slate-300">
                  Make it easy for brokers to move quickly. Send rate confirmations and shipment documents directly to our office email.
                </p>
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-slate-400">Rate Confirmation Email</div>
                  <div className="mt-2 text-lg font-semibold text-white">office@anchoroffaithlogistics.com</div>
                </div>
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-slate-400">Dispatch Line</div>
                  <div className="mt-2 text-lg font-semibold text-white">773-717-6248</div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-slate-900/85 p-8 shadow-xl">
                <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">Broker Packet</div>
                <h3 className="mt-4 text-2xl font-semibold">Download Broker Packet</h3>
                <p className="mt-4 leading-8 text-slate-300">
                  Add your onboarding packet here so brokers can quickly access your company information and credentials.
                </p>
                <button className="mt-6 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Download Broker Packet
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 shadow-2xl">
          <div className="grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-cyan-300">Contact</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready to move your next urgent shipment?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                Anchor Of Faith Logistics LLC is ready to support brokers and direct shippers with responsive communication, dependable hot shot service, and a professional freight experience.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="tel:7737176248" className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950">
                  Call Dispatch
                </a>
                <a href="mailto:office@anchoroffaithlogistics.com" className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white">
                  Email Office
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-100">Dispatch: 773-717-6248</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-100">Office: 708-428-0248</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-100 sm:col-span-2">Email: office@anchoroffaithlogistics.com</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-100">MC#: 1759816</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-100">USDOT#: 4462007</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
