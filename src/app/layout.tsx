import type { Metadata } from 'next';

import Header from '../components/Header/Header';

import './globals.css';

export const metadata: Metadata = {
  description: 'Generated by create next app',
  title: 'BookStorage App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
