import FormLeftSection from "../components/formLeftSection";
import FormLogin from "../components/formLogin";
import FormRegister from "../components/FormRegister";

const Login = () => {
  return (
    <div className="w-full h-screen flex">
      <FormLeftSection />
      <FormRegister />
    </div>
  );
};

export default Login;
