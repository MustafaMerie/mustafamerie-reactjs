import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Navbar } from 'flowbite-react'
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import { getCatygories } from "../features/categoriesSlice";
import Loading from "./Loading";

function Nav() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCatygories());
    }, [dispatch]);

    const { loading, data, error } = useAppSelector((state) => state.catygoriesSlice);


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
                    label={error ? error : "Categories"}
                    color="dark"
                >

                    {loading ? <Loading /> : data?.map(category => <Dropdown.Item key={category._id}>{category.name}</Dropdown.Item>)}

                </Dropdown>
                <NavLink to="/addProduct" className='ml-2 text-sm px-4 py-2.5 text-white bg-gray-800 border border-transparent hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 disabled:hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700 dark:disabled:hover:bg-gray-800 group flex h-min items-center justify-center text-center font-medium focus:z-10 rounded-lg' >
                    Add Product +
                </NavLink>
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
