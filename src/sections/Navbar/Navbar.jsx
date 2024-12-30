import React from 'react';
import { FaHome, FaProjectDiagram, FaTools, FaEnvelope } from 'react-icons/fa';
import styles from './NavbarStyles.module.css';
import { useTheme } from '../../common/themeContext';

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === 'light' ? '🌞' : '🌜';

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}><a href="#hero"><FaHome /> Home</a></li>
        <li className={styles.navbarItem}><a href="#projects"><FaProjectDiagram /> Projects</a></li>
        <li className={styles.navbarItem}><a href="#skills"><FaTools /> Skills</a></li>
        <li className={styles.navbarItem}><a href="#contact"><FaEnvelope /> Contact</a></li>
      </ul>
      <button className={styles.toggleTheme} onClick={toggleTheme}>{themeIcon}</button>
    </nav>
  );
}

export default Navbar;
