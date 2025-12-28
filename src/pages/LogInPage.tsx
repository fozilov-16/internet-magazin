import { useState } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";
import { axiosRequest } from './../../utils/axios';
import { useFormik } from "formik";
import { useAuthStore } from "../AuthStore";

export default function LogInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const login = useAuthStore((state) => state.login);

  const LogIn = async (obj) => {
    try {
      let { data } = await axiosRequest.post("/Account/login", obj)
      console.log("LOGIN RESPONSE:", data);
      login(data.token)
      navigate("/home")
    } catch (error) {
      console.error(error);
    }
  }

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: (values) => {
      LogIn(values);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md text-center px-4">
        <h1 className="text-2xl font-semibold mb-2">
          Log in to Exclusive
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Enter your details below
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-left">
            <label className="text-xs text-gray-500">
              User Name
            </label>
            <input
              type="text"
              placeholder="Vali Valiev"
              name="userName"
              value={values.userName}
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>
          <div className="mb-4 text-left relative">
            <label className="text-xs text-gray-500">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              name="password"
              value={values.password}
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-400"
            >
              {showPassword ? <RemoveRedEyeIcon size={18} /> : <VisibilityOffIcon size={18} />}
            </button>
          </div>
          <div className="mb-6">
            <a href="#" className="text-sm text-red-500 hover:underline">
              Forget Password?
            </a>
          </div>
          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-md transition">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
