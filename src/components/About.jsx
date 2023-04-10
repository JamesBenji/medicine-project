import React from 'react'

const About = () => {
  return (
    <section className='home-section about'>
      <h1>Know Your Med</h1>

      <p id='project-desc'>
        <strong>Know your Med</strong> is a web application built in react aimed at provding technical 
        knowledge related to different medicine using the - <a 
        href='https://open.fda.gov/apis/'
        style={{
          color: 'black'
        }}
        
        >Food and Drug Administration
        API</a>
      </p>
      <p>The API does not provide data on all medicine as it serves data for only FDA approved medicine
        as in the United States. Therefore, some search parameters will be unapplicable due to api limitations.
      </p>
    </section>
  )
}

export default About