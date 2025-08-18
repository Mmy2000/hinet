"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./ModeToggle";
import { LanguageSelect } from "./LanguageSelect";


const navItems = [
  { label: "Home", href: "/" },
  { label: "Contact Us", href: "/contact" },
  { label: "About Us", href: "/about" },
  { label: "Our Clients", href: "/clients" },
  { label: "Services", href: "/services" },
  { label: "Our Products", href: "/products" },
  { label: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // true if scrolled down more than 10px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(scrolled);
  

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-900 shadow-sm "
          : "bg-transparent border-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Logo" className="h-14 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-blue-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          <Button className="bg-blue-500 hover:bg-blue-600 dark:text-white">
            <Link href="/contact">Request Appointment</Link>
          </Button>
          <LanguageSelect />
          <ModeToggle scrolled={scrolled} />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg">
                  Request Appointment
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
