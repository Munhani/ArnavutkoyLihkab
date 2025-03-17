import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "3402-398 Sayılı LİHKAB - Tayfur SİVRİ",
  description: "Arnavutköy Lisanslı Harita Kadastro Mühendislik Bürosu - Profesyonel kadastro ve harita hizmetleri",
  keywords: "Arnavutköy, Lihkab, Harita, Kadastro, Aplikasyon, Cins Değişikliği, İstanbul, Başakşehir, Plankote, Drone, Dron, yol projesi, Bina projesi, Çatalca, parselasyon, Kazık Çakma, Lisanslı Harita, Reality Model, itwin capture, openroads, inroads, yol projesi, baraj projesi",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
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

      {/* Hero Section */}
      <main>
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Profesyonel Kadastro ve Harita Hizmetleri
                </h2>
                <p className="text-lg mb-8 text-blue-100">
                  Lisanslı Harita Kadastro Mühendislik Büromuz ile tüm kadastro ve harita işlemlerinizde yanınızdayız.
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    Bizimle İletişime Geçin
                  </Link>
                  <Link
                    href="/hizmetler"
                    className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    Hizmetlerimizi İnceleyin
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/istanbul-uydu.jpg"
                  alt="İstanbul Uydu Görüntüsü"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Hizmetler */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-12">Sunduğumuz Hizmetler</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <MapPin className="h-6 w-6 text-blue-800" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Aplikasyon</h4>
                <p className="text-gray-600">Parsel sınırlarının arazide gösterilmesi ve ölçüm işlemleri</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-3">Cins Değişikliği</h4>
                <p className="text-gray-600">Tapu sicilinde kayıtlı taşınmazların cins ve nitelik değişikliği işlemleri</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-3">Parsellerin Birleştirilmesi</h4>
                <p className="text-gray-600">Birden fazla parselin tek parsel haline getirilmesi işlemleri</p>
              </div>
            </div>
          </div>
        </section>

        {/* İletişim Bilgileri */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-blue-800 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Adres</h4>
                  <a 
                    href="https://maps.google.com/?q=Karlıbayır+Mahallesi+Selçuklu+Caddesi+No:5+D:11+Arnavutköy+İstanbul" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Karlıbayır Mahallesi Selçuklu Caddesi No:5 D:11 Arnavutköy/İstanbul
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-blue-800 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Telefon</h4>
                  <p className="text-gray-600">+90 544 597 9600</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-blue-800 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">E-posta</h4>
                  <a 
                    href="mailto:bilgi@arnavutkoylihkab.com" 
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    bilgi@arnavutkoylihkab.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-blue-800 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Çalışma Saatleri</h4>
                  <p className="text-gray-600">Pzt - Cuma: 09:00 - 18:00</p>
                  <p className="text-gray-600">Cumartesi: 09:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-lg font-semibold mb-4">Hakkımızda</h4>
              <p className="text-gray-400">
                3402-398 Sayılı Lisanslı Harita Kadastro Mühendislik Bürosu olarak profesyonel hizmet sunmaktayız.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
              <ul className="space-y-2">
                <li><Link href="/hizmetler" className="text-gray-400 hover:text-white">Hizmetlerimiz</Link></li>
                <li><Link href="/hakkimizda" className="text-gray-400 hover:text-white">Hakkımızda</Link></li>
                <li><Link href="/iletisim" className="text-gray-400 hover:text-white">İletişim</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">İletişim</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <a 
                    href="https://maps.google.com/?q=Karlıbayır+Mahallesi+Selçuklu+Caddesi+No:5+D:11+Arnavutköy+İstanbul" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-white transition-colors"
                  >
                    Karlıbayır Mahallesi Selçuklu Caddesi No:5 D:11 Arnavutköy/İstanbul
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+90 544 597 9600</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <a 
                    href="mailto:bilgi@arnavutkoylihkab.com"
                    className="hover:text-white transition-colors"
                  >
                    bilgi@arnavutkoylihkab.com
                  </a>
                </li>
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
