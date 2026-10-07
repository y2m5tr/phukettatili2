import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    tours: collection({
      label: 'Turlar (Tours)',
      slugField: 'title',
      path: 'src/content/tours/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Başlık' } }),
        category: fields.text({ label: 'Kategori (Örn: island-tours)' }),
        subcategory: fields.text({ label: 'Alt Kategori (İsteğe Bağlı)' }),
        category_label: fields.text({ label: 'Kategori Etiketi (Örn: Ada Turları)' }),
        excerpt: fields.text({ label: 'Kısa Açıklama', multiline: true }),
        image: fields.text({ label: 'Kapak Fotoğrafı Adı (Örn: phuket_tours.jpg)' }),
        gallery: fields.array(
          fields.text({ label: 'Galeri Fotoğraf Adı (Örn: plaj.jpg)' }),
          { label: 'Tur İçi Fotoğraf Galerisi', itemLabel: props => props.value }
        ),
        price_type: fields.text({ label: 'Fiyat Tipi (Örn: quote)' }),
        price_thb: fields.integer({ label: 'Fiyat (THB)' }),
        duration: fields.text({ label: 'Süre (Örn: Tam Gün)' }),
        featured: fields.checkbox({ label: 'Öne Çıkan Tur mu?', defaultValue: false }),
        order: fields.integer({ label: 'Sıralama', defaultValue: 100 }),
        
        program: fields.array(
          fields.text({ label: 'Program Adımı' }),
          { label: 'Tur Programı (Zaman Çizelgesi)', itemLabel: props => props.value }
        ),
        
        included: fields.array(
          fields.text({ label: 'Dahil Olanlar' }),
          { label: 'Dahil Olanlar', itemLabel: props => props.value }
        ),
        
        excluded: fields.array(
          fields.text({ label: 'Dahil Olmayanlar' }),
          { label: 'Dahil Olmayanlar', itemLabel: props => props.value }
        ),
        
        faq: fields.array(
          fields.object({
            q: fields.text({ label: 'Soru' }),
            a: fields.text({ label: 'Cevap' }),
          }),
          { label: 'Sıkça Sorulan Sorular', itemLabel: props => props.fields.q.value }
        ),
        
        restrictions: fields.array(
          fields.text({ label: 'Kısıtlama' }),
          { label: 'Kısıtlamalar (Restrictions)', itemLabel: props => props.value }
        ),
        age_min: fields.text({ label: 'Minimum Yaş' }),
        source_status: fields.text({ label: 'Kaynak Durumu' }),
        verification_status: fields.text({ label: 'Doğrulama Durumu' }),
        verified_by: fields.text({ label: 'Doğrulayan' }),

        content: fields.markdoc({
          label: 'Tur Detay İçeriği',
          extension: 'md',
        }),
      },
    }),
    blog: collection({
      label: 'Blog & Rehber (Articles)',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Başlık' } }),
        excerpt: fields.text({ label: 'Kısa Özet', multiline: true }),
        cover_image: fields.text({ label: 'Kapak Görseli (Örn: beach.webp)' }),
        author: fields.text({ label: 'Yazar', defaultValue: 'Phuket Tatili Ekibi' }),
        featured: fields.checkbox({ label: 'Öne Çıkarılan Yazı mı?', defaultValue: false }),
        content: fields.markdoc({
          label: 'Yazı İçeriği',
          extension: 'md',
        }),
      },
    }),
  },
  singletons: {
    siteSettings: singleton({
      label: 'Site Ayarları',
      path: 'src/content/settings/site',
      format: { data: 'json' },
      schema: {
        siteTitle: fields.text({ label: 'Site Başlığı', defaultValue: 'Phuket Tatili' }),
        whatsappNumber: fields.text({ label: 'WhatsApp Numarası', defaultValue: '66828950665' }),
        email: fields.text({ label: 'İletişim E-posta Adresi', defaultValue: 'info@phukettatili.com' }),
        facebookUrl: fields.text({ label: 'Facebook URL' }),
        instagramUrl: fields.text({ label: 'Instagram URL' }),
      },
    }),
    homePage: singleton({
      label: 'Ana Sayfa (Home)',
      path: 'src/content/pages/home',
      format: { data: 'json' },
      schema: {
        heroTitle: fields.text({ label: 'Hero Başlığı', defaultValue: 'Lüks ve Ayrıcalıklı Phuket Deneyimi' }),
        heroSubtitle: fields.text({ label: 'Hero Alt Başlığı', defaultValue: 'Günübirlik ada turlarından özel VIP rotalara kadar Phuket\'i bizimle keşfedin.' }),
        heroImage: fields.text({ label: 'Hero Kapak Fotoğrafı', defaultValue: 'phuket_hero.jpg' }),
      },
    }),
    aboutPage: singleton({
      label: 'Hakkımızda Sayfası',
      path: 'src/content/pages/about',
      format: { contentField: 'content' },
      schema: {
        title: fields.text({ label: 'Sayfa Başlığı' }),
        image: fields.text({ label: 'Kapak Fotoğrafı' }),
        content: fields.markdoc({ label: 'Sayfa İçeriği', extension: 'md' }),
      },
    }),
  },
});
