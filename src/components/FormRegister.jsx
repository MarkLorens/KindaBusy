import { use, useState } from "react";

const FormRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");

  return (
    <div className="flex flex-1 text-center justify-center items-center">
      <div
        id="Right-Section-Register"
        className="z-10 max-w-md text-center w-full space-y-6"
      >
        <div id="Title-Section" className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Glad to have you here!
          </h2>
        </div>
        <p className="text-gray-600">Sign up for an account here</p>
        <form action="#" className="space-y-6" id="Register-Form">
          <div id="Email-Form" className="text-left">
            <label
              htmlFor="Email-Form"
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
          <div id="Username-Form" className="text-left">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Username
            </label>
            <div id="Password-field" className="relative">
              <input
                id="username"
                type="text"
                className="w-full py-3 pl-10 border border-gray-300 rounded-lg"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <i className="fa-solid fa-user-tag absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
          <div id="Password-Form" className="text-left">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div id="Password-field" className="relative">
              <input
                id="password"
                type="password"
                className="w-full py-3 pl-10 border border-gray-300 rounded-lg"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="fa-solid fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
          <div id="Confrim-Password-Form" className="text-left">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <div id="Password-field" className="relative">
              <input
                id="confirm-password"
                type="password"
                className="w-full py-3 pl-10 border border-gray-300 rounded-lg"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <i className="fa-solid fa-repeat absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
          <div id="Submit-Form">
            <button
              type="submit"
              className="w-full bg-sage text-white py-3 px-4 rounded-lg font-medium hover:bg-sage/90 cursor-pointer transition-all"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormRegister;
