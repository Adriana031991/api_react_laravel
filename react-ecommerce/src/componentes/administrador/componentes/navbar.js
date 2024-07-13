import { Input, Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import React from 'react'
import { IoSearchOutline } from 'react-icons/io5';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import defaultImage from '../../../assets/usuario_no_logueado.png'

const Navbar = ({ user }) => {
    const handleLogOut = () => {
        // Your log out logic here
        console.log('Logging out...');
    };

    return (
        // <nav className="navbar bg-teal-200">
        //     <div className="navbar-brand">Admin Dashboard</div>
        //     {user ?

        //         < div className="navbar-user">
        //             <span>Logged in as: {user.name}</span>
        //         </div>
        //         :
        //         <div></div>
        //     }
        // </nav >
        <>
            <nav className="bg-slate-200 h-16 px-4 flex justify-between items-center border-b border-gray-200">
                <div className='relative'>
                    <IoSearchOutline fontSize={20} className='text-gray-400 absolute top-1/2 left-3 -translate-y-1/2' />
                    <input
                        type='text'
                        placeholder='Buscar...'
                        defaultValue=""
                        className='text-sm pr-4 pl-11 focus:outline-none active:outline-none h-10 w-[24rem] boder border-gray-300 rounded-lg' />
                    {/* <Input name="full_name" type="text" className='text-sm pr-4 pl-11 focus:outline-none active:outline-none h-10 w-[24rem] boder border-gray-300 rounded-lg' /> */}
                </div>
                <div className="relative ">
                    <div style={{ backgroundImage: `url(${defaultImage})` }}></div>

                    <Menu>
                        <MenuButton className="inline-flex items-center rounded-full  shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                            {user ?
                                < div style={{ backgroundImage: `url(${user.image ? user.image : defaultImage})` }}
                                    className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center">
                                    <span className='sr-only'>{user.name}</span>
                                </div>
                                :
                                <div style={{ backgroundImage: `url(${defaultImage})` }}
                                    className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"></div>
                            }
                        </MenuButton>
                        <Transition
                            enter="transition ease-out duration-75"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <MenuItems
                                className="absolute right-0 z-10 mt-2.5 w-80"
                            >
                                <MenuItem>
                                    <button className="shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5 items-center gap-2 rounded-lg data-[focus]:bg-white"
                                        onClick={handleLogOut}>
                                        <RiLogoutBoxRLine />
                                        Salir
                                    </button>
                                </MenuItem>

                            </MenuItems>
                        </Transition>
                    </Menu>
                </div>
            </nav >
        </>
    );
};

export default Navbar