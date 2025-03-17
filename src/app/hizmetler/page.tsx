import Image from "next/image";
import Link from "next/link";

export default function Hizmetler() {
  return (
    <div>
      {/* Header */}
      <header className="bg-blue-800 text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/lihkab_logo.jpg"
                alt="LIHKAB Logo"
                width={100}
                height={100}
                className="rounded-full"
                priority
              />
              <div>
                <h1 className="text-xl font-bold text-white">3402-398 Sayılı LİHKAB</h1>
                <h2 className="text-xl font-bold text-white">Tayfur SİVRİ</h2>
              </div>
            </Link>
            <nav>
              <ul className="flex space-x-8">
                <li className="w-20 text-center">
                  <Link href="/" className="text-white hover:text-gray-300">
                    Ana Sayfa
                  </Link>
                </li>
                <li className="w-24 text-center">
                  <Link href="/hizmetler" className="text-white hover:text-gray-300">
                    Hizmetlerimiz
                  </Link>
                </li>
                <li className="w-24 text-center">
                  <Link href="/hakkimizda" className="text-white hover:text-gray-300">
                    Hakkımızda
                  </Link>
                </li>
                <li className="w-16 text-center">
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
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-12">Hizmetlerimiz</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Aplikasyon</h2>
            <p className="text-gray-600 mb-4">
              Taşınmazların sınırlarının arazide gösterilmesi ve ölçüm işlemleri yapılması.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Parsel köşe noktalarının belirlenmesi</li>
              <li>Arazi ölçümleri</li>
              <li>Sınır tespiti</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Cins Değişikliği</h2>
            <p className="text-gray-600 mb-4">
              Tapu sicilinde kayıtlı taşınmazların cins ve nitelik değişikliği işlemleri.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Arsa vasfından bina vasfına geçiş</li>
              <li>Tarla vasfından arsa vasfına geçiş</li>
              <li>Bağımsız bölüm oluşturma</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Parsellerin Birleştirilmesi</h2>
            <p className="text-gray-600 mb-4">
              Birden fazla parselin tek parsel haline getirilmesi işlemleri.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Tevhid işlemleri</li>
              <li>İmar düzenlemesi</li>
              <li>Parsel optimizasyonu</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Parsellerin Ayırma İşlemleri</h2>
            <p className="text-gray-600 mb-4">
              Tek parselin birden fazla parsele bölünmesi işlemleri.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>İfraz işlemleri</li>
              <li>Hisseli satış</li>
              <li>Parsel bölünmesi</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Röperli Kroki</h2>
            <p className="text-gray-600 mb-4">
              Yapıların konumlarının ölçekli olarak gösterilmesi.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Bina aplikasyonu</li>
              <li>Yapı röleve ölçümleri</li>
              <li>Detay alımı</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Diğer Hizmetler</h2>
            <p className="text-gray-600 mb-4">
              LIHKAB büromuzun sunduğu diğer teknik hizmetler.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Teknik bilirkişilik</li>
              <li>Danışmanlık hizmetleri</li>
              <li>Proje kontrollük hizmetleri</li>
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
                  <span>Karlıbayır Mahallesi Selçuklu Caddesi No:5 D:11 Arnavutköy/İstanbul</span>
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
                <li>Pazartesi - Cuma: 09:00 - 18:00</li>
                <li>Cumartesi - Pazar: Kapalı</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 3402-398 Sayılı LIHKAB Bürosu. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 