import {ReactElement} from 'react';
import { Tag} from './features'
import styles from'./App.module.scss';

function App(): ReactElement {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <h1>React/Redux boiler plate</h1>
      </header>
      <main className={styles.AppMain}>
    
      <Tag />
      </main>
    </div>
  );
}

export default App;
