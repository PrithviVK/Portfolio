import styles from './SkillsStyles.module.css'
import darkIcon from '../../assets/checkmark-dark.svg'
import lightIcon from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
      const {theme} = useTheme();
    
      const checkMarkIcon = theme === 'light' ? lightIcon : darkIcon;

  return (
    <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='Langgraph'/>
            <SkillList src={checkMarkIcon} skill='Tensorflow'/>
            <SkillList src={checkMarkIcon} skill='Numpy'/>
            <SkillList src={checkMarkIcon} skill='Pandas'/>
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='HTML5'/>
            <SkillList src={checkMarkIcon} skill='CSS'/>
            <SkillList src={checkMarkIcon} skill='Javascript'/>
            <SkillList src={checkMarkIcon} skill='ReactJS'/>
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='Flask'/>
            <SkillList src={checkMarkIcon} skill='Django'/>
            <SkillList src={checkMarkIcon} skill='PostgreSQL'/>
            <SkillList src={checkMarkIcon} skill='MongoDB'/>
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill='AWS'/>
            <SkillList src={checkMarkIcon} skill='GitHub'/>
            <SkillList src={checkMarkIcon} skill='Postman'/>
            <SkillList src={checkMarkIcon} skill='Docker'/>
        </div>
    </section>
  );
}

export default Skills