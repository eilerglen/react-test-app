import styles from './app.module.css';
import Lootboxer from './components/lootboxer/lootboxer';
import Header from './components/header';

function App() {
  return (
   
    <div className={styles.root}>
       <Header />
    <div className={styles.blur}>
    <div className={styles.wrapper}>
      <Lootboxer />
    </div>  
    </div>
  </div>
  );
}

export default App;
