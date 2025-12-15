import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-gray-400 border-t border-primary/20 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/4 w-96 h-1 bg-primary blur-[100px] opacity-20"></div>
      
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                 src="https://i.ibb.co.com/6RScZhzJ/Picsart-25-12-14-13-20-51-233.png" 
                 alt="Logo" 
                 className="h-10 w-10 object-contain"
                 onError={(e) => {
                   e.currentTarget.style.display = 'none';
                 }}
               />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-none tracking-tight">LEMBAKUM</span>
                <span className="text-xs font-bold text-secondary uppercase tracking-[0.25em]">Anak Negeri</span>
              </div>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Membangun masa depan hukum yang adil dengan teknologi dan integritas. Melayani seluruh lapisan masyarakat Indonesia.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group">
                  <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              Tautan Cepat
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors flex items-center"><span className="w-0 hover:w-2 h-0.5 bg-primary mr-0 hover:mr-2 transition-all"></span>Tentang Kami</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors flex items-center"><span className="w-0 hover:w-2 h-0.5 bg-primary mr-0 hover:mr-2 transition-all"></span>Layanan Hukum</Link></li>
              <li><Link to="/forum" className="hover:text-primary transition-colors flex items-center"><span className="w-0 hover:w-2 h-0.5 bg-primary mr-0 hover:mr-2 transition-all"></span>Forum Diskusi</Link></li>
              <li><Link to="/dashboard" className="hover:text-primary transition-colors flex items-center"><span className="w-0 hover:w-2 h-0.5 bg-primary mr-0 hover:mr-2 transition-all"></span>Member Area</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
              Layanan
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services/konsultasi-hukum" className="hover:text-secondary transition-colors cursor-pointer">Konsultasi Hukum</Link></li>
              <li><Link to="/services/mediasi-negosiasi" className="hover:text-secondary transition-colors cursor-pointer">Mediasi & Negosiasi</Link></li>
              <li><Link to="/services/pembuatan-dokumen" className="hover:text-secondary transition-colors cursor-pointer">Pembuatan Dokumen</Link></li>
              <li><Link to="/services/pendampingan-perkara" className="hover:text-secondary transition-colors cursor-pointer">Pendampingan Perkara</Link></li>
              <li><Link to="/services/legal-opinion" className="hover:text-secondary transition-colors cursor-pointer">Legal Opinion</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Hubungi Kami
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-primary group-hover:text-white transition-colors mt-0.5 flex-shrink-0" />
                <span className="group-hover:text-gray-300 transition-colors">Jl. Jendral Sudirman No. 123,<br />Jakarta Pusat, DKI Jakarta</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-secondary group-hover:text-white transition-colors flex-shrink-0" />
                <span className="group-hover:text-gray-300 transition-colors">+62 21 1234 5678</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-accent group-hover:text-white transition-colors flex-shrink-0" />
                <span className="group-hover:text-gray-300 transition-colors">info@lembakum.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Lembakum Anak Negeri. <span className="text-gray-500">Integritas Tanpa Batas.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;