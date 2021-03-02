import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';
describe('Pruebas con promesas', () => {
    
    test(' getHeroeByIdAsync debe regresar Héroe async', (done) => {
        
        const id = 1;

        getHeroeByIdAsync(id)
        .then( heroe => {
            expect( heroe ).toBe( heroes[0]);
            done();
        });
    });
    
    test('Debe obtener un herror si el heroe por id no existe', (done) => {
    
        const id = 10;
        getHeroeByIdAsync(10)
            .catch( error => {
                expect( error ).toBe('No se pudo encontrar el héroe');
                done();
            });
    });
    
});
