'use client'

import React, { useState, useEffect } from 'react';
import { GitlabIcon as GitHub } from 'lucide-react';
import Link from "next/link";
import {
        
    Syncopate,//decent
} from "next/font/google";


const roboto = Syncopate({
    weight: "400",
    subsets: ["latin"],
});
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <header
            className={`fixed inset-x-0 top-5 z-20 mx-auto w-full max-w-screen-lg transition-all duration-300 ease-in-out ${scrolled ? 'bg-gray-900/40 shadow backdrop-blur-lg md:top-6 md:rounded-badge max-w-screen-lg' : 'bg-transparent'
                } py-1`}
        >
            <div className="px-4">
                <div className="flex items-center justify-between">
                    {/* SW Logo */}
                    <div className="flex shrink-0">
                        <Link aria-current="page" className="flex items-center" href="/">
                            <span
                                className={`text-3xl md:text-4xl font-light ${scrolled ? 'text-[#a789b1]' : 'text-[#1e2039]'
                                    } transition-colors duration-300`}
                            >
                                {/* ᔕᗯ */}
                                ᔕᑎᗴᕼᗩᒪ
                            </span>
                        </Link>
                    </div>
                    {/* Navigation Links for MD screens and above */}
                    <div
                        className={`hidden md:flex md:items-center md:justify-center md:gap-5 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
                            } transition-opacity duration-300`}
                    >
                        <Link
                            aria-current="page"
                            className={`${roboto.className} inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-white/10 hover:text-white`}
                            href="#"
                        >
                            work in progress❗
                        </Link>

                        <Link
                            className={`${roboto.className} inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-white/10 hover:text-white`}
                            href="#"
                        >
                             work in progress❗
                        </Link>
                        <Link
                            className={`${roboto.className} inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:bg-white/10 hover:text-white`}
                            href="#"
                        >
                             work in progress❗
                        </Link>
                    </div>
                    {/* GitHub Icon */}
                    <div className="flex items-center justify-end gap-3">
                        <Link
                            href="https://github.com/snehal-wadhane"
                            

                            rel="noopener noreferrer"
                            className={`inline-flex items-center justify-center p-2 transition-all duration-300 ease-in-out transform hover:scale-105 ${scrolled ? 'text-[#a789b1] hover:text-gray-700' : 'text-[#1e2039] hover:text-gray-200'
                                }`}
                        >
                            <GitHub size={35} />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
