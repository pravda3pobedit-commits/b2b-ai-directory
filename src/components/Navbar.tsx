"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    {
      label: "Share on X",
      href: "https://x.com/intent/tweet?text=Found%20a%20practical%20directory%20of%20AI%20tools%20for%20B2B%20teams:&url=https://b2baistack.com",
      external: true,
    },
    { label: "Comparisons", href: "/comparisons", external: false },
    {
      label: "Advertise",
      href: "mailto:pravda3pobedit@gmail.com?subject=Sponsorship%20Inquiry%20-%20B2B%20AI%20Stack",
      external: false,
    },
    {
      label: "Contact",
      href: "mailto:pravda3pobedit@gmail.com?subject=Contact%20-%20B2B%20AI%20Stack",
      external: false,
    },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 px-5 py-2 bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] rounded-full shadow-2xl shadow-black/50"
    >
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2 text-white font-semibold tracking-tight text-sm"
      >
        <Sparkles className="w-4 h-4 text-indigo-400" />
        <span>B2B AI Stack</span>
      </Link>

      <div className="hidden md:block w-px h-4 bg-white/10" />

      {/* Nav links */}
      <div className="hidden md:flex gap-5 text-xs font-medium text-gray-400">
        {navLinks.map(({ label, href, external }) => {
          const isActive = !external && pathname === href;
          return external ? (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {label}
            </a>
          ) : (
            <Link
              key={label}
              href={href}
              className={
                isActive
                  ? "text-white transition-colors"
                  : "hover:text-white transition-colors"
              }
            >
              {label}
            </Link>
          );
        })}
      </div>

      {/* CTA */}
      <a
        href="https://forms.gle/nLY5faWU2oRZnNMv6"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-gray-200 transition-colors"
      >
        Add Your AI
      </a>
    </motion.nav>
  );
}
