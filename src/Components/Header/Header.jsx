import { NavLink } from "react-router-dom";
import '../../../src/App.css'

const Header = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='./donations'>Donation</NavLink></li>
        <li><NavLink to='./statistics'>Statistics</NavLink></li>
    </>
    return (
        <div className="container mx-auto lg:mt-5">
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <img src="https://i.ibb.co/0szXvyH/Logo.png" alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {links}

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;