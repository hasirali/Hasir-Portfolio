import React from 'react'
import banner from '../assets/profile.png'
import '../styles/Home.css'

function Home() {
  return (
    <>
     <div class="section__container header__container" id="home">
      <div class="header__image">
        <img src={banner} alt="hero" />
      </div>
      <div class=" header__content">
        <h4>Documenting my growth, skills, and passion </h4>
        <h1 class="section__header">through my personal Portfolio.</h1>
        <p>
          Hasir Ali is a video Editor, videographer and a skilled Programmer in C/C++, web development and had a clean grip on DSA. He is also an content creator on Instagram with a 30k+ of followers. He is currently persuing his under graduation in Information Technology from United college of engineering and research. 
        </p>
        <div class="header__btn  ">
          <button class="btn"><a href="https://drive.google.com/file/d/1S0iQGShlDhbMnnLuF36HL2rEV6j7iCFe/view?usp=drive_link" class="btn">My Resume</a></button>
        </div>
      </div>
    </div>



    </>
  )
}

export default Home