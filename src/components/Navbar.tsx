import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleCart } from '../store/uiSlice';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Nutrition', to: '/shop' },
  { label: 'Toys', to: '/shop' },
  { label: 'Grooming', to: '/shop' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-surface/80 glass-header transition-all duration-300 ${
        isScrolled ? 'py-2 shadow-md' : 'py-4 shadow-sm'
      }`}
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Logo + Desktop Nav */}
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="font-headline-md text-headline-md text-primary font-bold tracking-tight"
          >
            Anabul
          </Link>
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`font-body-md text-label-md transition-colors duration-200 ${
                  location.pathname === link.to && link.label === 'Home'
                    ? 'text-primary border-b-2 border-primary pb-1 active-dot'
                    : 'text-on-surface-variant hover:text-primary-container'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Search + Cart + Mobile Menu */}
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <input
              className="bg-surface-container-low border-none rounded-full px-4 py-2 text-label-md focus:ring-2 focus:ring-primary-container transition-all w-48 md:w-64"
              placeholder="Search..."
              type="text"
            />
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-body-md">
              search
            </span>
          </div>
          <button
            className="relative p-2 rounded-full hover:bg-primary-fixed transition-colors active:scale-95 duration-150"
            onClick={() => dispatch(toggleCart())}
          >
            <span className="material-symbols-outlined text-primary">
              shopping_cart
            </span>
            <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-white text-[10px] flex items-center justify-center rounded-full">
              2
            </span>
          </button>
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-on-surface">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface/95 glass-header px-margin-mobile py-4 border-t border-outline-variant/20">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="font-body-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
