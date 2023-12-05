export const fetchCarroCompras = async() => {
    const BASE_URL = 'https://raw.githubusercontent.com/pablosapo/productosdb/main/productos.json';
    
    try{
        const response = await fetch(BASE_URL);
        const data = await response.json();
        return data;
    } catch(error){
        console.error("Error fetch data", error);
        throw error;
    }
}

export const fetchCarroComprasById = async(codigo) => {
    
    try {
        const response = await fetch(`https://raw.githubusercontent.com/pablosapo/productosdb/main/productos.json${codigo}`)
        const data = await response.json();
        return data[0];
    } catch (error) {
        console.error("Error fetching data", error);
        throw error;
    }
}