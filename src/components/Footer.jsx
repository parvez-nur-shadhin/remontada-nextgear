import Link from "next/link";
import { FiCpu, FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <span className="p-2 rounded-xl bg-primary text-primary-content">
                <FiCpu className="w-5 h-5" />
              </span>
              <span>
                Next<span className="text-primary">Gear</span>
              </span>
            </Link>
            <p className="text-sm text-base-content/70 leading-relaxed">
              Curated high-performance keyboards, audio gear, and workstation essentials built for
              modern engineers and creators.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-circle btn-ghost hover:bg-primary hover:text-primary-content"
                aria-label="GitHub"
              >
                <FiGithub className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-circle btn-ghost hover:bg-primary hover:text-primary-content"
                aria-label="Twitter"
              >
                <FiTwitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-circle btn-ghost hover:bg-primary hover:text-primary-content"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:support@nextgear.dev"
                className="btn btn-sm btn-circle btn-ghost hover:bg-primary hover:text-primary-content"
                aria-label="Email"
              >
                <FiMail className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="footer-title opacity-90">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="link link-hover">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/items" className="link link-hover">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="link link-hover">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/login" className="link link-hover">
                  Account Login
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title opacity-90">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/items?category=Keyboards" className="link link-hover">
                  Mechanical Keyboards
                </Link>
              </li>
              <li>
                <Link href="/items?category=Monitors" className="link link-hover">
                  4K Ergo Monitors
                </Link>
              </li>
              <li>
                <Link href="/items?category=Audio" className="link link-hover">
                  Studio Audio & ANC
                </Link>
              </li>
              <li>
                <Link href="/items?category=Accessories" className="link link-hover">
                  Docks & Accessories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title opacity-90">Account & Admin</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/items/add" className="link link-hover">
                  Add New Product
                </Link>
              </li>
              <li>
                <Link href="/items/manage" className="link link-hover">
                  Manage Inventory
                </Link>
              </li>
              <li>
                <Link href="/register" className="link link-hover">
                  Create Account
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-base-300 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-base-content/60 gap-4">
          <p>© NextGear Inc. Built for Remontada Next.js Assessment.</p>
          <div className="flex gap-4">
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}