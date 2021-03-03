import React from 'react';
import '@testing-library/jest-dom';
import { shallow  } from 'enzyme';
// import { render } from '@testing-library/react';
import PrimeraApp from "../PrimeraApp";

describe('Prueba en <PrimeraApp />', () => {
    
    // test('Debe mostrar el mensaje "Hola, soy Goku', () => {
        
    //     const saludo = 'Hola, soy Goku';

    //     const {getByText} = render( <PrimeraApp saludo={ saludo } /> )

    //     expect( getByText( saludo ) ).toBeInTheDocument();
    // });

    test('Debe de mostrar <PrimeraApp /> correctamente', () => {
        
        const saludo = 'Hola, soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />)

        expect( wrapper ).toMatchSnapshot()
    });

    test('Debe mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, soy Anthony';
        const subtitulo = 'Soy un subtitulo';

        const wrapper = shallow(
            <PrimeraApp 
                saludo={ saludo }
                subtitulo={ subtitulo }
            />
        );
        const textoParrafo = wrapper.find('p').text();
        //     console.log(textoParrafo);
        // expect( textoParrafo ).toBe( subtitulo );
    });
    
    
});
