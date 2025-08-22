"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {  Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./ModeToggle";
import { LanguageSelect } from "./LanguageSelect";
import { useSiteSettings } from "@/app/context/SiteSettingsContext";
import { usePathname } from "next/navigation";


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
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { settings, loading } = useSiteSettings();
  const logo = process.env.NEXT_PUBLIC_API_URL + settings?.navbar?.logo?.url;  
  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // true if scrolled down more than 10px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);  

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-900 "
          : "bg-transparent border-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src={loading ? "logo.svg" : logo}
            alt="Logo"
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  isActive
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                    : "hover:text-blue-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          <Button className="bg-blue-500 hover:bg-blue-600 dark:text-white">
            <Link
              href={loading ? "/contact" : settings?.navbar?.navbarButtonLink}
            >
              {loading ? "Contact Us" : settings?.navbar?.navbarTextButton}
            </Link>
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
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`transition-colors ${
                        isActive
                          ? "text-blue-600 font-semibold"
                          : "hover:text-blue-600"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <Button className="bg-blue-500 hover:bg-blue-600 dark:text-white">
                  <Link
                    href={
                      loading ? "/contact" : settings?.navbar?.navbarButtonLink
                    }
                  >
                    {loading
                      ? "Contact Us"
                      : settings?.navbar?.navbarTextButton}
                  </Link>
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
