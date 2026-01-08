'use client'

import Link from "next/link"
import { menu } from "../constants/constants"
import { useState } from "react"
import { useAuth } from "../context/AuthContext"

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleMenu = () => setIsActive(!isActive)

  const auth = useAuth();

  const handleLogout = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    auth.logout();
    setIsLoading(false);
  }

  return (
    <header className="w-full border-b border-white/10 bg-[var(--color-background)]">

      {/* TOP BAR */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          TechStore
        </Link>

         <div className="flex items-center gap-3">
          {auth.isAuthenticated ? (
            <button
              onClick={handleLogout}
              className=" px-4 py-2 rounded-lg border border-red-500/40 text-red-400 hover:bg-red-500/10
               hover:border-red-500 hover:text-red-300 transition-colors  cursor-pointer">
              {isLoading ? 'Cerrando sesión...' : 'Logout'}
            </button>
          ) : (
            <Link
              href="/login"
              className=" px-4 py-2 rounded-lg border border-[var(--color-muted)] text-[var(--color-muted)] hover:border-green-600 
               hover:text-green-600 transition-colors" >
              Login
            </Link>
          )}
        </div>
       

        {/* Desktop Nav */}
        <nav className="hidden md:flex mr-5">
          <ul className="flex gap-12 text-base">
            {menu.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Burger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center gap-1.5 p-2"
        >
          <span
            className={`w-8 h-0.5 bg-white transition ${isActive ? "rotate-45 translate-y-2" : ""
              }`}
          />
          <span
            className={`w-8 h-0.5 bg-white transition ${isActive ? "opacity-0" : ""
              }`}
          />
          <span
            className={`w-8 h-0.5 bg-white transition ${isActive ? "-rotate-45 -translate-y-2" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isActive ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
          bg-[var(--color-background)]
        `}
      >
        <ul className="flex flex-col gap-6 px-6 pb-6 text-lg">
          {menu.map((item) => (
            <li key={item.name}>
              <Link
                href={item.link}
                onClick={toggleMenu}
                className="text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        
      </nav>
    </header>
  )
}
