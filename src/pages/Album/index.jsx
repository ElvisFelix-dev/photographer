import { useState } from 'react'
import Modal from 'react-modal'

import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

import { photographerData } from '../../data/photographerData'

import { NavBar } from '../../components/NavBar'

import './styles.css'

Modal.setAppElement('#root')

export function Album() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  const openModal = (index) => {
    setIsModalOpen(true)
    setSelectedImageIndex(index)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImageIndex(0)
  }

  return (
    <div className="body-container">
      <NavBar />
      <div className="album-container">
        <h1>Album Portfolio</h1>
        <ImageGallery
          items={photographerData}
          showPlayButton={false}
          showThumbnails={false}
          onClick={openModal}
        />
      </div>
    </div>
  )
}
