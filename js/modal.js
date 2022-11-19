(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", resetOrderForm);

  function resetOrderForm() {
    const { orderForm } = document.forms;
    orderForm.reset();
  }

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
