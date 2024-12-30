import styles from './ProjectsStyles.module.css'
import mnist from '../../assets/mnist.png'
import ProjectCard from '../../common/ProjectCard'
import natops from '../../assets/natops.png'
import fitness from '../../assets/fitness.png'
import covid from '../../assets/covid.png'
import chatbot from '../../assets/chatbot.png'
import travel from '../../assets/travel.png'
import product from '../../assets/product.png'
import ride from '../../assets/ride.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={fitness} link='https://github.com/PrithviVK/MultiAgent-Fitness-Application'
          h3='Fitness Application'
          p='Application'
          // p='A multi-agent fitness application that allows users to create and join fitness challenges, track their progress, and compete with friends.'
        />
        <ProjectCard src={mnist} link='https://github.com/PrithviVK/Image-Classification'
          h3='Image Classification'
          p= 'Application'
          // p='A machine learning project that developed and optimized models for the Fashion MNIST dataset.'
        />
        <ProjectCard src={natops} link='https://github.com/PrithviVK/Human-Activity-Recognition'
          h3='Human Activity Recognition'
          p= 'Application'
          // p='A myriad of machine learning techniques to classify various action classes from the NATOPS dataset'
        />
        <ProjectCard src={covid} link='https://github.com/PrithviVK/Covid-19-Dashboard'
          h3='Covid-19 Dashboard'
          p='Application'
          // p='A dashboard that displays the number of predicted and current cases, deaths, and recoveries for each country.'
        />
        <ProjectCard src={chatbot} link='https://github.com/PrithviVK/Chatbot'
          h3='Chatbot'
          p='Application'
          // p='A dashboard that displays the number of predicted and current cases, deaths, and recoveries for each country.'
        />
        <ProjectCard src={travel} link='https://github.com/PrithviVK/Web-Tech-Project--Nammoora-Payana'
          h3='Explore Karnataka'
          p='Application'
          // p='A dashboard that displays the number of predicted and current cases, deaths, and recoveries for each country.'
        />
        <ProjectCard src={product} link='https://github.com/PrithviVK/E-commerce-Product-Management-System'
          h3='Product Management System'
          p='Application'
          // p='A dashboard that displays the number of predicted and current cases, deaths, and recoveries for each country.'
        />
        <ProjectCard src={ride} link='https://github.com/PrithviVK/Cloud_Computing'
          h3='Rideshare'
          p='Application'
          // p='A dashboard that displays the number of predicted and current cases, deaths, and recoveries for each country.'
        />
      </div>
    </section>
  )
}

export default Projects