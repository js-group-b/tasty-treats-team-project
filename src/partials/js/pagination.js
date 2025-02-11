import Pagination from 'tui-pagination';

// cards-section-content-div içindeki tüm li öğelerini al
const items = document.querySelectorAll('.cards-section-content-div ul li'); // doğru öğeleri seçtiğimizden emin olduk
console.log(items)
// Sayfa başına 6 öğe gösterecek şekilde sayfa sayısını hesapla
const itemsPerPage = 6;
const totalItems = items.length;
const totalPages = Math.ceil(totalItems / itemsPerPage); // Sayfa sayısını hesaplıyoruz

console.log(`Toplam öğe sayısı: ${totalItems}, Toplam sayfa sayısı: ${totalPages}`);

const container = document.querySelector('.page-select');

const options = {
  totalItems: totalItems, // Dinamik olarak öğe sayısını belirledik
  itemsPerPage: itemsPerPage, // Sayfa başına gösterilecek öğe sayısı
  visiblePages: window.innerWidth < 768 ? 2 : 3, // Ekran boyutuna göre görünen sayfa sayısını ayarladık
  page: 1, // Başlangıç sayfası
  centerAlign: true,
  template: {
    page: '<button class="page-button button">{{page}}</button>',
    currentPage: '<button class="page-button button tui-is-selected">{{page}}</button>',
    moveButton:
      '<button class="page-button tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</button>',
    disabledMoveButton:
      '<button class="page-button tui-is-disabled tui-{{type}}" disabled>' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</button>'
  }
};

// Pagination nesnesini oluştur
const pagination = new Pagination(container, options);

// Sayfa değişikliklerini dinleyerek, her sayfada yalnızca 6 öğe gösterilecek şekilde içerikleri güncelle
pagination.on('afterMove', (event) => {
  const currentPage = event.page;

  // cards-section-content-div içerisindeki tüm öğeleri gizle
  items.forEach((item, index) => {
    if (index >= (currentPage - 1) * itemsPerPage && index < currentPage * itemsPerPage) {
      item.style.display = 'block'; // Görüntüle
    } else {
      item.style.display = 'none'; // Gizle
    }
  });

  console.log('Current page:', currentPage);
});

// İlk yüklemede de sayfaları göster
window.addEventListener('load', () => {
  // Sayfayı 1. sayfaya yönlendir
  pagination.movePageTo(1);
  
  // İlk sayfada ilk 6 öğeyi göster
  items.forEach((item, index) => {
    if (index < itemsPerPage) {
      item.style.display = 'block'; // İlk 6 öğeyi göster
    } else {
      item.style.display = 'none'; // Diğerlerini gizle
    }
  });
});

export { pagination };
