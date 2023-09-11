(() => {
  const openModalBtn = document.querySelector('[data-modal-open]');
  const closeModalBtn = document.querySelector('[data-modal-close]');
  const modal = document.querySelector('[data-modal]');
  const openModalThankYouBtn = document.querySelector('[data-modal-submit]');
  const closeModalThankYouBtn = document.querySelector(
    '[data-modal-close-thankyou]'
  );
  const modalThankYou = document.querySelector('[data-modal-thankyou]');

  openModalBtn.addEventListener('click', () => {
    modal.classList.remove('is-hidden');
  });

  closeModalBtn.addEventListener('click', () => {
    modal.classList.add('is-hidden');
  });

  openModalThankYouBtn.addEventListener('click', e => {
    e.preventDefault();
    modal.classList.add('is-hidden');
    modalThankYou.classList.remove('is-hidden');
  });

  closeModalThankYouBtn.addEventListener('click', () => {
    modalThankYou.classList.add('is-hidden');
  });

  document.addEventListener('click', e => {
    if (
      !modalThankYou.contains(e.target) &&
      !openModalThankYouBtn.contains(e.target)
    ) {
      modalThankYou.classList.add('is-hidden');
    }
  });
})();
