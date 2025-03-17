import Image from 'next/image';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Hakkimizda() {
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
        <h1 className="text-3xl font-bold text-center mb-12">Hakkımızda</h1>
        
        <div>
          <div>
            <h2 className="text-2xl font-semibold mb-6">Biz Kimiz?</h2>
            <p className="text-gray-600 mb-6">
              3402-398 Sayılı Lisanslı Harita Kadastro Mühendislik Bürosu olarak, 2021 yılından bu yana
              kadastro ve harita mühendisliği alanında profesyonel hizmetler sunmaktayız.
            </p>
            <p className="text-gray-600 mb-6">
              Deneyimli ekibimiz ve modern teknolojik altyapımız ile müşterilerimize en kaliteli ve
              güvenilir hizmeti sunmayı hedefliyoruz.
            </p>
            <p className="text-gray-600 mb-12">
              Lisanslı Harita Kadastro Mühendisleri Büroları (LİHKAB), 5368 sayılı kanun kapsamında
              Tapu ve Kadastro Genel Müdürlüğü'nün yetkilendirmesiyle hizmet vermektedir.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Neden Biz?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-4">Deneyim</h3>
              <p className="text-gray-600">
                Sektördeki deneyimimiz ve uzmanlığımız ile profesyonel hizmet sunuyoruz.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-4">Teknoloji</h3>
              <p className="text-gray-600">
                En son teknolojik ekipmanlar ve yazılımlar ile çalışıyoruz. Firmamızın kullanımında olan yazılımlar: OpenRoads Designer, MicroStation, iTwin Capture Modeler, Netcad ve GeoCad.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-medium mb-4">Güvenilirlik</h3>
              <p className="text-gray-600">
                Resmi lisanslı büro olarak güvenilir hizmet garantisi sunuyoruz.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Ekibimiz</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-600 mb-6">
              Deneyimli ve uzman kadromuz ile tüm harita ve kadastro işlemlerinizde yanınızdayız.
              Ekibimiz, alanında uzman harita mühendisleri ve teknik personelden oluşmaktadır.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Lisanslı Harita Kadastro Mühendisi</li>
              <li>Harita Teknikerleri</li>
              <li>Ölçüm Ekibi</li>
              <li>İdari Personel</li>
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
