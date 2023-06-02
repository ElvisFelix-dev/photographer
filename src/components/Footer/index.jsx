import {
  FaHeart,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa'

import './styles.css'

export function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__social">
          <a
            href="https://www.instagram.com/2system_dev/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={20} color="#000" />
          </a>

          <a
            href="https://wa.me/5516996318063"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp size={20} color="#000" />
          </a>
          <a
            href="https://www.linkedin.com/in/elvis-felix/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={20} color="#000" />
          </a>

          <a
            href="https://github.com/ElvisFelix-dev"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={20} color="#000" />
          </a>
        </div>
        <p className="footer__copyright">
          Desenvolvido por{' '}
          <a
            href="https://2system.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            2System
          </a>{' '}
          <FaHeart size={15} color="#000" />
        </p>
      </footer>
    </>
  )
}
