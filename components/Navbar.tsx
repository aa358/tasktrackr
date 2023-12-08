'use client'
import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const toggleMenu = () => {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
      menu.classList.toggle('hidden');
    }
  };

  return (
    <nav className="border-2 flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div
        onClick={toggleMenu}
        className="inline-block cursor-pointer lg:hidden"
      >
        <Image src="menu.svg" alt="menu" width={32} height={32} />
      </div>
      <ul
        id="mobile-menu"
        className="hidden lg:hidden absolute top-16 right-0 bg-white border border-gray-200 w-48"
      >
        {NAV_LINKS.map((link) => (
          <li key={link.key} className="py-2 px-4">
            <Link href={link.href} className="text-gray-800">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;