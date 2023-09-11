(() => {
  const refs1 = {
    openModalBtn: document.querySelector('[contact-data-modal-open]'),
    closeModalBtn: document.querySelector('[contact-data-modal-close]'),
    modal: document.querySelector('[contact-data-modal]'),
  };

  refs1.openModalBtn.addEventListener('click', toggleModal);
  refs1.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs1.modal.classList.toggle('contact-is-hidden');
  }
})();
