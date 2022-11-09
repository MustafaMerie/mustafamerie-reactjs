import { NavLink } from "react-router-dom";

import { Dropdown, Navbar, Button } from 'flowbite-react'

const mockCategories = [
    {
        title: "Electronics",
    },
    {
        title: "Clothing",
    },
    {
        title: "Accessories",
    },
    {
        title: "Furniture",
    }
]


function Nav() {
    return (
        <Navbar
        >
            <NavLink to="/" className="flex">
                <img
                    src="https://i.ibb.co/mGzdTkj/logo512.png"
                    className="h-6 mr-3 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                    Shoopy
                </span>
            </NavLink>
            <div className="flex md:order-2">

                <Dropdown
                    label="Categories"
                    dismissOnClick={false}
                    color="dark"
                >
                    {
                        mockCategories.map(category => <Dropdown.Item key={category.title}>{category.title}</Dropdown.Item>)
                    }

                </Dropdown>
                <Button className="mx-1.5" color="light"
                >
                    Add Product +
                </Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'text-white' : 'text-gray-400'
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/favorites"
                    className={({ isActive }) =>
                        isActive ? 'text-white' : 'text-gray-400'}
                >
                    My Favorites
                </NavLink>
            </Navbar.Collapse>
        </Navbar>

    );
}

export default Nav;
