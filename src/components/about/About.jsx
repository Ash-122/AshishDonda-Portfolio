import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About_Us_Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <h4><br></br>
            July 2018 – June 2021 • 
            Frontend Developer • Goldenmace IT Solutions 
          </h4>
          <h6>Gained alot of technical skills</h6>
          <p>
              Worked as an intern initially and was offered a full-time position as a Junior Developer within a few months.
              Working with Goldenmace IT Solutions gave me a chance to apply my theoretical knowledge to practice in real world scenarios.
              Gained alot of experience working with new tools & technology like IoT, Python, Django, Wordpress, React, Andriod Studio, C#, 
              HTML, HTML 5, CSS, CSS 3, Firebase, MongoDB.
          </p>

          <h4>Barcode Entertainment </h4>
          <h6>Gained alot of people's skills</h6>
          <p>
          While I was pursuing my bachelor’s in information and technology as a side hustle I started working as Freelancer for Barcode Entertainment 
          as field promotor. Soon I was offered supervisor position & later was offered operations executive position. I was fortunate enough to work 
          for clients like Discovery, Byjus, Zomato, etc. Working in a marketing company really helped me to gain skills like management, teamwork, 
          communication, patience, adaptability, time-management etc.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About