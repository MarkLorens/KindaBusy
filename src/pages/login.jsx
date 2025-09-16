import { useState } from "react";
import FormLeftSection from "../components/formLeftSection";
import FormLogin from "../components/formLogin";
import FormRegister from "../components/FormRegister";

const Login = () => {
  const [register, setRegister] = useState(false);

  const toggleForm = () => {
    setRegister((prev) => !prev);
  };

  return (
    <div className="w-full h-screen flex">
      <FormLeftSection />
      {register ? (
        <FormRegister onToggle={toggleForm} />
      ) : (
        <FormLogin onToggle={toggleForm} />
      )}
    </div>
  );
};

export default Login;
