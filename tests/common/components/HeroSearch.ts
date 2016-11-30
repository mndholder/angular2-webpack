import CommonActions from '../actions/CommonActions';
import {by, element, ElementFinder, ElementArrayFinder} from 'protractor';

export default class HeroSearch {

    private commonActions: CommonActions = new CommonActions();

    // <editor-fold defaultstate="collapsed" desc="constants declaration">
    private HEADER_TEXT: string = 'Hero Search';
    private HEADER_LOGNAME: string = this.HEADER_TEXT + ' Header';

    private SEARCH_INPUT_LOGNAME: string = this.HEADER_TEXT + ' Search Input';

    private DROPDOWN_LOGNAME: string = this.HEADER_TEXT + ' Dropdown';
    private SEARCH_RESULT_LOGNAME: string = this.HEADER_TEXT + ' Search Result';
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="elements declaration">
    private dropdownLoc: string = '//div[*[@class=\'search-result\']]';

    private heroSearchContainer: ElementFinder = element(by.id('search-component'));
    private header: ElementFinder = this.heroSearchContainer.element(by.tagName('h4'));
    private searchInput: ElementFinder = this.heroSearchContainer.element(by.id('search-box'));
    private dropdown: ElementFinder = element(by.xpath(this.dropdownLoc));
    private searchResults: ElementArrayFinder = this.heroSearchContainer.all(by.className('search-result'));
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

    // <editor-fold defaultstate="collapsed" desc="searchInput">
    expectThatSearchInputIsVisible(): void {
        this.waitUntilSearchInputIsVisible();
        this.searchInputIsPresent();
        this.commonActions.log('Visibility of ' + this.SEARCH_INPUT_LOGNAME + ' has been checked');
    };

    sendKeysIntoSearchInput(text: string): void {
        this.commonActions.sendKeys(this.searchInput, this.SEARCH_INPUT_LOGNAME, text);
    };

    private waitUntilSearchInputIsVisible(): void {
        this.commonActions.waitUntilIsVisible(this.searchInput);
    };

    private searchInputIsPresent(): void {
        this.commonActions.isPresent(this.searchInput, this.SEARCH_INPUT_LOGNAME);
    };
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="dropdown">
    public expectThatDropdownIsVisible(): void {
        this.waitUntilDropdownIsVisible();
        this.dropdownIsPresent();
        this.commonActions.log('Visibility of ' + this.DROPDOWN_LOGNAME + ' has been checked');
    };

    private waitUntilDropdownIsVisible(): void {
        this.commonActions.waitUntilIsVisible(this.dropdown);
    };

    private dropdownIsPresent(): void {
        this.commonActions.isPresent(this.dropdown, this.DROPDOWN_LOGNAME);
    };
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="searchResults">
    public expectThatSearchResultsContainText(text: string): void {
        this.searchResults.each((searchResult, index) => {
            this.commonActions.isTextContainsCaseInsensitive(searchResult, text, this.SEARCH_RESULT_LOGNAME);
            this.commonActions.log('Visibility of search result with index ' + index + ' has been checked');
        });
    };
    // </editor-fold>
}
