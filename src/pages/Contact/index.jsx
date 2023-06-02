import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

import { toast } from 'react-toastify'
import { FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'

import { NavBar } from '../../components/NavBar'
import './styles.css'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    if (name === '' || email === '' || message === '') {
      toast.warning('Preencha os campos.')
      return
    }

    const templateParams = {
      from_name: name,
      message,
      email,
    }

    emailjs
      .sendForm(
        'service_e7d7usw',
        'template_xvbgsin',
        e.target,

        'avv6uQ0puupw5tSE4',
      )
      .then(
        (response) => {
          console.log('Email Enviado', response.status, response.text)
          setEmail('')
          setMessage('')
          setName('')
          toast.success('Email enviado')
        },
        (err) => {
          console.log('Erro: ', err)
          toast.error('Email não enviado.')
        },
      )
  }

  return (
    <>
      <div className="body-container">
        <div>
          <NavBar />
        </div>

        <section className="bodyContact">
          <div className="container-form">
            <div className="bodyForm">
              <h1>TEM ALGUMA PERGUNTA</h1>
              <form onSubmit={sendEmail}>
                <input
                  type="text"
                  placeholder="Nome Completo"
                  title="DIgite seu nome"
                  value={name}
                  name="from_name"
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Seu Melhor Email"
                  title="DIgite seu nome"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <div>
                  <textarea
                    name="message"
                    placeholder="Mensagem*"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div>
                  <button type="submit">ENVIAR</button>
                </div>
              </form>
            </div>
            <div className="contact-wraper">
              <h1>MANTER CONTATO</h1>
              <a href="mailto:contact@exemplo.com">contact@exemplo.com</a>
              <a href="tel:+55 16 1234 5678">+55 16 1234 5678</a>
              <a href="tel:+55 16 1234 5678">+55 16 1234 5678</a>

              <div className="social-links">
                <p>Minhas redes sociais</p>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={25} />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={25} />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaPinterest size={25} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
