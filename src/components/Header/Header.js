import React from 'react';
import { Link} from 'react-router-dom';
import Container from '../Container/Container';
import styles from './Header.scss';

const Header = () => (
  <header className={styles.component}>
    <Container>
      <div className={styles.wrapper}>
        <Link className={styles.logo}>

        </Link>
      </div>
    </Container>
  </header>
);

export default Header; 