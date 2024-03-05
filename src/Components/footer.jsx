import React from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/Github";
import '../styles/Footer.css'
function Footer() {
  return (
    <footer class="footer">
      <div class="section__container footer__container">
        <div class="footer__col">
          <div class="footer__logo">
            <a href="#"><img src={logo} alt="logo" />Hasir Ali</a>
          </div>
          <p>
            Welcome to my personal portfolio, where I share my professional journey, showcase my skills, and express my passion for creativity and innovation. Explore my work and experience the story behind each project.
          </p>
          <div className='socialMedia'>
            <Link to={'https://www.instagram.com/zayyeem/?hl=bg' }> <InstagramIcon/> </Link>
            <Link to={'https://twitter.com/KhalidJafri11'}><TwitterIcon/></Link>
            <Link to={'https://www.facebook.com/zayeem.haider/'}><FacebookIcon/></Link>
            <Link to={'https://www.linkedin.com/in/khalid-haider-jafri-78368220a/'}><LinkedInIcon/></Link>
            <Link to={'https://github.com/xayyeem'}><GithubIcon/></Link>
        </div>
        </div>
        <div class="footer__col">
          <h4>About Me</h4>
          <div class="footer__links">
            <Link to={'/'} > Home </Link>
            <Link to={'/About'} > About </Link>
            <Link to={'/Education'} > Education </Link>
            <Link to={"/projects"}>Projects</Link>
            <Link to={'/Contact'} > Contact </Link>
          </div>
        </div>
        <div class="footer__col">
          <h4>Contact</h4>
          <div class="footer__links">
            <a href="tel:7521989156">Phone</a>
            <a href="mailto:hasira84@gmail.com">Email</a>
          </div>
        </div>
      </div>
      <div class="footer__bar">
        Copyright ©Hasir Ali
      </div>
    </footer>
  )
}

export default Footer