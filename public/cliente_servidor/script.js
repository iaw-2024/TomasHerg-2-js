document.addEventListener("DOMContentLoaded", function() {
    // Realizar una solicitud GET al servidor Express para obtener el JSON 'datos'
    fetch("https://tomas-herg-2-3s87gt6zh-tomas-hs-projects.vercel.app/cliente_servidor/json_datos") 
        .then(response => {
            // Verificar si la solicitud fue exitosa
            if (!response.ok) {
                throw new Error("La solicitud no fue exitosa");
            }
            // Convertir la respuesta a JSON
            return response.json();
        })
        .then(datos => {
            var lista = document.getElementById("lista");
            datos.forEach(element => {
                var nuevoLI = document.createElement("li");
                nuevoLI.innerHTML = element.nombre;
                nuevoLI.classList.add("list-group-item", "list-group-item-primary");
                lista.appendChild(nuevoLI);
            });
        })
        .catch(error => {
            console.error("Error al solicitar los datos:", error);
        });
});