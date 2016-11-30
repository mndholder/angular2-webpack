import Heroes from '../common/pages/Heroes';


describe('Heroes page:', () => {

    let heroes: Heroes = new Heroes();
    let isPageOpened = false;

    beforeEach(() => {
        if (!isPageOpened) {
            heroes.openPage();
            heroes.expectThatPageIsLoaded();
            isPageOpened = true;
        }
    });

    it('should have visible nav bar header', () => {
        heroes.navBar.expectThatHeaderIsVisible();
    });

    it('should have correct nav bar header', () => {
        heroes.navBar.expectThatHeaderIsCorrect();
    });

    it('should have visible nav bar header bar', () => {
        heroes.navBar.expectThatHeaderBarIsVisible();
    });

    it('should have visible nav bar dashboard button', () => {
        heroes.navBar.expectThatDashboardButtonIsVisible();
    });

    it('should have correct nav bar dashboard button', () => {
        heroes.navBar.expectThatDashboardButtonIsCorrect();
    });

    it('should have visible nav bar heroes button', () => {
        heroes.navBar.expectThatHeroesButtonIsVisible();
    });

    it('should have correct nav bar heroes button', () => {
        heroes.navBar.expectThatHeroesButtonIsCorrect();
    });

    it('should have visible grid pad header', () => {
        heroes.myHeroesGridPad.expectThatHeaderIsVisible();
    });

    it('should have correct grid pad header', () => {
        heroes.myHeroesGridPad.expectThatHeaderIsCorrect();
    });

    it('should have correct colors of all the results in grid pad', () => {
        heroes.myHeroesGridPad.expectThatAllTheResultsInGridPadHaveCorrectColor();
    });

    it('should have correct colors of all the ids of results in grid pad', () => {
        heroes.myHeroesGridPad.expectThatAllTheIdsOfResultsInGridPadHaveCorrectColor();
    });

    it('should have correct text of all the delete buttons of results in grid pad', () => {
        heroes.myHeroesGridPad.expectThatAllTheDeleteButtonsOfResultsInGridPadAreCorrect();
    });

    it('should have correct colors of all the delete buttons of results in grid pad', () => {
        heroes.myHeroesGridPad.expectThatAllTheDeleteButtonsOfResultsInGridPadHaveCorrectColor();
    });

    it('should have visible grid pad add new hero button', () => {
        heroes.myHeroesGridPad.expectThatAddNewHeroButtonIsVisible();
    });

    it('should have correct grid pad add new hero button', () => {
        heroes.myHeroesGridPad.expectThatAddNewHeroButtonIsCorrect();
    });
});
