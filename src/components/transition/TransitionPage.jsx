import "../../css/transition.css";
import { motion } from "framer-motion";
function TransitionPage({ children, location }) {
  return (
    <div>
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="">{children}</div>
      </motion.div>

    
    </div>
  );
}

export default TransitionPage;
