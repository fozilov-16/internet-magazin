import logo from './assets/images/Group 1116606595.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function HeaderLogin() {
    return (
        <header className="w-full border-b">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-2 font-bold text-xl">
                    <img src={logo} alt="" />
                </div>
                <nav className="hidden md:flex gap-8 text-sm">
                    <button className="cursor-pointer">Home</button>
                    <button className="cursor-pointer">Contact</button>
                    <button>About</button>
                    <button className="font-semibold">Sign Up</button>
                </nav>
                <div className="flex items-center gap-4">
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="hidden md:block border rounded-md px-3 py-1 text-sm outline-none"
                    />
                    <FavoriteBorderIcon />
                    <span className="relative">
                        <ShoppingCartOutlinedIcon />
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                            2
                        </span>
                    </span>
                </div>
            </div>
        </header>
    );
}
