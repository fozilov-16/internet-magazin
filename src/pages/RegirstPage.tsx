import { useNavigate } from "react-router-dom";
import { axiosRequest } from "../../utils/axios";
import * as Yup from "yup";
import { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";

type SignUpPayload = {
  userName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
};


export default function RegisterPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    userName: Yup.string()
      .min(3, "Minimum 3 characters")
      .required("User name is required"),

    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),

    phoneNumber: Yup.string()
      .required("Phone number is required"),

    password: Yup.string()
      .min(6, "Minimum 6 characters")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  const SignUp = async (obj: SignUpPayload) => {
    try {
      setLoading(true);
      await axiosRequest.post("/Account/register", {
        userName: obj.userName,
        phoneNumber: obj.phoneNumber,
        email: obj.email,
        password: obj.password,
        confirmPassword: obj.confirmPassword,
      });
      alert("Registration successful");
      navigate("/home");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(
          error.response?.data?.errors?.[0] ||
          error.response?.data?.message ||
          "Register error"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      userName: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => SignUp(values),
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <p className="text-2xl font-semibold mb-2 text-center">
          Create an account
        </p>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Enter your details below
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-xs text-gray-500 mb-1">User Name</label>
            <input
              name="userName"
              value={values.userName}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none ${errors.userName && touched.userName ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.userName && touched.userName && (
              <p className="text-xs text-red-500 mt-1">{errors.userName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs text-gray-500 mb-1">Email</label>
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none ${errors.email && touched.email ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.email && touched.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs text-gray-500 mb-1">Phone Number</label>
            <input
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none ${errors.phoneNumber && touched.phoneNumber ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.phoneNumber && touched.phoneNumber && (
              <p className="text-xs text-red-500 mt-1">{errors.phoneNumber}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs text-gray-500 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none ${errors.password && touched.password ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.password && touched.password && (
              <p className="text-xs text-red-500 mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs text-gray-500 mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none ${errors.confirmPassword && touched.confirmPassword ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="text-xs text-red-500 mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-md text-white font-medium ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"}`}
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-500 text-center">
          Already have an account?{" "}
          <span
            className="text-red-500 cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  );
}

