"use client"

import logo from "@/assets/logo.jpg"
import { Button } from "@/components/ui/button"
import personalInfo from "@/data"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section, header");
      const navBar = document.getElementById("navBar");
      const scrollPos = window.scrollY;

  
      // Determine which section is currently in view
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          scrollPos + 300 > sectionTop &&
          scrollPos + 300 < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#service", label: "Services" },
    { href: "#contact", label: "Contact Me" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto">
        <Link href="/" className="font-bold text-xl">
          <Image
            src={logo}
            alt="Naim Ahmad"
            width={60}
            height={60}
            className="rounded-full"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6" id="navBar">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm relative after:content-[''] after:block after:w-0 after:h-0.5 after:bg-primary after:mx-auto after:transition-all transition-colors after:duration-300 hover:text-primary hover:after:w-full ${activeSection === link.href.substring(1)
                ? "after:w-full after:bg-primary text-primary"
                : ""
                }`}
            >
              {link.label}
            </Link>
          ))}

        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline" >
            <Link href={personalInfo.resume} target="_blank" download>
            Download CV
            </Link>
            </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6 px-4 md:px-6">
          <nav className="flex flex-col space-y-4 " id="navBar">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm ml-4 relative after:content-[''] after:block after:w-0 after:h-0.5 after:bg-gray-300 after:mx-auto after:transition-all transition-colors after:duration-300 hover:text-primary ${activeSection === link.href.substring(1)
                  ? " text-primary"
                  : ""
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center pt-4">
              <Button variant="outline" className="ml-4">
                Download CV
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
