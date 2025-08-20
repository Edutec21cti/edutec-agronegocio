const btnHamburguer = document.getElementById('btnHamburguer');
const menuHamburguer = document.querySelector('nav.menuHamburguer');
const btnFecharMenu = document.getElementById('btnFecharMenu');

const btnAbrirModal = document.getElementById('btnAbrirModal');
const modalForm = document.getElementById('modalForm');
const modalConfirmacao = document.getElementById('modalConfirmacao');


btnHamburguer.addEventListener('click', () => {
  menuHamburguer.classList.add('aberto');
});

btnFecharMenu.addEventListener('click', () => {
  menuHamburguer.classList.remove('aberto');
});

btnAbrirModal.addEventListener('click', () => {
  if(menuHamburguer.classList.contains('aberto')) {
    menuHamburguer.classList.remove('aberto');
  }
  modalForm.showModal();
});


document.querySelectorAll('dialog .fechar').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.target.closest('dialog').close();
  });
});


document.getElementById('formContato').addEventListener('submit', (e) => {
  e.preventDefault(); // evita envio real, só para demonstração

  // Fechar modal do formulário
  modalForm.close();

  
  modalConfirmacao.showModal();


  e.target.reset();
});