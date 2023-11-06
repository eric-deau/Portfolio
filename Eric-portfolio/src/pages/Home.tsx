import React from 'react'
import WelcomeMessage from '../components/WelcomeMessage';
import '../styles/home.css'


interface Props { }

const Home = (props: Props) => {
  return (
    <div className="welcome-message">
      <WelcomeMessage></WelcomeMessage>
    </div>
  )
}

export default Home;