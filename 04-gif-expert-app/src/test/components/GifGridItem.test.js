import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Debe imostrar el componente correctamente', () => {

    let wrapper = shallow(<GifGridItem/>);

    test('Probar componenete GifGridItem', () => {
        
        expect(wrapper).toMatchSnapshot();    
    })
    
    
});
