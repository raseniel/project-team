(() => {
  const refsNav = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    closeNavBtn: document.querySelector('[data-nav-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refsNav.openMenuBtn.addEventListener('click', toggleModalNav);
  refsNav.closeMenuBtn.addEventListener('click', toggleModalNav);
  refsNav.closeNavBtn.addEventListener('click', toggleModalNav);

  function toggleModalNav() {
    refsNav.menu.classList.toggle('is-open');
  }
})();
