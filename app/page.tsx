export default function AnchorOfFaithWebsite() {
  const services = [
    {
      title: "Hot Shot Freight",
      text: "Fast, dependable transportation for time-sensitive freight, direct shipments, and critical loads.",
    },
    {
      title: "Construction & Equipment Hauling",
      text: "Reliable delivery support for construction materials, equipment, and urgent job-site shipments.",
    },
    {
      title: "Expedited Service",
      text: "Professional dispatching and responsive communication to keep your freight moving on time.",
    },
  ];

  const highlights = [
    "MC# 1759816",
    "USDOT# 4462007",
    "Dispatch: 773-717-6248",
    "Office: 708-428-0248",
    "office@anchoroffaithlogistics.com",
    "Time-sensitive freight specialists",
  ];

  const companyText = `Hot Shot Trucking Company Anchor Of Faith Logistics LLC provides fast, reliable, and cost-effective hot shot trucking services. We specialize in delivering time-sensitive freight such as construction materials, equipment, and urgent shipments. With experienced drivers, well-maintained trucks, and a commitment to safety and customer satisfaction, we ensure freight is delivered on time, every time.`;

  const equipment = [
    "2024 Ram 3500 dually",
    "40 ft gooseneck trailer",
    "Hot shot and expedited load capability",
    "Built for urgent and direct freight moves",
  ];

  const serviceAreas = [
    "Indiana",
    "Illinois",
    "Ohio",
    "Michigan",
    "Wisconsin",
    "Missouri",
    "Kentucky",
  ];

  const verse = `Hebrews 6:19–20 \"We have this as a sure and steadfast anchor of the soul, a hope that enters into the inner place behind the curtain, where Jesus has gone as a forerunner on our behalf.\"`;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(2,6,23,0.80), rgba(2,6,23,0.88)), url('/mnt/data/anchor of faith logo.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-blue-950/80" />
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <nav className="flex items-center justify-between rounded-full border border-white/10 bg-slate-950/45 px-5 py-3 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <img
                src="/mnt/data/anchor of faith logo small .jpg"
                alt="Anchor of Faith Logistics logo"
                className="h-12 w-12 rounded-full object-cover border border-white/10 bg-white/90 p-1"
              />
              <div>
                <div className="text-lg font-semibold tracking-[0.2em] uppercase">Anchor Of Faith Logistics LLC</div>
                <div className="text-xs text-slate-200">Hot Shot Trucking • Expedited Freight • Direct Service</div>
              </div>
            </div>
            <div className="hidden gap-6 text-sm text-slate-200 md:flex">
              <a href="#services" className="transition hover:text-white">Services</a>
              <a href="#quote" className="transition hover:text-white">Get Quote</a>
              <a href="#coverage" className="transition hover:text-white">Coverage</a>
              <a href="#equipment" className="transition hover:text-white">Equipment</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </div>
          </nav>

          <div className="grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/15 px-4 py-2 text-sm text-cyan-100">
                Fast, Reliable, and Cost-Effective Hot Shot Trucking
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                On-time freight service backed by faith, professionalism, and urgency.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                {companyText}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-2xl transition hover:-translate-y-0.5"
                >
                  Request a Quote
                </a>
                <a
                  href="tel:7737176248"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Call Dispatch
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/35 px-4 py-3 text-sm text-slate-100 backdrop-blur-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-slate-950/40 p-4 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/85 p-8">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">Anchor Of Faith</div>
                      <div className="mt-2 text-2xl font-semibold">Dependable service for urgent freight</div>
                    </div>
                    <img
                      src="/mnt/data/anchor of faith logo small .jpg"
                      alt="Anchor of Faith emblem"
                      className="h-16 w-16 rounded-2xl border border-white/10 bg-white/90 object-cover p-1"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-5">
                      <div className="text-sm text-slate-400">Primary Freight</div>
                      <div className="mt-2 text-lg font-medium">Construction materials, equipment, and urgent shipments</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-5">
                      <div className="text-sm text-slate-400">Service Promise</div>
                      <div className="mt-2 text-lg font-medium">Experienced drivers, maintained equipment, and a commitment to on-time delivery</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-5">
                      <div className="text-sm text-slate-400">Faith & Mission</div>
                      <div className="mt-2 text-base font-medium leading-7 text-slate-200">{verse}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">Services</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Freight solutions designed for urgent business needs</h2>
          <p className="mt-4 text-slate-300">
            Built to present a professional image to brokers and shippers while clearly showing your speed, reliability, and faith-based brand identity.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 shadow-xl backdrop-blur-sm">
              <div className="text-xl font-semibold">{service.title}</div>
              <p className="mt-4 leading-7 text-slate-300">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="quote" className="mx-auto max-w-7xl px-6 py-6 lg:px-10 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm lg:p-10">
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">Get Quote</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Request a fast quote for your shipment</h2>
            <p className="mt-4 max-w-2xl text-slate-300 leading-8">
              Give brokers and shippers a simple way to send load details quickly. This premium quote section is built to convert urgent freight inquiries.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <input className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none placeholder:text-slate-400" placeholder="Company name" />
              <input className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none placeholder:text-slate-400" placeholder="Contact name" />
              <input className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none placeholder:text-slate-400" placeholder="Phone number" />
              <input className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none placeholder:text-slate-400" placeholder="Email address" />
              <input className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none placeholder:text-slate-400 sm:col-span-2" placeholder="Pickup and delivery locations" />
              <input className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none placeholder:text-slate-400" placeholder="Freight type" />
              <input className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none placeholder:text-slate-400" placeholder="Weight / dimensions" />
              <textarea className="min-h-[140px] rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none placeholder:text-slate-400 sm:col-span-2" placeholder="Shipment details, urgency, special instructions, and appointment information" />
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

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-blue-950 p-8 shadow-2xl">
              <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">Rate Confirmations</div>
              <h3 className="mt-4 text-2xl font-semibold">Send Rate Confirmation Here</h3>
              <p className="mt-4 leading-8 text-slate-300">
                Make it easy for brokers to move fast. Send all rate confirmations, shipment details, and supporting documents directly to our office email.
              </p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-100">
                <div className="text-sm text-slate-400">Rate Confirmation Email</div>
                <div className="mt-2 text-lg font-semibold">office@anchoroffaithlogistics.com</div>
              </div>
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-100">
                <div className="text-sm text-slate-400">Dispatch Line</div>
                <div className="mt-2 text-lg font-semibold">773-717-6248</div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
              <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">Broker Packet</div>
              <h3 className="mt-4 text-2xl font-semibold">Download Broker Packet</h3>
              <p className="mt-4 leading-8 text-slate-300">
                Add a one-click broker packet download so new partners can immediately access your company credentials and onboarding details.
              </p>
              <button className="mt-6 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Download Broker Packet
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="coverage" className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">Service Area</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">Midwest lane coverage</h2>
            <p className="mt-4 leading-8 text-slate-300">
              Show customers where you run most often and position Anchor Of Faith Logistics as a strong Midwest hot shot carrier.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {serviceAreas.map((state) => (
                <div key={state} className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-slate-100">
                  {state}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl">
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">Map View</div>
            <h3 className="mt-4 text-2xl font-semibold">Regional freight coverage map</h3>
            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 p-6">
              <div className="grid min-h-[280px] place-items-center rounded-[1.25rem] border border-dashed border-cyan-400/30 bg-slate-950/60 text-center text-slate-300">
                <div>
                  <div className="text-lg font-semibold text-white">Midwest Service Map Area</div>
                  <p className="mt-3 max-w-md leading-7">
                    This section is ready for a styled coverage map showing Indiana and surrounding Midwest states where your hot shot service runs most often.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="equipment" className="mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-14">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">Equipment</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Built for hot shot, direct, and urgent freight</h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                Add your real equipment details so brokers know exactly what capacity and setup Anchor Of Faith Logistics is running.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {equipment.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/75 p-5 text-slate-100">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">About</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">A strong online presence for a serious transportation business</h2>
            <p className="mt-6 max-w-3xl leading-8 text-slate-300">
              Anchor Of Faith Logistics LLC is positioned as a trusted hot shot trucking company for businesses that need fast response, dependable communication, and safe transportation of urgent freight. This version uses your real logo, company identifiers, business email, and faith-centered brand story.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6">
              <div className="text-sm text-slate-400">Ideal Next Upgrade</div>
              <div className="mt-2 text-lg font-medium">Custom branded with your logo, MC number, USDOT number, business email, and hero background image</div>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6">
              <div className="text-sm text-slate-400">Lead Capture</div>
              <div className="mt-2 text-lg font-medium">Embed a quote request form for brokers and direct shippers</div>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6">
              <div className="text-sm text-slate-400">Trust Signals</div>
              <div className="mt-2 text-lg font-medium">Display MC# 1759816, USDOT# 4462007, service area, testimonials, and quote request options</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-900 to-blue-950 p-8 shadow-2xl lg:p-12">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.3em] text-cyan-300">Contact</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Ready to turn this into your live website</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Your branding is now worked into the design. The next step is adding your dispatch phone number, a live quote form, and publishing it to your domain.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-200">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Dispatch: 773-717-6248</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Office: 708-428-0248</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Email: office@anchoroffaithlogistics.com</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">MC#: 1759816</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">USDOT#: 4462007</div>
            </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">MC#: 1759816</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">USDOT#: 4462007</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
