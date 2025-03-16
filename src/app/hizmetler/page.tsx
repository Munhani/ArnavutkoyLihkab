export default function Hizmetler() {
  return (
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
  );
} 