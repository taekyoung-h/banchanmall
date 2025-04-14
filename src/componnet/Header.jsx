import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Header.module.css';
import logoImg from '../img/logo.png';

import NavBar from './NavBar'

const Header = () => {
  return (
    <header>
        <div className={styles.inner}>
            <h1 className={styles.logo}>
            <Link to='/'>
                <img src={logoImg} alt="로고" />
            </Link>
            </h1>
            <NavBar />
        </div>
    </header>
  )
}

export default Header