import { Outlet } from "react-router-dom";
import HeaderLogin from "./HeaderLogIn";
import Footer from "./Footer";

export default function AuthLayout() {
  return (
    <>
    <header>
        <HeaderLogin />
    </header>
    <main>
        <Outlet />
    </main>
    <footer>
        <Footer />
    </footer>
    </>
  )
}
