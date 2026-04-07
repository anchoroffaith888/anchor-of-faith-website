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

  const companyText = `Hot Shot Trucking Company Anchor Of Faith Logistics LLC provides fast, reliable, and cost-effective hot shot trucking services. We specialize in delivering time-sensitive freight such as construction materials, equipment, and urgent shipments. With experienced drivers, well-maintained trucks, and a commitment to safety and customer satisfaction, we ensure freight is delivered on time, every time.`;

  const verse = `Hebrews 6:19–20 "We have this as a sure and steadfast anchor of the soul..."`;

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(2,6,23,0.85), rgba(2,6,23,0.90)), url('/anchor-bg.jpg')",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-10">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/anchor-logo.jpg" className="h-10 w-10 rounded-full" />
              <div className="font-semibold">Anchor Of Faith Logistics LLC</div>
            </div>
            <div className="hidden md:flex gap-6 text-sm">
              <a href="#services">Services</a>
              <a href="#quote">Get Quote</a>
              <a href="#coverage">Coverage</a>
              <a href="#equipment">Equipment</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>

          <div className="py-20 max-w-3xl">
            <h1 className="text-4xl font-bold leading-tight">
              On-time freight service backed by professionalism and urgency
            </h1>
            <p className="mt-6 text-slate-300">{companyText}</p>

            <div className="mt-6 flex gap-4">
              <a href="#quote" className="bg-white text-black px-5 py-3 rounded-xl">
                Get Quote
              </a>
              <a href="tel:7737176248" className="border px-5 py-3 rounded-xl">
                Call Dispatch
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {highlights.map((h) => (
                <div key={h} className="bg-white/5 p-3 rounded-lg text-sm">
                  {h}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold">Services</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {services.map((s) => (
            <div key={s.title} className="bg-white/5 p-6 rounded-xl">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-3 text-slate-300">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section id="quote" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold">Get a Quote</h2>

        <div className="grid md:grid-cols-2 gap-8 mt-8">

          {/* FORM */}
          <div className="bg-white/5 p-6 rounded-xl space-y-4">
            <input className="w-full p-3 rounded bg-black border" placeholder="Company name" />
            <input className="w-full p-3 rounded bg-black border" placeholder="Contact name" />
            <input className="w-full p-3 rounded bg-black border" placeholder="Phone" />
            <input className="w-full p-3 rounded bg-black border" placeholder="Email" />
            <textarea className="w-full p-3 rounded bg-black border" placeholder="Shipment details" />

            <button className="bg-white text-black px-5 py-3 rounded-xl w-full">
              Submit Request
            </button>
          </div>

          {/* RATE CONFIRM */}
          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">Send Rate Confirmation</h3>
            <p className="mt-4 text-slate-300">
              Send all rate cons directly to:
            </p>

            <div className="mt-4 bg-black p-4 rounded">
              office@anchoroffaithlogistics.com
            </div>

            <div className="mt-4 bg-black p-4 rounded">
              Dispatch: 773-717-6248
            </div>

            <button className="mt-6 border px-5 py-3 rounded-xl">
              Download Broker Packet
            </button>
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section id="coverage" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold">Service Area</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="space-y-3">
            {serviceAreas.map((s) => (
              <div key={s} className="bg-white/5 p-3 rounded">{s}</div>
            ))}
          </div>

          <div className="bg-black/40 p-10 rounded-xl text-center">
            Midwest Coverage Map (placeholder)
          </div>
        </div>
      </section>

      {/* EQUIPMENT */}
      <section id="equipment" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold">Equipment</h2>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {equipment.map((e) => (
            <div key={e} className="bg-white/5 p-5 rounded-xl">
              {e}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold">Contact</h2>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white/5 p-4 rounded">Dispatch: 773-717-6248</div>
          <div className="bg-white/5 p-4 rounded">Office: 708-428-0248</div>
          <div className="bg-white/5 p-4 rounded">Email: office@anchoroffaithlogistics.com</div>
          <div className="bg-white/5 p-4 rounded">MC#: 1759816</div>
          <div className="bg-white/5 p-4 rounded">USDOT#: 4462007</div>
        </div>
      </section>

    </div>
  );
}
