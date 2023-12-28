import "../../css/home.css";
import { motion } from "framer-motion";

function NewOpening() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 1 }}
    transition={{ duration: 1.5 ,delay:3}}
    
    className="imageOpenWeb">


  
    
    </motion.div>
  );
}

export default NewOpening;
