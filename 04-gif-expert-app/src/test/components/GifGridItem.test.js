import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Debe imostrar el componente correctamente', () => {
    const title='Soy un titulo';
    const url = 'http://unaimagen.com';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('Probar componenete GifGridItem', () => {
        
        expect(wrapper).toMatchSnapshot();    
    });
    test('Debe tener un parrafo con el titulo', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe( title);
    });
    test('Debe tener imagen == al url de los props', () => {
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title ); 
    });
    test('Debe tener la clase animate_dadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className.includes('animate__fadeIn') ).toBe(true);
        
    })
    
    
    
    
});
