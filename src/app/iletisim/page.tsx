import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Iletisim() {
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
                <h1 className="text-base md:text-xl font-bold text-white">3402-398 Sayılı Arnavutköy LİHKAB</h1>
                <h2 className="text-base md:text-xl font-bold text-white">Tayfur SİVRİ</h2>
              </div>
            </Link>
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
                    Karlıbayır Mahallesi Selçuklu Caddesi No:5 D:11 Arnavutköy/İstanbul
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
                  <span className="text-gray-600 text-sm md:text-base">Pazartesi - Cuma:</span>
                  <span className="text-gray-600 text-sm md:text-base">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm md:text-base">Cumartesi:</span>
                  <span className="text-gray-600 text-sm md:text-base">09:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 text-sm md:text-base">Pazar:</span>
                  <span className="text-gray-600 text-sm md:text-base">Kapalı</span>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.471747225656!2d28.71661937587269!3d41.18321127131373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab2b6312b7e4b%3A0x9f0c7b0e7c75a7d2!2zS2FybMSxYmF5xLFyLCBTZWzDp3VrbHUgQ2QuIE5vOjUsIDM0Mjc1IEFybmF2dXRrw7Z5L8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1710604844015!5m2!1str!2str"
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
                  <span>Karlıbayır Mahallesi Selçuklu Caddesi No:5 D:11 Arnavutköy/İstanbul</span>
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
                <li>Pazartesi - Cuma: 09:00 - 18:00</li>
                <li>Cumartesi: 09:00 - 13:00</li>
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