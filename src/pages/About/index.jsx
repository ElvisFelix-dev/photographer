import { NavBar } from '../../components/NavBar'

import imgProfile from '../../assets/imgPhoto.png'

import './styles.css'

export function About() {
  return (
    <>
      <div className="body-container">
        <div>
          <NavBar />
        </div>
        <div className="container-profile">
          <div className="imgProfile">
            <img src={imgProfile} alt="" />
          </div>

          <div className="about-profile">
            <h1>SOBRE MIM</h1>

            <p>
              Olá, meu nome é Sofia, sou fotógrafa. Sou apaixonada por capturar
              momentos únicos e eternizar emoções através das minhas lentes.
            </p>

            <p>
              Amo utiliza minha criatividade para poder criar imagens que contam
              histórias e transmitem sentimentos e paixão pela fotografia. Isso
              levou a explorar diversos estilos, desde retratos cativantes até
              paisagens impressionantes.
            </p>

            <p>
              Estou sempre em busca de desafios e novas formas de expressão.
              adoro trabalhar em colaboração com meus clientes, entendendo suas
              visões e necessidades, para criar imagens personalizadas que
              superem suas expectativas.
            </p>
            <p>
              Este é um convite para explorar o mundo da fotografia por meio das
              minhas lentes. Deixe-me envolver com minhas imagens marcantes e
              sinta a minha emoção capturada em cada fotografia.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
