import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con GetGifs', () => {

    test('Debe traer 10 elementos', async () => {
        const gifs = await  getGifs('ahri');
        expect( gifs.length ).toBe( 10 );
    })
    
});