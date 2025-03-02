import { motion } from "framer-motion";
import "./css/animatedHeader.css";  // Import the CSS file for the animated header

const AnimatedHeader = ({ title, subtitle, backgroundImage }) => {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

    

      {/* Title & Absoluter Absturz  */}
      {/* Animated Drop in  */}

      <div className="relative text-center text-white p-6 z-2">
        <motion.h1
          className="text-6xl font-serif tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-6xl font-sans tracking-widest mt-2 subtext"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.3, ease: "easeOut" }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};

export default AnimatedHeader;
