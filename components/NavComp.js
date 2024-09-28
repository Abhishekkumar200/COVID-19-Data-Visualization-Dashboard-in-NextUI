'use client';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import NextLink from 'next/link';
import ThemeSwitcher from "./ThemeSwitcher";
import { Pacifico } from 'next/font/google';

// This is header component.

// Load the Google font
const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'], // Specify the weight you want to use
});

const NavComp = () => {
  return (
    <div className="dark:bg-foreground">
      <Navbar isBordered>
        <NavbarBrand>
          <Link className="font-semibold text-xl" href="/" as={NextLink}>
            {/* Apply the pacifico className to the desired text */}
            <span className={`${pacifico.className}`} style={{ color: 'rgb(120, 40, 200)' }}>COVID-19</span>
            <span className="mx-1"></span>
            <span className="text-default-400"> Dashboard</span>
          </Link>
        </NavbarBrand>
        <NavbarContent justify="end">
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default NavComp;
