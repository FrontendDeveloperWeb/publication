import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found | Children Book Magic';
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.emoji}>📖✨</div>
      <h1 className={styles.title}>Page Not Found</h1>
      <p className={styles.text}>Oops! This page seems to have wandered off into a different story.</p>
      <Link to="/" className={styles.link}>Return Home</Link>
    </div>
  );
}
