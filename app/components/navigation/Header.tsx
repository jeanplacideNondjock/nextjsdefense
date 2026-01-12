"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavItem from "./NavItem";
import { menuItems } from "./menu.config";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-blue-900/80 backdrop-blur-xl border-b border-slate-200 text-green-600">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="font-bold text-xl">
          Sustainable Agriculture & Food security
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map(item => (
            <NavItem
              key={item.label}
              label={item.label}
              href={item.href}
              children={item.children}
            />
          ))}
        </nav>

        {/* Actions desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/sign-in" className="text-sm">
            Sign in
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 text-sm rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition"
          >
            Contact
          </Link>
        </div>

        {/* Burger mobile */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40"
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white h-full px-6 pt-6"
            >
              {/* Header mobile */}
              <div className="flex items-center justify-between mb-10">
                <span className="font-bold text-xl">AgriStack</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl"
                >
                  ✕
                </button>
              </div>

              {/* Mobile nav */}
              <div className="space-y-6">
                {menuItems.map(item => (
                  <MobileNavItem
                    key={item.label}
                    item={item}
                    onNavigate={() => setMobileOpen(false)}
                  />
                ))}
              </div>

              {/* Mobile actions */}
              <div className="mt-10 space-y-4">
                <Link
                  href="/sign-in"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center py-3 rounded-lg border"
                >
                  Sign in
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center py-3 rounded-lg bg-emerald-600 text-white"
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ======================
   Mobile Nav Item
====================== */

function MobileNavItem({
  item,
  onNavigate,
}: {
  item: any;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className="block text-lg font-medium"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-lg font-medium"
      >
        {item.label}
        <span className={`transition ${open ? "rotate-180" : ""}`}>▼</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3 pl-4 space-y-3 overflow-hidden"
          >
            {item.children.map((child: any) => (
              <Link
                key={child.label}
                href={child.href}
                onClick={onNavigate}
                className="block text-slate-600"
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
