import "../../css/home.css";
import { motion } from "framer-motion";

function Opening() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 1 }}
    transition={{ duration: 1.5 ,delay:3}}
    
    className="openingImage">
      <div className="container h100 flexCol center posrealetive">
        <div className="square_01">
            
        </div>
        <div className="square_02">
            <div className="inside_circle_01 shape_01"></div>
            <div className="inside_circle_02 shape_02 circle_position_02"></div>
        </div>
        <div className="square_03">
            
            </div>
        <div className="bgImage">
            {/* <h1 className="header">קפה עלמה</h1> */}
        </div>
      </div>
    </motion.div>
  );
}

export default Opening;
