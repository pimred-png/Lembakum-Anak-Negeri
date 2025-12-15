import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { Activity, CreditCard, FileText, User, Bell } from 'lucide-react';

const Dashboard: React.FC = () => {
  const activityData = [
    { name: 'Mon', activities: 4 },
    { name: 'Tue', activities: 3 },
    { name: 'Wed', activities: 7 },
    { name: 'Thu', activities: 2 },
    { name: 'Fri', activities: 5 },
    { name: 'Sat', activities: 1 },
    { name: 'Sun', activities: 2 },
  ];

  const caseStatusData = [
    { name: 'Jan', active: 2, closed: 1 },
    { name: 'Feb', active: 3, closed: 2 },
    { name: 'Mar', active: 2, closed: 4 },
    { name: 'Apr', active: 4, closed: 3 },
    { name: 'May', active: 3, closed: 2 },
    { name: 'Jun', active: 5, closed: 1 },
  ];

  return (
    <div className="bg-black min-h-screen p-4 sm:p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/10 pb-6">
          <div>
            <h1 className="text-3xl font-black text-white uppercase tracking-tight">Dashboard</h1>
            <p className="text-gray-400">Selamat datang kembali, <span className="text-accent">Budi Santoso</span></p>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-4">
            <button className="p-2 bg-surface border border-white/10 rounded-full hover:border-primary text-gray-300 relative transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-3 w-3 bg-primary rounded-full border-2 border-black animate-pulse"></span>
            </button>
            <div className="flex items-center space-x-2 bg-surface border border-white/10 px-4 py-2 rounded-full">
              <div className="h-8 w-8 bg-gradient-to-br from-primary to-red-900 rounded-full flex items-center justify-center text-white font-bold border border-white/20">BS</div>
              <span className="text-sm font-bold text-gray-300 uppercase tracking-wide">Premium</span>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Kasus Aktif', value: '3', icon: FileText, color: 'text-primary', borderColor: 'border-primary/50' },
            { label: 'Jadwal Konsultasi', value: '2', icon: Activity, color: 'text-accent', borderColor: 'border-accent/50' },
            { label: 'Dokumen', value: '12', icon: FileText, color: 'text-secondary', borderColor: 'border-secondary/50' },
            { label: 'Status Member', value: 'Active', icon: CreditCard, color: 'text-white', borderColor: 'border-white/50' },
          ].map((stat, idx) => (
            <div key={idx} className={`bg-surface p-6 border-l-4 ${stat.borderColor} shadow-lg relative overflow-hidden group`}>
              <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <stat.icon className={`h-16 w-16 ${stat.color}`} />
              </div>
              <div className="flex items-center justify-between mb-4 relative z-10">
                <div className={`p-2 bg-black/50 rounded border border-white/10`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <span className="text-3xl font-black text-white">{stat.value}</span>
              </div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest relative z-10">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-surface p-6 border border-white/5">
            <h2 className="text-lg font-bold text-white mb-6 uppercase flex items-center">
                <span className="w-2 h-2 bg-primary mr-2"></span> Aktivitas Mingguan
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={activityData}>
                  <defs>
                    <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#DC2626" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#DC2626" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} stroke="#555" />
                  <YAxis axisLine={false} tickLine={false} stroke="#555" />
                  <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#222" />
                  <Tooltip contentStyle={{ backgroundColor: '#111', borderColor: '#333', color: '#fff' }} />
                  <Area type="monotone" dataKey="activities" stroke="#DC2626" fillOpacity={1} fill="url(#colorActivity)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-surface p-6 border border-white/5">
            <h2 className="text-lg font-bold text-white mb-6 uppercase flex items-center">
                <span className="w-2 h-2 bg-secondary mr-2"></span> Statistik Kasus
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={caseStatusData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#222" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} stroke="#555" />
                  <YAxis axisLine={false} tickLine={false} stroke="#555" />
                  <Tooltip contentStyle={{ backgroundColor: '#111', borderColor: '#333', color: '#fff' }} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                  <Legend />
                  <Bar dataKey="active" fill="#16A34A" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="closed" fill="#333" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Activity List */}
        <div className="bg-surface border border-white/5">
          <div className="p-6 border-b border-white/5 bg-white/5">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider">Riwayat Terkini</h2>
          </div>
          <div className="divide-y divide-white/5">
            {[
              { title: 'Konsultasi Hukum Perdata', date: '2024-03-20', status: 'Selesai', color: 'text-secondary border-secondary/30 bg-secondary/10' },
              { title: 'Pembayaran Member Premium', date: '2024-03-18', status: 'Berhasil', color: 'text-primary border-primary/30 bg-primary/10' },
              { title: 'Pengajuan Dokumen Kontrak', date: '2024-03-15', status: 'Proses', color: 'text-accent border-accent/30 bg-accent/10' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 sm:p-6 flex items-center justify-between hover:bg-white/5 transition-colors">
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500 font-mono">{item.date}</p>
                </div>
                <span className={`px-3 py-1 rounded-none text-xs font-bold border ${item.color} uppercase tracking-wider`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;