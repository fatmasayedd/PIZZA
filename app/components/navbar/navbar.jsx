

"use client";

// import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (

        <>
        <header className="w-[100%] border-b-2 border-gray-200">
            <nav class=" sticky bg-white w-full z-20 top-0 start-0  ">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pb-2 m-5  ">
                    <Link href="/" class="flex items-center  self-center text-2xl font-semibold whitespace-nowrap text-orange-600" > ST PIZZA </Link>
                <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" class=" bg-orange-600 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg  px-4 py-2 text-center">
                        <Link href="/login" className="text-white text-xl"> Login</Link>
                    </button>
                    <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-sticky" aria-expanded={isOpen}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between ${isOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
                    <ul class="flex flex-col text-xl p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white \">
                        <li>
                            <Link href="/" class="block py-2 px-3 text-gray-400 hover:text-white hover:bg-orange-600 rounded md:hover:bg-transparent md:hover:text-orange-600 md:p-0 active " aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link href="/menu" class="block py-2 px-3 text-gray-400 rounded hover:text-white hover:bg-orange-600  md:hover:bg-transparent md:hover:text-orange-600 md:p-0 \">Menu</Link>
                        </li>
                        <li>
                            <Link href="/about" class="block py-2 px-3 text-gray-400 rounded hover:text-white hover:bg-orange-600 md:hover:bg-transparent md:hover:text-orange-600 md:p-0 \">About</Link>
                        </li>
                        <li>
                            <Link href="/contact" class="block py-2 px-3 text-gray-400 rounded hover:text-white hover:bg-orange-600 md:hover:bg-transparent md:hover:text-orange-600 md:p-0 \">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >

        </header>
        </>
    );
}