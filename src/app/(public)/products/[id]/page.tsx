import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'The shop to buy ebooks',
  title: 'About shop',
};

export default function ProductDetails() {
  return (
    <main>
      <p>Product details page</p>
    </main>
  );
}