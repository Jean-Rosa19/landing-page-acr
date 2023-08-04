import './styles/Global.css'
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

import metal1 from './images/estrutura1.jpeg';
// import metal2 from './images/estrutura2.jpeg'
// import metal3 from './images/metal-worker2.jpg'
import metal4 from './images/estrutura3.jpeg';
import portao2 from './images/portao2.jpeg'
import estrutura2 from './images/estrutura2.jpeg'
import portao3 from './images/portao3.jpeg'
import portal1 from './images/portal1.jpeg'
import portao1 from './images/portão1.jpeg'

import { BsWhatsapp } from 'react-icons/bs'
import { BiSolidMap } from 'react-icons/bi'


const images = [metal1, metal4, portao2, estrutura2, portao3, portal1, portao1]

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
        <motion.h1 initial={{ y: -100 }} animate={{ y: 0, }} transition={{ duration: 2 }} >ACR SERRALHERIA</motion.h1>
        <motion.button initial={{ y: -30 }} animate={{ y: 0, }} transition={{ duration: 2 }} onClick={openWhatsAppChat}>
        <BsWhatsapp />
          SOLICITE UM ORÇAMENTO</motion.button>

      </header>
      <main className='description'>

        <p>
          Com uma trajetória sólida de mais de 7 anos no setor de serralheria, a nossa empresa é liderada por um profissional experiente, acumulando mais de 35 anos de maestria em soldas de eletrodo revestido, alumínio e aço inoxidável. Somos uma referência renomada na fabricação e montagem de estruturas metálicas e portões, sendo especialistas em realizar reparos precisos em caminhões e máquinas.

          Nosso compromisso com a qualidade é o alicerce que sustenta cada projeto que abraçamos. Utilizamos técnicas avançadas e materiais de alta durabilidade para assegurar que cada peça fabricada ou reparada atinja os mais altos padrões de excelência. Entendemos as necessidades de nossos clientes e as transformamos em realidade, garantindo satisfação e confiança.


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
        <button onClick={openWhatsAppChat} className='whatsapp'>
          <BsWhatsapp />
          Converse com um profissional
        </button>
      </div>
      <footer>
        <div className="location">
          <BiSolidMap size={20}/>
          <p>Localização: Rua Dr. Carlos Piolli Filho, 138 - Brasópolis, MG</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
