import { useEffect, useState } from 'react';
import './App.css';
import tkPng from './assets/tk_triangulo.png';
import cmcLogo from './assets/cmc-logo.png';
import cgoLogo from './assets/cg-logo.png';
import dxLogo from './assets/dextools-50cc9f8e.png';
import TfkCoin from './assets/tfk_coin.png';
import { AnimatePresence, motion } from "framer-motion";
import Twitter from './components/svgs/Twitter';
import Web from './components/svgs/Web';
import Loader from './components/Loader';
import Header from './components/Header';
import Rocket from './components/svgs/Rocket';
import Percentage from './components/svgs/Percentage';
import Burn from './components/svgs/Burn';
import Reddit from './components/svgs/Reddit';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Detectar el scroll y actualizar el estado de scrollPosition
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Mostrar loader por 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Limpiar el timeout si el componente se desmonta
  }, []);

  // Si está cargando, mostrar el loader
  if (isLoading) {
    return (
      <Loader />
    );
  }

  // El contenido de la aplicación
  return (
    <div className="relative">
      <div className="bg-fixed"></div>
      
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2}}
          >
            <Header scrollPosition={scrollPosition} />
  
            <section className="px-8 sm:px-28 text-white py-20">
              <div className="container mx-auto text-center">
                <img src={tkPng} alt="Tron Kennedy" className="w-96 mx-auto mb-8" />
                <motion.p
                  className="text-2xl font-bold mb-8"
                  animate={{ y: [0, -10, 0] }}  // Movimiento vertical
                  transition={{
                    duration: 2,  // Duración de un ciclo completo de animación
                    repeat: Infinity,  // Repetir infinitamente
                    repeatType: "loop",  // Bucle infinito
                    ease: "easeInOut"  // Suavidad en la animación
                  }}
                >
                  Tron F. Kennedy: $TFK The token that brings the legacy of the most iconic president to the blockchain. Forget the moon, we re heading straight to Camelot! 🚀 Minted on the Tron network, like JFK, we re here to change history... or at least have a good time. 👑 #TFK #TronFKennedy #CryptoCamelot
                </motion.p>
              </div>
              <div className="container mx-auto text-center mt-8">
                <div className="flex justify-center space-x-8 mb-8">
                  <button className="bg-red-500 text-white py-4 px-8 rounded-full hover:bg-white hover:text-red-500 transition">BUY ON SUNPUMP</button>
                  <button className="bg-red-500 text-white py-4 px-8 rounded-full hover:bg-white hover:text-red-500 transition">LIVE CHART</button>
                </div>
                <div className="flex justify-center space-x-8 mb-6">
                  <a href="https://www.reddit.com/r/TronFKennedyToken/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                    <Reddit width={46} height={46} color="#fff" />
                  </a>
                  <a href="https://x.com/TronKennedy" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                    <Twitter width={46} height={46} color="#fff" />
                  </a>
                  <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
                    <Web width={46} height={46} color="#fff" />
                  </a>
                </div>
                <div className="flex justify-center items-center">
                  <div className="w-1/2 flex flex-col justify-center items-end px-4">
                    <motion.img 
                      src={TfkCoin} 
                      alt="TfkCoin" 
                      className="w-28" 
                      animate={{ rotate: 360 }} 
                      transition={{ 
                        repeat: Infinity, 
                        duration: 2, 
                        ease: "linear" 
                      }} 
                    />
                  </div>
                  <div className="w-px h-24 bg-gray-400 mx-2 sm:mx-4"></div>
                  <div className="w-1/2 flex flex-col justify-center items-start px-4">
                    <p className="text-white text-xl font-bold">1,000,000,000</p>
                    <p className="text-red-500 text-xl font-bold">TOTAL SUPPLY</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="flex flex-col items-center justify-center px-8 sm:px-28 text-white py-20">
              <p className="text-red-500 text-2xl font-bold mb-16">CHECK US ON</p>
                <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-8">
                  <div className="relative text-center my-4 sm:my-0">
                    <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">Coming Soon</span>
                    <a href="#coinmarketcap" className="text-white">
                      <img src={cmcLogo} alt="CoinMarketCap" className="w-56" />
                    </a>
                  </div>
  
                  <div className="relative text-center my-4 sm:my-0">
                    <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">Coming Soon</span>
                    <a href="#coingecko" className="text-white">
                      <img src={cgoLogo} alt="CoinGecko" className="w-56" />
                    </a>
                  </div>
  
                  <div className="relative text-center my-4 sm:my-0">
                    <a href="#dextools" className="text-white">
                      <img src={dxLogo} alt="DEXTools" className="w-56" />
                    </a>
                  </div>
                </div>
            </section>    

            <section id="tokenomics" className="px-8 sm:px-28 text-white py-20">
              <div className="container mx-auto text-center">
                <h2 className="text-red-500 text-2xl font-bold mb-8">TOKENOMICS</h2>
                <p className="text-xl font-bold text-white mb-8">40% OF THE $TFK SUPPLY IS OWNED BY LIAM MOON .</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div className="bg-black rounded-3xl p-6">
                    <div className="flex items-center justify-center mb-4">
                      <Rocket />
                    </div>
                    <h3 className="text-red-500 text-xl font-bold">Original Supply</h3>
                    <p className="text-white text-lg">1,000,000,000 TFK$</p>
                  </div>
                  
                  <div className="bg-black rounded-3xl p-6">
                    <div className="flex items-center justify-center mb-4">
                      <Percentage />
                    </div>
                    <h3 className="text-red-500 text-xl font-bold">Tax</h3>
                    <p className="text-white text-lg">No tax on the token</p>
                  </div>
                  
                  <div className="bg-black rounded-3xl p-6">
                    <div className="flex items-center justify-center mb-4">
                      <Burn />
                    </div>
                    <h3 className="text-red-500 text-xl font-bold">LP</h3>
                    <p className="text-white text-lg">LP will be burned after launch</p>
                  </div>
                </div>
              </div>
            </section>

            <footer className="px-8 sm:px-28 pt-20 pb-6 flex items-center justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white font-bold">
                  © 2024 $TFK All Rights Reserved.
                </p>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );  
}

export default App;
