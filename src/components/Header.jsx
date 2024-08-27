import { useState } from 'react';
import { redirectToUrl } from '../utils';

const Header = ({ scrollPosition }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Cerrar el menú en móviles después de hacer clic
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full py-4 px-8 sm:px-28 flex justify-between items-center z-50 transition-colors duration-300 ${scrollPosition > 0 ? 'bg-[#000]' : 'bg-transparent'}`}>
      <div className="text-white font-bold text-xl tracking-widest">
        TRON F. KENNEDY
      </div>
      <button 
        className="text-white lg:hidden block focus:outline-none z-50" 
        onClick={toggleMenu}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        )}
      </button>
      <nav className={`lg:hidden fixed top-0 left-0 w-full bg-black z-40 flex flex-col items-center space-y-4 py-8 transition-transform duration-300 transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} lg:static lg:flex lg:flex-row lg:space-x-8 lg:bg-transparent lg:translate-y-0`}>
        <button onClick={() => scrollToSection('tokenomics')} className="text-white text-lg hover:text-red-500 transition">TOKENOMICS</button>
        <button onClick={() => redirectToUrl('https://x.com/TronKennedy')} className="text-white text-lg hover:text-red-500 transition">TWITTER</button>
        <button onClick={() => redirectToUrl('https://www.reddit.com/r/TronFKennedyToken/')} className="text-white text-lg hover:text-red-500 transition">REDDIT</button>
        <button onClick={() => scrollToSection('dextools')} className="text-white text-lg hover:text-red-500 transition">DEXTOOLS</button>
        <button className="bg-transparent text-white py-2 px-4 rounded border border-white hover:bg-red-700 transition">
          BUY NOW
        </button>
      </nav>
      <nav className="hidden lg:flex space-x-8">
        <button onClick={() => scrollToSection('tokenomics')} className="text-white hover:text-red-500 transition">TOKENOMICS</button>
        <button onClick={() => redirectToUrl('https://x.com/TronKennedy')} className="text-white hover:text-red-500 transition">TWITTER</button>
        <button onClick={() => redirectToUrl('https://www.reddit.com/r/TronFKennedyToken/')} className="text-white hover:text-red-500 transition">REDDIT</button>
        <button onClick={() => scrollToSection('dextools')} className="text-white hover:text-red-500 transition">DEXTOOLS</button>
      </nav>
      <div className="hidden lg:block">
        <button onClick={() => scrollToSection('buy')} className="text-red-500 text-sm font-bold border border-white rounded-full py-2 px-4 hover:bg-white hover:text-red-500 transition">BUY NOW</button>
      </div>
    </header>
  );
};

export default Header;
