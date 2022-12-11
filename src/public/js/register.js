const btnLogin = document.getElementById('login')


btnLogin.addEventListener('click', (e) => {
    const user = document.querySelector('#username').value
    if(user !== ''){
        document.cookie = `username=${user}`
        document.location.href = '/'
    }else{
        alert('Escribe un nombre de usuario')
    }
})