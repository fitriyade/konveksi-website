export default function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-300 py-12 border-t border-gray-800 text-sm mt-auto">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
                {/* Brand */}
                <div className="text-center md:text-left space-y-2">
                    <div className="text-2xl font-bold text-white tracking-tight flex items-center justify-center md:justify-start gap-2">
                         Ratu<span className="text-amber-500">Jahit</span>
                    </div>
                    <p className="text-gray-400">
                        Mitra butik fashion dan wanita terpercaya.
                    </p>
                </div>
                
                {/* Quick Links */}
                <div className="flex gap-6 sm:gap-8 justify-center flex-wrap">
                    <a href="#about" className="hover:text-amber-500 transition-colors font-medium">Tentang</a>
                    <a href="#services" className="hover:text-amber-500 transition-colors font-medium">Layanan</a>
                    <a href="#portfolio" className="hover:text-amber-500 transition-colors font-medium">Portfolio</a>
                    <a href="#contact" className="hover:text-amber-500 transition-colors font-medium">Kontak</a>
                </div>

                {/* Social / Contact short */}
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all">
                        WA
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all">
                        IG
                    </a>
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-800/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500">
                <p>&copy; {new Date().getFullYear()} RatuJahit. Hak Cipta Dilindungi.</p>
                <div className="flex gap-4 text-xs">
                    <a href="#" className="hover:text-gray-300 transition-colors">Syarat & Ketentuan</a>
                    <a href="#" className="hover:text-gray-300 transition-colors">Kebijakan Privasi</a>
                </div>
            </div>
        </footer>
    );
}