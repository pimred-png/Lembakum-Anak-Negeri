import React from 'react';
import { Shield, MessageSquare, FileText, Gavel, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Konsultasi Hukum",
      slug: "konsultasi-hukum",
      description: "Layanan konsultasi hukum baik secara online maupun offline untuk memberikan pencerahan atas masalah hukum yang Anda hadapi.",
      icon: MessageSquare,
      features: ["Konsultasi Online 24/7", "Tatap Muka dengan Pengacara", "Analisis Kasus Mendalam", "Rekomendasi Langkah Hukum"]
    },
    {
      id: 2,
      title: "Mediasi & Negosiasi",
      slug: "mediasi-negosiasi",
      description: "Membantu penyelesaian sengketa melalui jalur damai (non-litigasi) untuk mencapai kesepakatan yang menguntungkan kedua belah pihak.",
      icon: Shield,
      features: ["Mediator Bersertifikat", "Penyelesaian Cepat", "Biaya Efisien", "Menjaga Hubungan Baik"]
    },
    {
      id: 3,
      title: "Pembuatan Dokumen",
      slug: "pembuatan-dokumen",
      description: "Jasa pembuatan dan penelaahan dokumen hukum (legal drafting & review) untuk memastikan keamanan transaksi dan perjanjian Anda.",
      icon: FileText,
      features: ["Perjanjian Kerja", "Kontrak Bisnis", "Somasi", "Surat Kuasa"]
    },
    {
      id: 4,
      title: "Pendampingan Perkara",
      slug: "pendampingan-perkara",
      description: "Jasa pendampingan hukum di pengadilan (litigasi) maupun di luar pengadilan untuk membela hak-hak dan kepentingan Anda.",
      icon: Gavel,
      features: ["Perkara Pidana", "Perkara Perdata", "Pendampingan di Kepolisian", "Pengadilan Agama"]
    },
    {
      id: 5,
      title: "Legal Opinion",
      slug: "legal-opinion",
      description: "Pemeriksaan kepatuhan hukum dan pemberian pendapat hukum tertulis atas suatu peristiwa atau tindakan hukum.",
      icon: Search,
      features: ["Due Diligence", "Legal Opinion Tertulis", "Analisis Risiko Hukum", "Audit Kepatuhan"]
    }
  ];

  return (
    <div className="bg-dark min-h-screen pb-20 pt-10">
      <div className="relative py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">Layanan Hukum <span className="text-primary">Premium</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Solusi hukum profesional dan terpercaya untuk melindungi hak dan kepentingan Anda.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {services.map((service) => (
            <div key={service.id} className="bg-surface rounded-none border border-white/10 p-8 hover:border-accent transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] group relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="w-14 h-14 bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:border-accent transition-colors shrink-0">
                <service.icon className="h-8 w-8 text-white group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">{service.title}</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-500">
                    <span className="mr-2 text-secondary">►</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link 
                to={`/services/${service.slug}`} 
                className="block w-full text-center py-3 border border-white/20 text-white font-bold hover:bg-white hover:text-black transition-all uppercase text-sm tracking-widest mt-auto"
              >
                Detail Layanan
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 mt-20 text-center">
        <div className="bg-gradient-to-r from-surface to-black border border-white/10 p-10 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary blur-[80px] opacity-20"></div>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase">Bingung Memilih Layanan?</h2>
            <Link to="/contact" className="inline-flex items-center justify-center px-10 py-4 bg-secondary text-white font-bold hover:bg-green-700 transition-colors uppercase tracking-widest shadow-[0_0_15px_rgba(34,197,94,0.4)]">
            Diskusikan Masalah Anda
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;