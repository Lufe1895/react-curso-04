import React from 'react';
// import { render } from "@testing-library/react"
import PrimeraApp from "../PrimeraApp"
import { shallow } from '@wojtekmaj/enzyme-adapter-react-17';

describe('Pruebas en <PrimeraApp />', () => {
    // test('debe mostrar el mensaje de "Hola, soy Luis"', () => {
    //     const saludo = 'Hola, soy Luis.'
    //     const { getByText } = render( <PrimeraApp saludo={ saludo } /> );
    //     expect(getByText(saludo)).toBeInTheDocument();
    // }); 
    
    test('debe mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola, soy Luis.'
        // const wrapper = shallow(<PrimeraApp saludo={saludo} />);
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);
        expect(wrapper).toMatchSnapshot();
    })
    
});
