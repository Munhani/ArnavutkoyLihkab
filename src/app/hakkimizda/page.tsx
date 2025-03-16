export default function Hakkimizda() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">Hakkımızda</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Biz Kimiz?</h2>
          <p className="text-gray-600 mb-6">
            3402-398 Sayılı Lisanslı Harita Kadastro Mühendislik Bürosu olarak, 2010 yılından bu yana
            kadastro ve harita mühendisliği alanında profesyonel hizmetler sunmaktayız.
          </p>
          <p className="text-gray-600 mb-6">
            Deneyimli ekibimiz ve modern teknolojik altyapımız ile müşterilerimize en kaliteli ve
            güvenilir hizmeti sunmayı hedefliyoruz.
          </p>
          <p className="text-gray-600">
            Lisanslı Harita Kadastro Mühendisleri Büroları (LİHKAB), 5368 sayılı kanun kapsamında
            Tapu ve Kadastro Genel Müdürlüğü'nün yetkilendirmesiyle hizmet vermektedir.
          </p>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Misyonumuz & Vizyonumuz</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Misyonumuz</h3>
            <p className="text-gray-600">
              Müşterilerimize en yüksek kalitede, güvenilir ve hızlı hizmet sunarak, kadastro ve
              harita mühendisliği alanında öncü bir kuruluş olmak.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Vizyonumuz</h3>
            <p className="text-gray-600">
              Modern teknolojileri kullanarak, sektörde standartları belirleyen, yenilikçi ve
              güvenilir bir kuruluş olarak tanınmak.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Neden Biz?</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-4">Deneyim</h3>
            <p className="text-gray-600">
              10+ yıllık sektör deneyimi ile profesyonel hizmet sunuyoruz.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-4">Teknoloji</h3>
            <p className="text-gray-600">
              En son teknolojik ekipmanlar ve yazılımlar ile çalışıyoruz.
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
  );
}
