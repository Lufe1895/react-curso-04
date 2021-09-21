import CounterApp from "../CounterApp";
import { shallow } from 'enzyme';

describe('Pruebas en <CounterApp />', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(
            <CounterApp />);
    });

    test('Debe tener valor 10 si no pasa parámetro', () => {
        expect(wrapper).toMatchSnapshot();
    });
   
    test('Debe tener valor 100 si pasa parámetro', () => {
        const wrapper = shallow(
            <CounterApp value={100} />);
        const h2 = wrapper.find('h2').text().trim();
        expect(h2).toBe("100");
    });

    test('Debe incrementar con boton +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const h2 = wrapper.find('h2').text().trim();
        expect(h2).toBe("11");
    });

    test('Debe resetear', () => {
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const h2 = wrapper.find('h2').text().trim();
        expect(h2).toBe("10");
    });

    test('Debe reducir con boton -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const h2 = wrapper.find('h2').text().trim();
        expect(h2).toBe("9");
    });
});
