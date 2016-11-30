import CommonActions from '../actions/CommonActions';
import {by, element, ElementFinder} from 'protractor';

export default class NavBar {

    private commonActions: CommonActions = new CommonActions();

    // <editor-fold defaultstate="collapsed" desc="constants declaration">
    private HEADER_TEXT: string = 'Tour of Heroes';
    private HEADER_LOGNAME: string = this.HEADER_TEXT + ' Header';

    private HEADER_BAR_LOGNAME: string = this.HEADER_TEXT + ' Header Bar';

    private DASHBOARD_BUTTON_TEXT: string = 'Dashboard';
    private DASHBOARD_BUTTON_LOGNAME: string = this.HEADER_TEXT + ' Dashboard Button';

    private HEROES_BUTTON_TEXT: string = 'Heroes';
    private HEROES_BUTTON_LOGNAME: string = this.HEADER_TEXT + ' Heroes Button';
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="elements declaration">
    private buttonsContainerLoc = '//nav';
    private dashboardButtonLoc = this.buttonsContainerLoc + '/a[@href=\'/dashboard\']';
    private heroesButtonLoc = this.buttonsContainerLoc + '/a[@href=\'/heroes\']';

    private header: ElementFinder = element(by.tagName('h1'));
    private headerBar: ElementFinder = element(by.className('header-bar'));
    private dashboardButton: ElementFinder = element(by.xpath(this.dashboardButtonLoc));
    private heroesButton: ElementFinder = element(by.xpath(this.heroesButtonLoc));
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

    // <editor-fold defaultstate="collapsed" desc="headerBar">
    expectThatHeaderBarIsVisible(): void {
        this.waitUntilHeaderBarIsVisible();
        this.headerBarIsPresent();
        this.commonActions.log('Visibility of ' + this.HEADER_BAR_LOGNAME + ' has been checked');
    };

    private waitUntilHeaderBarIsVisible(): void {
        this.commonActions.waitUntilIsVisible(this.headerBar);
    };

    private headerBarIsPresent(): void {
        this.commonActions.isPresent(this.headerBar, this.HEADER_BAR_LOGNAME);
    };
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="dashboardButton">
    public expectThatDashboardButtonIsVisible(): void {
        this.waitUntilDashboardButtonIsVisible();
        this.dashboardButtonIsPresent();
        this.commonActions.log('Visibility of ' + this.DASHBOARD_BUTTON_LOGNAME + ' has been checked');
    };

    public expectThatDashboardButtonIsCorrect(): void {
        this.waitUntilDashboardButtonIsVisible();
        this.dashboardButtonIsCorrect();
        this.commonActions.log('Correctness of ' + this.DASHBOARD_BUTTON_LOGNAME + ' has been checked');
    };

    private waitUntilDashboardButtonIsVisible(): void {
        this.commonActions.waitUntilIsVisible(this.dashboardButton);
    };

    private dashboardButtonIsPresent(): void {
        this.commonActions.isPresent(this.dashboardButton, this.DASHBOARD_BUTTON_LOGNAME);
    };

    private dashboardButtonIsCorrect(): void {
        this.commonActions.isTextEquals(this.dashboardButton, this.DASHBOARD_BUTTON_TEXT, this.DASHBOARD_BUTTON_LOGNAME);
    };
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="heroesButton">
    public expectThatHeroesButtonIsVisible(): void {
        this.waitUntilHeroesButtonIsVisible();
        this.heroesButtonIsPresent();
        this.commonActions.log('Visibility of ' + this.HEROES_BUTTON_LOGNAME + ' has been checked');
    };

    public expectThatHeroesButtonIsCorrect(): void {
        this.waitUntilHeroesButtonIsVisible();
        this.heroesButtonIsCorrect();
        this.commonActions.log('Correctness of ' + this.HEROES_BUTTON_LOGNAME + ' has been checked');
    };

    private waitUntilHeroesButtonIsVisible(): void {
        this.commonActions.waitUntilIsVisible(this.heroesButton);
    };

    private heroesButtonIsPresent(): void {
        this.commonActions.isPresent(this.heroesButton, this.HEROES_BUTTON_LOGNAME);
    };

    private heroesButtonIsCorrect(): void {
        this.commonActions.isTextEquals(this.heroesButton, this.HEROES_BUTTON_TEXT, this.HEROES_BUTTON_LOGNAME);
    };
    // </editor-fold>
}
