import { useState } from "react";
import FormLeftSection from "../components/auth/formLeftSection";
import FormLogin from "../components/auth/formLogin";
import FormRegister from "../components/auth/FormRegister";
import { AnimatePresence, motion } from "framer-motion";
import { slideVariants } from "../lib/anim/motionVariants";

const Login = () => {
  const [register, setRegister] = useState(false);

  const toggleForm = () => {
    setRegister((prev) => !prev);
  };

  return (
    <div className="w-full h-screen flex overflow-hidden">
      <FormLeftSection />

      <AnimatePresence mode="wait">
        {register ? (
          <motion.div
            key="register"
            variants={slideVariants}
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
            variants={slideVariants}
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
