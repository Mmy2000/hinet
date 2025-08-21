// app/components/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useSiteSettings } from "@/app/context/SiteSettingsContext";

const Footer = () => {

    const { settings, loading } = useSiteSettings();
    const logo = process.env.NEXT_PUBLIC_API_URL + settings?.footer?.logo?.url;    

  return (
    <footer className="bg-blue-50 dark:bg-transparent py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Logo + Description */}
        <div>
          <Image
            src={loading ? 'logo.svg' : logo} // 👈 replace with your logo path
            alt="Hi Net Soft Logo"
            width={80}
            height={60}
            className="mb-4"
          />
          <p className="text-sm leading-relaxed">
            {settings?.footer?.description}
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Link href="#">
              <FaFacebook className="text-2xl hover:text-gray-200 transition" />
            </Link>
            <Link href="#">
              <FaLinkedin className="text-2xl hover:text-gray-200 transition" />
            </Link>
            <Link href="#">
              <FaEnvelope className="text-2xl hover:text-gray-200 transition" />
            </Link>
          </div>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">Important Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="font-bold text-lg mb-3">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Designing Visual Identity</li>
            <li>Designing and Developing Mobile Applications</li>
            <li>Designing and Developing Websites</li>
            <li>
              Designing and Developing Administrative and Accounting system
            </li>
            <li>Remote Work Solutions</li>
          </ul>
        </div>

        {/* Privacy and Licenses */}
        <div>
          <h3 className="font-bold text-lg mb-3">Privacy and licenses</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
