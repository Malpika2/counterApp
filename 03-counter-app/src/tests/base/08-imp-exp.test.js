import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp.js';
import heroes from '../../data/heroes';

describe('Retorna pruebas por Id o por Owner', () => {
    
    test('Debe regresar un Heroe segun ID dado', () => {
        
        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id);


        expect( heroe ).toEqual( heroeData);

    });
    test('Debe regresar un undefined si id no existe', () => {
        const id = 10;
        const heroe = getHeroeById( id );
        expect( heroe ).toBe( undefined);
    });

    // toEqual
    test('Debe regresar un array con heroes de DC', () => {
        const owner = 'DC';
        const heroesDc = getHeroesByOwner(owner);
        const heroesTest = heroes.filter(h => h.owner===owner);
        expect(heroesDc).toEqual(heroesTest);
    });

    test('Debe regresar un array con heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroesDc = getHeroesByOwner(owner);
        expect(heroesDc.length).toBe(2);
    });
    
});
