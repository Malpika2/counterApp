import  {getUser, getUsuarioActivo } from '../../base/05-funciones';
describe('Prueba de funciones en 05-funciones', () => {
    
    test('getUser debe retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();

        expect( user ).toEqual(userTest);
    });

    // Test getUsuarioActivo.

    test('getUsuarioActivo debe retornar un objeto', () => {
        const nombre = 'Anthony';
        const usuarioActivoTest = {
            uid: 'ABC567',
            username: nombre
        }
        const userActivo = getUsuarioActivo(nombre);

        expect( usuarioActivoTest ).toEqual( userActivo);
    });
})