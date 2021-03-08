import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Prueba en CounterApp', () => {
    let wrapper = shallow(<CounterApp />);

    beforeEach( () => { //Se ejecuta antes de cada prueba, en este caso reinicializando el wrapper.
        wrapper = shallow(<CounterApp />);
    })

    test('debe mostrar el componente CounterApp', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('Debe mostrar en valor enviado en props', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value={value}/>);
        const valueComponent = + wrapper.find('h2').text();
        expect(valueComponent).toBe(value);
    });
    test('Debe incrementar con el boton +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('11');
    });
    test('Debe decrementar con el boton -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('9');
    });
    test('Debe mostrar el valor iniciar con el btn reset', () => {
        const wrapper = shallow(<CounterApp value={105}/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = + wrapper.find('h2').text();
        expect( counterText).toBe(105);
    });
    
    
});