import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const formLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in:", cred.user);
      navigate("/");
    } catch (err) {
      let msg = "Something went wrong. Please try again.";
      switch (err.code) {
        case "auth/invalid-email":
          msg = "Please enter a valid email address.";
          break;
        case "auth/user-not-found":
          msg = "User not found. Please check your email.";
          break;
        case "auth/invalid-credential":
          msg = "Invalid email or password.";
          break;
        case "auth/too-many-requests":
          msg = "Too many failed attempts. Please try again later.";
          break;
      }
      console.log(err.code);

      setError(msg);
    }
  };

  return (
    <div className="flex flex-1 text-center justify-center items-center">
      <div
        id="Right-Section"
        className="z-10 max-w-md text-center w-full space-y-6"
      >
        <div id="Title-Section" className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-600">Sign in to your account to continue</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6" id="Login-Form">
          <div id="Email-Form" className="text-left">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <div id="Email-Field" className="relative">
              <input
                type="email"
                className="w-full py-3 pl-10 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <i className="fa-solid fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
          <div id="Password-Form" className="text-left">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div id="Password-Field" className="relative">
              <input
                type="password"
                className="w-full py-3 pl-10 border border-gray-300 rounded-lg"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="fa-solid fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
          {error && (
            <p className="text-red-500 text-sm text-right font-medium">
              {error}
            </p>
          )}
          <div id="Login-Options" className="flex justify-between">
            <div id="Radio-Field" className="flex items-center">
              <input
                id="Remember-Me"
                type="checkbox"
                className="w-4 h-4 text-gray-700 rounded focus:ring-gray-700"
              />
              <label
                htmlFor="Remember-me"
                className="ml-2 text-md text-gray-600"
              >
                Remember me
              </label>
            </div>
            <div id="Forgot-Field">
              <p className="text-md text-blue-400 cursor-pointer hover:text-blue-500 transition-colors">
                Forgot Password?
              </p>
            </div>
          </div>
          <div id="Submit-Form">
            <button
              type="submit"
              className="w-full bg-sage text-white py-3 px-4 rounded-lg font-medium hover:bg-sage/90 cursor-pointer transition-all"
            >
              Sign In
            </button>
          </div>
        </form>
        <div id="Divider" className="relative">
          <div className="absolute inset-0 flex items-center ">
            <div className="w-full border-t border-txtLight"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-txtLight">
              Or continue with
            </span>
          </div>
        </div>
        <div id="Social-Login" className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center px-4 py-2 border border-txtLight rounded-lg gap-2 cursor-pointer hover:bg-gray-200 hover:border-gray-400 transition-all">
            <i className="fa-brands fa-google text-sage"></i>
            <span className="text-md text-gray-700">Google</span>
          </button>
          <button className="flex items-center justify-center px-4 py-2 border border-txtLight rounded-lg gap-2 cursor-pointer hover:bg-gray-200 hover:border-gray-400 transition-all">
            <i className="fa-brands fa-x-twitter text-sage"></i>
            <span className="text-md text-gray-700">Twitter</span>
          </button>
        </div>
        <div id="SignUp">
          <span className="text-gray-700">
            Don't have an account?{" "}
            <span
              className="text-md text-blue-400 cursor-pointer hover:text-blue-500 transition-colors"
              onClick={() => navigate("/signup")}
            >
              Sign up here
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default formLogin;
