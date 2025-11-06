export default function Footer() {
  return (
    <footer className="relative w-full bg-black py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center text-sm text-zinc-400 sm:flex-row sm:text-left">
        <p className="order-2 sm:order-1">
          © {new Date().getFullYear()} Hyperliquid Atmosphere — crafted for a futuristic, crypto-native vibe.
        </p>
        <div className="order-1 flex items-center gap-4 sm:order-2">
          <a href="#explore" className="text-emerald-300 hover:text-emerald-200">Explore</a>
          <a href="#features" className="text-emerald-300 hover:text-emerald-200">Features</a>
          <a href="https://hyperfoundation.org/" target="_blank" rel="noreferrer" className="text-emerald-300 hover:text-emerald-200">Inspiration</a>
        </div>
      </div>
    </footer>
  );
}
