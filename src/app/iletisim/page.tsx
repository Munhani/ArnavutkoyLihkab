export default function Iletisim() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">İletişim</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">İletişim Bilgileri</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-700">Adres</h3>
              <p className="text-gray-600">[Büro Adresi]</p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-700">Telefon</h3>
              <p className="text-gray-600">[Telefon Numarası]</p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-700">E-posta</h3>
              <p className="text-gray-600">[E-posta Adresi]</p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-700">Çalışma Saatleri</h3>
              <p className="text-gray-600">Pazartesi - Cuma: 09:00 - 18:00</p>
              <p className="text-gray-600">Cumartesi: 09:00 - 13:00</p>
              <p className="text-gray-600">Pazar: Kapalı</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">İletişim Formu</h2>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Ad Soyad
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-posta
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mesajınız
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-6">Konum</h2>
        <div className="bg-gray-200 h-[400px] rounded-lg">
          {/* Buraya Google Maps iframe eklenecek */}
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            Harita görünümü
          </div>
        </div>
      </div>
    </div>
  );
} 