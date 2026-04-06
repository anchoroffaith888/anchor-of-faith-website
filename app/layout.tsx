import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Anchor of Faith Logistics LLC',
  description: 'Reliable hot shot freight and expedited logistics from Valparaiso, Indiana.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
