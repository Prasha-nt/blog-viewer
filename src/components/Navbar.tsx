import React, { useState, useEffect } from "react"
import { Menu, X, PenTool } from "lucide-react"
import { CreateBlogForm } from "@/components/blog/CreateBlogForm" // Import the form

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // State for the Create Blog Modal
  const [showCreateForm, setShowCreateForm] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all
          ${scrolled ? "bg-white shadow-md" : "bg-white"}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Logo />

          <DesktopMenu />

          <div className="flex items-center gap-3">
            {/* Desktop Create Blog Button */}
            <button
              onClick={() => setShowCreateForm(true)}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-yellow-400 text-black font-bold hover:bg-yellow-500 transition shadow"
            >
              <PenTool className="w-4 h-4" />
              Create Blog
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 transition"
            >
              <Menu className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu 
        open={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        onCreateClick={() => {
          setMobileMenuOpen(false) // Close menu first
          setShowCreateForm(true)  // Then open modal
        }}
      />
      
      {/* Spacer for fixed header */}
      <div className="h-20" />

      {/* CREATE BLOG MODAL */}
      {showCreateForm && (
        <CreateBlogForm 
          onClose={() => setShowCreateForm(false)}
          onSuccess={() => {
            // Optional: Add logic if you need to refresh data globally
            console.log("Blog created from Navbar")
          }}
        />
      )}
    </>
  )
}

/* ---------------- LOGO ---------------- */

const Logo = () => (
  <a href="/" className="flex items-center gap-3">
    <div className="w-11 h-11 rounded-xl bg-yellow-400 flex items-center justify-center font-black text-lg shadow text-[black]">
      C
    </div>
    <div>
      <div className="text-lg font-extrabold text-black">CA MONK</div>
      <div className="text-[11px] font-bold tracking-widest text-lime-600">
        REDEFINING CAREERS
      </div>
    </div>
  </a>
)

/* ---------------- DESKTOP MENU ---------------- */

const DesktopMenu = () => (
  <nav className="hidden md:flex items-center text-[black] gap-2 bg-lime-100 px-3 py-2 rounded-full">
    <NavItem label="Home" />
    <NavItem label="Articles" />
    <NavItem label="Resources" />
    <NavItem label="About" />
    <NavItem label="Contact" />
  </nav>
)

const NavItem = ({ label }: { label: string }) => (
  <a
    href="#"
    className="
      px-4 py-2 rounded-full text-sm font-semibold text-black
      hover:bg-white hover:text-yellow-600
      transition
    "
  >
    {label}
  </a>
)

/* ---------------- MOBILE MENU ---------------- */

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  onCreateClick: () => void
}

const MobileMenu = ({ open, onClose, onCreateClick }: MobileMenuProps) => (
  <div
    className={`fixed inset-0 z-50 transition ${
      open ? "visible" : "invisible"
    }`}
  >
    <div
      className={`absolute inset-0 bg-black/40 transition-opacity ${
        open ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    />

    <div
      className={`absolute right-0 top-0 h-full w-72 bg-white p-6 transition-transform
        ${open ? "translate-x-0" : "translate-x-full"}
      `}
    >
      <div className="flex justify-between items-center mb-6">
        <span className="font-bold text-lg">Menu</span>
        <button onClick={onClose}>
          <X />
        </button>
      </div>

      <div className="flex flex-col gap-3 text-[black]">
        <MobileNavItem label="Home" />
        <MobileNavItem label="Articles" />
        <MobileNavItem label="Resources" />
        <MobileNavItem label="About" />
        <MobileNavItem label="Contact" />
      </div>

      <div className="mt-6">
        {/* Mobile Create Button triggers the prop function now */}
        <button
          onClick={onCreateClick}
          className="flex w-full justify-center items-center gap-2 px-5 py-2.5 rounded-full bg-yellow-400 text-black font-bold hover:bg-yellow-500 transition shadow"
        >
          <PenTool className="w-4 h-4" />
          Create Blog
        </button>
      </div>
    </div>
  </div>
)

const MobileNavItem = ({ label }: { label: string }) => (
  <a
    href="#"
    className="px-4 py-3 rounded-lg font-semibold text-gray-700 text-de hover:bg-lime-100 transition"
  >
    {label}
  </a>
)

export default Navbar