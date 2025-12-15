import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Shield, MessageSquare, FileText, Gavel, Search, ArrowRight, CheckCircle } from 'lucide-react';

const serviceData: any = {
  'konsultasi-hukum': {
    title: 'Konsultasi Hukum',
    icon: MessageSquare,
    description: 'Layanan konsultasi hukum komprehensif untuk memberikan pencerahan dan solusi strategis atas permasalahan hukum yang Anda hadapi, baik perdata maupun pidana.',
    details: [
        'Kami menyediakan akses ke jaringan pengacara berpengalaman yang siap mendengarkan dan menganalisis kasus Anda secara mendalam. Pendekatan kami selalu berorientasi pada solusi praktis dan efisien.',
        'Layanan ini mencakup konsultasi awal untuk pemetaan masalah, telaah dokumen hukum terkait, hingga rekomendasi langkah hukum (legal advice) yang paling efisien dan efektif untuk melindungi kepentingan Anda.',
        'Tersedia dalam format online (chat/video call) untuk respon cepat, maupun pertemuan offline di kantor kami untuk pembahasan yang lebih mendalam dan personal.'
    ],
    features: [
        'Konsultasi 24/7 via Aplikasi',
        'Analisis Risiko Hukum',
        'Strategi Penyelesaian Masalah',
        'Second Opinion Legal'
    ]
  },
  'mediasi-negosiasi': {
    title: 'Mediasi & Negosiasi',
    icon: Shield,
    description: 'Pendekatan Alternative Dispute Resolution (ADR) untuk menyelesaikan sengketa di luar pengadilan dengan mengutamakan solusi win-win solution.',
    details: [
        'Tim mediator bersertifikat kami membantu menjembatani pihak-pihak yang bersengketa untuk mencapai kesepakatan damai. Kami bertindak sebagai pihak netral yang memfasilitasi dialog konstruktif.',
        'Metode ini terbukti lebih hemat biaya dan waktu dibandingkan proses litigasi di pengadilan, serta sangat efektif untuk menjaga hubungan baik jangka panjang antar pihak yang bersengketa.',
        'Sangat cocok untuk sengketa bisnis, pembagian waris keluarga, konflik pertanahan, dan perselisihan hubungan industrial (ketenagakerjaan).'
    ],
    features: [
        'Mediator Bersertifikat Mahkamah Agung',
        'Kerahasiaan Terjamin',
        'Proses Cepat & Efisien',
        'Pembuatan Akta Perdamaian'
    ]
  },
  'pembuatan-dokumen': {
    title: 'Pembuatan Dokumen',
    icon: FileText,
    description: 'Layanan Legal Drafting dan Review untuk memastikan setiap dokumen hukum Anda valid, mengikat, dan melindungi kepentingan Anda.',
    details: [
        'Dokumen hukum yang lemah dapat menjadi celah sengketa di kemudian hari. Tim kami memastikan setiap klausul dirancang dengan presisi, tidak ambigu, dan sesuai dengan peraturan perundang-undangan yang berlaku.',
        'Layanan mencakup pembuatan kontrak kerja, perjanjian kerjasama bisnis, surat somasi, surat kuasa, wasiat, hingga dokumen legalitas perusahaan seperti akta pendirian dan perubahan.',
        'Kami juga melayani review kontrak yang diajukan pihak lawan untuk mendeteksi potensi risiko hukum (legal pitfalls) yang dapat merugikan Anda di masa depan.'
    ],
    features: [
        'Perjanjian & Kontrak Bisnis',
        'Surat Somasi & Jawaban',
        'Legal Review Dokumen',
        'Drafting Peraturan Perusahaan'
    ]
  },
  'pendampingan-perkara': {
    title: 'Pendampingan Perkara',
    icon: Gavel,
    description: 'Jasa advokasi dan pendampingan hukum (litigasi) profesional di setiap tahapan proses peradilan maupun kepolisian.',
    details: [
        'Kami mendampingi Anda mulai dari tingkat penyidikan di kepolisian (BAP), proses penuntutan di kejaksaan, hingga pembelaan di persidangan pengadilan negeri, tinggi, maupun Mahkamah Agung.',
        'Tim litigasi kami memiliki jam terbang tinggi dan strategi mumpuni dalam menangani berbagai jenis perkara, mulai dari pidana umum/khusus, perdata, tata usaha negara, hingga pengadilan agama.',
        'Fokus utama kami adalah pembelaan hak-hak klien secara maksimal (zealous representation) sesuai koridor hukum untuk mencapai keadilan yang diharapkan.'
    ],
    features: [
        'Pendampingan di Kepolisian (BAP)',
        'Gugatan Perdata & Wanprestasi',
        'Pembelaan Pidana',
        'Sengketa Pengadilan Agama'
    ]
  },
  'legal-opinion': {
    title: 'Legal Opinion',
    icon: Search,
    description: 'Pendapat hukum tertulis (Legal Opinion) dan Uji Tuntas (Due Diligence) sebagai dasar pengambilan keputusan strategis.',
    details: [
        'Memberikan analisis hukum yang objektif, mendalam, dan komprehensif terhadap suatu fakta atau peristiwa hukum tertentu berdasarkan hukum positif yang berlaku di Indonesia.',
        'Layanan ini sangat krusial bagi korporasi atau individu sebelum melakukan aksi korporasi besar seperti merger, akuisisi, investasi aset, atau penandatanganan kerjasama strategis.',
        'Membantu memetakan status kepatuhan hukum (compliance), validitas aset, dan memitigasi risiko hukum yang mungkin timbul di masa depan (risk assessment).'
    ],
    features: [
        'Legal Due Diligence',
        'Analisis Kepatuhan Regulasi',
        'Mitigasi Risiko Bisnis',
        'Pendapat Hukum Tertulis'
    ]
  }
};

const ServiceDetail: React.FC = () => {
  const { slug } = useParams();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="bg-dark min-h-screen pt-20 pb-20">
      {/* Hero Header */}
      <div className="relative py-24 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800 via-black to-black z-0"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex p-5 rounded-full bg-surface border border-white/10 mb-8 shadow-[0_0_40px_rgba(220,38,38,0.3)] animate-pulse">
                <Icon className="h-12 w-12 text-primary" />
            </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">{service.title}</h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
                <div className="bg-surface p-8 md:p-10 border border-white/10 relative overflow-hidden group shadow-2xl">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-transparent"></div>
                    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                         <Icon className="h-64 w-64 text-white transform rotate-12" />
                    </div>
                    
                    <h2 className="text-2xl font-black text-white mb-8 uppercase flex items-center tracking-wide">
                        <span className="w-8 h-1 bg-primary mr-4"></span> Detail Layanan
                    </h2>
                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed relative z-10">
                        {service.details.map((paragraph: string, idx: number) => (
                            <p key={idx} className="border-l-2 border-white/5 pl-4">{paragraph}</p>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.features.map((feature: string, idx: number) => (
                        <div key={idx} className="bg-black p-6 border border-white/10 hover:border-accent transition-colors flex items-center space-x-4 group cursor-default">
                            <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 group-hover:text-accent transition-colors" />
                            <span className="text-white font-bold tracking-wide group-hover:text-accent transition-colors">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
                <div className="bg-surface p-8 border border-white/10 sticky top-24 shadow-xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
                    <h3 className="text-xl font-black text-white mb-2 uppercase tracking-wide">Butuh Bantuan?</h3>
                    <p className="text-gray-500 mb-8 text-sm">Tim kami siap membantu menyelesaikan masalah hukum Anda sekarang.</p>
                    
                    <div className="space-y-4">
                        <Link to="/contact" className="block w-full py-4 bg-primary text-white font-black text-center uppercase tracking-widest hover:bg-red-700 transition-colors shadow-[0_0_20px_rgba(220,38,38,0.4)] skew-x-[-5deg] group">
                            <span className="block skew-x-[5deg] group-hover:scale-105 transition-transform">Konsultasi Sekarang</span>
                        </Link>
                        <Link to="/register" className="block w-full py-4 bg-transparent border border-white/20 text-white font-black text-center uppercase tracking-widest hover:bg-white hover:text-black transition-colors skew-x-[-5deg] group">
                            <span className="block skew-x-[5deg] group-hover:scale-105 transition-transform">Daftar Member</span>
                        </Link>
                    </div>

                    <div className="mt-10 pt-8 border-t border-white/10">
                         <h4 className="text-xs font-black text-gray-500 uppercase mb-4 tracking-[0.2em]">Layanan Lainnya</h4>
                         <ul className="space-y-3">
                            {Object.keys(serviceData).map((key) => {
                                if(key === slug) return null;
                                return (
                                    <li key={key}>
                                        <Link to={`/services/${key}`} className="text-gray-400 hover:text-accent transition-colors flex items-center text-sm font-medium group">
                                            <ArrowRight className="h-3 w-3 mr-2 text-primary group-hover:text-accent transition-colors" />
                                            {serviceData[key].title}
                                        </Link>
                                    </li>
                                )
                            })}
                         </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;