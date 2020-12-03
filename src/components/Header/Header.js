import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import { settings } from '../../data/dataStore';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import styles from './Header.scss';
import Search from '../Search/SearchContainer';

const Header = () => (
  <header className={styles.component}>
    <Container>
      <div className={styles.wrapper}>
        <Link to='/' className={styles.logo}>
          <Icon name={settings.Header.icon}/>
        </Link>
        <Search/>
        <nav>
          <NavLink exact to='/' activeClassName='active'>Home</NavLink>
          <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
          <NavLink exact to='/FAQ' activeClassName='active'>FAQ</NavLink>
        </nav>
      </div>
    </Container>
  </header>
);

export default Header; 