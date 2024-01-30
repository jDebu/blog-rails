import React from 'react'
import { Container } from '../components/Container'
import Profile from '../assets/images/profile.svg'
import Location from '../assets/icons/location.svg'
import Github from '../assets/icons/github.svg'
import Linkedin from '../assets/icons/linkedin.svg'

export const HomePage = () => {
  return (
    <Container className="px-5 md:px-20">
      <section className="flex justify-center py-12">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <div className="greeting"> Hello <span>🐼</span>!</div>
            <div className="subtitle">
              <p>I have been working more than 7 years in the IT industry, developing software and leading development teams. 
                Welcome to my digital space! Join me on my learning journey with articles, tips, and, in the future, 
                I look forward to hearing your valuable feedback. Dive into my experiences and insights.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="profile w-48 h-48 m-auto">
              <img className="rounded-full" src={Profile} alt="José Delgado" />
            </div>
            <div className="resume mt-4">
              <h1 className="font-black">José Delgado</h1>
              <p>Software Developer</p>
              <div className="location flex mt-8"> <span><img className="w-4 h-4" src={Location} /></span>Lima, Perú</div>
              <div className="social flex">
                <a href="https://github.com/jDebu" target="_blank"><img src={Github} className="w-4 h-4 mt-2 mr-2"/></a>
                <a href="https://www.linkedin.com/in/josedelgadobustamante/" target="_blank"><img src={Linkedin} className="w-4 h-4 mt-2"/></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}