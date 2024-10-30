const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nama = document.querySelector('#Nama.input input').value;
    const errorMessage = document.querySelector('#Nama');
    console.log(nama);

    const email = document.querySelector('#email.input input').value;
    const errorMessage2 = document.querySelector('#email');
    console.log(email);

    const password = document.querySelector('#password.input input').value;
    const errorMessage3 = document.querySelector('#password');
    console.log(password);
    
    const errorLama = errorMessage.querySelector('.error');
    if (errorLama) {
        errorLama.remove();
    } 
    if (nama === '') {
        const error = document.createElement('div');
        error.classList.add('error');
        error.innerHTML = 'Diisi yahh Namanya!';
        errorMessage.appendChild(error);
    }
    
    const errorLama2 = errorMessage2.querySelector('.error');
    if (errorLama2) {
        errorLama2.remove();
    } 
    if (email === '') {
        const error = document.createElement('div');
        error.classList.add('error');
        error.innerHTML = 'Diisi yahh Emailnya!';
        errorMessage2.appendChild(error);
    }
    const errorLama3 = errorMessage.querySelector('.error');
    if (errorLama3) {
        errorLama3.remove();
    } 
    if (password === '') {
        const error = document.createElement('div');
        error.classList.add('error');
        error.innerHTML = 'Diisi yahh Passwordnya!';
        errorMessage.appendChild(error);
    }
})