import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en el componente AddCategory', () => {

    const setCategory = jest.fn();
    let wrapper = shallow( <AddCategory setCategory={setCategory} />);

    beforeEach( () => {
        jest.clearAllMocks(); //Limpia simulaciones
        wrapper = shallow( <AddCategory setCategory={setCategory} />);
    });

    test('Debe Mostrarse Correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target:{ value } } );
        
    });

    test('No debe hacer el submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){} } );

        expect( setCategory ).not.toHaveBeenCalled();
    })
    test('Debe llamar SetCategories y limpiar la caja de texto', () => {
        const value = 'Hola malpika';
        // 1.- simular el input change
        wrapper.find('input').simulate('change',{ target: {value}} );
        //simular el submit
        wrapper.find('form').simulate('submit',{ preventDefault(){}} );
        // Setcategories se debe haber llamado
        expect( setCategory ).toHaveBeenCalled();
        // el valor del input debe estar '';
        expect( wrapper.find('input').prop('value')).toBe('');
        


    })
    
    
    
});