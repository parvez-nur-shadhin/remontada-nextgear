"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {
  FiCpu,
  FiMenu,
  FiPlusCircle,
  FiSettings,
  FiLogOut,
  FiUser,
  FiShoppingBag,
} from "react-icons/fi";

export default function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Items", href: "/items" },
    { name: "About", href: "/about" },
    ...(user
      ? [
          { name: "Add Product", href: "/items/add" },
          { name: "Manage Products", href: "/items/manage" },
        ]
      : [{ name: "Featured", href: "/#featured" }]),
  ];

  return (
    <header className="sticky top-0 z-50 bg-base-100/90 backdrop-blur-md border-b border-base-200">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" aria-label="Menu">
              <FiMenu className="w-5 h-5" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-56 border border-base-200"
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={pathname === link.href ? "active font-semibold" : ""}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <span className="p-2 rounded-xl bg-primary text-primary-content">
              <FiCpu className="w-5 h-5" />
            </span>
            <span>
              Next<span className="text-primary">Gear</span>
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`rounded-lg font-medium transition-colors ${
                      isActive ? "bg-primary/10 text-primary font-semibold" : "hover:bg-base-200"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar ring-2 ring-primary/30 hover:ring-primary transition"
              >
                <div className="w-10 rounded-full bg-base-200 flex items-center justify-center overflow-hidden">
                  {user.photoURL ? (
                    <img src={user.photoURL} alt={user.displayName || "User"} />
                  ) : (
                    <FiUser className="w-5 h-5 m-2.5 text-base-content" />
                  )}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-xl bg-base-100 rounded-2xl w-64 border border-base-200 space-y-1"
              >
                <li className="px-3 py-2 border-b border-base-200 mb-1 pointer-events-none">
                  <div className="flex flex-col items-start gap-0.5">
                    <span className="font-bold text-sm text-base-content truncate w-full">
                      {user.displayName || "Authenticated User"}
                    </span>
                    <span className="text-xs text-base-content/60 truncate w-full">
                      {user.email}
                    </span>
                  </div>
                </li>
                <li>
                  <Link href="/items/add" className="py-2.5 flex items-center gap-2">
                    <FiPlusCircle className="w-4 h-4 text-primary" />
                    Add Product
                  </Link>
                </li>
                <li>
                  <Link href="/items/manage" className="py-2.5 flex items-center gap-2">
                    <FiSettings className="w-4 h-4 text-secondary" />
                    Manage Products
                  </Link>
                </li>
                <li>
                  <Link href="/items" className="py-2.5 flex items-center gap-2">
                    <FiShoppingBag className="w-4 h-4 text-accent" />
                    Browse Catalog
                  </Link>
                </li>
                <li className="pt-1 border-t border-base-200">
                  <button
                    onClick={logout}
                    className="py-2.5 text-error hover:bg-error/10 flex items-center gap-2 font-medium"
                  >
                    <FiLogOut className="w-4 h-4" />
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login" className="btn btn-ghost btn-sm sm:btn-md">
                Login
              </Link>
              <Link href="/register" className="btn btn-primary btn-sm sm:btn-md">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}