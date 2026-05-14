import { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const handleEmail = (e) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const value = e.target.value;

    if (value.length == 0)
      setErrors({ ...errors, emailError: "Email is required" });
    else if (!regex.test(value))
      setErrors({
        ...errors,
        emailError: "Email must follow format abc@abc.abc",
      });
    else setErrors({ ...errors, emailError: "" });

    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    const value = e.target.value;

    if (value.length < 8)
      setErrors({
        ...errors,
        passwordError: "Password must be more than 8 characters",
      });
    else setErrors({ ...errors, passwordError: "" });

    setPassword(e.target.value);
  };

  const togglePassword = (e) => {
    e.preventDefault();

    if (passwordType === "text") setPasswordType("password");
    else setPasswordType("text");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <form
        action=""
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-5"
      >
        <h2 className="text-2xl font-semibold text-gray-800">Login</h2>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input
              id="email"
              type="email"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
              value={email}
              onChange={handleEmail}
            />
          </label>
          <span className="mt-1 block text-sm text-red-500">
            {errors.emailError}
          </span>
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block">
            <span className="text-sm font-medium text-gray-700">Password</span>
            <input
              id="password"
              type={passwordType}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm"
              onChange={handlePassword}
            />
          </label>
          <span className="mt-1 block text-sm text-red-500">
            {errors.passwordError}
          </span>
        </div>

        {/* Hide Password */}
        <button
          type="button"
          onClick={togglePassword}
          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          {passwordType === "password" ? "Show" : "Hide"} Password
        </button>

        {/* Submit Button */}
        <input
          type="submit"
          value="Login"
          disabled={
            !email || !password || errors.emailError || errors.passwordError
          }
          className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "http://localhost:5173/movies";
          }}
        />
      </form>
    </div>
  );
}

export default LoginComponent;
