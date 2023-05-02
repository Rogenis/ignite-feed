import {Post} from './Post';
import { Header } from './components/Header';

import './global.css'

export function App() {
  return (
    <>
    <Header />
    <Post
      author={'Rógenis Silva'}
      content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti blanditiis repellat accusantium culpa tempora reprehenderit necessitatibus omnis quo earum totam. Mollitia sed asperiores expedita laudantium voluptates, amet repellendus sint quam.'}
    />
    </>
  )
}
