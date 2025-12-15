import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Layanan', path: '/services' },
    { name: 'Forum', path: '/forum' },
    { name: 'Kontak', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
               <img 
                 src="https://i.ibb.co.com/6RScZhzJ/Picsart-25-12-14-13-20-51-233.png" 
                 alt="Logo Lembakum" 
                 className="h-10 w-10 md:h-12 md:w-12 object-contain"
                 onError={(e) => {
                   // Fallback if image fails
                   e.currentTarget.style.display = 'none';
                   e.currentTarget.parentElement!.innerHTML = '<div class="h-10 w-10 flex items-center justify-center bg-black rounded-lg">⚖️</div>';
                 }}
               />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 tracking-tight">LEMBAKUM</span>
              <span className="text-[0.65rem] font-bold text-accent tracking-[0.2em] uppercase">Anak Negeri</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  isActive(link.path)
                    ? 'text-accent'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-secondary rounded-full shadow-[0_0_10px_#22c55e]"></span>
                )}
                <span className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login" 
              className="flex items-center space-x-2 text-gray-300 hover:text-primary font-medium text-sm transition-colors"
            >
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </Link>
            <Link
              to="/register"
              className="relative overflow-hidden bg-gradient-to-r from-primary to-red-800 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] transition-all transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">Daftar Anggota</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-white/10"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass-panel border-t border-white/10 absolute w-full shadow-2xl backdrop-blur-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-gradient-to-r from-primary/20 to-transparent text-primary border-l-2 border-primary'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-white/10 pt-4 mt-4 grid grid-cols-2 gap-4">
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center px-4 py-3 text-base font-medium text-gray-300 hover:text-white bg-white/5 rounded-xl"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center bg-primary text-white px-4 py-3 rounded-xl text-base font-bold shadow-lg"
              >
                Daftar
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;