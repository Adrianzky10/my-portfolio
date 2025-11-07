


// TOGGLE NAVIGATION
const hamburgerBtn = document.querySelector('.hamburger-wrapper');
const navMenu = document.querySelector('.nav-menu');

hamburgerBtn.addEventListener('click', (e) => {
    navMenu.classList.toggle('active')
    e.preventDefault()
})

//CLICK SEMBARANG UNTUK CLOSE
document.addEventListener('click', function(e) {
    if (!hamburgerBtn.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
    }
})

//SCROLL UNTUK MENGAKTIFKAN BACKGROUND HEADER
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

//MESSAGE FEATURE
const form = document.querySelector('#form-message');
const inputNama = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputMessage = document.querySelector('#message');
const messageContainer = document.querySelector('#message-container');
const clearBtn = document.querySelector('#clear');

// MENAMPILKAN PESAN KE DALAM HALAMAN
function renderMessage(name, email, message) {
  const newBox = document.createElement('div');
  newBox.classList.add('box-message');

  const nameText = document.createElement('h4');
  nameText.textContent = name;

  const emailText = document.createElement('a');
  emailText.href = `mailto:${email}`;
  emailText.textContent = email;

  const messageText = document.createElement('p');
  messageText.textContent = message;

  newBox.append(nameText, emailText, messageText);
  messageContainer.append(newBox);
}
//SAAT FORM DIKIRIM
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = inputNama.value;
  const email = inputEmail.value;
  const message = inputMessage.value;
  //buat objek pesan
  const newMessage = {name, email, message};
  // Ambil data lama dari localStorage
  const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
  // Tambahkan pesan baru ke array
  storedMessages.push(newMessage);
  // Simpan kembali ke localStorage
  localStorage.setItem('messages', JSON.stringify(storedMessages));
  // Tampilkan langsung ke halaman
  renderMessage(name, email, message);
  form.reset();
});

// Saat halaman pertama kali dibuka, tampilkan pesan dari localStorage
window.addEventListener('DOMContentLoaded', () => {
  const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
  storedMessages.forEach(msg => {
    renderMessage(msg.name, msg.email, msg.message)
  });

    //TOMBOL MENGHAPUS SEMUSA PESAN
  clearBtn.addEventListener('click', () => {
  const confirmClear = confirm("Yakin ingin menghapus semua pesan?");
    if (confirmClear) {
      localStorage.removeItem('messages');
      location.reload();
    }
  });
})

