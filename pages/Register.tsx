import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Scale } from 'lucide-react';

const Register: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
       <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black"></div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="flex justify-center mb-6">
          <div className="h-24 w-24 animate-pulse">
             <div className="w-full h-full flex items-center justify-center">
                <img src="https://i.ibb.co.com/6RScZhzJ/Picsart-25-12-14-13-20-51-233.png" alt="Logo" className="w-full h-full object-contain" />
             </div>
          </div>
        </div>
        <h2 className="text-center text-3xl font-black text-white uppercase tracking-tight">
          Registrasi Member
        </h2>
        <p className="mt-2 text-center text-sm text-gray-400">
          Sudah punya akun?{' '}
          <Link to="/login" className="font-bold text-secondary hover:text-green-400 transition-colors">
            Masuk di sini
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-surface py-8 px-4 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] sm:rounded-none sm:px-10 backdrop-blur-sm">
          <form className="space-y-5" onSubmit={handleRegister}>
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                Nama Lengkap
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none block w-full px-3 py-3 border border-white/10 bg-black/50 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary sm:text-sm transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none block w-full px-3 py-3 border border-white/10 bg-black/50 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary sm:text-sm transition-all"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                WhatsApp
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="appearance-none block w-full px-3 py-3 border border-white/10 bg-black/50 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary sm:text-sm transition-all"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none block w-full px-3 py-3 border border-white/10 bg-black/50 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary sm:text-sm transition-all"
              />
            </div>

            <div className="flex items-center pt-2">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-secondary focus:ring-secondary border-gray-600 rounded bg-black"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">
                Saya setuju dengan <a href="#" className="text-secondary hover:underline">Ketentuan Layanan</a>
              </label>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold text-white bg-gradient-to-r from-secondary to-green-800 hover:from-green-600 hover:to-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary shadow-[0_0_15px_rgba(22,163,74,0.4)] transition-all uppercase tracking-widest"
              >
                DAFTAR SEKARANG
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;