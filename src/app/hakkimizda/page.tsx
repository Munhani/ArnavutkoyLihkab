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
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
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
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Hakkımızda</h1>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Biz Kimiz?</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                3402-398 Sayılı Lisanslı Harita Kadastro Mühendislik Bürosu olarak, 2021 yılından bu yana
                kadastro ve harita mühendisliği alanında profesyonel hizmetler sunmaktayız.
              </p>
              <p className="text-gray-600">
                Deneyimli ekibimiz ve modern teknolojik altyapımız ile müşterilerimize en kaliteli ve
                güvenilir hizmeti sunmayı hedefliyoruz.
              </p>
              <p className="text-gray-600">
                Lisanslı Harita Kadastro Mühendisleri Büroları (LİHKAB), 5368 sayılı kanun kapsamında
                Tapu ve Kadastro Genel Müdürlüğü'nün yetkilendirmesiyle hizmet vermektedir.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Neden Biz?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
