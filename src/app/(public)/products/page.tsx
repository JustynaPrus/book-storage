import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'The shop to buy ebooks',
  title: 'About shop',
};

export default function Products() {
  return (
    <main>
      <p>Products page</p>
    </main>
  );
}
