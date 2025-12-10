"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  {
    name: "Who We Are",
    href: "/about",
    submenu: [
      { name: "Our Founders", href: "/about/founders" },
      { name: "Management Speaks", href: "/about/management" },
      { name: "Our Journey", href: "/about/journey" },
    ],
  },
  { name: "Branches", href: "/branches" },
  { name: "Academics", href: "/academics" },
  { name: "Admission", href: "/admission" },
  { name: "Happenings", href: "/happenings" },
  { name: "Career", href: "/career" },
  { name: "Vinam", href: "/vinam" },
  { name: "NLK Referral", href: "/referral" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const pathname = usePathname();

  // Logic: Navbar is "dark mode" (dark text) if scrolled OR if not on Home page
  // This ensures visibility on light pages like Contact/Founders
  const isHome = pathname === "/";
  // Exception: Management page has a dark hero, so keep it light initially
  const hasDarkHero = pathname === "/about/management";

  const useDarkText = scrolled || (!isHome && !hasDarkHero);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "circOut" }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${
          scrolled ? "pt-2" : "pt-6"
        }`}
      >
        <div
          className={`relative flex items-center justify-between px-6 py-2 transition-all duration-500 ease-in-out ${
            scrolled
              ? "w-[98%] md:w-[90%] bg-white/90 backdrop-blur-xl shadow-lg rounded-full border border-white/20"
              : "w-full bg-transparent"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-20 mr-4">
            <img
              src="https://www.nlkschools.org/wp-content/uploads/2020/08/nlk_logo.png"
              alt="NLK Logo"
              className="w-12 h-12 object-contain"
            />

            {/* FIXED: Text color toggles instead of hiding */}
            <span
              className={`text-xl font-bold tracking-tight  transition-colors duration-300 ${
                useDarkText ? "text-blue-950" : "text-white"
              }`}
            >
              NLK Schools
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, i) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setHoveredLink(i)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Link
                  href={link.href}
                  className={`text-xs font-bold uppercase tracking-wide transition-colors flex items-center gap-1 py-3 ${
                    useDarkText
                      ? "text-slate-600 hover:text-blue-900" // High Contrast Mode
                      : "text-blue-100 hover:text-white" // Light Mode (on dark bg)
                  }`}
                >
                  {link.name}
                  {link.submenu && <ChevronDown className="w-3 h-3" />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.submenu && hoveredLink === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden p-2"
                    >
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-700 rounded-lg transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className={`hidden md:block px-6 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md ${
                useDarkText
                  ? "bg-blue-900 text-white hover:bg-blue-800"
                  : "bg-white text-blue-900 hover:bg-blue-50"
              }`}
            >
              Contact Us
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(true)}
              className={`lg:hidden p-2 rounded-full transition-colors ${
                useDarkText
                  ? "bg-slate-100 text-slate-900"
                  : "bg-white/10 text-white"
              }`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-blue-950 text-white flex flex-col p-6 overflow-hidden"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <img
                  src="https://www.nlkschools.org/wp-content/uploads/2020/08/nlk_logo.png"
                  alt="NLK Logo"
                  className="w-12 h-12 object-contain brightness-0 invert"
                />
                <span className="text-xl font-bold tracking-tight text-white">
                  NLK Group
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
              <div className="flex flex-col gap-6 pb-20">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-3xl font-bold text-white/70 hover:text-white transition-colors flex items-center justify-between group"
                    >
                      {link.name}
                    </Link>
                    {link.submenu && (
                      <div className="ml-4 mt-3 pl-4 border-l border-white/10 space-y-3">
                        {link.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-lg text-white/40 hover:text-orange-400"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 bg-orange-600 text-white text-center py-4 rounded-xl font-bold text-xl"
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
