import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/proj1.png'
import IMG2 from '../../assets/proj2.png'
import IMG3 from '../../assets/proj3.jpg'
import IMG4 from '../../assets/proj4.jpg'
import IMG5 from '../../assets/proj5.jpg'
import IMG6 from '../../assets/proj6.jpeg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'GreatBuy E-com Website',
    github: 'https://github.com/Ash-122/GreatBuy-Webpage',
    
  },
  {
    id: 2,
    image: IMG2,
    title: 'GreatBuy App',
    github: 'https://github.com/Ash-122/GreatBuy-App',
    
  },
  {
    id: 3,
    image: IMG3,
    title: 'Admin Panel to Manage Salaries',
    github: 'https://github.com/Ash-122/AdminPanel-SalaryCal',
    
  },
  {
    id: 4,
    image: IMG4,
    title: 'Evently-Easy scheduling ahead ',
    github: 'https://github.com/Ash-122/Evently',
    
  },
  {
    id: 5,
    image: IMG5,
    title: 'Fully functional E-commerce website',
    github: 'https://github.com/Ash-122/E-commerce-Website',
    
  },
  {
    id: 6,
    image: IMG6,
    title: 'Co-Op Housing Society Website',
    github: 'https://github.com/Ash-122/IOT-Housing-Society-Website',
    
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio