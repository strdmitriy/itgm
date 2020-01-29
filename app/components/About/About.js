import React from 'react'

import './About.css'

import { InnerPageContentContainer } from '../InnerPageContentContainer'

import AboutImgLogo from '/asset/about-logo.jpg'
import AboutImgInfo from '/asset/about-info.jpg'

const descriptions = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.'
]

const AboutDescription = () =>
  descriptions.map((description, index) => (
    <p className="About-Text" key={index}>
      {description}
    </p>
  ))

const About = () => (
  <InnerPageContentContainer>
    <div className="About">
      <h2 className="About-Header">Кто мы такие ?</h2>
      <div className="About-Description">
        <div className="About-Container">
          <img src={AboutImgLogo} alt="about-logo" className="About-Img" />
        </div>
        <p className="About-Text">
          Мы — объединение активистов ИТ-сообществ формирующих и развивающих
          профессионально-образовательную инфраструктуру в Санкт-Петербурге на
          базе сообществ! Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="About-Container">
          <div className="About-ContainerLeft">
            <AboutDescription />
          </div>
          <div className="About-ContainerRight">
            <img src={AboutImgInfo} alt="about-info" className="About-Img" />
          </div>
        </div>
      </div>
    </div>
  </InnerPageContentContainer>
)

export default About
