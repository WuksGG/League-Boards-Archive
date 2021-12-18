import styles from './footer.module.css';

export default function Footer() {
  return (
    <div id="footer" className={styles.container}>
      <div className="pw">Copyright &copy; 2021 Michael Chan. Boards Archive is not associated or affiliated with Riot Games or League of Legends in any way. League of Legends is a registered trademark and copyright of Riot Games, Inc.</div>
    </div>
  )
}