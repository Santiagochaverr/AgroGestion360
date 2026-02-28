document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;
    let tipo = document.getElementById("tipo").value;
    let mensaje = document.getElementById("mensaje");

    // Simulación simple
    if(usuario === "admin" && password === "1234" && tipo === "admin"){
        mensaje.style.color = "green";
        mensaje.textContent = "Bienvenido Administrador";
    }
    else if(usuario === "trabajador" && password === "1234" && tipo === "trabajador"){
        mensaje.style.color = "blue";
        mensaje.textContent = "Bienvenido Trabajador";
    }
    else{
        mensaje.style.color = "red";
        mensaje.textContent = "Datos incorrectos";
    }
});
