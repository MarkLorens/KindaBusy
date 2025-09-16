import { useState } from "react";
import FormLeftSection from "../components/formLeftSection";
import FormLogin from "../components/formLogin";
import FormRegister from "../components/FormRegister";
import { AnimatePresence, motion } from "framer-motion";

const Login = () => {
  const [register, setRegister] = useState(false);

  const toggleForm = () => {
    setRegister((prev) => !prev);
  };

  const variants = {
    enterFromTop: { y: -100, opacity: 0 },
    enterFromBottom: { y: 100, opacity: 0 },
    center: { y: 0, opacity: 1 },
    exitToTop: { y: -100, opacity: 0 },
    exitToBottom: { y: 100, opacity: 0 },
  };

  return (
    <div className="w-full h-screen flex overflow-hidden">
      <FormLeftSection />

      <AnimatePresence mode="wait">
        {register ? (
          <motion.div
            key="register"
            variants={variants}
            initial="enterFromBottom"
            animate="center"
            exit="exitToBottom"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex-1 flex justify-center items-center"
          >
            <FormRegister onToggle={toggleForm} />
          </motion.div>
        ) : (
          <motion.div
            key="login"
            variants={variants}
            initial="enterFromTop"
            animate="center"
            exit="exitToTop"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex-1 flex justify-center items-center"
          >
            <FormLogin onToggle={toggleForm} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Login;
