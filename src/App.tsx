import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LogInPage from "./pages/LogInPage"
import MainLayout from './MainLayout';
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import AccountPage from "./pages/AccountPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import RegirstPage from "./pages/RegirstPage";
import WishlistPage from "./pages/WishlistPage";
import './App.css'
import AuthLayout from "./AuthLayout";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: <LogInPage />
        }
      ]
    },
    {
      element: <MainLayout />,
      children: [
        {
          path: "/sign/up",
          element: <RegirstPage />
        },
        {
          path: "/contact",
          element: <ContactPage />
        },
        {
          path: "/about",
          element: <AboutPage />
        },
        {
          path: "/account",
          element: <AccountPage />
        },
        {
          path: "/cart",
          element: <CartPage />
        },
        {
          path: "/chekout",
          element: <CheckoutPage />
        },
        {
          path: "/home",
          element: <HomePage />
        },
        {
          path: "/products",
          element: <ProductsPage />
        },
        {
          path: "/products/details",
          element: <ProductDetailPage />
        },
        {
          path: "/wishlist",
          element: <WishlistPage />
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}
