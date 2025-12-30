import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./assets/images/Group 1116606595.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import {
    Box,
    Drawer,
    List,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";


export default function Header() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()

    const toggleDrawer = (state: boolean) => () => {
        setOpen(state);
    };

    const drawerList = (
        <Box sx={{ width: 250 }} onClick={toggleDrawer(false)}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/home">
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/contact">
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/about">
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/signup">
                        <ListItemIcon><MailIcon /></ListItemIcon>
                        <ListItemText primary="Sign Up" />
                    </ListItemButton>
                </ListItem>
            </List>

            <Divider />
        </Box>
    );

    return (
        <header className="w-full border-b">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-2 font-bold text-xl">
                    <button className="md:hidden" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </button>
                    <p className="md:hidden block">Exclusive</p>
                    <img src={logo} alt="logo" className="hidden md:block" />
                </div>
                <nav className="hidden md:flex gap-8 text-sm">
                    <Link to="/home" className="cursor-pointer">Home</Link>
                    <Link to="/contact" className="cursor-pointer">Contact</Link>
                    <Link to="/about" className="cursor-pointer">About</Link>
                    <Link to="/" className="font-semibold cursor-pointer">Sign Up</Link>
                </nav>
                <div className="flex items-center gap-4">
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="hidden md:block border rounded-md px-3 py-1 text-sm outline-none"
                    />
                    <FavoriteBorderIcon />
                    <div>
                        <button onClick={() => navigate("/cart")} className="cursor-pointer"><ShoppingCartOutlinedIcon /></button>
                    </div>
                    <button onClick={() => navigate("/account")} className="cursor-pointer"><PersonOutlineOutlinedIcon /></button>
                </div>
            </div>
            <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                {drawerList}
            </Drawer>
        </header>
    );
}
