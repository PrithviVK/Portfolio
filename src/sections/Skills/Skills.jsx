import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';
import langgraphLogo from '../../assets/lg.jpg';
import tensorflowLogo from '../../assets/tf.png';
import numpyLogo from '../../assets/np.png';
import pandasLogo from '../../assets/pd.png';
import html5Logo from '../../assets/html.png';
import cssLogo from '../../assets/css.png';
import jsLogo from '../../assets/js.png';
import reactjsLogo from '../../assets/rjs.png';
import flaskLogo from '../../assets/fl.png';
import djangoLogo from '../../assets/Django.png';
import postgresqlLogo from '../../assets/psql.png';
import mongodbLogo from '../../assets/mdb.png';
import awsLogo from '../../assets/aws.png';
import githubLogo from '../../assets/git.png';
import postmanLogo from '../../assets/pman.png';
import dockerLogo from '../../assets/dk.png';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
        <SkillList skill="Langgraph" skillIcon={langgraphLogo} />
        <SkillList skill="Tensorflow" skillIcon={tensorflowLogo} />
        <SkillList skill="Numpy" skillIcon={numpyLogo} />
        <SkillList skill="Pandas" skillIcon={pandasLogo} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList skill="HTML5" skillIcon={html5Logo} />
        <SkillList skill="CSS" skillIcon={cssLogo}/>
        <SkillList skill="Javascript" skillIcon={jsLogo} />
        <SkillList skill="ReactJS" skillIcon={reactjsLogo} />
      </div> 
      <hr /> 
      <div className={styles.skillList}>
        <SkillList skill="Flask" skillIcon={flaskLogo} />
        <SkillList skill="Django" skillIcon={djangoLogo} />
        <SkillList skill="PostgreSQL" skillIcon={postgresqlLogo} />
        <SkillList skill="MongoDB" skillIcon={mongodbLogo} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList skill="AWS" skillIcon={awsLogo} />
        <SkillList skill="Git" skillIcon={githubLogo} />
        <SkillList skill="Postman" skillIcon={postmanLogo} />
        <SkillList skill="Docker" skillIcon={dockerLogo} />
      </div> 
    </section>
  );
}

export default Skills;
