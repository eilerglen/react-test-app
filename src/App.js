import styles from './app.module.css';
import DogImage from './components/dog-image/dog-image';
import Header from './components/header';
import dogImagePath from './images/dog.jpg'

function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <DogImage image = {dogImagePath} name ='Doge'  description ="2013, холст, масло"/>
  </div>
  );
}

export default App;
