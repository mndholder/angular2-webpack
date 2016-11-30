import Dashboard from '../common/pages/Dashboard';


describe('Dashboard page:', () => {

    let dashboard: Dashboard = new Dashboard();
    let isPageOpened = false;

    beforeEach(() => {
        if (!isPageOpened) {
            dashboard.openPage();
            dashboard.expectThatPageIsLoaded();
            isPageOpened = true;
        }
    });

    it('should have visible nav bar header', () => {
        dashboard.navBar.expectThatHeaderIsVisible();
    });

    it('should have correct nav bar header', () => {
        dashboard.navBar.expectThatHeaderIsCorrect();
    });

    it('should have visible nav bar header bar', () => {
        dashboard.navBar.expectThatHeaderBarIsVisible();
    });

    it('should have visible nav bar dashboard button', () => {
        dashboard.navBar.expectThatDashboardButtonIsVisible();
    });

    it('should have correct nav bar dashboard button', () => {
        dashboard.navBar.expectThatDashboardButtonIsCorrect();
    });

    it('should have visible nav bar heroes button', () => {
        dashboard.navBar.expectThatHeroesButtonIsVisible();
    });

    it('should have correct nav bar heroes button', () => {
        dashboard.navBar.expectThatHeroesButtonIsCorrect();
    });

    it('should have visible grid pad header', () => {
        dashboard.topHeroesGridPad.expectThatHeaderIsVisible();
    });

    it('should have correct grid pad header', () => {
        dashboard.topHeroesGridPad.expectThatHeaderIsCorrect();
    });

    it('should have correct colors of all the results in grid pad', () => {
        dashboard.topHeroesGridPad.expectThatAllTheResultsInGridPadHaveCorrectColor();
    });

    it('should have visible hero search header', () => {
        dashboard.heroSearch.expectThatHeaderIsVisible();
    });

    it('should have correct hero search header', () => {
        dashboard.heroSearch.expectThatHeaderIsCorrect();
    });

    it('should have visible hero search input', () => {
        dashboard.heroSearch.expectThatSearchInputIsVisible();
    });
});
