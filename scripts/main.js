const logoutElement = document.getElementById('test')

const logoutUser = () => {
    localStorage.removeItem('user')
    location.href = "../public/user/login.html"
}
logoutElement.addEventListener('click', logoutUser);