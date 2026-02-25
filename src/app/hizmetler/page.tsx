import Image from "next/image";
import Link from "next/link";

export default function Hizmetler() {
  return (
    <div>
      {/* Header */}
      <header className="bg-blue-800 text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
            <div className="flex flex-col">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/lihkab_logo.jpg"
                  alt="LIHKAB Logo"
                  width={80}
                  height={80}
                  className="rounded-full"
                  priority
                />
                <div className="flex flex-col">
                  <h1 className="text-lg md:text-xl font-bold text-white">3402-398 Sayılı Arnavutköy LİHKAB</h1>
                  <h2 className="text-lg md:text-xl font-bold text-white">Tayfur SİVRİ</h2>
                </div>
              </Link>
              <div className="flex items-center space-x-2 mt-0.5">
                <div className="w-20 flex-shrink-0" aria-hidden />
                <a href="tel:+905445979600" className="font-normal text-sm md:text-base text-white/90 hover:text-white">
                  +90 544 597 9600
                </a>
              </div>
            </div>
            <nav className="w-full md:w-auto">
              <ul className="flex flex-wrap justify-center md:flex-row md:space-x-8">
                <li className="w-1/2 md:w-20 text-center py-2 md:py-0">
                  <Link href="/" className="text-white hover:text-gray-300">
                    Ana Sayfa
                  </Link>
                </li>
                <li className="w-1/2 md:w-24 text-center py-2 md:py-0">
                  <Link href="/hizmetler" className="text-white hover:text-gray-300">
                    Hizmetlerimiz
                  </Link>
                </li>
                <li className="w-1/2 md:w-24 text-center py-2 md:py-0">
                  <Link href="/hakkimizda" className="text-white hover:text-gray-300">
                    Hakkımızda
                  </Link>
                </li>
                <li className="w-1/2 md:w-16 text-center py-2 md:py-0">
                  <Link href="/iletisim" className="text-white hover:text-gray-300">
                    İletişim
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Hizmetlerimiz</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Aplikasyon */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Aplikasyon</h2>
            <p className="text-gray-600 mb-4">
              Taşınmazların zeminde işaretlenmesi ve ölçüm işlemlerinin yapılması hizmetleri.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Parsel köşe noktalarının zeminde işaretlenmesi</li>
              <li>Yapı aplikasyonu</li>
              <li>Bağımsız bölüm planı</li>
            </ul>
          </div>

          {/* Cins Değişikliği */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Cins Değişikliği</h2>
            <p className="text-gray-600 mb-4">
              Taşınmazların cins değişikliği işlemlerinin yapılması ve belgelendirilmesi.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Arsa - Arazi cins değişikliği</li>
              <li>Yapılı - Yapısız cins değişikliği</li>
              <li>Kat mülkiyeti tesisi</li>
            </ul>
          </div>

          {/* Birleştirme (Tevhit) */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Birleştirme (Tevhit)</h2>
            <p className="text-gray-600 mb-4">
              Birden fazla parselin tek parsel haline getirilmesi işlemleri.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Parsel birleştirme</li>
              <li>İmar düzenlemesi</li>
              <li>Teknik rapor hazırlama</li>
            </ul>
          </div>

          {/* Ayırma (İfraz) */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Ayırma (İfraz)</h2>
            <p className="text-gray-600 mb-4">
              Bir parselin birden fazla parsele bölünmesi işlemleri.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Parsel ayırma</li>
              <li>İmar planına göre ayırma</li>
              <li>Hisseli satış</li>
            </ul>
          </div>

          {/* Röperli Kroki */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Röperli Kroki</h2>
            <p className="text-gray-600 mb-4">
              Detaylı ölçüm ve kroki hazırlama hizmetleri.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Bina ve tesis ölçümü</li>
              <li>Detay alımı</li>
              <li>Kroki hazırlama</li>
            </ul>
          </div>

          {/* Diğer Hizmetler */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Diğer Hizmetler</h2>
            <p className="text-gray-600 mb-4">
              İhtiyaçlarınıza özel çözümler ve danışmanlık hizmetleri.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Teknik danışmanlık</li>
              <li>Proje kontrolü</li>
              <li>Özel ölçümler</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">İletişim</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <span>Karlıbayır Mahallesi İhtişam Sokak No:6 D:1 Arnavutköy İSTANBUL</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>+90 544 597 9600</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>bilgi@arnavutkoylihkab.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Hizmetlerimiz</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Aplikasyon</li>
                <li>Cins Değişikliği</li>
                <li>Parsellerin Birleştirilmesi</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Çalışma Saatleri</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Hafta İçi 09:00 - 18:00</li>
                <li>Hafta Sonu Cumartesi 09:00 - 13:00</li>
                <li>Pazar: Kapalı</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 3402-398 Sayılı Arnavutköy LİHKAB Bürosu. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 