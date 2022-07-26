const formElement = document.getElementById('login-form');
const userElement = document.getElementById('user');
const passwordElement = document.getElementById('password');
const loginErrorElement = document.getElementById('login-error');

let localStore = localStorage.getItem('users');
let usersList = [];

if (localStore) {
    usersList = JSON.parse(localStore);
}

function loginUser (e) {
    e.preventDefault();

    let user = userElement.value;
    let password = passwordElement.value;

    if (user !== '' && password !== '') {


        usersList.forEach(userEl => {
            if(userEl.user === user) {
                if(userEl.password === password) {
                    location.href = "../../public/index.html";
                    localStorage.setItem('user', JSON.stringify(userEl));
                    return;
                }
            }else {
                loginErrorElement.innerHTML = `Datos de usuario incorrectos`;
                
                setTimeout(()=>{
                    loginErrorElement.remove()
                    },2000)
            }
        });
    } else{
        loginErrorElement.innerHTML = `Todos los campos deben estar completos`;
        setTimeout (()=>{
            loginErrorElement.remove()
        },2000)
    }

}
formElement.addEventListener('submit',(e) => loginUser(e))