import React from 'react'

import Hero from '../Hero/Hero'
import Header from '../Header'
import PageSection from '../PageSection/PageSection'
import ContentContainer from '../ContentContainer/ContentContainer'
import Footer from '../Footer/Footer'
import ActivityList from '../Activity/ActivityList'

import './HomePage.css'

const HomePage = () => {
  //TODO rm inline style
  return (
    <div className="out">
      <Hero />
      <Header />

      <PageSection>
        <ContentContainer>
          <ActivityList />
        </ContentContainer>
      </PageSection>
      <PageSection style={{ background: 'lightgray' }}>
        <ContentContainer>
          <p>PageSection</p>
        </ContentContainer>
      </PageSection>

      <PageSection style={{ background: 'gray' }}>
        <ContentContainer>
          <p>PageSection</p>
        </ContentContainer>
      </PageSection>

      <PageSection style={{ background: 'lightgray' }}>
        <ContentContainer>
          <p>PageSection</p>
        </ContentContainer>
      </PageSection>

      <Footer />
    </div>
  )
}

export default HomePage
