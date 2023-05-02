import {Post} from './Post';
import { Header } from './components/Header';

import styles from './App.module.css';
import './global.css'
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author={'Rógenis Silva'}
            content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis repellat accusantium culpa tempora reprehenderit necessitatibus omnis quo earum totam. Mollitia sed asperiores expedita laudantium voluptates, amet repellendus sint quam.'}
          />
        </main>
      </div>
    </div>
  )
}
