import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Ebenezer Mulu</div>
      <div className={styles.text}>&copy; All right reserved</div>
    </div>
  );
};

export default Footer;
