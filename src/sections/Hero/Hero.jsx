import styles from './HeroStyles.module.css';
import heroImg from '../../assets/picture_1.png';
import linkedinLight from '../../assets/linkedin-light.svg';
import githubLight from '../../assets/github-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/Prithvi_Resume.pdf';
import { useTheme } from '../../common/ThemeContext';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';


function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;  

  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="Profile Picture of Prithvi Vasanth Kumar" />
        <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
          <h1>
            Prithvi <br/> Vasanth Kumar
          </h1>
          <h2>AI Engineer</h2>
          <span>
            <a href="https://www.linkedin.com/in/prithvi-vasanth-kumar-p011526/" target='_blank'>
              <img src={linkedinIcon} alt="LinkedIn Icon"/>
            </a>
            <a href="https://github.com/PrithviVK" target='_blank'>
              <img src={githubIcon} alt="LinkedIn Icon"/>
            </a>
          </span> 
          <p className={styles.description}>I'm an AI engineer who loves building smart systems and creating machine learning solutions that make a real difference.</p>
          <a href={CV} download>
            <button className='hover'>
              Resume
            </button>
          </a>
        </div>
    </section>
  )
}

export default Hero