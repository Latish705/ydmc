import "./header.css";
import Logo from "../../assets/HeaderLogo.png";
import { Drawer, IconButton } from "@mui/material";
import { FaRegCircleUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <>
            <div className='TopHeader'>
                <p className='TopHeaderPhoneNo'>
                    BOOK ONLINE NOW. CALL: <span>(022)-123-456-2345</span>
                </p>
            </div>
            <div className='MainHeaderContainer'>
                {/* MobileDisplay */}
                <div className="DrawerIconButtonContainer">
                <IconButton className="DrawerIconButton" onClick={toggleDrawer(true)}><IoMdMenu  color="#ffffff"/></IconButton>
                <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <div className="DrawerContainer">
                <NavLink to='/' className='NavigationLink rightBorder' activeClassName='active'> Home </NavLink>
                <NavLink to='/buy' className='NavigationLink rightBorder' activeClassName='active'>Buy</NavLink>
                <NavLink to='/sell' className='NavigationLink rightBorder' activeClassName='active'>Sell</NavLink>
                <NavLink to='/blogs' className='NavigationLink' activeClassName='active'>Blogs</NavLink>
                </div>
                </Drawer>
                </div>
                {/* ComputerDisplay */}
                <div className='LogoContainer'>
                    <img src={Logo} alt='Logo.png' className='HeaderLogo' />
                </div>
                <div className='PagesContainer DesktopMenu'>
                    <NavLink to='/' className='NavigationLink rightBorder' activeClassName='active'> Home </NavLink>
                    <p className='HorizontalLine'>|</p>
                    <NavLink to='/buy' className='NavigationLink rightBorder' activeClassName='active'>Buy</NavLink>
                    <p className='HorizontalLine'>|</p>
                    <NavLink to='/sell' className='NavigationLink rightBorder' activeClassName='active'>Sell</NavLink>
                    <p className='HorizontalLine'>|</p>
                    <NavLink to='/blogs' className='NavigationLink' activeClassName='active'>Blogs</NavLink>
                </div>
                <div className='ProfileContainer'>
                    <IconButton>
                        <FaRegCircleUser className='UserIcon' />
                    </IconButton>
                </div>
            </div>
            
        </>
    );
}

export default Header;
