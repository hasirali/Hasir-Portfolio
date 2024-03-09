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
    <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__col">
          <div className="footer__logo">
            <a href="#"><img src={logo} alt="logo" />Hasir Ali</a>
          </div>
          <p>
            Welcome to my personal portfolio, where I share my professional journey, showcase my skills, and express my passion for creativity and innovation. Explore my work and experience the story behind each project.
          </p>
          <div className='socialMedia'>
            <Link to={'https://www.instagram.com/haxir_ali/' }target="_blank"> <InstagramIcon/> </Link>
            <Link to={'https://twitter.com/haxir_ali'}target="_blank"><TwitterIcon/></Link>
            <Link to={'https://www.facebook.com/profile.php?viewas=100000686899395&id=100095270901385'}target="_blank"><FacebookIcon/></Link>
            <Link to={'https://www.linkedin.com/in/hasir-ali-b649851aa/'}target="_blank"><LinkedInIcon/></Link>
            <Link to={'https://github.com/hasirali' }target="_blank"><GithubIcon/></Link>
        </div>
        </div>
        <div className="footer__col">
          <h4>About Me</h4>
          <div className="footer__links">
            <Link to={'/'} > Home </Link>
            <Link to={'/About'} > About </Link>
            <Link to={'/Education'} > Education </Link>
            <Link to={"/projects"}>Projects</Link>
            <Link to={'/Contact'} > Contact </Link>
          </div>
        </div>
        <div className="footer__col">
          <h4>Contact</h4>
          <div className="footer__links">
            <a href="tel:7521989156">Phone</a>
            <a href="mailto:hasira84@gmail.com">Email</a>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        Copyright ©Hasir Ali
      </div>
    </footer>
  )
}

export default Footer