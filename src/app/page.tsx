import Image from "next/image";
import Link from "next/link";
import ProductPortfolio from "./_components/product-portfolio";

export default async function Home() {
  let products = [];
  try {
    const res = await fetch("https://69c932a668edf52c954e51b1.mockapi.io/api/v1/products", {
      next: { revalidate: 3600 }
    });
    if (res.ok) {
      products = await res.json();
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  const topProducts = products.slice(0, 6);

  return (
    <>
      <main className="bg-white min-h-screen">
        {/* HERO SECTION - Clean & Minimal */}
        <section id="home" className="relative min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  <span className="text-sm font-medium text-amber-700">Premium Konveksi</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                  Quality Meets
                  <span className="text-amber-500"> Elegance</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Mewujudkan desain pakaian wanita impian Anda dengan kualitas butik 
                  dan pengerjaan yang presisi.
                </p>
                
                <div className="flex gap-4">
                  <Link href="#contact" className="px-8 py-4 bg-amber-500 text-white rounded-full font-semibold hover:bg-amber-600 transition-all hover:shadow-lg hover:-translate-y-0.5 inline-block text-center text-sm md:text-base">
                    Mulai Konsultasi
                  </Link>
                  <Link href="#portfolio" className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-amber-500 hover:text-amber-500 transition-all inline-block text-center text-sm md:text-base">
                    Lihat Portfolio
                  </Link>
                </div>
                
                {/* Stats */}
                <div className="flex gap-8 pt-8">
                  <div>
                    <div className="text-3xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-500">Proyek Selesai</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-500">Kepuasan Klien</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">15+</div>
                    <div className="text-sm text-gray-500">Tahun Pengalaman</div>
                  </div>
                </div>
              </div>
              
              {/* Right Image Placeholder */}
              <div className="relative lg:h-[600px]">
                <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl h-[500px] lg:h-full w-full relative overflow-hidden shadow-2xl">
                  <Image 
                    src="/image/konveksi.jpg" 
                    alt="Produksi Konveksi" 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-amber-300 rounded-full blur-2xl opacity-30"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-amber-400 rounded-full blur-2xl opacity-20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION - Modern Grid */}
        <section id="about" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                    <div className="text-4xl mb-3">🎯</div>
                    <h3 className="font-bold text-gray-900 mb-2">Presisi Tinggi</h3>
                    <p className="text-sm text-gray-600 mt-auto">Setiap jahitan diperiksa dengan standar kualitas ketat</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                    <div className="text-4xl mb-3">⚡</div>
                    <h3 className="font-bold text-gray-900 mb-2">Cepat & Tepat</h3>
                    <p className="text-sm text-gray-600 mt-auto">Deadline terpenuhi tanpa mengorbankan kualitas</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                    <div className="text-4xl mb-3">💎</div>
                    <h3 className="font-bold text-gray-900 mb-2">Material Premium</h3>
                    <p className="text-sm text-gray-600 mt-auto">Hanya bahan berkualitas dari supplier terpercaya</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                    <div className="text-4xl mb-3">👥</div>
                    <h3 className="font-bold text-gray-900 mb-2">Tim Profesional</h3>
                    <p className="text-sm text-gray-600 mt-auto">Penjahit senior dengan pengalaman bertahun-tahun</p>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full mb-6">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  <span className="text-sm font-medium text-amber-700">Tentang Kami</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Mitra Terpercaya untuk
                  <span className="text-amber-500"> Brand Fashion Anda</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Kami memahami bahwa setiap brand memiliki DNA desain yang unik. 
                  Dengan pengalaman lebih dari 15 tahun, kami siap mewujudkan koleksi 
                  impian Anda dengan standar kualitas tertinggi.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Dari skala kecil hingga produksi massal, kami memberikan solusi 
                  manufaktur yang fleksibel dan profesional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION - Card Grid */}
        <section id="services" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                <span className="text-sm font-medium text-amber-700">Layanan Kami</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Solusi Lengkap untuk
                <span className="text-amber-500"> Koleksi Wanita</span>
              </h2>
              <p className="text-xl text-gray-600">
                Dari dress elegan hingga casual daily, kami siap membantu produksi Anda
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  title: "Gamis & Dress", 
                  desc: "Dress pesta, gamis, abaya dengan pola eksklusif dan jahitan premium yang jatuh sempurna.",
                  icon: "👗",
                  color: "from-pink-400 to-rose-400"
                },
                { 
                  title: "Blouse & Kemeja", 
                  desc: "Atasan formal dan semi-formal dengan finishing rapi pada kerah, manset, dan kancing.",
                  icon: "👚",
                  color: "from-blue-400 to-cyan-400"
                },
                { 
                  title: "Rok & Celana", 
                  desc: "Bawahan wanita bahan woven & knit. Handal untuk plisket, resleting Jepang, dan saku.",
                  icon: "👖",
                  color: "from-emerald-400 to-teal-400"
                },
                { 
                  title: "Outer & Jaket", 
                  desc: "Blazer, cardigan, dan jaket dengan cutting yang tegas dan struktur sempurna.",
                  icon: "🧥",
                  color: "from-purple-400 to-indigo-400"
                },
                { 
                  title: "Sportswear", 
                  desc: "Activewear dan athleisure dengan bahan stretch berkualitas tinggi.",
                  icon: "🏃‍♀️",
                  color: "from-orange-400 to-red-400"
                },
                { 
                  title: "Custom Design", 
                  desc: "Pembuatan sesuai desain khusus Anda, dari sketsa hingga produk jadi.",
                  icon: "✏️",
                  color: "from-amber-400 to-yellow-400"
                }
              ].map((service, i) => (
                <div key={i} className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS SECTION - Timeline */}
        <section id="process" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                <span className="text-sm font-medium text-amber-700">Proses Kerja</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Alur Produksi yang
                <span className="text-amber-500"> Transparan</span>
              </h2>
              <p className="text-xl text-gray-600">
                Kami memastikan setiap tahap berjalan sistematis untuk hasil maksimal
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Konsultasi", desc: "Diskusi desain, material, dan timeline produksi", icon: "💬" },
                { step: "02", title: "Sampling", desc: "Pembuatan sampel akurat sesuai keinginan", icon: "🔍" },
                { step: "03", title: "Produksi", desc: "Produksi massal dengan quality control ketat", icon: "🏭" },
                { step: "04", title: "Pengiriman", desc: "Packing rapi dan pengiriman tepat waktu", icon: "📦" }
              ].map((item, i) => (
                <div key={i} className="relative">
                  {i < 3 && (
                    <div className="hidden md:block absolute top-1/4 left-full w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0">
                      <div className="absolute right-0 top-1/2 w-2 h-2 bg-amber-500 rounded-full"></div>
                    </div>
                  )}
                  <div className="relative z-10 bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">
                      {item.icon}
                    </div>
                    <div className="text-amber-500 font-bold text-sm mb-2">Step {item.step}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO SECTION */}
        <section id="portfolio" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                <span className="text-sm font-medium text-amber-700">Portfolio</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Hasil Produksi
                <span className="text-amber-500"> Terbaik Kami</span>
              </h2>
              <p className="text-xl text-gray-600">
                Beberapa koleksi yang telah kami produksi untuk klien
              </p>
            </div>

            <ProductPortfolio products={topProducts} />
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section id="testimonials" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                <span className="text-sm font-medium text-amber-700">Testimonial</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Apa Kata
                <span className="text-amber-500"> Klien Kami</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Sarah Dewi", brand: "Maison Sarah", text: "Kualitas jahitan sangat rapi dan detail. Timeline produksi tepat janji. Highly recommended!", rating: 5 },
                { name: "Amira Putri", brand: "Amira Cloth", text: "Tim sangat profesional dalam membantu produksi koleksi pertama brand saya. Hasilnya memuaskan!", rating: 5 },
                { name: "Rina Wijaya", brand: "Rina's Atelier", text: "Komunikasi baik, pengerjaan cepat, dan hasil akhir di atas ekspektasi. Makasih tim!", rating: 5 }
              ].map((testimonial, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-amber-500">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.brand}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION - CTA */}
        <section id="contact" className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Siap Memulai Produksi?
                </h2>
                <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
                  Konsultasikan kebutuhan fashion Anda dengan tim ahli kami
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://wa.me/6281234567890?text=Halo%20RatuJahit,%20saya%20ingin%20berkonsultasi%20mengenai%20produksi." target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-amber-500 text-white rounded-full font-semibold hover:bg-amber-600 transition-all hover:shadow-lg inline-flex items-center justify-center">
                    Hubungi Kami Sekarang
                  </a>
                  <button className="px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-full font-semibold hover:border-amber-500 hover:text-amber-500 transition-all">
                    +62 812-3456-7890
                  </button>
                </div>
                
                <p className="text-gray-400 text-sm mt-8">
                  Response cepat dalam 2x24 jam
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}