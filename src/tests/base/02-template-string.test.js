import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string', () => {
    test('getSaludo debe retornar Hola Luis', () => {
        const nombre = 'Luis';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre);
    })

    test('getSaludo debe retornar Hola Fernando', () => {
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Fernando');
    })
    
})
