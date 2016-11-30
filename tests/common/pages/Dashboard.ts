import {browser} from 'protractor';
import CommonActions from '../actions/CommonActions';
import TopHeroesGridPad from '../components/TopHeroesGridPad';
import HeroSearch from '../components/HeroSearch';
import NavBar from '../components/NavBar';

export default class HomePage {

    private commonActions: CommonActions = new CommonActions();

    // <editor-fold defaultstate="collapsed" desc="list of components">
    public topHeroesGridPad: TopHeroesGridPad = new TopHeroesGridPad();
    public heroSearch: HeroSearch = new HeroSearch();
    public navBar: NavBar = new NavBar();
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="constants declaration">
    private PAGE_URL = browser.baseUrl + 'dashboard';
    private PAGE_LOGNAME = 'Heroes';
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="browser">
    public openPage(): void {
        this.commonActions.openPage(this.PAGE_URL, this.PAGE_LOGNAME);
    };

    public refreshPage(): void {
        this.commonActions.refreshPage(this.PAGE_LOGNAME);
    };

    public expectThatPageIsLoaded() {
        this.waitUntilThatPageIsLoaded();
        this.pageIsLoaded();
        this.commonActions.log(this.PAGE_LOGNAME + ' page with URL ' + this.PAGE_URL + ' has been loaded');
    };

    private waitUntilThatPageIsLoaded() {
        this.commonActions.waitForUrlToChangeTo(this.PAGE_URL);
    };

    private pageIsLoaded() {
        this.commonActions.isUrlEquals(this.PAGE_URL, this.PAGE_LOGNAME);
    };
    // </editor-fold>
}
