import { NewsletterForm } from '../NewsletterForm/NewsletterForm';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Newsletter</p>
      <NewsletterForm />
    </footer>
  );
}
