import React from 'react';
import { Shield, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-dark min-h-screen pt-16">
      {/* Header */}
      <div className="relative py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center mb-8">
            <img 
                src="https://i.ibb.co.com/6RScZhzJ/Picsart-25-12-14-13-20-51-233.png" 
                alt="Lembakum Logo" 
                className="w-24 h-24 object-contain"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">Tentang <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Lembakum</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Inovasi hukum untuk keadilan Indonesia. Menggabungkan integritas tradisional dengan efisiensi teknologi modern.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-white uppercase tracking-wide border-l-4 border-primary pl-6">Sejarah & Latar Belakang</h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              Lembakum Anak Negeri didirikan dengan visi futuristik: mendemokratisasi akses hukum. Kami percaya bahwa keadilan bukan hanya milik mereka yang mampu, tetapi hak fundamental setiap warga negara.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              Dengan mengadopsi sistem manajemen kasus digital dan jaringan pengacara yang luas, kami memangkas birokrasi dan biaya, menjadikan layanan hukum lebih cepat, transparan, dan dapat diandalkan.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10">
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000" alt="Office meeting" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            </div>
          </div>
        </div>

        {/* Vision Mission */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: Shield, title: "VISI", desc: "Mewujudkan ekosistem hukum digital yang inklusif dan berkeadilan.", color: "text-primary", border: "border-primary/50" },
            { icon: Target, title: "MISI", desc: "Digitalisasi layanan hukum untuk efisiensi dan transparansi maksimal.", color: "text-secondary", border: "border-secondary/50" },
            { icon: Award, title: "NILAI", desc: "Integritas, Kecepatan, dan Keberpihakan pada Kebenaran.", color: "text-accent", border: "border-accent/50" }
          ].map((item, idx) => (
            <div key={idx} className={`bg-surface p-8 border-t-4 ${item.border} text-center hover:bg-white/5 transition-colors group`}>
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10 group-hover:border-white/30 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <item.icon className={`h-8 w-8 ${item.color}`} />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-widest">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Team Preview (Mock) */}
        <div>
          <h2 className="text-3xl font-black text-white mb-12 text-center uppercase tracking-widest">Dewan Pakar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group relative">
                <div className="relative overflow-hidden mb-4 aspect-[3/4] bg-surface border border-white/10">
                  <img src={`https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&q=80&w=400`} alt="Team Member" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <p className="text-white font-bold text-lg">Senior Partner</p>
                    <p className="text-black text-xs uppercase font-bold tracking-widest">Spesialis Pidana</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white uppercase">Nama Partner {i}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;