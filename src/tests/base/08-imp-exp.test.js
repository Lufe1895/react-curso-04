import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de héroes', () => {
    test('debe retornar un héroe', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);
    });
    
    test('debe retornar un undefined', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    test('debe retornar solo DC', () => {
        const owner = "DC";
        const heroesData = heroes.filter((heroe) => heroe.owner === owner);

        const heroesTest = getHeroesByOwner(owner);

        expect(heroesTest).toEqual(heroesData);
    });

    test('debe retornar solo Marvel', () => {
        const owner = "Marvel";
        const heroesData = heroes.filter((heroe) => heroe.owner === owner);

        const heroesTest = getHeroesByOwner(owner);

        expect(heroesTest).toEqual(heroesData);
    });
});
