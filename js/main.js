const Choices = document.querySelectorAll('.choices .choice')
for (const choice of Choices) {
  choice.addEventListener('click', function() {

  })
}

function OpenModal(modal) {
  const currentModal = document.querySelector('.' + modal + '-modal')
  currentModal.style.display = "flex"
}

function CloseModal() {
  const Modals = document.querySelectorAll('.modal')
  for (const modal of Modals) {
    modal.style.display = "none"
    
  }
}