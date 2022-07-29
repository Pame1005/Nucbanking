const logoutElement = document.getElementById('test')
const saludo = document.getElementById('welcomeGreeting')


let localStore = localStorage.getItem('users');
let usersList = [];

if (localStore) {
    usersList = JSON.parse(localStore);
}
usersList.forEach((user) => {
    saludo.innerHTML = `@Welcome ${user.name}`
    console.log(`Hola ${user.name}`)
});


const logoutUser = () => {
    localStorage.removeItem('user')
    location.href = "../public/user/login.html"
}
logoutElement.addEventListener('click', logoutUser);