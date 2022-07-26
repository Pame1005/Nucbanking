const formElement = document.getElementById('register-form')
const nameElement = document.getElementById('name')
const lastNameElement = document.getElementById('lastname')
const userElement = document.getElementById('user')
const passwordElement = document.getElementById('password')
const registerErrorElement = document.getElementById('register-error')
const validacionElement = document.getElementById('validacion')

let localStore = localStorage.getItem('users')
let usersList = [];

if (localStore) {
    usersList = JSON.parse(localStore);
}

const uuidv4 =() => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}

function userSaver (e){
    e.preventDefault();
    

    let name = nameElement.value;
    let lastName = lastNameElement.value;
    let user = userElement.value;
    let password = passwordElement.value;
    
    

    if (name !== "" && lastName !== "" && user !== "" && password !== "" && validatePassword(password.value)) {
        
        let newUser = {
            name,
            lastName,
            user,
            password,
            cbu: uuidv4(),
            balance: 0,
            usuariosGuardados:[],
            serices: [],
        }
        usersList.push(newUser);
    
        let users = JSON.stringify(usersList);
        localStorage.setItem('users', users)

        location.href = "../../public/user/login.html";
    } else {
        if (!validatePassword(password.value)){
        validacionElement.innerHTML = `La coontraseña tiene que tener una minúscula, una mayúscula, un numero y simbolo.`
        }
        registerErrorElement.innerHTML = `Por favor no deje ningún campo vacío` 
        
        setTimeout(()=>{
        registerErrorElement.remove()
        },2000)
    }
    
    
}

const validatePassword = (password) => {
    let re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
    return re.test(password)
}

    
formElement.addEventListener('submit', (e) => userSaver (e))
