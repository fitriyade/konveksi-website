import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-rose-200 scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-stone-200 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-serif font-bold text-rose-900 tracking-tight">
            Femme<span className="text-stone-400">Sew</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-stone-600">
            <a href="#home" className="hover:text-rose-600 transition-colors">Beranda</a>
            <a href="#about" className="hover:text-rose-600 transition-colors">Tentang Kami</a>
            <a href="#services" className="hover:text-rose-600 transition-colors">Layanan & Produk</a>
            <a href="#contact" className="hover:text-rose-600 transition-colors">Kontak</a>
          </div>
          <a href="#contact" className="hidden md:inline-flex px-6 py-2.5 bg-rose-900 text-white text-sm font-medium rounded-full hover:bg-rose-800 transition-colors">
            Pesan Sekarang
          </a>
        </div>
      </nav>

      <main className="pt-20">
        {/* HOMEPAGE (HERO) */}
        <section id="home" className="pt-20 pb-20 md:pt-36 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-800 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            Kapasitas Produksi Tersedia
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8 leading-tight max-w-4xl">
            Wujudkan Desain Fashion Wanita <span className="text-rose-800 italic">Impian Anda</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-2xl mb-12">
            Mitra produksi konveksi terpercaya khusus pakaian wanita. Kami melayani pembuatan gaun, blouse, rok, hingga hijab dengan detail dan kualitas butik premium.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="px-8 py-4 bg-rose-900 text-white rounded-full font-medium text-lg hover:bg-rose-800 transition-all hover:shadow-lg hover:-translate-y-1">
              Konsultasi Gratis
            </a>
            <a href="#services" className="px-8 py-4 bg-white text-stone-900 border border-stone-200 rounded-full font-medium text-lg hover:bg-stone-50 transition-all">
              Lihat Layanan
            </a>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-24 bg-white px-6 scroll-mt-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-stone-100">
              <div className="absolute inset-0 bg-gradient-to-tr from-rose-200 to-rose-50 flex items-center justify-center p-12 text-center text-stone-400 shadow-inner">
                 {/* Placeholder for real image */}
                 <span className="font-medium text-lg text-rose-800/40">Visualisasi Area Penjahit & Pola</span>
              </div>
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-widest text-rose-600 uppercase mb-4">Tentang Kami</h2>
              <h3 className="text-4xl font-serif text-stone-900 mb-6 leading-tight">Berdedikasi untuk Kualitas Sejak Ide Pertama</h3>
              <p className="text-stone-600 mb-6 text-lg leading-relaxed">
                FemmeSew hadir sebagai solusi bagi para brand owner, desainer, maupun pengusaha fashion yang fokus pada segmen pakaian wanita. Kami mengerti bahwa fashion wanita membutuhkan ketelitian ekstra, mulai dari pemilihan bahan, potongan (cutting) yang pas di badan, hingga jahitan yang rapi.
              </p>
              <ul className="space-y-4 text-stone-700">
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <span className="font-medium text-stone-800">Kualitas Jahitan Butik (QC Ketat)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <span className="font-medium text-stone-800">Minimal Order Bersahabat</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">
                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  <span className="font-medium text-stone-800">Ketepatan Waktu Produksi</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SERVICE */}
        <section id="services" className="py-24 px-6 bg-stone-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-rose-600 uppercase mb-4">Layanan & Produk</h2>
              <h3 className="text-4xl font-serif text-stone-900 mb-6">Apa yang Kami Produksi?</h3>
              <p className="text-stone-600 max-w-2xl mx-auto text-lg">Kami menerima jasa menjahit (CMT) maupun full order (FOB) untuk berbagai jenis pakaian wanita dengan spesifikasi custom sesuai brand Anda.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Product 1 */}
              <div className="bg-white rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-stone-100">
                <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 text-rose-600">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-3">Dress & Gaun</h4>
                <p className="text-stone-600 text-sm leading-relaxed">Produksi gaun pesta, dress kasual, midi, hingga maxi dress dengan potongan elegan dan jatuh yang sempurna di badan.</p>
              </div>

              {/* Product 2 */}
              <div className="bg-white rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-stone-100">
                <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 text-rose-600">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-3">Atasan & Blouse</h4>
                <p className="text-stone-600 text-sm leading-relaxed">Dari kemeja kerja formal hingga tunik dan blouse kekinian dengan detail kerah, ruffles, atau lengan puff.</p>
              </div>

              {/* Product 3 */}
              <div className="bg-white rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-stone-100">
                <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 text-rose-600">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-3">Bawahan</h4>
                <p className="text-stone-600 text-sm leading-relaxed">Celana kulot, chino, rok plisket, rok span, hingga celana pendek dari bahan katun, linen, maupun satin lembut.</p>
              </div>

              {/* Product 4 */}
              <div className="bg-white rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-stone-100">
                <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 text-rose-600">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-3">Outerwear</h4>
                <p className="text-stone-600 text-sm leading-relaxed">Blazer kerja eksklusif, cardigan, bolero, dan jaket wanita dengan pola (pattern) dan lining kerah rapi sempurna.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24 px-6 bg-zinc-900 text-white scroll-mt-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-rose-400 uppercase mb-4">Hubungi Kami</h2>
              <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Mulai Produksi Koleksi Anda Berikutnya</h3>
              <p className="text-zinc-400 mb-10 text-lg leading-relaxed max-w-lg">
                Punya desain referensi atau sekadar ide? Tim kami siap membantu Anda dari konsultasi bahan, pembuatan sampel, hingga menghitung estimasi biaya produksi massal.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 text-rose-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg">WhatsApp / Telepon</h5>
                    <p className="text-zinc-400 mt-1">+62 812 3456 7890</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 text-rose-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg">Email</h5>
                    <p className="text-zinc-400 mt-1">hello@femmesew.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 text-rose-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg">Workshop & Kantor</h5>
                    <p className="text-zinc-400 mt-1 leading-relaxed">Jl. Pakaian Modis No. 8, <br/>Kebayoran Baru, Jakarta Selatan 12120</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800/50 border border-zinc-700 p-8 md:p-10 rounded-3xl backdrop-blur-sm">
              <form className="flex flex-col gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                   <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">Nama Lengkap</label>
                    <input type="text" className="w-full px-4 py-3.5 bg-zinc-900 border border-zinc-700 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-colors text-white" placeholder="Cth: Sarah Amelia" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">Nama Brand (Opsional)</label>
                    <input type="text" className="w-full px-4 py-3.5 bg-zinc-900 border border-zinc-700 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-colors text-white" placeholder="Nama brand Anda" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Pesan & Kebutuhan</label>
                  <textarea rows={5} className="w-full px-4 py-3.5 bg-zinc-900 border border-zinc-700 rounded-xl focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-colors text-white resize-none" placeholder="Ceritakan detail produk yang ingin Anda jahit, perkiraan jumlah (qty), atau pertanyaan lainnya..."></textarea>
                </div>
                
                <button type="button" className="w-full py-4 mt-2 bg-rose-600 text-white rounded-xl font-bold text-lg hover:bg-rose-500 transition-colors flex items-center justify-center gap-2">
                  Kirim Pesan Sekarang
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black py-10 border-t border-zinc-900 text-center text-zinc-500 text-sm">
        <p>&copy; {new Date().getFullYear()} FemmeSew. Hak Cipta Dilindungi.</p>
        <p className="mt-2 text-zinc-600">Tumbuh bersama brand fashion lokal Indonesia.</p>
      </footer>
    </div>
  );
}
