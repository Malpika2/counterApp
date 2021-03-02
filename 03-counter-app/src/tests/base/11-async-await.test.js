import { getImagen } from "../../base/11-async-await";

describe('Pruebas con async-await y Fectch', () => {
    
    test('Debe retornar URL de la imagen', async () => {
        
        const url = await getImagen();
        console.log(url);
        expect ( url.includes('https://')).toBe(true);
    })
    
});
