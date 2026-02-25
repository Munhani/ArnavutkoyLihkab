import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MapPinIcon, PhoneIcon, EnvelopeIcon, MapIcon } from "@heroicons/react/24/outline";

export default function Iletisim() {
  return (
    <div>
      {/* Header */}
      <header className="bg-blue-800 text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
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
                  <h1 className="text-base md:text-xl font-bold text-white">3402-398 Sayılı Arnavutköy LİHKAB</h1>
                  <h2 className="text-base md:text-xl font-bold text-white">Tayfur SİVRİ</h2>
                </div>
              </Link>
              <a href="tel:+905445979600" className="font-normal text-sm md:text-base text-white/90 hover:text-white whitespace-nowrap ml-1">
                +90 544 597 9600
              </a>
            </div>
            <nav className="w-full md:w-auto">
              <ul className="flex flex-wrap justify-center md:flex-row md:space-x-8">
                <li className="w-1/2 md:w-auto text-center py-2 md:py-0">
                  <Link href="/" className="text-white hover:text-gray-300 text-sm md:text-base">
                    Ana Sayfa
                  </Link>
                </li>
                <li className="w-1/2 md:w-auto text-center py-2 md:py-0">
                  <Link href="/hizmetler" className="text-white hover:text-gray-300 text-sm md:text-base">
                    Hizmetlerimiz
                  </Link>
                </li>
                <li className="w-1/2 md:w-auto text-center py-2 md:py-0">
                  <Link href="/hakkimizda" className="text-white hover:text-gray-300 text-sm md:text-base">
                    Hakkımızda
                  </Link>
                </li>
                <li className="w-1/2 md:w-auto text-center py-2 md:py-0">
                  <Link href="/iletisim" className="text-white hover:text-gray-300 text-sm md:text-base">
                    İletişim
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 md:py-12">
        <h1 className="text-xl md:text-3xl font-bold text-center mb-6 md:mb-12">İletişim</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-4">İletişim Bilgileri</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <MapPinIcon className="h-5 w-5 text-blue-800 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm md:text-base">
                    Karlıbayır Mahallesi İhtişam Sokak No:6 D:1 Arnavutköy İSTANBUL
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <PhoneIcon className="h-5 w-5 text-blue-800 flex-shrink-0" />
                  <a href="tel:+905445979600" className="text-gray-600 hover:text-blue-800 text-sm md:text-base">
                    +90 544 597 9600
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <EnvelopeIcon className="h-5 w-5 text-blue-800 flex-shrink-0" />
                  <a
                    href="mailto:bilgi@arnavutkoylihkab.com"
                    className="text-gray-600 hover:text-blue-800 text-sm md:text-base break-all"
                  >
                    bilgi@arnavutkoylihkab.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg md:text-xl font-semibold mb-4">Çalışma Saatleri</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm md:text-base">Hafta İçi:</span>
                  <span className="text-gray-600 text-sm md:text-base">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm md:text-base">Hafta Sonu Cumartesi:</span>
                  <span className="text-gray-600 text-sm md:text-base">09:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm md:text-base">Pazar:</span>
                  <span className="text-gray-600 text-sm md:text-base">Kapalı</span>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=41.1839486056073,28.719020632953676"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-blue-800 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <MapIcon className="h-5 w-5" />
                Yol tarifi al
              </a>
            </div>
          </div>

          <div className="h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps?q=41.1839486056073,28.719020632953676+(Arnavutk%C3%B6y+Lihkab)&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12 mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 md:mb-4">İletişim</h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li className="flex items-start space-x-2">
                  <span>Karlıbayır Mahallesi İhtişam Sokak No:6 D:1 Arnavutköy İSTANBUL</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span>+90 544 597 9600</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="break-all">bilgi@arnavutkoylihkab.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 md:mb-4">Hizmetlerimiz</h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>Aplikasyon</li>
                <li>Cins Değişikliği</li>
                <li>Parsellerin Birleştirilmesi</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 md:mb-4">Çalışma Saatleri</h3>
              <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                <li>Hafta İçi 09:00 - 18:00</li>
                <li>Hafta Sonu Cumartesi 09:00 - 13:00</li>
                <li>Pazar: Kapalı</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
            <p className="text-gray-400 text-sm md:text-base">&copy; 2025 3402-398 Sayılı Arnavutköy LİHKAB Bürosu. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 