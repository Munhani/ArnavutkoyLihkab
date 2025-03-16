import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

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
                width={50}
                height={50}
                className="rounded-full"
                priority
              />
              <div>
                <h1 className="text-xl font-bold">3402-398 Sayılı Lisanslı Harita Kadastro Mühendisi</h1>
                <h2 className="text-xl font-bold">Tayfur SİVRİ</h2>
              </div>
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="text-white hover:text-blue-200 px-4 py-2">
                      Ana Sayfa
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/hizmetler" legacyBehavior passHref>
                    <NavigationMenuLink className="text-white hover:text-blue-200 px-4 py-2">
                      Hizmetlerimiz
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/hakkimizda" legacyBehavior passHref>
                    <NavigationMenuLink className="text-white hover:text-blue-200 px-4 py-2">
                      Hakkımızda
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/iletisim" legacyBehavior passHref>
                    <NavigationMenuLink className="text-white hover:text-blue-200 px-4 py-2">
                      İletişim
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
                    className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    Bizimle İletişime Geçin
                  </Link>
                  <Link
                    href="/hizmetler"
                    className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
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
                  <MapPin className="h-6 w-6 text-blue-800" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Cins Değişikliği</h4>
                <p className="text-gray-600">Tapu sicilinde kayıtlı taşınmazların cins ve nitelik değişikliği işlemleri</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <MapPin className="h-6 w-6 text-blue-800" />
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
                  <p className="text-gray-600">[Büro Adresi]</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-blue-800 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Telefon</h4>
                  <p className="text-gray-600">[Telefon Numarası]</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-blue-800 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">E-posta</h4>
                  <p className="text-gray-600">[E-posta Adresi]</p>
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
                  <span>[Büro Adresi]</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>[Telefon Numarası]</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>[E-posta Adresi]</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 3402-398 Sayılı LIHKAB Bürosu. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
