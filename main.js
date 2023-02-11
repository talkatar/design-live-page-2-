'use strict'

function onToggleHamburger() {
  document.body.classList.toggle('menu-open')
}

function onToggleModal() {
  document.body.classList.toggle('modal-open')
  document.querySelector('.modal').classList.toggle('closed-modal')
}
