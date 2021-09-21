import React from 'react';
// import { render } from "@testing-library/react"
import PrimeraApp from "../PrimeraApp"
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraApp />', () => {
    // test('debe mostrar el mensaje de "Hola, soy Luis"', () => {
    //     const saludo = 'Hola, soy Luis.'
    //     const { getByText } = render( <PrimeraApp saludo={ saludo } /> );
    //     expect(getByText(saludo)).toBeInTheDocument();
    // }); 
    
    test('debe mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola, soy Luis.'
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, soy Luis.'
        const subtitulo = 'Soy subtitulo'
        const wrapper = shallow(
                <PrimeraApp 
                    saludo={saludo} 
                    subtitulo={subtitulo} 
                />);

        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);
    })
    
    
});
