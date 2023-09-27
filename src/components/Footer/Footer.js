import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.tag}>
        <h5>::The Pier Restaurant & Lounge</h5>
        <p>It’s time to have a taste of The Pier Restaurant & Lounge!</p>
      </div>

      <div className={styles.sections}>
        <div>
          <p>About</p>
          <ul>
            <li>Our Chefs</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <p>Menu</p>
          <ul>
            <li>Appetizer</li>
            <li>Main Course</li>
            <li>Dessert</li>
            <li>Drinks</li>
          </ul>
        </div>
        <div>
          <p>Locations</p>
          <ul>
            <li>Plot 489</li>
            <li>Kado</li>
            <li>Abuja</li>
          </ul>
        </div>
        <div>
          <p>Contact</p>
          <ul>
            <li>Email Us</li>
            <li>FAQ</li>
            <li>Reservation</li>
          </ul>
        </div>
      </div>

      <div className={styles.hours}>
        <p className={styles.hoursTitle}>Operating Hours</p>
        <ul>
          <li>
            <p>Monday - Friday:</p>
            <p>10:00AM - 9:00PM</p>
          </li>
          <li>
            <p>Saturday - Sunday:</p>
            <p>10:00AM - 7:00PM</p>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
