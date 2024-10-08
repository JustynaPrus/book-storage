import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'The shop to buy ebooks',
  title: 'About shop',
};

export default function Home() {
  return (
    <main>
      <p>Home page</p>
    </main>
  );
}
