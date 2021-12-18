import Footer from '../footer';
import Header from '../header';
import styles from './layout.module.css';

export default function Layout(props) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.inner}>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}