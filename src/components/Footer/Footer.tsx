import { NewsletterForm } from '../NewsletterForm/NewsletterForm';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <NewsletterForm />
    </footer>
  );
}
