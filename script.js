const productos = async () => {
    const response = await 
    fetch("https://raw.githubusercontent.com/Lina17Landys/Actividad-en-clase/master/tienda.json");
        const data = await response.json();
    
        for (let ropa of data) {
            console.log(ropa);
        }
    
    }




productos(); 
