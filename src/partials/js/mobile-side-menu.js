document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.mob-menu-btn');
  const closeButton = document.querySelector('.mob-menu-btn-close');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuLinks = document.querySelectorAll('.mobile-menu a');

  // Menü açma fonksiyonu
  function OpenMenu() {
    mobileMenu.classList.add('open');
    menuLinks.forEach(link => (link.style.color = 'white')); // Yazıları beyaz yap
  }

  // Menü kapatma fonksiyonu
  function CloseMenu() {
    mobileMenu.classList.remove('open');
  }

  // Menü butonuna tıklanınca aç
  menuButton.addEventListener('click', function (event) {
    event.preventDefault();
    OpenMenu();
  });

  // Kapatma butonuna tıklanınca kapa
  closeButton.addEventListener('click', function (event) {
    event.preventDefault();
    CloseMenu();
  });

  // Menü içindeki linklere tıklanınca menüyü kapat
  menuLinks.forEach(link => {
    link.addEventListener('click', function () {
      CloseMenu();
    });
  });
});
