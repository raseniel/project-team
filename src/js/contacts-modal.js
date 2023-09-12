(() => {
  const refs1 = {
    openModalBtn: document.querySelector('[contact-data-modal-open]'),
    closeModalBtn: document.querySelector('[contact-data-modal-close]'),
    modal: document.querySelector('[contact-data-modal]'),
  };

  refs1.openModalBtn.addEventListener('click', toggleModalContacts);
  refs1.closeModalBtn.addEventListener('click', toggleModalContacts);

  function toggleModalContacts() {
    refs1.modal.classList.toggle('contact-is-hidden');
  }
})();
