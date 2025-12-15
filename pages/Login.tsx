import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full"></div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="flex justify-center mb-6">
          <div className="h-24 w-24">
             <div className="w-full h-full flex items-center justify-center">
                <img src="https://i.ibb.co.com/6RScZhzJ/Picsart-25-12-14-13-20-51-233.png" alt="Logo" className="w-full h-full object-contain" />
             </div>
          </div>
        </div>
        <h2 className="text-center text-3xl font-black text-white uppercase tracking-tight">
          Akses Member
        </h2>
        <p className="mt-2 text-center text-sm text-gray-400">
          Belum punya akun?{' '}
          <Link to="/register" className="font-bold text-primary hover:text-red-400 transition-colors">
            Daftar sekarang
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-surface py-8 px-4 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] sm:rounded-none sm:px-10 backdrop-blur-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-300 uppercase tracking-wide">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-3 border border-white/10 bg-black/50 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm transition-all"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-gray-300 uppercase tracking-wide">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-3 border border-white/10 bg-black/50 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-600 rounded bg-black"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                  Ingat saya
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-secondary hover:text-green-400 transition-colors">
                  Lupa password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold text-white bg-gradient-to-r from-primary to-red-800 hover:from-red-600 hover:to-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-[0_0_15px_rgba(220,38,38,0.4)] transition-all uppercase tracking-widest"
              >
                MASUK
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;