import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Custom website design: Designing a website from scratch that aligns with your brand, user experience goals, and business objectives.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User interface design: Creating intuitive and user-friendly interfaces that guide users through your website and make it easy for them to find the information they need.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User experience design: Developing user journeys and wireframes that optimize the flow of information and interactions on your website to create a seamless user experience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Mobile-responsive design: Ensuring that your website looks and functions great on any device, including smartphones and tablets..</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Branding design: Creating a consistent look and feel for your website that aligns with your brand identity and values.</p>
            </li>
            
            
            
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Custom website development: Building a website from scratch using the latest web technologies and frameworks.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Content management systems (CMS) development: Developing a CMS that allows you to easily manage and update your website content, without requiring any technical knowledge.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>E-commerce development: Developing an online store that allows you to sell products or services directly through your website.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web application development: Developing a web-based application that performs a specific function or task, such as a project management tool or a customer relationship management system.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website maintenance and support: Providing ongoing maintenance and support services to ensure your website remains secure, up-to-date, and running smoothly.</p>
            </li>
            
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Copywriting: Writing compelling, persuasive, and informative website copy that engages your audience and communicates your message effectively.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Content strategy: Developing a content strategy that aligns with your brand voice and objectives, and includes a plan for creating, publishing, and promoting content on an ongoing basis.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Content creation: Creating various types of content, such as blog posts, articles, infographics, videos, and social media posts, that educate and inform your audience while supporting your marketing goals.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Content optimization: Optimizing your content for search engines and social media platforms to increase visibility and drive traffic to your website.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Content distribution: Promoting your content through various channels, such as email marketing, social media marketing, and influencer outreach, to reach your target audience and increase engagement.</p>
            </li>
            
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services