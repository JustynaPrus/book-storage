import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'The shop to buy ebooks',
  title: 'About shop',
};

export default function Profile() {
  return (
    <main>
      <p>Profile page</p>
    </main>
  );
}
