import './styles/Global.css'
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

import metal1 from './images/estrutura1.jpeg';
import metal2 from './images/estrutura2.jpeg'
import metal3 from './images/metal-worker2.jpg'
import metal4 from './images/estrutura3.jpeg'


const images = [metal1, metal2, metal3, metal4]

function App() {

  const carousel = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  function openWhatsAppChat() {
    const phoneNumber = '+5535991251319';
    const message = 'Olá, gostaria de fazer um orçamento!';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`, '_blank');
  }

  return (
    <div className="container">
      <header className='hero'>
        <motion.h1  initial={{ y: -100 }} animate={{ y: 0, }} transition={{ duration: 2 }} >ACR SERRALHERIA</motion.h1>
        <motion.button initial={{ y: -30 }} animate={{ y: 0, }} transition={{ duration: 2 }}  onClick={openWhatsAppChat}>FAÇA UM ORÇAMENTO</motion.button>

      </header>
      <main className='description'>

        <p>
          Soldador com mais de 35 anos de experiencia no mercado industrial, nossa oficina é especializada em soldas de eletrodos revestidos
          soldas em alumínio, reparos em caminhões e maquinas, Materias e acabamentos em excelente qualidade efacilidade nas formas de pagamento.

        </p>
      </main>

      <div className='trabalho'>
        <h1>Conheça nosso trabalho</h1>
        <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
          <motion.div
            className='inner'
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >

            {images.map(image => (
              <motion.div className="item" key={image}>
                <img src={image} alt='texto' />
              </motion.div>

            ))}

          </motion.div>

        </motion.div>
      </div>
      <div className='contact'>
      <button onClick={openWhatsAppChat}>
      <span role="img" aria-label="WhatsApp">📞</span>
        Converse com um profissional 
      </button>
      </div>
     
    </div>
  );
}

export default App;
