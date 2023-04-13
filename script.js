const productos = async () => {
    const response = await
        fetch("https://raw.githubusercontent.com/Lina17Landys/Actividad-en-clase/master/tienda.json");
    const data = await response.json();

    for (let ropa of data) {
        let photo = new Items(ropa.image);
        const photos = photo.render();
        contenedor.appendChild(photos)
    }

}

productos();


import { AYUDA, Items } from "./utils.js";

console.log(AYUDA)
