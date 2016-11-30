import Dashboard from '../common/pages/Dashboard';
import Random from '../common/utils/Random';


describe('Heroes. Hero search:', () => {

    let dashboard: Dashboard = new Dashboard();
    let arrayOfHeroes: Array<string> = ['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas', 'Magneta',
        'RubberMan', 'Dynama', 'Dr IQ', 'Magma', 'Tornado'];
    let random: Random = new Random();
    let randomHero: string = arrayOfHeroes[random.randomIntegerInRange(0, arrayOfHeroes.length)];
    let searchInput: string = randomHero.slice(0, random.randomIntegerInRange(1, randomHero.length - 1));

    beforeEach(() => {
        dashboard.openPage();
        dashboard.expectThatPageIsLoaded();
    });

    it('All the results from search dropdown should contain search text', () => {
        dashboard.heroSearch.sendKeysIntoSearchInput(searchInput);
        dashboard.heroSearch.expectThatDropdownIsVisible();
        dashboard.heroSearch.expectThatSearchResultsContainText(searchInput);
    });

    afterEach(() => {
        dashboard.refreshPage();
    });
});
