import {browser} from 'protractor';
import CommonActions from '../actions/CommonActions';
import NavBar from '../components/NavBar';
import MyHeroesGridPad from '../components/MyHeroesGridPad';

export default class Heroes {

    private commonActions: CommonActions = new CommonActions();

    // <editor-fold defaultstate="collapsed" desc="list of components">
    public navBar: NavBar = new NavBar();
    public myHeroesGridPad: MyHeroesGridPad = new MyHeroesGridPad();
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="constants declaration">
    private PAGE_URL = browser.baseUrl + 'heroes';
    private PAGE_LOGNAME = 'Heroes';
    // </editor-fold>

    // <editor-fold defaultstate="collapsed" desc="browser">
    public openPage(): void {
        this.commonActions.openPage(this.PAGE_URL, this.PAGE_LOGNAME);
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
