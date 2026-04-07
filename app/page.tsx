export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <div
        style={{
          background: "rgba(0,0,0,0.7)",
          minHeight: "100vh",
          padding: "40px",
        }}
      >
        <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
          Anchor of Faith Logistics LLC
        </h1>

        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          Reliable Hot Shot Freight & Expedited Logistics
        </p>

        <div style={{ marginTop: "20px" }}>
          📞 773-717-6248 <br />
          📧 office@anchoroffaithlogistics.com <br />
          📍 Valparaiso, Indiana 46385
        </div>
      </div>
    </div>
  );
}
