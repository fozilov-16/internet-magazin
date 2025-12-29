import { useState } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";
import { axiosRequest, SaveToken } from './../../utils/axios';
import { useFormik } from "formik";
import { useAuthStore } from "../AuthStore";
import * as Yup from "yup";
import axios from "axios";

type LoginPayload = {
  userName: string;
  password: string;
};


export default function LogInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const login = useAuthStore((state) => state.login);
  const [loading, setLoading] = useState(false);


  const validationSchema = Yup.object({
    userName: Yup.string()
      .min(3, "Minimum 3 characters")
      .required("User name is required"),

    password: Yup.string()
      .min(3, "Minimum 3 characters")
      .required("Password is required"),
  });

  const LogIn = async (obj: LoginPayload) => {
    try {
      setLoading(true);
      let { data } = await axiosRequest.post("/Account/login", obj);
      console.log("LOGIN RESPONSE:", data);
      SaveToken(data.data)
      login(data.data)
      navigate("/home");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message || "Login error");
      } else {
        alert("Unexpected error");
      }
    } finally {
      setLoading(false);
    }
  }


  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema,
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
              name="userName"
              type="text"
              value={values.userName}
              onChange={handleChange}
              className={`w-full mt-1 border rounded-md px-3 py-2 focus:outline-none ${errors.userName && touched.userName
                ? "border-red-500"
                : "border-gray-300"}`}
            />

            {errors.userName && touched.userName && (
              <p className="text-xs text-red-500 mt-1">
                {errors.userName}
              </p>
            )}

          </div>
          <div className="mb-4 text-left relative">
            <label className="text-xs text-gray-500">
              Password
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange}
              className={`w-full mt-1 border rounded-md px-3 py-2 pr-10 focus:outline-none ${errors.password && touched.password
                ? "border-red-500"
                : "border-gray-300"}`}
            />

            {errors.password && touched.password && (
              <p className="text-xs text-red-500 mt-1">
                {errors.password}
              </p>
            )}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-400"
            >
              {showPassword ? <RemoveRedEyeIcon sx={{ fontSize: 18 }} /> : <VisibilityOffIcon sx={{ fontSize: 18 }} />}
            </button>
          </div>
          <div className="mb-6">
            <a href="#" className="text-sm text-red-500 hover:underline">
              Forget Password?
            </a>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-md transition text-white ${loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600"}`}
          >
            {loading ? "Loading..." : "Log In"}
          </button>

        </form>
      </div>
    </div>
  )
}
