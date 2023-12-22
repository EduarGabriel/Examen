document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('loginBtn');
    const iniciarBtn = document.getElementById('iniciarBtn');
    const nombreUsuarioElement = document.getElementById('nombreUsuario');

    function showRegistrationForm() {
        container.classList.add('active');
    }

    function showLoginForm() {
        container.classList.remove('active');
    }

    function handleLogin() {
        const enteredEmail = document.getElementById('loginEmail').value;
        const enteredPassword = document.getElementById('loginPassword').value;
    
        if (enteredEmail && enteredPassword) {
            const storedEmail = localStorage.getItem('email');
            const storedPassword = localStorage.getItem('password');
            const storedNombre = localStorage.getItem('nombre');
    
            if (storedEmail && storedPassword && enteredEmail === storedEmail && enteredPassword === storedPassword) {
                alert('Inicio de sesión exitoso');
                setNombreUsuario();  // Llamar a setNombreUsuario después del inicio de sesión
                window.location.href = 'index_1.html';
            } else {
                alert('Credenciales incorrectas');
            }
        } else {
            alert('Por favor, complete todos los campos antes de iniciar sesión.');
        }
    }

    function setUsernameInNavigation(username) {
        const nombreUsuarioElement = document.getElementById('nombreUsuario');
    
        if (nombreUsuarioElement) {
            // Limpiar el contenedor antes de agregar el nuevo contenido
            while (nombreUsuarioElement.firstChild) {
                nombreUsuarioElement.removeChild(nombreUsuarioElement.firstChild);
            }
    
            // Crear y agregar elementos de texto al contenedor
            const welcomeMessage = document.createElement('p');
            welcomeMessage.textContent = 'Bienvenido, ';
    
            const usernameText = document.createElement('span');
            usernameText.textContent = username;
    
            nombreUsuarioElement.appendChild(welcomeMessage);
            nombreUsuarioElement.appendChild(usernameText);
        } else {
            console.error("Elemento 'nombreUsuario' no encontrado.");
        }
    }

    function handleRegistration() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
    
        if (name && email && password) {
            localStorage.setItem('nombre', name);  // Usar 'nombre' en lugar de 'nombreUsuario'
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
    
            alert('Registro exitoso. Ahora puedes iniciar sesión.');
            setNombreUsuario();  // Llamar a setNombreUsuario después del registro
            showForm(document.querySelector('.sign-in'));
        } else {
            alert('Por favor, complete todos los campos antes de registrarse.');
        }
    }

    // Event listeners
    iniciarBtn.addEventListener('click', function (event) {
        event.preventDefault();
        handleLogin();
    });

    registerBtn.addEventListener('click', showRegistrationForm);
    loginBtn.addEventListener('click', showLoginForm);

    document.getElementById('registerBtn').addEventListener('click', function () {
        handleRegistration();
    });

    showForm(document.querySelector('.sign-in'));
});

//Colocar nombre usuario

function setNombreUsuario() {
    // Obtener el elemento con el ID "nombreUsuario"
    var nombreUsuarioElement = document.getElementById('nombreUsuario');

    // Verificar si el elemento existe
    if (nombreUsuarioElement) {
        var nombreDeUsuario = obtenerNombreDeUsuario(); 
        nombreUsuarioElement.textContent = 'Bienvenido, ' + nombreDeUsuario;
    }
}

function obtenerNombreDeUsuario() {
    return localStorage.getItem('nombre') || 'UsuarioInvitado';
}
window.addEventListener('DOMContentLoaded', setNombreUsuario);