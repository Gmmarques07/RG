
import React, { useState, useEffect } from 'react';
import { DuoInfo, SocialType } from './types';
import { DUO_DEFAULT } from './constants';

const SocialButton = ({ type, href, label }: { type: SocialType, href: string, label: string }) => {
  const getStyles = () => {
    switch (type) {
      case SocialType.WHATSAPP: return "bg-[#25D366] text-white shadow-xl shadow-green-900/30";
      case SocialType.SPOTIFY: return "bg-[#1DB954] text-white shadow-xl shadow-green-900/30";
      case SocialType.YOUTUBE: return "bg-[#FF0000] text-white shadow-xl shadow-red-900/30";
      default: return "bg-white text-black";
    }
  };

  const getIcon = () => {
    switch (type) {
      case SocialType.WHATSAPP:
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        );
      case SocialType.SPOTIFY:
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.306c-.214.351-.673.463-1.024.249-2.815-1.72-6.357-2.11-10.531-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.803.562-.895 4.568-1.045 8.484-.6 11.638 1.328.351.214.463.673.25 1.037zm1.468-3.264c-.269.438-.847.578-1.285.308-3.223-1.982-8.134-2.557-11.944-1.402-.496.15-1.021-.13-1.171-.626-.15-.496.13-1.021.626-1.171 4.364-1.323 9.776-.68 13.466 1.587.438.27.579.848.308 1.304zm.135-3.41c-3.863-2.295-10.244-2.508-13.939-1.386-.593.18-1.22-.155-1.399-.748-.18-.593.155-1.219.748-1.399 4.251-1.29 11.304-1.04 15.748 1.6 0.533.317.708 1.005.392 1.538-.316.533-1.005.708-1.55.395z" />
          </svg>
        );
      case SocialType.YOUTUBE:
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        );
      default: return null;
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${getStyles()} btn-hover w-full flex items-center justify-between py-4 px-6 rounded-2xl font-black text-sm md:text-base mb-4 tracking-[0.15em] border border-white/5 uppercase`}
    >
      <span className="flex-shrink-0">{getIcon()}</span>
      <span className="flex-grow text-center">{label}</span>
      <span className="w-5"></span>
    </a>
  );
};

export default function App() {
  const [duo] = useState<any>(DUO_DEFAULT);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % duo.backgroundImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [duo.backgroundImages.length]);

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-start bg-[#0a0f0a] selection:bg-amber-600 selection:text-white overflow-x-hidden">
      {/* Background Dinâmico */}
      <div className="fixed inset-0 z-0 overflow-hidden bg-[#0a0f0a]">
        {duo.backgroundImages.map((img: string, idx: number) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-[3000ms] ease-out bg-cover bg-center ${
              idx === bgIndex ? 'opacity-40 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,60,40,0.15)_0%,transparent_100%)] z-10" />
      </div>

      <main className="relative z-20 w-full max-w-md px-6 pt-12 pb-24 flex flex-col items-center">
        
        {/* Foto de Perfil em Evidência */}
        <div className="relative mb-10 w-full flex justify-center">
          <div className="absolute -inset-4 bg-gradient-to-tr from-amber-600/30 to-transparent rounded-[3rem] blur-3xl opacity-50"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[3rem] border-4 border-white/10 p-2 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-zinc-900 group">
            <img 
              src={duo.profileImage} 
              alt="Ricardo e Gabriel"
              className="w-full h-full object-cover rounded-[2.5rem] transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Logo da Dupla */}
        <div className="w-full max-w-[300px] mb-8 flex flex-col items-center"> 
          <img 
            src={duo.logoImage} 
            alt="Logo Dupla" 
            className="w-full h-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          />
          <p className="text-amber-500 font-black text-xs tracking-[0.5em] uppercase opacity-90 mt-4 drop-shadow-md text-center">
            {duo.tagline}
          </p>
        </div>

        {/* Biografia */}
        <div className="w-full glass rounded-[2.5rem] p-8 mb-10 text-center relative border border-white/10 shadow-2xl">
          <p className="text-gray-100 text-base leading-relaxed font-semibold italic drop-shadow-sm">
            "{duo.bio}"
          </p>
        </div>

        {/* Links Principais */}
        <div className="w-full space-y-5">
          <SocialButton 
            type={SocialType.WHATSAPP} 
            href={`https://wa.me/${duo.whatsapp}?text=Vimos seu perfil e gostaríamos de saber sobre a agenda de shows!`} 
            label="Contratar Show" 
          />
          <SocialButton 
            type={SocialType.SPOTIFY} 
            href={duo.spotify} 
            label="Ouvir no Spotify" 
          />
          <SocialButton 
            type={SocialType.YOUTUBE} 
            href={duo.youtube} 
            label="Ver no YouTube" 
          />
        </div>

        {/* Rodapé */}
        <footer className="mt-20 opacity-30 text-center">
          <p className="text-[10px] text-white uppercase tracking-[0.5em] font-black">
            © 2026 RG Produções
          </p>
        </footer>
      </main>

      {/* Efeitos de Luz de Palco */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-15">
         <div className="absolute top-[0%] right-[0%] w-[70%] h-[70%] bg-amber-500/5 blur-[150px] rounded-full"></div>
         <div className="absolute -bottom-[10%] -left-[10%] w-[60%] h-[60%] bg-green-900/10 blur-[130px] rounded-full"></div>
      </div>
    </div>
  );
}
