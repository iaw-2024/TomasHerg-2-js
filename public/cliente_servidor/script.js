document.addEventListener("DOMContentLoaded", function() {
    // Realizar una solicitud GET al servidor Express para obtener el JSON 'datos'
    fetch("http://localhost:3001") // Cambia 'localhost:3001' si es necesario
        .then(response => {
            // Verificar si la solicitud fue exitosa
            if (!response.ok) {
                throw new Error("La solicitud no fue exitosa");
            }
            // Convertir la respuesta a JSON
            return response.json();
        })
        .then(datos => {
            // Aquí puedes manipular los datos recibidos, como actualizar la lista en la página web
            console.log("Datos recibidos:", datos);
            // Por ejemplo, aquí podrías actualizar la lista en la página con los datos recibidos
            // Por ahora, simplemente imprimo los datos en la consola
        })
        .catch(error => {
            console.error("Error al solicitar los datos:", error);
        });
});