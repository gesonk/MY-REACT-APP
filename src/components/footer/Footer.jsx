import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Geson</h1>
            <ul className="footer__list">
                <li><a href="#about" className="footer__link">About</a></li>
                <li><a href="#projects" className="footer__link">Projects</a></li>
                <li><a href="#contact" className="footer__link">Contact</a></li>
            </ul>
            <div className="footer__social">
                <a href="https://twitter.com/GesonKs" className="footer__social-link" target='_blank'>
                <i className="uil uil-twitter"></i>
                </a>
                <a href="https://github.com/GesonKachappilly" className="footer__social-link" target='_blank'>
                <i className="uil uil-github-alt"></i>
                </a>
                <a href="https://www.linkedin.com/in/geson-kachappilly" className="footer__social-link" target='_blank'>
                <i className="uil uil-linkedin"></i>
                </a>
            </div>
            <span className="footer__copy">&#169; Geson. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer