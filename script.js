if ('serviceWorker' in navigator) { //Si SW existe en navigator, el navegador soporta SW
    navigator.serviceWorker.register('./sw.js') //Registra la funcion de un servicio del SW
    .then(reg => console.log('Registro del Service Worker exitoso',reg)) //Si es verdadero devuelve un mensaje
    .catch(err => console.warn('Error al registrar el Service Worker', err)) //Si no fue verdadero devuelve un error
}

