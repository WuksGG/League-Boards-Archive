import styles from './footer.module.css';

export default function Footer() {
  return (
    <div id="footer" className={styles.container}>
      <div className={`${styles.inner} pw`}>
        <div className={styles.menu}>
          <a className={styles.menuitem}>Terms of Use</a>
          <a href="https://github.com/WuksGG/League-Boards-Archive" target="_blank" className={styles.menuitem}>GitHub</a>
          <a className={styles.menuitem}>Privacy Policy</a>
        </div>
        <div className={styles.copyright}>
          Copyright &copy; 2021 Michael Chan.
        </div>
      </div>
    </div>
  )
}