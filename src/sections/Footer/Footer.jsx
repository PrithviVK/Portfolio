import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <footer id='footer' className={styles.container}>
      <div className={styles.footerSection}>
        <h2>Get in Touch</h2>
        <div className={styles.contactDetails}>
          <div className={styles.contactItem}>
            <h3>Location</h3>
            <p>United States</p>
          </div>
          <div className={styles.contactItem}>
            <h3>Contact Directly</h3>
            <p>Email: <a href="mailto:prithvivasanth15@gmail.com">prithvivasanth15@gmail.com</a></p>
            <p>Phone: +1 (857)-693-8739</p>
          </div>
        </div>
      </div>
      <hr/>
      <p>&copy; 2024 Prithvi Vasanth Kumar.<br />
        All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
