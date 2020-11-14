import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';

class App extends React.Component {
  render() {
    return (
      <main className={styles.Component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello world!</h2>
        <List imageSrc={"http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"} title={['Things to do ', <sup>soon!</sup>]}>
          <p>I'm planning on doing all these things sooner, rather than later!</p>
        </List>
      </main>
    )
  }
}

export default App;
