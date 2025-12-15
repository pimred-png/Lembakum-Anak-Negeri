import React from 'react';
import { MessageSquare, Plus, Search, User, Filter } from 'lucide-react';

const Forum: React.FC = () => {
  const topics = [
    {
      id: 1,
      title: "Bagaimana prosedur hukum pembagian warisan jika tidak ada surat wasiat?",
      category: "Hukum Keluarga",
      author: "Siti Aminah",
      replies: 15,
      views: 342,
      time: "2 jam yang lalu",
      accent: "border-primary"
    },
    {
      id: 2,
      title: "Tips menghadapi sengketa lahan dengan pengembang properti",
      category: "Hukum Agraria",
      author: "Budi Santoso",
      replies: 8,
      views: 156,
      time: "5 jam yang lalu",
      accent: "border-secondary"
    },
    {
      id: 3,
      title: "Diskusi UU Cipta Kerja terbaru dan dampaknya bagi karyawan kontrak",
      category: "Ketenagakerjaan",
      author: "Rina Wijaya",
      replies: 42,
      views: 1205,
      time: "1 hari yang lalu",
      accent: "border-accent"
    },
    {
      id: 4,
      title: "Penipuan jual beli online, langkah hukum apa yang bisa diambil?",
      category: "Pidana",
      author: "Doni Pratama",
      replies: 23,
      views: 567,
      time: "2 hari yang lalu",
      accent: "border-white"
    }
  ];

  return (
    <div className="bg-black min-h-screen py-8 pt-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-black text-white uppercase tracking-tight">Forum <span className="text-primary">Diskusi</span></h1>
            <p className="text-gray-400">Pusat pertukaran informasi hukum komunitas.</p>
          </div>
          <button className="flex items-center space-x-2 bg-gradient-to-r from-primary to-red-800 hover:from-red-600 hover:to-primary text-white px-6 py-3 font-bold transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)] uppercase text-sm tracking-widest skew-x-[-10deg]">
            <span className="skew-x-[10deg] flex items-center"><Plus className="h-4 w-4 mr-2" /> Buat Topik</span>
          </button>
        </div>

        {/* Search & Filter */}
        <div className="glass-panel p-4 border border-white/10 mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-grow relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input 
              type="text" 
              placeholder="Cari topik diskusi..." 
              className="w-full pl-10 pr-4 py-3 bg-black border border-white/10 text-white placeholder-gray-600 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
            />
          </div>
          <button className="flex items-center justify-center space-x-2 px-6 py-3 border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white transition-colors">
            <Filter className="h-4 w-4" />
            <span>FILTER</span>
          </button>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Forum List */}
          <div className="lg:col-span-3 space-y-4">
            {topics.map((topic) => (
              <div key={topic.id} className={`bg-surface p-6 border-l-4 ${topic.accent} border-y border-r border-white/5 hover:bg-white/5 transition-all cursor-pointer group`}>
                <div className="flex items-start justify-between">
                  <div className="flex-grow pr-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="bg-white/5 text-gray-300 text-[10px] font-bold px-2 py-1 uppercase tracking-wider border border-white/10">
                        {topic.category}
                      </span>
                      <span className="text-gray-600 text-xs">•</span>
                      <span className="text-gray-500 text-xs font-mono">{topic.time}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {topic.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="h-3 w-3" />
                      <span className="text-xs uppercase font-bold">{topic.author}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end space-y-2 text-gray-500 text-sm">
                    <div className="flex items-center space-x-2 text-primary" title="Balasan">
                      <MessageSquare className="h-4 w-4" />
                      <span className="font-mono font-bold">{topic.replies}</span>
                    </div>
                    <div className="text-[10px] text-gray-600 uppercase font-bold">
                      {topic.views} Views
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-surface p-6 border border-white/10">
              <h3 className="font-bold text-white mb-4 uppercase text-sm tracking-widest border-b border-white/10 pb-2">Kategori</h3>
              <ul className="space-y-1">
                {['Hukum Keluarga', 'Pidana', 'Perdata', 'Bisnis', 'Ketenagakerjaan'].map((cat) => (
                  <li key={cat} className="flex justify-between items-center text-sm text-gray-400 hover:text-white cursor-pointer p-2 hover:bg-white/5 transition-colors">
                    <span>{cat}</span>
                    <span className="text-xs text-gray-600 font-mono">12</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary to-black p-6 border border-primary/30 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent blur-[40px] opacity-20"></div>
              <h3 className="font-black text-lg mb-2 uppercase italic">Premium Access</h3>
              <p className="text-gray-300 text-xs mb-4 leading-relaxed">
                Akses forum eksklusif dan konsultasi prioritas dengan pengacara senior.
              </p>
              <button className="w-full py-3 bg-white text-black font-black text-xs uppercase hover:bg-gray-200 transition-colors tracking-widest">
                UPGRADE SEKARANG
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;