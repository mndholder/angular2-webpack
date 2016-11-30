import CommonActions from '../actions/CommonActions';
import {by, element, ElementFinder, ElementArrayFinder} from 'protractor';

export default class TopHeroesGridPad {

    private commonActions: CommonActions = new CommonActions();

    // <editor-fold defaultstate="collapsed" desc="constants declaration">
    private HEADER_TEXT: string = 'Top Heroes';
    private HEADER_LOGNAME: string = this.HEADER_TEXT + ' Header';

    private GRID_PAD_LOGNAME: string = this.HEADER_TEXT + ' Grid Pad';

    private ALL_THE_RESULTS_IN_GRID_PAD_BACKGROUND_COLOR = 'rgba(0, 120, 215, 1)';
    private ALL_THE_RESULTS_IN_GRID_PAD_BACKGROUND_LOGNAME = 'All The Results In Grid Pad Background';
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="elements declaration">
    private gridPadLoc: string = '//div[@class=\'grid grid-pad\']';
    private allTheResultsInGridPadLoc: string = this.gridPadLoc + '//div[@class=\'module hero\']';
    private headerLoc: string = this.gridPadLoc + '/ancestor::my-dashboard/h3';

    private header: ElementFinder = element(by.xpath(this.headerLoc));
    private gridPad: ElementFinder = element(by.xpath(this.gridPadLoc));
    private allTheResultsInGridPad: ElementArrayFinder = this.gridPad.all(by.xpath(this.allTheResultsInGridPadLoc));
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
}
