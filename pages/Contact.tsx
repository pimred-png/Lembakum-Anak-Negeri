import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Pesan Anda telah terkirim! Tim kami akan segera menghubungi Anda.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-dark min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">Hubungi <span className="text-primary">Kami</span></h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Jaringan kami terhubung 24/7. Sampaikan masalah hukum Anda, kami siapkan solusinya.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {[
                { icon: MapPin, title: "Markas Besar", desc: "Jl. Jendral Sudirman No. 123, Jakarta Pusat", color: "text-primary" },
                { icon: Phone, title: "Hotline", desc: "+62 21 1234 5678", color: "text-secondary" },
                { icon: Mail, title: "Digital Mail", desc: "info@lembakum.id", color: "text-accent" }
              ].map((item, idx) => (
                <div key={idx} className="bg-surface p-8 border border-white/5 hover:border-white/20 transition-all group">
                  <div className="w-12 h-12 bg-black border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">{item.title}</h3>
                  <p className="text-gray-500 text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-surface p-8 md:p-12 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary blur-[100px] opacity-10"></div>
              
              <h2 className="text-2xl font-black text-white mb-8 uppercase tracking-wide border-l-4 border-secondary pl-4">Kirim Pesan Enkripsi</h2>
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 bg-black border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-gray-700"
                      placeholder="Identitas Anda"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 bg-black border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-gray-700"
                      placeholder="email@address.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Subjek</label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="w-full px-4 py-3 bg-black border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-gray-700"
                    placeholder="Judul Perkara"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Kronologi / Pesan</label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-black border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder-gray-700 resize-none"
                    placeholder="Jelaskan detail masalah hukum Anda..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-10 py-4 bg-primary text-white font-black hover:bg-red-700 transition-colors flex items-center justify-center uppercase tracking-widest skew-x-[-10deg] shadow-[0_0_20px_rgba(220,38,38,0.3)]"
                >
                  <span className="skew-x-[10deg] flex items-center"><Send className="w-4 h-4 mr-2" /> KIRIM SEKARANG</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;