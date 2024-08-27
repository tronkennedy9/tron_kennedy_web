import { AnimatePresence, motion } from "framer-motion";
import TfkCoin from '../assets/tfk_coin.png';

const Loader = () => {
  return (
    <AnimatePresence>
        <motion.div
        className="fixed inset-0 bg-fixed flex flex-col items-center justify-center z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        >
        <motion.img 
            src={TfkCoin} 
            alt="Loading" 
            className="w-28" 
            animate={{ rotate: 360 }} 
            transition={{ 
            repeat: Infinity, 
            duration: 2, 
            ease: "linear" 
            }} 
        />
        <div className="text-white font-bold text-xl tracking-widest mt-4">
            $TFK
        </div>
        </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
