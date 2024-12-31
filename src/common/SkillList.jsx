import React from 'react';
import styles from '../sections/Skills/SkillsStyles.module.css';

function SkillList({ src, skill, skillIcon }) {
  return (
    <span className={styles.skillItem}>
      <img src={skillIcon} alt={`${skill} logo`} className={styles.skillLogo} />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;