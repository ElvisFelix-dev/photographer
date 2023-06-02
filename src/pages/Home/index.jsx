/* eslint-disable react/no-unescaped-entities */
import { FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'

import { NavBar } from '../../components/NavBar'

import imgPhotographer from '../../assets/imgPhotographer.png'

import './styles.css'

export function Home() {
  return (
    <div className="body-home">
      <div>
        <NavBar />
      </div>
      <div className="faixa-vertical"></div>
      <aside className="container-home">
        <div className="info">
          <div className="title-name">
            <h1>SOFIA</h1>
            <h1>DEMBITSKA</h1>
          </div>

          <div className="detail">
            <p>
              "Como fotógrafa, sou apaixonada por capturar os momentos especiais
              da vida. Através das lentes da minha câmera, tenho o privilégio de
              eternizar sorrisos, abraços, lágrimas de alegria e todos os
              sentimentos que tornam cada momento único."
            </p>
          </div>
        </div>
        <div className="imgPhoto">
          <img src={imgPhotographer} alt="" />
        </div>
      </aside>
      <div className="links-social">
        <ul>
          <li>
            <a href="">
              <FaInstagram size={25} color="#000" />
            </a>
          </li>
          <li>
            <a href="">
              <FaTwitter size={25} color="#000" />
            </a>
          </li>
          <li>
            <a href="">
              <FaPinterest size={25} color="#000" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
