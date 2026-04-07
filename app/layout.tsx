import "./globals.css";

export const metadata = {
  title: "Anchor Of Faith Logistics LLC",
  description: "Hot Shot Trucking • Expedited Freight • Direct Service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
