"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type NavItemProps = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export default function NavItem({ label, href, children }: NavItemProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // fermeture au clic extérieur
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // lien simple
  if (!children) {
    return (
      <Link
        href={href!}
        className="text-slate-700 hover:text-emerald-600 transition-colors"
      >
        {label}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-slate-700 hover:text-emerald-600 transition-colors"
      >
        {label}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-xs"
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1], // easing premium
            }}
            className="
              absolute top-full left-0 mt-3 w-60
              rounded-2xl
              bg-white/90 backdrop-blur-xl
              border border-slate-200
              shadow-xl
              overflow-hidden
            "
          >
            {children.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                  block px-5 py-3 text-sm
                  text-slate-700
                  hover:bg-emerald-50
                  hover:text-emerald-700
                  transition-colors
                "
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
