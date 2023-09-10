(() => {
    const refs = {
      openModalBtn: document.querySelector("[contact-data-modal-open]"),
      closeModalBtn: document.querySelector("[contact-data-modal-close]"),
      modal: document.querySelector("[contact-data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();