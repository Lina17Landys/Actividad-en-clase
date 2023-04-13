export const AYUDA = "help!"

const saludar = (nombre) => {
    return "Hola" + nombre;
}

export class Items {
    image = ""

    constructor(image) {
        this.image = image;
    }

    render() {
        const cosa = document.createElement('img')
        cosa.src = this.image;
        return cosa;
    }
}