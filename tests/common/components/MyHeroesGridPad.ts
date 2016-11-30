import CommonActions from '../actions/CommonActions';
import {by, element, ElementFinder, ElementArrayFinder} from 'protractor';

export default class MyHeroesGridPad {

    private commonActions: CommonActions = new CommonActions();

    // <editor-fold defaultstate="collapsed" desc="constants declaration">
    private HEADER_TEXT: string = 'My Heroes';
    private HEADER_LOGNAME: string = this.HEADER_TEXT + ' Header';

    private GRID_PAD_LOGNAME: string = this.HEADER_TEXT + ' Grid Pad';

    private ALL_THE_RESULTS_IN_GRID_PAD_BACKGROUND_COLOR: string = 'rgba(238, 238, 238, 1)';
    private ALL_THE_RESULTS_IN_GRID_PAD_BACKGROUND_LOGNAME: string = 'All The Results In Grid Pad Background';

    private ALL_THE_DELETE_BUTTONS_OF_RESULTS_IN_GRID_PAD_BACKGROUND_COLOR: string = 'rgba(216, 59, 1, 1)';
    private ALL_THE_DELETE_BUTTONS_OF_RESULTS_IN_GRID_PAD_BACKGROUND_LOGNAME: string =
        'All The Delete Buttons Of Results In Grid Pad Background';
    private ID_OF_RESULT_IN_GRID_PAD_BACKGROUND_COLOR: string = 'rgba(0, 120, 215, 1)';
    private ID_OF_RESULT_IN_GRID_PAD_BACKGROUND_LOGNAME: string = 'Id Of Result In Grid Pad';
    private DELETE_BUTTON_OF_RESULT_IN_GRID_PAD_TEXT: string = 'Delete';
    private DELETE_BUTTON_OF_RESULT_IN_GRID_PAD_LOGNAME: string = 'Delete Button Of Result In Grid Pad';

    private ADD_NEW_HERO_BUTTON_TEXT: string = 'Add New Hero';
    private ADD_NEW_HERO_BUTTON_LOGNAME: string= 'Add New Hero Button';
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="elements declaration">
    private gridPadLoc: string = '//*[@class=\'heroes\']';
    private allTheResultsInGridPadLoc: string = this.gridPadLoc + '/li';
    private allTheIdsOfResultsInGridPadLoc: string = this.allTheResultsInGridPadLoc + '//*[@class=\'badge\']';
    private allTheDeleteButtonsOfResultsInGridPadLoc: string = this.allTheResultsInGridPadLoc + '/button[@class=\'delete-button\']';
    private headerLoc: string = this.gridPadLoc + '/ancestor::my-heroes/h2';
    private addNewHeroButtonLoc: string = this.gridPadLoc + '/following::button';

    private header: ElementFinder = element(by.xpath(this.headerLoc));
    private gridPad: ElementFinder = element(by.xpath(this.gridPadLoc));
    private allTheResultsInGridPad: ElementArrayFinder = element.all(by.xpath(this.allTheResultsInGridPadLoc));
    private allTheIdsOfResultsInGridPad: ElementArrayFinder = element.all(by.xpath(this.allTheIdsOfResultsInGridPadLoc));
    private allTheDeleteButtonsOfResultsInGridPad: ElementArrayFinder =
        element.all(by.xpath(this.allTheDeleteButtonsOfResultsInGridPadLoc));
    private addNewHeroButton = element(by.xpath(this.addNewHeroButtonLoc));
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="header">
    public expectThatHeaderIsVisible(): void {
        this.waitUntilHeaderIsVisible();
        this.headerIsPresent();
        this.commonActions.log('Visibility of ' + this.HEADER_LOGNAME + ' has been checked');
    };

    public expectThatHeaderIsCorrect(): void {
        this.waitUntilHeaderIsVisible();
        this.headerIsCorrect();
        this.commonActions.log('Correctness of ' + this.HEADER_LOGNAME + ' has been checked');
    };

    private waitUntilHeaderIsVisible(): void {
        this.commonActions.waitUntilIsVisible(this.header);
    };

    private headerIsPresent(): void {
        this.commonActions.isPresent(this.header, this.HEADER_LOGNAME);
    };

    private headerIsCorrect(): void {
        this.commonActions.isTextEquals(this.header, this.HEADER_TEXT, this.HEADER_LOGNAME);
    };
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="gridPad">
    expectThatGridPadIsVisible(): void {
        this.waitUntilGridPadIsVisible();
        this.gridPadIsPresent();
        this.commonActions.log('Visibility of ' + this.GRID_PAD_LOGNAME + ' has been checked');
    };

    private waitUntilGridPadIsVisible(): void {
        this.commonActions.waitUntilIsVisible(this.gridPad);
    };

    private gridPadIsPresent(): void {
        this.commonActions.isPresent(this.gridPad, this.GRID_PAD_LOGNAME);
    };
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="allTheResultsInGridPad">
    expectThatAllTheResultsInGridPadHaveCorrectColor(): void {
        this.allTheResultsInGridPad.each((resultInGridPad) => {
            this.commonActions.isBackgroundColorEquals(resultInGridPad,
                this.ALL_THE_RESULTS_IN_GRID_PAD_BACKGROUND_COLOR, this.ALL_THE_RESULTS_IN_GRID_PAD_BACKGROUND_LOGNAME);
            resultInGridPad.getText()
                .then((resultInGridPadText) => {
                    this.commonActions.log(resultInGridPadText + ' color has been checked');
                });
        });
    };
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="allTheIdsOfResultsInGridPad">
    expectThatAllTheIdsOfResultsInGridPadHaveCorrectColor(): void {
        this.allTheIdsOfResultsInGridPad.each((idOfResultInGridPad, index) => {
            this.commonActions.isBackgroundColorEquals(idOfResultInGridPad,
                this.ID_OF_RESULT_IN_GRID_PAD_BACKGROUND_COLOR, this.ID_OF_RESULT_IN_GRID_PAD_BACKGROUND_LOGNAME);
            this.commonActions.log('Color of id with index ' + index + ' has been checked');
        });
    };
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="allTheDeleteButtonsOfResultsInGridPad">
    expectThatAllTheDeleteButtonsOfResultsInGridPadHaveCorrectColor(): void {
        this.allTheDeleteButtonsOfResultsInGridPad.each((deleteButtonOfResultInGridPad, index) => {
            this.commonActions.isBackgroundColorEquals(deleteButtonOfResultInGridPad,
                this.ALL_THE_DELETE_BUTTONS_OF_RESULTS_IN_GRID_PAD_BACKGROUND_COLOR,
                this.ALL_THE_DELETE_BUTTONS_OF_RESULTS_IN_GRID_PAD_BACKGROUND_LOGNAME);
            this.commonActions.log('Color of delete button with index ' + index + ' has been checked');
        });
    };

    expectThatAllTheDeleteButtonsOfResultsInGridPadAreCorrect(): void {
        this.allTheDeleteButtonsOfResultsInGridPad.each((deleteButtonOfResultInGridPad, index) => {
            this.commonActions.isTextEquals(deleteButtonOfResultInGridPad,
                this.DELETE_BUTTON_OF_RESULT_IN_GRID_PAD_TEXT,
                this.DELETE_BUTTON_OF_RESULT_IN_GRID_PAD_LOGNAME);
            this.commonActions.log('Text of delete button with index ' + index + ' has been checked');
        });
    };
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="addNewHeroButton">
    public expectThatAddNewHeroButtonIsVisible(): void {
        this.waitUntilAddNewHeroButtonIsVisible();
        this.addNewHeroButtonIsPresent();
        this.commonActions.log('Visibility of ' + this.ADD_NEW_HERO_BUTTON_LOGNAME + ' has been checked');
    };

    public expectThatAddNewHeroButtonIsCorrect(): void {
        this.waitUntilAddNewHeroButtonIsVisible();
        this.addNewHeroButtonIsCorrect();
        this.commonActions.log('Correctness of ' + this.ADD_NEW_HERO_BUTTON_LOGNAME + ' has been checked');
    };

    private waitUntilAddNewHeroButtonIsVisible(): void {
        this.commonActions.waitUntilIsVisible(this.addNewHeroButton);
    };

    private addNewHeroButtonIsPresent(): void {
        this.commonActions.isPresent(this.addNewHeroButton, this.ADD_NEW_HERO_BUTTON_LOGNAME);
    };

    private addNewHeroButtonIsCorrect(): void {
        this.commonActions.isTextEquals(this.addNewHeroButton, this.ADD_NEW_HERO_BUTTON_TEXT, this.ADD_NEW_HERO_BUTTON_LOGNAME);
    };
    // </editor-fold>
}
