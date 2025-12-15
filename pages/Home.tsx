import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Scale, Users, FileCheck, Calendar, ArrowRight, Shield, MessageSquare, ChevronLeft, ChevronRight, Zap } from 'lucide-react';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "KEADILAN MASA DEPAN",
      description: "Platform bantuan hukum revolusioner. Cepat, transparan, dan terjangkau untuk seluruh rakyat Indonesia.",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2000",
      cta: "Mulai Konsultasi",
      ctaLink: "/services",
      color: "from-primary to-red-900"
    },
    {
      id: 2,
      title: "PROTEKSI HUKUM TOTAL",
      description: "Bergabung dengan ribuan anggota komunitas yang terlindungi oleh payung hukum Lembakum Anak Negeri.",
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000",
      cta: "Daftar Member",
      ctaLink: "/register",
      color: "from-secondary to-green-900"
    },
    {
      id: 3,
      title: "SOLUSI DIGITAL",
      description: "Akses pengacara profesional dalam genggaman Anda. Konsultasi online aman dan terenkripsi.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000",
      cta: "Hubungi Kami",
      ctaLink: "/contact",
      color: "from-accent to-yellow-900"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const stats = [
    { label: "Anggota Aktif", value: "1,250+", icon: Users, color: "text-primary" },
    { label: "Kasus Selesai", value: "567+", icon: FileCheck, color: "text-secondary" },
    { label: "Agenda", value: "89+", icon: Calendar, color: "text-accent" },
    { label: "Pengacara", value: "45+", icon: Scale, color: "text-white" },
  ];

  const features = [
    {
      icon: Shield,
      title: "Proteksi Maksimal",
      desc: "Sistem keamanan hukum berlapis untuk menjaga hak-hak Anda tetap terlindungi.",
      borderColor: "border-primary/50",
      iconColor: "text-primary"
    },
    {
      icon: Users,
      title: "Mediasi Modern",
      desc: "Metode penyelesaian sengketa dengan pendekatan humanis dan efisien.",
      borderColor: "border-secondary/50",
      iconColor: "text-secondary"
    },
    {
      icon: FileCheck,
      title: "Smart Contract",
      desc: "Pembuatan dokumen hukum presisi tinggi dengan standar profesional.",
      borderColor: "border-accent/50",
      iconColor: "text-accent"
    },
    {
      icon: Zap,
      title: "Respon Cepat",
      desc: "Tim reaksi cepat siap mendampingi masalah hukum mendesak 24/7.",
      borderColor: "border-white/50",
      iconColor: "text-white"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-dark">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent z-10" />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} mix-blend-overlay opacity-60 z-10`} />
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover filter grayscale contrast-125"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="text-center px-4 max-w-5xl mx-auto">
                <div className="flex justify-center mb-8">
                    <div className="relative">
                        <img 
                          src="https://i.ibb.co.com/6RScZhzJ/Picsart-25-12-14-13-20-51-233.png" 
                          alt="Lembakum Logo" 
                          className="w-24 h-24 md:w-32 md:h-32 object-contain animate-pulse shadow-[0_0_50px_rgba(220,38,38,0.3)]"
                        />
                    </div>
                </div>
                <h2 className="text-accent font-mono text-sm tracking-[0.5em] mb-4 animate-fade-in-up">LEMBAKUM ANAK NEGERI</h2>
                <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tighter drop-shadow-2xl">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link 
                    to={slide.ctaLink}
                    className="px-10 py-4 bg-primary hover:bg-red-700 text-white rounded-none skew-x-[-10deg] font-bold tracking-widest transition-all hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.5)] border border-red-500"
                  >
                    <span className="block skew-x-[10deg]">{slide.cta.toUpperCase()}</span>
                  </Link>
                  <Link 
                    to="/about"
                    className="px-10 py-4 bg-transparent border border-white/30 hover:border-accent text-white hover:text-accent rounded-none skew-x-[-10deg] font-bold tracking-widest transition-all hover:bg-white/5"
                  >
                     <span className="block skew-x-[10deg]">TENTANG KAMI</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Controls */}
        <div className="absolute bottom-10 right-10 z-30 flex space-x-2">
           <button onClick={prevSlide} className="p-3 border border-white/20 hover:bg-white/10 text-white transition-colors backdrop-blur-md"><ChevronLeft className="h-6 w-6" /></button>
           <button onClick={nextSlide} className="p-3 border border-white/20 hover:bg-white/10 text-white transition-colors backdrop-blur-md"><ChevronRight className="h-6 w-6" /></button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-30 -mt-20 mx-4 md:mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-panel p-6 border border-white/10 backdrop-blur-xl hover:border-primary/50 transition-colors group">
              <div className="flex flex-col items-center">
                <stat.icon className={`h-10 w-10 mb-2 ${stat.color} drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]`} />
                <span className="text-4xl font-black text-white block mb-1 tracking-tighter">{stat.value}</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-dark relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-primary/10 to-transparent blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-secondary/10 to-transparent blur-[120px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-accent tracking-[0.3em] uppercase mb-3">Keunggulan Kami</h2>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase">Layanan Hukum <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Generasi Baru</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className={`bg-surface p-8 border ${feature.borderColor} hover:bg-white/5 transition-all duration-500 hover:-translate-y-2 group`}>
                <div className={`w-14 h-14 bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                  <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{feature.title}</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed border-l-2 border-white/10 pl-4">
                  {feature.desc}
                </p>
                <Link to="/services" className={`inline-flex items-center ${feature.iconColor} font-bold text-sm tracking-wide group-hover:underline decoration-2 underline-offset-4`}>
                  DETAIL <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-black z-0"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 z-0"></div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase italic">
            Keadilan Tidak Bisa Menunggu
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto font-light">
            Jangan biarkan masalah hukum menghambat masa depan Anda. Bergabunglah dengan revolusi hukum digital sekarang.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="px-10 py-5 bg-white text-black text-lg font-black hover:bg-gray-200 transition-colors uppercase tracking-widest skew-x-[-10deg]">
              <span className="block skew-x-[10deg]">Hubungi Kami</span>
            </Link>
            <Link to="/register" className="px-10 py-5 bg-transparent border-2 border-accent text-accent text-lg font-black hover:bg-accent hover:text-black transition-all uppercase tracking-widest skew-x-[-10deg] shadow-[0_0_20px_rgba(234,179,8,0.2)]">
               <span className="block skew-x-[10deg]">Join Member</span>
            </Link>
          </div>
        </div>
      </section>

      {/* News Preview */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2 uppercase">Diskusi <span className="text-secondary">Terkini</span></h2>
              <p className="text-gray-500">Update langsung dari forum komunitas.</p>
            </div>
            <Link to="/forum" className="hidden md:inline-flex items-center text-secondary font-bold hover:text-white transition-colors border border-secondary/30 px-4 py-2 rounded hover:bg-secondary/10">
              EXPLORE FORUM <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-surface p-6 border border-white/5 hover:border-primary/50 transition-all duration-300 hover:bg-white/5 group">
                <div className="flex items-center space-x-2 text-[10px] text-white font-bold uppercase mb-4 tracking-widest">
                  <span className="bg-primary px-2 py-1">Hukum Perdata</span>
                  <span className="text-gray-600">|</span>
                  <span className="text-gray-400">2 jam yang lalu</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  <Link to="/forum">
                    Sengketa Tanah Warisan: Langkah Hukum Digital
                  </Link>
                </h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                  Bagaimana teknologi blockchain dapat membantu validasi sertifikat tanah dalam kasus sengketa keluarga...
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/20" />
                    <span className="text-xs font-bold text-gray-400 uppercase">Member {i}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-500 text-xs font-mono">
                    <span className="flex items-center"><MessageSquare className="h-3 w-3 mr-1" /> 12</span>
                    <span className="flex items-center"><Users className="h-3 w-3 mr-1" /> 345</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;